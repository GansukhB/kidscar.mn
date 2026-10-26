import Link from 'next/link';
import type { ReactNode } from 'react';

const emailLink = (
  <a href="mailto:info@kidscar.mn" className="text-brand-orange hover:underline font-semibold">info@kidscar.mn</a>
);

type Row = [ReactNode, ReactNode, ReactNode];

const mnRows: Row[] = [
  [
    'Хэрэглэгчийн бүртгэл',
    'Овог, нэр, утасны дугаар (нэвтрэх нэр болно), и-мэйл, нууц үг, профайл зураг',
    'Бүртгэл үүсгэх, нэвтрүүлэх, талуудыг хооронд нь таниулах',
  ],
  [
    'Хүүхдийн мэдээлэл',
    'Хүүхдийн нэр, сургууль, зураг, авах болон хүргэх байршил',
    'Жолооч хүүхдээ зөв танин, зөв цэгээс авч, зөв цэгт хүргэхэд',
  ],
  [
    'Байршил (цэгүүд)',
    'Авах / хүргэх цэгийн координат (та зураг дээр сонгосон), гэрийн хаяг, маршрутын цэгүүд',
    'Маршрут зохион байгуулах, жолоочид хаяг үзүүлэх',
  ],
  [
    <strong key="t">Жолоочийн байршил (аяллын үед)</strong>,
    <>
      Аялал <strong>явагдаж байх хугацаанд</strong> жолоочийн төхөөрөмжийн GPS байршлыг ойролцоогоор <strong>3 секунд тутам</strong> бүртгэж, тухайн аялалаар хүүхэд нь явж буй эцэг эх рүү дамжуулна. Энэ нь апп хаалттай, дэлгэц унтарсан үед ч үргэлжилнэ (Android дээр байнгын мэдэгдэл харагдана). <strong>Аялал дуусмагц зогсоно.</strong> Эцэг эхийн байршлыг бид цуглуулдаггүй.
    </>,
    'Эцэг эх хүүхдээ хаана явааг бодит хугацаанд харах, машин ойртохыг мэдэх',
  ],
  [
    'Жолоочийн мэдээлэл',
    'Машины марк, улсын дугаар, суудлын тоо, бичиг баримт, маршрутын хуваарь ба үнэ',
    'Жолоочийг батлах, эцэг эхэд маршрут харуулах',
  ],
  [
    'Гэрээ ба аялал',
    'Гэрээний төлөв, хуваарь (гараг, цаг), огноо, тусгай тэмдэглэл',
    'Үйлчилгээг гүйцэтгэх, түүхийг хөтлөх',
  ],
  [
    'Төлбөр',
    'Хэтэвчний баланс, гүйлгээний дүн, төрөл, гүйлгээний дугаар, валют',
    <>
      Үйлчилгээний төлбөр тооцох. <strong>Картын дугаарыг бид хадгалдаггүй</strong> — цэнэглэлтийг QPay гүйцэтгэнэ.
    </>,
  ],
  [
    'Төхөөрөмжийн танигч',
    'Firebase Cloud Messaging (FCM) token, апп өөрөө үүсгэсэн санамсаргүй төхөөрөмжийн ID, төхөөрөмжийн төрөл (iOS/Android)',
    'Мэдэгдэл (push) илгээх',
  ],
  [
    'Нэвтрэлтийн бүртгэл',
    'Нэвтэрсэн төхөөрөмжийн загвар, үйлдлийн системийн хувилбар, аппын хувилбар, нэвтэрсэн ба сүүлд ашигласан огноо. Таны төхөөрөмждөө өгсөн нэр болон сүлжээний (IP) хаягийг хадгалдаггүй.',
    'Бүртгэлийн аюулгүй байдал: «Нэвтэрсэн төхөөрөмжүүд» жагсаалт, өөр төхөөрөмжийг гаргах, шинэ төхөөрөмжөөс нэвтэрснийг мэдэгдэх.',
  ],
  [
    'Камер',
    <>
      Таны өөрөө авч оруулсан зураг (профайл, хүүхэд, машин, аяллын болон санал хүсэлтийн зураг) болон хүүхдийн утсыг холбох QR кодыг уншуулахад. QR уншуулах үед камерын дүрсийг <strong>төхөөрөмж дээр нь</strong> боловсруулна — хадгалахгүй, бидэнд илгээхгүй.
    </>,
    'Зураг оруулах; хүүхдийн утсыг код бичилгүйгээр холбох',
  ],
  [
    'Хэрэглээний статистик',
    <>
      Аль дэлгэцийг нээсэн, ямар үйлдэл хийсэн (нэвтрэх, аялал үүсгэх г.м.), аппын хувилбар, төхөөрөмжийн загвар, ойролцоо байршил (улс/хот түвшинд). <strong>Нэр, утас, и-мэйл, хүүхдийн мэдээлэл, нарийн координат энд ОРОХГҮЙ</strong> — зөвхөн дотоод хэрэглэгчийн дугаар.
    </>,
    'Аль хэсэг нь хүндрэлтэй байгааг ойлгож, аппыг сайжруулах (Google Analytics)',
  ],
  [
    'Гэмтэл ба гүйцэтгэлийн тайлан',
    'Апп унасан үеийн техникийн тайлан (алдааны stack, төхөөрөмжийн загвар, санах ойн төлөв), дэлгэц нээгдэх хурд, сервер рүү илгээсэн хүсэлтийн хугацаа',
    'Алдааг олж засах, хурдыг сайжруулах (Firebase Crashlytics, Performance Monitoring)',
  ],
];

const enRows: Row[] = [
  [
    'Account',
    'First and last name, phone number (used as the sign-in name), email address, password, profile photo',
    'Create and secure your account; let the other party identify you',
  ],
  [
    'Child information',
    "Child's name, school, photo, pickup and drop-off points",
    'So the driver collects the right child at the right place',
  ],
  [
    'Location (points)',
    'Coordinates of the pickup and drop-off points you choose on the map, your home address, and route points',
    'Planning routes and showing addresses to the driver',
  ],
  [
    <strong key="t">Driver location (during a trip)</strong>,
    <>
      While a trip is <strong>in progress</strong>, the driver&apos;s device GPS location is recorded roughly <strong>every 3 seconds</strong> and sent to the parents whose children are on that trip. This continues while the App is closed or the screen is off (Android shows a persistent notification). <strong>It stops as soon as the trip ends.</strong> We do not collect parents&apos; locations.
    </>,
    'Letting parents see where their child is in real time',
  ],
  [
    'Driver information',
    'Vehicle model, plate number, seat count, documents, route schedule and price',
    'Verifying drivers and listing routes to parents',
  ],
  [
    'Contracts and trips',
    'Contract status, weekday and time schedule, dates, special notes',
    'Delivering the service and keeping a history',
  ],
  [
    'Payments',
    <>
      Wallet balance, transaction amount, type, reference and currency. <strong>We do not store card numbers</strong> — top-ups are processed by QPay.
    </>,
    'Charging for the transport service',
  ],
  [
    'Device identifiers',
    'Firebase Cloud Messaging token, a random device ID generated by the App, and device type (iOS/Android)',
    'Sending push notifications',
  ],
  [
    'Sign-in records',
    'Model, operating-system version and App version of each signed-in device, and sign-in and last-use dates. We do not store the name you gave your device or your network (IP) address.',
    'Account security: the "Signed-in devices" list, signing another device out, and alerting you to a sign-in from a new device.',
  ],
  [
    'Camera',
    <>
      Used for photos you choose to take and upload (profile, child, vehicle, trip and support photos) and to scan the QR code that links a child&apos;s phone. While a QR code is being scanned the camera image is processed <strong>on the device</strong> — it is not stored or sent to us.
    </>,
    "Uploading photos; linking a child's phone without typing the code",
  ],
  [
    'Usage analytics',
    <>
      Which screens are opened and which actions are taken (sign-in, creating a trip, etc.), app version, device model, approximate location at country/city level. <strong>No names, phone numbers, email addresses, child data or precise coordinates</strong> — only an internal user identifier.
    </>,
    'Understanding where users struggle and improving the App (Google Analytics)',
  ],
  [
    'Crash and performance reports',
    'Technical reports when the App crashes (error stack, device model, memory state), screen start-up times and server request durations',
    'Finding and fixing faults, improving speed (Firebase Crashlytics, Performance Monitoring)',
  ],
];

function DataTable({ headers, rows }: { headers: [string, string, string]; rows: Row[] }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse border border-gray-200 text-sm">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            {headers.map((h) => (
              <th key={h} className="border border-gray-200 p-3 text-left">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map(([type, details, purpose], i) => (
            <tr key={i} className="align-top">
              <td className="border border-gray-200 p-3 font-medium">{type}</td>
              <td className="border border-gray-200 p-3">{details}</td>
              <td className="border border-gray-200 p-3">{purpose}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

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
            <p className="text-sm text-gray-500">Хүчин төгөлдөр болсон: 2026-10-26 (өмнөх хувилбар: 2026-08-16)</p>

            <p className="leading-relaxed">
              Kids Car Mongolia (доор “Апп”) нь эцэг эхийг хүүхдээ сургуульд зөөвөрлөх жолоочтой холбох үйлчилгээ юм. Аппыг <strong>Kids car LLC</strong> (доор “бид”) хөгжүүлж, ажиллуулна.
            </p>
            <p className="leading-relaxed">
              Хаяг: No. 904, Building 330, Niislel khuree avenue, 26th khoroo, Bayanzurkh district, Ulaanbaatar 13312, Mongolia<br />
              Холбоо барих: {emailLink}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Бид ямар мэдээлэл цуглуулдаг</h2>
            <DataTable headers={['Төрөл', 'Тодруулга', 'Яагаад']} rows={mnRows} />
            <p className="leading-relaxed">
              Бид зар суулгаагүй, <strong>зар танилцуулгын танигч (advertising ID) цуглуулдаггүй</strong> (Android дээр тухайн зөвшөөрлийг аппаас зориудаар хассан), мөн өгөгдлийг зар сурталчилгаа болон хувийчилсан реклам харуулахад хэрэглэдэггүй.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Хүүхдийн мэдээлэл</h2>
            <p className="leading-relaxed">
              <strong>Бүртгэл үүсгэх, гэрээ байгуулах, төлбөр төлөх нь зөвхөн насанд хүрсэн хүний эрх.</strong> Хүүхдийн мэдээллийг зөвхөн тухайн хүүхдийн эцэг эх, асран хамгаалагч өөрөө оруулна — хүүхэд өөрөө бүртгүүлэх боломжгүй.
            </p>
            <p className="leading-relaxed">
              Хүүхэд аппыг <strong>зөвхөн эцэг эхийнхээ зөвшөөрлөөр</strong> ашиглаж болно: эцэг эх өөрийн апп дээр нэг удаагийн, 10 минут хүчинтэй код (эсвэл QR код) гаргаж, түүгээр хүүхдийн утсыг холбоно. Хүүхэд өөрөө бүртгүүлэхгүй, нууц үг, утасны дугаар оруулахгүй. Эцэг эх холболтыг хэдийд ч салгаж болно; хүүхэд ч өөрөө гарч болно.
            </p>
            <p className="leading-relaxed">
              Холбогдсон утсан дээр хүүхэд <strong>зөвхөн өөрийн</strong> аялал, аяллын үеийн машины байршил, машинд суух кодоо харна. Жолоочийн утасны дугаар, бусад хүүхдийн нэр, зураг, төлбөр, гэрээний мэдээлэл хүүхдийн утсанд илгээгдэхгүй.
            </p>
            <p className="leading-relaxed">
              Хүүхдийн утсанд бид <strong>байршлын зөвшөөрөл асуухгүй, GPS байршлыг нь цуглуулахгүй</strong>. Хүүхдийн утаснаас цуглуулах нь зөвхөн: аяллын мэдэгдэл хүргэхэд шаардлагатай төхөөрөмжийн танигч (§1), мөн нэр болон бусад хувийн мэдээлэлгүй хэрэглээний статистик, гэмтлийн тайлан (§1). Хүүхдэд чиглэсэн зар сурталчилгаа харуулдаггүй, зар танилцуулгын танигч (advertising ID) цуглуулдаггүй.
            </p>
            <p className="leading-relaxed">
              Хүүхдийн мэдээллийг зөвхөн зөөвөрлөх үйлчилгээг гүйцэтгэхэд шаардлагатай хэмжээгээр хэрэглэнэ. Жолооч нь өөрт гэрээтэй хүүхдийн мэдээллийг л харна. Аппын жолоочийн горимд хүүхдийн зураг зөвхөн тухайн аялал хийгдэж байх үед харагдана; бусад дэлгэц дээр зураг болон утасны дугаар нуугдана. Нэг аяллын бусад хүүхдийн нэр, зураг эцэг эхэд харагдахгүй.
            </p>
            <p className="leading-relaxed">
              Хүүхдийн мэдээллийг устгуулах хүсэлтийг эцэг эх, асран хамгаалагч {emailLink} хаягаар илгээж болно (доорх §5).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">3. Мэдээллийг хэнтэй хуваалцдаг</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Гэрээний эсрэг тал</strong> — эцэг эх ба жолооч гэрээ байгуулахад үйлчилгээнд шаардлагатай мэдээллийг харилцан харна.</li>
              <li><strong>Аяллын үеийн байршил</strong> — жолоочийн байршлыг тухайн аялалаар хүүхэд нь явж буй эцэг эх бодит хугацаанд харна (§1). Аялал дуусмагц дамжуулалт зогсоно.</li>
              <li><strong>Google (Firebase Cloud Messaging)</strong> — мэдэгдэл хүргэхэд.</li>
              <li><strong>Google (Firebase Analytics, Crashlytics, Performance Monitoring)</strong> — хэрэглээний статистик, гэмтлийн тайлан, хурдны хэмжилт боловсруулахад. Эдгээрт нэр, утас, и-мэйл, хүүхдийн мэдээлэл илгээгддэггүй.</li>
              <li><strong>Google Maps</strong> — зураг харуулах, байршил сонгоход.</li>
              <li><strong>QPay</strong> — хэтэвч цэнэглэх төлбөрийг гүйцэтгэхэд.</li>
            </ul>
            <p className="leading-relaxed">
              Бид хувийн мэдээллийг <strong>худалддаггүй</strong>. Дээрхээс бусад гуравдагч талд хуулиар шаардсанаас бусад тохиолдолд дамжуулдаггүй.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Хамгаалалт</h2>
            <p className="leading-relaxed">
              Апп сервертэй холбогдох бүх харилцаа HTTPS/TLS-ээр шифрлэгдэнэ. Нэвтрэх token-ыг төхөөрөмж дээр системийн хамгаалалттай санд (iOS Keychain, Android Keystore) хадгална.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Хадгалах хугацаа ба устгах</h2>
            <p className="leading-relaxed">
              Бүртгэл нээлттэй байх хугацаанд мэдээллийг хадгална. Гэрээ, төлбөрийн бүртгэлийг хууль ба бүртгэлийн шаардлагын дагуу хадгалж болно. Нэвтрэлтийн бүртгэлийг (§1) тухайн нэвтрэлт үргэлжлэх хугацаанд, дууссаны дараа 90 хоног хадгалаад устгана.
            </p>
            <p className="leading-relaxed">
              <strong>Бүртгэл болон мэдээллээ устгуулах:</strong> {emailLink} хаяг руу бүртгэлтэй утасны дугаараа заан хүсэлт илгээнэ. Бид хүсэлтийг 30 хоногийн дотор шийдвэрлэж, хуулиар хадгалах шаардлагатайгаас бусад мэдээллийг устгана.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">6. Таны эрх</h2>
            <p className="leading-relaxed">
              Та өөрийн болон хүүхдийнхээ мэдээллийг харах, залруулах, устгуулах, мөн мэдэгдэл хүлээн авахаас татгалзах эрхтэй. Мэдэгдлийг төхөөрөмжийн тохиргооноос эсвэл бидэнтэй холбогдож хаана.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">7. Бодлогын өөрчлөлт</h2>
            <p className="leading-relaxed">
              Бодлого өөрчлөгдвөл энэ хуудсыг шинэчилж, “Хүчин төгөлдөр болсон” огноог дагалдуулна. Үндсэн өөрчлөлт гарвал аппаар дамжуулан мэдэгдэнэ.
            </p>
          </section>

          <hr className="my-12 border-gray-200" />

          {/* English Section */}
          <section id="en" className="space-y-6">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">Kids Car Mongolia — Privacy Policy</h1>
            <p className="text-sm text-gray-500">Effective: 2026-10-26 (previous version: 2026-08-16)</p>

            <p className="leading-relaxed">
              Kids Car Mongolia (the “App”) connects parents with drivers who transport children to and from school. The App is developed and operated by <strong>Kids car LLC</strong> (“we”).
            </p>
            <p className="leading-relaxed">
              Address: No. 904, Building 330, Niislel khuree avenue, 26th khoroo, Bayanzurkh district, Ulaanbaatar 13312, Mongolia<br />
              Contact: {emailLink}
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">1. Data we collect</h2>
            <DataTable headers={['Category', 'Details', 'Purpose']} rows={enRows} />
            <p className="leading-relaxed">
              The App contains no advertising, <strong>does not collect an advertising ID</strong> (the corresponding Android permission is deliberately removed from the App), and does not use your data for advertising or personalised ads.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">2. Children&apos;s information</h2>
            <p className="leading-relaxed">
              <strong>Creating an account, entering into a contract and making payments are restricted to adults.</strong> Information about a child is entered only by that child&apos;s parent or guardian — a child cannot register on their own.
            </p>
            <p className="leading-relaxed">
              A child may use the App <strong>only with their parent&apos;s permission</strong>: the parent generates a one-time code (or QR code), valid for 10 minutes, in their own App and uses it to link the child&apos;s phone. The child does not register and enters no password or phone number. The parent can unlink the phone at any time, and the child can sign out.
            </p>
            <p className="leading-relaxed">
              On a linked phone the child sees <strong>only their own</strong> trips, the vehicle&apos;s location during a trip, and their boarding code. The driver&apos;s phone number, other children&apos;s names and photos, payments and contracts are not sent to the child&apos;s phone.
            </p>
            <p className="leading-relaxed">
              We <strong>do not ask for location permission on a child&apos;s phone and do not collect its GPS location</strong>. From a child&apos;s phone we collect only the device identifiers needed to deliver trip notifications (§1), and usage statistics and crash reports that contain no name or other personal details (§1). We show no advertising directed at children and do not collect an advertising ID.
            </p>
            <p className="leading-relaxed">
              Child information is used only as far as the transport service requires. A driver sees information only about children they have a contract with. In driver mode a child&apos;s photo is shown only while that trip is in progress; on all other screens photos and phone numbers are hidden. Other children on the same trip are never shown to a parent by name or photo.
            </p>
            <p className="leading-relaxed">
              A parent or guardian may request deletion of a child&apos;s information at {emailLink} (see §5).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">3. Who we share data with</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>The other party to a contract</strong> — parents and drivers see the information the service requires once a contract exists.</li>
              <li><strong>Location during a trip</strong> — the driver&apos;s location is shown in real time to the parents whose children are on that trip (§1). Sharing stops when the trip ends.</li>
              <li><strong>Google (Firebase Cloud Messaging)</strong> — to deliver notifications.</li>
              <li><strong>Google (Firebase Analytics, Crashlytics, Performance Monitoring)</strong> — to process usage statistics, crash reports and speed measurements. No names, phone numbers, email addresses or child data are sent to these services.</li>
              <li><strong>Google Maps</strong> — to display maps and pick locations.</li>
              <li><strong>QPay</strong> — to process wallet top-up payments.</li>
            </ul>
            <p className="leading-relaxed">
              We do <strong>not</strong> sell personal data, and we do not share it with anyone else except where required by law.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">4. Security</h2>
            <p className="leading-relaxed">
              All traffic between the App and our servers is encrypted with HTTPS/TLS. Authentication tokens are stored on the device in the platform&apos;s secure storage (iOS Keychain, Android Keystore).
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">5. Retention and deletion</h2>
            <p className="leading-relaxed">
              We keep your data while your account is active. Contract and payment records may be retained where accounting or legal rules require it. Sign-in records (§1) are kept while that sign-in lasts and deleted 90 days after it ends.
            </p>
            <p className="leading-relaxed">
              <strong>To delete your account and data</strong>, email {emailLink} from or citing your registered phone number. We will action the request within 30 days and delete the data except where the law requires us to keep it.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">6. Your rights</h2>
            <p className="leading-relaxed">
              You may access, correct or delete your own and your child&apos;s information, and opt out of notifications at any time through your device settings or by contacting us.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 pt-4">7. Changes to this policy</h2>
            <p className="leading-relaxed">
              If this policy changes we will update this page and its effective date, and notify you in the App for material changes.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
