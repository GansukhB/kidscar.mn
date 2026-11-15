/**
 * Kids Car — вэбийн бүртгэлийн маягтыг Google Sheets руу бичих Web App.
 *
 * Эцэг эхийн бүртгэл  → "Эцэг эх" sheet-д шинэ мөр
 * Жолоочийн бүртгэл   → "Жолооч"  sheet-д шинэ мөр (имэйлтэй)
 *
 * Суулгах заавар: google-apps-script/README.md
 */

// ───────── Тохиргоо ─────────
var SHEETS = {
  parent: 'Эцэг эх',
  driver: 'Жолооч',
};
// Бүх бүртгэлийг нэмэлтээр нэг дор хуулах sheet хэрэгтэй бол нэр өгнө ('' = унтраалттай).
var ALL_SHEET = '';

// Мөрийг баганын БАЙРЛАЛААР бичдэг: A→… дараалал нь доорх жагсаалттай яг ижил байна.
var HEADERS = {
  parent: ['Огноо', 'Нэр', 'Утасны дугаар', 'Хаанаас (гэрийн байршил)', 'Хаашаа (сургууль)', 'Төлөв', 'Тэмдэглэл', 'Хуудас'],
  driver: ['Огноо', 'Нэр', 'Утасны дугаар', 'Имэйл', 'Хаанаас (гэрийн байршил)', 'Хаашаа (сургууль)', 'Төлөв', 'Тэмдэглэл', 'Хуудас'],
  all: ['Огноо', 'Үүрэг', 'Нэр', 'Утасны дугаар', 'Имэйл', 'Хаанаас (гэрийн байршил)', 'Хаашаа (сургууль)', 'Төлөв', 'Тэмдэглэл', 'Хуудас'],
};
var TIMEZONE = 'Asia/Ulaanbaatar';

var MAX_PER_MINUTE = 30;          // нийт хүсэлтийн минутын дээд хэмжээ (spam-аас хамгаална)
var DUPLICATE_WINDOW_SEC = 600;   // ижил үүрэг + утас 10 минутын дотор давтагдвал дахин бичихгүй
var LIMITS = { name: 120, phone: 24, email: 254, from: 300, to: 200, page: 500 };
var EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// ───────── Web App ─────────
function doPost(e) {
  try {
    var p = (e && e.parameter) || {};

    // Honeypot: хүн харахгүй талбар бөглөгдсөн бол бот гэж үзээд чимээгүй хүлээж авна.
    if (p.website) return json_({ ok: true });

    var data = validate_(p);
    if (data.error) return json_({ ok: false, error: data.error });

    var cache = CacheService.getScriptCache();
    var minuteKey = 'rate:' + Math.floor(Date.now() / 60000);
    var count = Number(cache.get(minuteKey) || 0);
    if (count >= MAX_PER_MINUTE) return json_({ ok: false, error: 'rate_limited' });
    cache.put(minuteKey, String(count + 1), 120);

    var dupKey = 'dup:' + data.role + ':' + data.phone.replace(/\D/g, '');
    if (cache.get(dupKey)) return json_({ ok: true, duplicate: true });

    var lock = LockService.getScriptLock();
    if (!lock.tryLock(10000)) return json_({ ok: false, error: 'busy' });
    try {
      var ss = SpreadsheetApp.getActiveSpreadsheet();
      var now = Utilities.formatDate(new Date(), TIMEZONE, 'yyyy-MM-dd HH:mm:ss');
      // Утсыг ' угтвартай бичвэл Sheets текст хэвээр хадгална (+976, эхний 0 алдагдахгүй).
      var phone = "'" + data.phone;
      var email = safe_(data.email);
      var tail = [safe_(data.from), safe_(data.to), 'Шинэ', '', safe_(data.page)];

      var row = data.role === 'driver'
        ? [now, safe_(data.name), phone, email].concat(tail)
        : [now, safe_(data.name), phone].concat(tail);
      sheetFor_(ss, data.role).appendRow(row);

      if (ALL_SHEET) {
        sheetFor_(ss, 'all').appendRow([now, SHEETS[data.role], safe_(data.name), phone, email].concat(tail));
      }
      SpreadsheetApp.flush();
    } finally {
      lock.releaseLock();
    }

    cache.put(dupKey, '1', DUPLICATE_WINDOW_SEC);
    return json_({ ok: true });
  } catch (err) {
    console.error(err);
    return json_({ ok: false, error: 'server' });
  }
}

// Хөтчөөр /exec хаягийг нээхэд ажиллаж байгааг шалгах.
// version-ийг кодыг өөрчлөх бүрд шинэчилнэ — аль хувилбар deploy хийгдсэнийг мөр бичихгүйгээр харна.
var SCRIPT_VERSION = '2026-11-15-email';
function doGet() {
  return json_({ ok: true, service: 'kidscar-registration', version: SCRIPT_VERSION });
}

// ───────── Гараар ажиллуулж болно: sheet, толгой мөр, имэйл багана бэлдэнэ ─────────
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  sheetFor_(ss, 'parent');
  sheetFor_(ss, 'driver');
  if (ALL_SHEET) sheetFor_(ss, 'all');
  ss.setSpreadsheetTimeZone(TIMEZONE);
  Logger.log('Бэлэн: ' + ss.getUrl());
}

// ───────── Туслах функцууд ─────────
function validate_(p) {
  var role = String(p.role || '');
  if (role !== 'parent' && role !== 'driver') return { error: 'invalid' };

  var d = { role: role, email: '' };
  var keys = ['name', 'phone', 'from', 'to'];
  for (var i = 0; i < keys.length; i++) {
    var v = String(p[keys[i]] || '').trim();
    if (!v || v.length > LIMITS[keys[i]] || /[\u0000-\u001f\u007f]/.test(v)) return { error: 'invalid' };
    d[keys[i]] = v;
  }
  if (!/^[+\d\s()-]+$/.test(d.phone) || d.phone.replace(/\D/g, '').length < 8) return { error: 'invalid' };

  // Имэйлийг зөвхөн жолоочоос авна. Вэб талд заавал; энд ирсэн бол хэлбэрийг шалгана.
  if (role === 'driver') {
    var em = String(p.email || '').trim();
    if (em && (em.length > LIMITS.email || !EMAIL_RE.test(em))) return { error: 'invalid_email' };
    d.email = em;
  }
  d.page = String(p.page || '').slice(0, LIMITS.page);
  return d;
}

// "=", "+", "-", "@" -ээр эхэлсэн утгыг томьёо болгож тайлбарлахаас сэргийлнэ.
function safe_(v) {
  return /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
}

function sheetFor_(ss, kind) {
  var name = kind === 'all' ? ALL_SHEET : SHEETS[kind];
  var headers = HEADERS[kind];
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold').setBackground('#f1f4fa');
    sh.setFrozenRows(1);
  }
  if (kind !== 'parent') ensureEmailColumn_(sh, headers.indexOf('Имэйл') + 1);
  return sh;
}

// Имэйл баганагүй хуучин sheet-д утасны дараа нэг удаа багана оруулна.
// Хийснийг Script Properties-д sheet-ийн ID-гаар тэмдэглэдэг тул гарчгийг дараа нь
// өөр нэрээр сольсон ч дахин багана оруулахгүй.
function ensureEmailColumn_(sh, col) {
  var props = PropertiesService.getScriptProperties();
  var key = 'emailColumn:' + sh.getSheetId();
  if (props.getProperty(key)) return;
  if (String(sh.getRange(1, col).getValue()) !== 'Имэйл') {
    sh.insertColumnBefore(col);
    sh.getRange(1, col).setValue('Имэйл').setFontWeight('bold').setBackground('#f1f4fa');
  }
  props.setProperty(key, '1');
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
