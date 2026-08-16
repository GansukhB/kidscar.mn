import Link from 'next/link';

export default function DeleteAccount() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
      <main className="max-w-4xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center mb-8">
          <Link href="/" className="text-brand-blue hover:underline inline-flex items-center font-medium">
            ← Буцах (Back)
          </Link>
          <div className="space-x-4 text-sm font-medium text-gray-600">
            <a href="#mn" className="hover:text-brand-blue">Монгол</a>
            <span>·</span>
            <a href="#en" className="hover:text-brand-blue">English</a>
          </div>
        </div>

        <div className="prose prose-blue max-w-none space-y-8">
          {/* Mongolian Section */}
          <section id="mn" className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Kids Car Mongolia — Бүртгэл болон мэдээллээ устгуулах</h1>
            <p className="text-sm text-gray-500">Шинэчилсэн: 2026-08-16</p>

            <p className="leading-relaxed">
              Энэ хуудас нь <strong>Kids Car Mongolia</strong> апп-ын хэрэглэгчид бүртгэлээ болон түүнд холбогдох мэдээллээ хэрхэн устгуулах тухай юм. Аппыг <strong>Kids car LLC</strong> хөгжүүлж, ажиллуулна.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Хүсэлт илгээх алхмууд</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4 shadow-sm">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  <strong><a href="mailto:info@kidscar.mn?subject=%D0%91%D2%AF%D1%80%D1%82%D0%B3%D1%8D%D0%BB%20%D1%83%D1%81%D1%82%D0%B3%D0%B0%D1%85%20%D1%85%D2%AF%D1%81%D1%8D%D0%BB%20%D1%82" className="text-brand-blue hover:underline">info@kidscar.mn</a></strong> хаяг руу и-мэйл илгээнэ.
                </li>
                <li>
                  Гарчиг (subject) хэсэгт <strong>«Бүртгэл устгах хүсэлт»</strong> гэж бичнэ.
                </li>
                <li>
                  И-мэйл дотор аппад <strong>бүртгүүлсэн 8 оронтой утасны дугаараа</strong> заана (энэ нь таны нэвтрэх нэр). Өөр мэдээлэл шаардлагагүй.
                </li>
                <li>
                  Бид хүсэлт гаргагч нь бүртгэлийн эзэн мөн эсэхийг тухайн дугаараар баталгаажуулна.
                </li>
                <li>
                  Хүсэлтийг хүлээн авснаас хойш <strong>30 хоногийн дотор</strong> шийдвэрлэж, гүйцэтгэсэн тухай хариу мэдэгдэнэ.
                </li>
              </ol>
            </div>
            <p className="leading-relaxed">
              Утсаар холбогдох бол: <strong>+976 9444 2652</strong>. Гэхдээ мөрийг тодорхой үлдээхийн тулд и-мэйлээр хүсэлт гаргахыг зөвлөж байна.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Ямар мэдээлэл устах вэ</h2>
            <p className="leading-relaxed">Бүртгэл устгах хүсэлт биелэгдэхэд дараах мэдээлэл устана:</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-3 text-left">Төрөл</th>
                    <th className="border border-gray-200 p-3 text-left">Юу нь</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Хэрэглэгчийн бүртгэл</td>
                    <td className="border border-gray-200 p-3">Овог, нэр, утасны дугаар (нэвтрэх нэр), и-мэйл, нууц үг, профайл зураг</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Хүүхдийн мэдээлэл</td>
                    <td className="border border-gray-200 p-3">Хүүхдийн нэр, сургууль, зураг, авах / хүргэх байршил</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Байршлын өгөгдөл</td>
                    <td className="border border-gray-200 p-3">Авах / хүргэх цэгийн координат, гэрийн хаяг, аяллын үед бүртгэгдсэн жолоочийн GPS-ийн түүх</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Жолоочийн мэдээлэл</td>
                    <td className="border border-gray-200 p-3">Машины марк, улсын дугаар, суудлын тоо, оруулсан бичиг баримт, маршрутын хуваарь ба үнэ</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Гэрээ ба аялал</td>
                    <td className="border border-gray-200 p-3">Гэрээний төлөв, хуваарь, аяллын түүх, тэмдэглэл</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Төхөөрөмжийн танигч</td>
                    <td className="border border-gray-200 p-3">Push мэдэгдлийн (FCM) token, апп-ын үүсгэсэн санамсаргүй төхөөрөмжийн ID</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Хэрэглээний статистик</td>
                    <td className="border border-gray-200 p-3">Тухайн бүртгэлтэй холбоотой дотоод хэрэглэгчийн дугаар ба түүнд холбогдох дүн шинжилгээний бичлэгүүд</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Ямар мэдээлэл үлдэх вэ</h2>
            <p className="leading-relaxed">
              Дараах мэдээллийг бид <strong>хуулиар хүлээсэн үүргийн улмаас</strong> тодорхой хугацаанд хадгалж болно. Энэ нь таны бүртгэлийг сэргээхэд ашиглагдахгүй бөгөөд зөвхөн санхүү, тайлагналын зорилготой:
            </p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-3 text-left">Төрөл</th>
                    <th className="border border-gray-200 p-3 text-left">Шалгаан</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Төлбөр, гүйлгээний бүртгэл (дүн, огноо, гүйлгээний дугаар)</td>
                    <td className="border border-gray-200 p-3">Монгол Улсын нягтлан бодох бүртгэл, татварын хууль тогтоомжийн дагуу хадгалах шаардлагатай. Картын дугаарыг хэзээ ч хадгалдаггүй — QPay гүйцэтгэдэг.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Хууль, маргаантай холбоотой бичлэг</td>
                    <td className="border border-gray-200 p-3">Эрх бүхий байгууллагын шаардлага, эсхүл шийдэгдээгүй маргаан байгаа тохиолдолд тухайн асуудал дуустал</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed">
              Устгасан мэдээлэл нь системийн <strong>нөөц хуулбарт (backup)</strong> түр хугацаанд үлдэж болох бөгөөд ээлжит нөөцлөлтийн мөчлөгийн дагуу бүрмөсөн дарагдана.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Зөвхөн зарим мэдээллээ устгуулах</h2>
            <p className="leading-relaxed">
              Бүртгэлээ бүхэлд нь устгахыг хүсэхгүй байгаа бол <a href="mailto:info@kidscar.mn" className="text-brand-orange hover:underline font-semibold">info@kidscar.mn</a> руу хандаж, тодорхой мэдээллээ (жишээ нь хүүхдийн бүртгэл, профайл зураг) устгуулах, залруулах хүсэлт гаргаж болно. Дэлгэрэнгүйг <Link href="/privacy" className="text-brand-blue hover:underline">Нууцлалын бодлого</Link>-оос үзнэ үү.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          {/* English Section */}
          <section id="en" className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Kids Car Mongolia — Delete your account and data</h1>
            <p className="text-sm text-gray-500">Last updated: 2026-08-16</p>

            <p className="leading-relaxed">
              This page explains how users of the <strong>Kids Car Mongolia</strong> app can request deletion of their account and data. Operated by <strong>Kids car LLC</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">How to request deletion</h2>
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6 my-4 shadow-sm">
              <ol className="list-decimal pl-6 space-y-3">
                <li>
                  Send an email to <strong><a href="mailto:info@kidscar.mn?subject=Account%20deletion%20request" className="text-brand-blue hover:underline">info@kidscar.mn</a></strong>.
                </li>
                <li>Use the subject line <strong>“Account deletion request”</strong>.</li>
                <li>
                  State the <strong>8-digit phone number you registered with</strong> (your username).
                </li>
                <li>We verify ownership.</li>
                <li>
                  We complete the deletion <strong>within 30 days</strong>.
                </li>
              </ol>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Data that is deleted</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-3 text-left">Type</th>
                    <th className="border border-gray-200 p-3 text-left">What it covers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Account data</td>
                    <td className="border border-gray-200 p-3">Name, phone, email, password, profile photo</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Child data</td>
                    <td className="border border-gray-200 p-3">Child's name, school, photo, locations</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Location data</td>
                    <td className="border border-gray-200 p-3">Coordinates, home address, driver GPS trip history</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Driver data</td>
                    <td className="border border-gray-200 p-3">Vehicle make, plate, seats, documents, schedules</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Contracts and trips</td>
                    <td className="border border-gray-200 p-3">Status, schedules, trip history, notes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Device IDs</td>
                    <td className="border border-gray-200 p-3">FCM token, random device ID</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Usage analytics</td>
                    <td className="border border-gray-200 p-3">Internal user ID and associated analytics records</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">Data that is kept</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-3 text-left">Type</th>
                    <th className="border border-gray-200 p-3 text-left">Reason</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Payment & transaction records</td>
                    <td className="border border-gray-200 p-3">Required by Mongolian accounting and tax law. Card numbers are never stored.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Legal claims records</td>
                    <td className="border border-gray-200 p-3">Where required by law or during active disputes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}
