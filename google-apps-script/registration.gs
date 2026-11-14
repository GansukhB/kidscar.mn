/**
 * Kids Car — вэбийн бүртгэлийн маягтыг Google Sheets руу бичих Web App.
 *
 * Эцэг эхийн бүртгэл  → "Эцэг эх" sheet-д шинэ мөр
 * Жолоочийн бүртгэл   → "Жолооч"  sheet-д шинэ мөр
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

var HEADERS = ['Огноо', 'Нэр', 'Утасны дугаар', 'Хаанаас (гэрийн байршил)', 'Хаашаа (сургууль)', 'Төлөв', 'Тэмдэглэл', 'Хуудас'];
var HEADERS_ALL = ['Огноо', 'Үүрэг'].concat(HEADERS.slice(1));
var TIMEZONE = 'Asia/Ulaanbaatar';

var MAX_PER_MINUTE = 30;          // нийт хүсэлтийн минутын дээд хэмжээ (spam-аас хамгаална)
var DUPLICATE_WINDOW_SEC = 600;   // ижил үүрэг + утас 10 минутын дотор давтагдвал дахин бичихгүй
var LIMITS = { name: 120, phone: 24, from: 300, to: 200, page: 500 };

// ───────── Web App ─────────
function doPost(e) {
  try {
    var p = (e && e.parameter) || {};

    // Honeypot: хүн харахгүй талбар бөглөгдсөн бол бот гэж үзээд чимээгүй хүлээж авна.
    if (p.website) return json_({ ok: true });

    var data = validate_(p);
    if (!data) return json_({ ok: false, error: 'invalid' });

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
      var row = [now, safe_(data.name), "'" + data.phone, safe_(data.from), safe_(data.to), 'Шинэ', '', safe_(data.page)];

      ensureSheet_(ss, SHEETS[data.role], HEADERS).appendRow(row);
      if (ALL_SHEET) {
        var allRow = [now, SHEETS[data.role]].concat(row.slice(1));
        ensureSheet_(ss, ALL_SHEET, HEADERS_ALL).appendRow(allRow);
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

// Хөтчөөр /exec хаягийг нээхэд ажиллаж байгааг шалгах
function doGet() {
  return json_({ ok: true, service: 'kidscar-registration' });
}

// ───────── Нэг удаа гараар ажиллуулна: sheet + толгой мөр үүсгэж, эрх олгоно ─────────
function setup() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  ensureSheet_(ss, SHEETS.parent, HEADERS);
  ensureSheet_(ss, SHEETS.driver, HEADERS);
  if (ALL_SHEET) ensureSheet_(ss, ALL_SHEET, HEADERS_ALL);
  ss.setSpreadsheetTimeZone(TIMEZONE);
  Logger.log('Бэлэн: ' + ss.getUrl());
}

// ───────── Туслах функцууд ─────────
function validate_(p) {
  var role = String(p.role || '');
  if (role !== 'parent' && role !== 'driver') return null;

  var d = { role: role };
  var keys = ['name', 'phone', 'from', 'to'];
  for (var i = 0; i < keys.length; i++) {
    var v = String(p[keys[i]] || '').trim();
    if (!v || v.length > LIMITS[keys[i]] || /[\u0000-\u001f\u007f]/.test(v)) return null;
    d[keys[i]] = v;
  }
  if (!/^[+\d\s()-]+$/.test(d.phone) || d.phone.replace(/\D/g, '').length < 8) return null;
  d.page = String(p.page || '').slice(0, LIMITS.page);
  return d;
}

// "=", "+", "-", "@" -ээр эхэлсэн утгыг томьёо болгож тайлбарлахаас сэргийлнэ.
function safe_(v) {
  return /^[=+\-@\t\r]/.test(v) ? "'" + v : v;
}

function ensureSheet_(ss, name, headers) {
  var sh = ss.getSheetByName(name) || ss.insertSheet(name);
  if (sh.getLastRow() === 0) {
    sh.getRange(1, 1, 1, headers.length).setValues([headers]).setFontWeight('bold').setBackground('#f1f4fa');
    sh.setFrozenRows(1);
  }
  return sh;
}

function json_(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
