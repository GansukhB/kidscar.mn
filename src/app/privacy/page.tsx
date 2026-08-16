import Link from 'next/link';

export default function PrivacyPolicy() {
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
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Kids Car Mongolia — Нууцлалын бодлого</h1>
            <p className="text-sm text-gray-500">Хүчин төгөлдөр болсон: 2026-08-16 (өмнөх хувилбар: 2026-08-02)</p>

            <p className="leading-relaxed">
              Kids Car Mongolia (доор “Апп”) нь эцэг эхийг хүүхдээ сургуульд зөөвөрлөх жолоочтой холбох үйлчилгээ юм. Аппыг <strong>Kids car LLC</strong> (доор “бид”) хөгжүүлж, ажиллуулна.
            </p>
            <p className="leading-relaxed">
              Хаяг: No. 904, Building 330, Niislel khuree avenue, 26th khoroo, Bayanzurkh district, Ulaanbaatar 13312, Mongolia<br />
              Холбоо барих: <a href="mailto:info@kidscar.mn" className="text-brand-orange hover:underline font-semibold">info@kidscar.mn</a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Бид ямар мэдээлэл цуглуулдаг</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-3 text-left">Төрөл</th>
                    <th className="border border-gray-200 p-3 text-left">Тодруулга</th>
                    <th className="border border-gray-200 p-3 text-left">Яагаад</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Хэрэглэгчийн бүртгэл</td>
                    <td className="border border-gray-200 p-3">Овог, нэр, утасны дугаар (нэвтрэх нэр болно), и-мэйл, нууц үг, профайл зураг</td>
                    <td className="border border-gray-200 p-3">Бүртгэл үүсгэх, нэвтрүүлэх, талуудыг хооронд нь таниулах</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Хүүхдийн мэдээлэл</td>
                    <td className="border border-gray-200 p-3">Хүүхдийн нэр, сургууль, зураг, авах болон хүргэх байршил</td>
                    <td className="border border-gray-200 p-3">Жолооч хүүхдээ зөв танин, зөв цэгээс авч, зөв цэгт хүргэхэд</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Байршил (цэгүүд)</td>
                    <td className="border border-gray-200 p-3">Авах / хүргэх цэгийн координат (та зураг дээр сонгосон), гэрийн хаяг, маршрутын цэгүүд</td>
                    <td className="border border-gray-200 p-3">Маршрут зохион байгуулах, жолоочид хаяг үзүүлэх</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Жолоочийн байршил (аяллын үед)</td>
                    <td className="border border-gray-200 p-3">Аялал явагдаж байх хугацаанд жолоочийн төхөөрөмжийн GPS байршлыг ойролцоогоор 3 секунд тутам бүртгэж, тухайн аялалаар хүүхэд нь явж буй эцэг эх рүү дамжуулна. Аялал дуусмагц зогсоно.</td>
                    <td className="border border-gray-200 p-3">Эцэг эх хүүхдээ хаана явааг бодит хугацаанд харах, машин ойртохыг мэдэх</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Жолоочийн мэдээлэл</td>
                    <td className="border border-gray-200 p-3">Машины марк, улсын дугаар, суудлын тоо, бичиг баримт, маршрутын хуваарь ба үнэ</td>
                    <td className="border border-gray-200 p-3">Жолоочийг батлах, эцэг эхэд маршрут харуулах</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Гэрээ ба аялал</td>
                    <td className="border border-gray-200 p-3">Гэрээний төлөв, хуваарь (гараг, цаг), огноо, тусгай тэмдэглэл</td>
                    <td className="border border-gray-200 p-3">Үйлчилгээг гүйцэтгэх, түүхийг хөтлөх</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Төлбөр</td>
                    <td className="border border-gray-200 p-3">Хэтэвчний баланс, гүйлгээний дүн, төрөл, гүйлгээний дугаар, валют. Картын дугаарыг хадгалдаггүй — QPay гүйцэтгэнэ.</td>
                    <td className="border border-gray-200 p-3">Үйлчилгээний төлбөр тооцох</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Төхөөрөмжийн танигч</td>
                    <td className="border border-gray-200 p-3">FCM token, төхөөрөмжийн ID, төхөөрөмжийн төрөл (iOS/Android)</td>
                    <td className="border border-gray-200 p-3">Мэдэгдэл (push) илгээх</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Хэрэглээний статистик</td>
                    <td className="border border-gray-200 p-3">Апп хувилбар, төхөөрөмжийн загвар, дотоод хэрэглэгчийн ID (Google Analytics). Нэр, утас, хүүхдийн мэдээлэл орохгүй.</td>
                    <td className="border border-gray-200 p-3">Аппыг сайжруулах</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Гажуудал ба гүйцэтгэл</td>
                    <td className="border border-gray-200 p-3">Алдааны мэдээлэл, ачаалах хугацаа (Firebase Crashlytics, Performance Monitoring)</td>
                    <td className="border border-gray-200 p-3">Алдааг олж засварлах</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-600">
              Апп нь ямар нэгэн зар сурталчилгаа агуулаагүй бөгөөд зар сурталчилгааны ID (Advertising ID) цуглуулдаггүй.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Хүүхдийн мэдээлэл</h2>
            <p className="leading-relaxed">
              <strong>Бүртгэл үүсгэх, гэрээ байгуулах, төлбөр хийх зэргийг зөвхөн насанд хүрэгчид хийнэ.</strong> Хүүхдийн мэдээллийг зөвхөн эцэг эх, асран хамгаалагч оруулна — хүүхэд бие даан бүртгүүлэх боломжгүй.
            </p>
            <p className="leading-relaxed">
              Хүүхдийн мэдээллийг зөвхөн тээврийн үйлчилгээний хүрээнд ашиглана. Жолооч зөвхөн өөртэй нь гэрээтэй хүүхдийн мэдээллийг харна.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">3. Бид мэдээллийг хэнтэй хуваалцдаг вэ</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Гэрээний нөгөө тал</strong> — эцэг эх болон жолооч нар гэрээ байгуулагдсаны дараа үйлчилгээнд шаардлагатай мэдээллийг харна.</li>
              <li><strong>Аяллын үеийн байршил</strong> — жолоочийн байршил тухайн аялалд яваа хүүхдийн эцэг эхэд бодит хугацаанд харагдана. Аялал дуусахад зогсоно.</li>
              <li><strong>Google (Firebase & Maps)</strong> — мэдэгдэл илгээх, статистик, газрын зураг ашиглах зорилгоор.</li>
              <li><strong>QPay</strong> — хэтэвч цэнэглэх төлбөр тооцоо хийхэд.</li>
            </ul>
            <p className="leading-relaxed">Бид хувийн мэдээллийг гуравдагч этгээдэд худалдахгүй бөгөөд хууль тогтоомжид зааснаас өөрөөр шилжүүлэхгүй.</p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Аюулгүй байдал</h2>
            <p className="leading-relaxed">
              Апп болон сервер хоорондын бүх холболт HTTPS/TLS-ээр шифрлэгдсэн. Нэвтрэх эрхийн токенийг төхөөрөмжийн аюулгүй санах ойд (iOS Keychain, Android Keystore) хадгална.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Хадгалах хугацаа ба устгах</h2>
            <p className="leading-relaxed">
              Таныг идэвхтэй байх хугацаанд мэдээллийг хадгална. Бүртгэлээ устгуулах бол <a href="mailto:info@kidscar.mn" className="text-brand-orange hover:underline font-semibold">info@kidscar.mn</a> хаяг руу и-мэйл илгээнэ үү. Бид 30 хоногийн дотор устгана (хуулиар хадгалах шаардлагатай санхүүгийн баримтаас бусад).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">6. Таны эрх</h2>
            <p className="leading-relaxed">
              Та өөрийн болон хүүхдийнхээ мэдээллийг шалгах, засварлах, устгуулах, мэдэгдэл хүлээн авахаас татгалзах эрхтэй.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">7. Нууцлалын бодлого өөрчлөгдөх нь</h2>
            <p className="leading-relaxed">
              Бодлого өөрчлөгдсөн тохиолдолд энэ хуудсыг шинэчилж, апп дотор мэдэгдэх болно.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          {/* English Section */}
          <section id="en" className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Kids Car Mongolia — Privacy Policy</h1>
            <p className="text-sm text-gray-500">Effective date: 2026-08-16 (previous version: 2026-08-02)</p>

            <p className="leading-relaxed">
              Kids Car Mongolia (the "App") is a service connecting parents with drivers for school transportation. The App is developed and operated by <strong>Kids car LLC</strong> ("we").
            </p>
            <p className="leading-relaxed">
              Address: No. 904, Building 330, Niislel khuree avenue, 26th khoroo, Bayanzurkh district, Ulaanbaatar 13312, Mongolia<br />
              Contact: <a href="mailto:info@kidscar.mn" className="text-brand-orange hover:underline font-semibold">info@kidscar.mn</a>
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Information we collect</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-200 text-sm">
                <thead>
                  <tr className="bg-gray-100 text-gray-700">
                    <th className="border border-gray-200 p-3 text-left">Type</th>
                    <th className="border border-gray-200 p-3 text-left">Details</th>
                    <th className="border border-gray-200 p-3 text-left">Purpose</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Account data</td>
                    <td className="border border-gray-200 p-3">First/last name, phone number (username), email, password, profile photo</td>
                    <td className="border border-gray-200 p-3">Account creation, authentication</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Child data</td>
                    <td className="border border-gray-200 p-3">Child's name, school, photo, pick-up/drop-off locations</td>
                    <td className="border border-gray-200 p-3">Ensure correct identification and transport</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Locations</td>
                    <td className="border border-gray-200 p-3">Pick-up/drop-off coordinates, home address, route points</td>
                    <td className="border border-gray-200 p-3">Route planning and display</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Driver location (during trips)</td>
                    <td className="border border-gray-200 p-3">GPS location recorded every ~3 seconds while a trip is in progress and shared with parents on that trip. Stops when trip ends.</td>
                    <td className="border border-gray-200 p-3">Real-time trip tracking</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Driver data</td>
                    <td className="border border-gray-200 p-3">Vehicle make, plate, seats, documents, schedule, pricing</td>
                    <td className="border border-gray-200 p-3">Driver verification and routes</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Contracts & trips</td>
                    <td className="border border-gray-200 p-3">Status, schedule, dates, notes</td>
                    <td className="border border-gray-200 p-3">Service execution and history</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Payments</td>
                    <td className="border border-gray-200 p-3">Wallet balance, transaction details. Card numbers are never stored (handled by QPay).</td>
                    <td className="border border-gray-200 p-3">Service payment</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Device IDs</td>
                    <td className="border border-gray-200 p-3">FCM token, random device ID, device type</td>
                    <td className="border border-gray-200 p-3">Push notifications</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Usage analytics</td>
                    <td className="border border-gray-200 p-3">App version, device model, internal user ID (Google Analytics). No names/phone/child data.</td>
                    <td className="border border-gray-200 p-3">App improvements</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-200 p-3 font-medium">Crash reports</td>
                    <td className="border border-gray-200 p-3">Error stacks, performance metrics (Firebase Crashlytics, Performance Monitoring)</td>
                    <td className="border border-gray-200 p-3">Bug fixing and speed optimization</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="leading-relaxed">
              The App contains no advertising and <strong>does not collect an advertising ID</strong>.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Children's information</h2>
            <p className="leading-relaxed">
              Creating accounts and making payments are restricted to adults. Children cannot register on their own. Child information is used strictly for transport.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">3. Who we share data with</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li>Contract counterparties (parents and drivers)</li>
              <li>Parents (driver location during active trips)</li>
              <li>Google (Firebase, Maps) and QPay (payments)</li>
            </ul>
            <p className="leading-relaxed">We do not sell personal data.</p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Security</h2>
            <p className="leading-relaxed">All traffic encrypted with HTTPS/TLS. Secure token storage on device.</p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Retention and deletion</h2>
            <p className="leading-relaxed">
              Email <a href="mailto:info@kidscar.mn" className="text-brand-orange hover:underline font-semibold">info@kidscar.mn</a> to delete your account within 30 days.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">6. Your rights</h2>
            <p className="leading-relaxed">You may access, correct, or delete your data at any time.</p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">7. Changes to this policy</h2>
            <p className="leading-relaxed">Updates will be posted on this page.</p>
          </section>
        </div>
      </main>
    </div>
  );
}
