# Бүртгэлийн маягт → Google Sheets

Вэбийн `#register` маягтаас ирсэн бүртгэл Google Sheets-ийн 2 sheet-д мөр болж бичигдэнэ:

| Үүрэг | Sheet | Баганууд |
|---|---|---|
| Эцэг эх | `Эцэг эх` | Огноо · Нэр · Утасны дугаар · Хаанаас · Хаашаа · Төлөв · Тэмдэглэл · Хуудас |
| Жолооч | `Жолооч` | (ижил) |

`Төлөв` нь анх `Шинэ` гэж бичигдэнэ. Багийнхан дараа нь `Холбогдсон`, `Гэрээ хийсэн` гэх мэтээр гараар өөрчилнө. `Тэмдэглэл` хоосон үлдэнэ.

```
Хөтөч (kidscar.mn)  ──POST──▶  Apps Script Web App (/exec)  ──appendRow──▶  Google Sheet
                                  · талбар шалгана                          ├─ Эцэг эх
                                  · honeypot, давхардал, минутын хязгаар     └─ Жолооч
```

Сайт `output: 'export'` (статик) тул өөрийн сервер/API байхгүй. Хөтөч Apps Script руу шууд илгээнэ.

## 1. Spreadsheet үүсгэх
1. https://sheets.new → нэрийг нь жишээ нь **Kids Car бүртгэл** болгоно.
2. **Extensions → Apps Script** цэсийг нээнэ.

## 2. Скриптийг хуулах
1. `Code.gs` доторх бүх кодыг устгаад `google-apps-script/registration.gs`-ийн агуулгыг бүтнээр нь хуулна.
2. 💾 **Save** дарна.
3. Дээд хэсгийн функц сонгогчоос **`setup`**-ийг сонгоод **Run** дарна.
   - Эрх асууна: **Review permissions** → бүртгэлээ сонгоно → *Advanced* → *Go to … (unsafe)* → **Allow**.
     (Таны өөрийн скрипт тул "unsafe" анхааруулга гарах нь хэвийн.)
   - Spreadsheet-д `Эцэг эх`, `Жолооч` sheet-үүд толгой мөртэйгөө үүснэ, цагийн бүс Улаанбаатар болно.

## 3. Web App болгон нийтлэх
1. **Deploy → New deployment** → ⚙ дээр **Web app** сонгоно.
2. Тохиргоо:
   - *Description:* `kidscar registration v1`
   - *Execute as:* **Me** (таны бүртгэлээр Sheet-д бичнэ)
   - *Who has access:* **Anyone** (нэвтрээгүй зочин илгээх боломжтой байх ёстой)
3. **Deploy** → гарч ирсэн **Web app URL**-ийг хуулна. Энэ нь `https://script.google.com/macros/s/AKfy…/exec` хэлбэртэй.

## 4. Шалгах
Хөтчөөр URL-ийг нээхэд `{"ok":true,"service":"kidscar-registration"}` гарна. Терминалаас туршилтын мөр бичих:

```bash
curl -L -X POST "https://script.google.com/macros/s/XXXX/exec" \
  --data-urlencode "role=parent" --data-urlencode "name=Туршилт" \
  --data-urlencode "phone=99112233" --data-urlencode "from=СБД 1-р хороо" \
  --data-urlencode "to=1-р сургууль"
# → {"ok":true}   (Эцэг эх sheet-д мөр нэмэгдсэн байна. Туршилтын мөрийг устгаарай.)
```

## 5. Вэбд холбох
URL-ийг `NEXT_PUBLIC_REGISTRATION_ENDPOINT` орчны хувьсагчид өгнө. Утга нь **build хийх үед** JS-д шингэдэг тул өөрчилсний дараа заавал дахин build/deploy хийнэ.

- **Локал:** төслийн үндсэнд `.env.local` файл үүсгэнэ (`.gitignore`-д орсон):
  ```
  NEXT_PUBLIC_REGISTRATION_ENDPOINT=https://script.google.com/macros/s/XXXX/exec
  ```
  `npm run dev` → http://localhost:3000/#register дээр туршина.
- **Vercel:** Project → Settings → Environment Variables → дээрх нэр/утгыг *Production* (хэрэгтэй бол *Preview*) орчинд нэмээд **Redeploy** хийнэ.

Хувьсагч тохируулаагүй үед маягт алдааны мэдэгдэл харуулна (хуурамч "амжилттай" гэж хэлэхгүй).

## Скриптийг өөрчилсний дараа
**Deploy → Manage deployments → ✏️ (Edit) → Version: _New version_ → Deploy.**
Ингэвэл URL өөрчлөгдөхгүй. *New deployment* хийвэл шинэ URL үүсэх тул вэбийн хувьсагчийг солих хэрэгтэй болно.

## Тохиргоо (`registration.gs`-ийн дээд хэсэг)
| Хувьсагч | Утга |
|---|---|
| `SHEETS` | Sheet-үүдийн нэр |
| `ALL_SHEET` | `'Бүгд'` гэж өгвөл бүх бүртгэлийг нэмэлтээр 3 дахь sheet-д хуулна (анхдагч: унтраалттай) |
| `MAX_PER_MINUTE` | Минутад хүлээж авах нийт хүсэлт (анхдагч 30) |
| `DUPLICATE_WINDOW_SEC` | Ижил үүрэг+утас энэ хугацаанд давтагдвал дахин бичихгүй (анхдагч 600 сек) |

## Аюулгүй байдал, хувийн мэдээлэл
- Web App URL нь вэбийн JS дотор харагддаг тул нууц биш. Хамгаалалт: серверийн талын шалгалт, honeypot, давхардлын болон минутын хязгаар, томьёо (`=…`) шахалтаас сэргийлэх.
- Sheet-д нэр, утас, гэрийн байршил хадгалагдана. **Share** эрхийг зөвхөн хэрэгтэй ажилтнуудад өгнө үү.
- Маягт хүүхдийн мэдээлэл авахгүй, зөвхөн насанд хүрсэн бүртгүүлэгчийн мэдээлэл авна. Маягтын доор Нууцлалын бодлогын холбоос бий.
