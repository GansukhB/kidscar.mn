import Image from "next/image";
import { ArrowIcon, PersonIcon, PinIcon, ShieldIcon } from "./icons";

// Kids-Car-Mongolia.html-ээс шилжүүлсэн статик хэсгүүд.
// Бүртгүүлэх товчнууд нь href="#register" + data-register="parent|driver"
// хэлбэртэй — RegistrationSection үүнийг барьж аваад үүргийг урьдчилан сонгоно.

/** Hero доор харуулах итгэлийн 3 тэмдэг */
export function TrustRow() {
  const items = [
    { icon: <ShieldIcon className="h-5 w-5" />, text: "Бүрэн даатгалтай зорчилт" },
    { icon: <PersonIcon className="h-5 w-5" />, text: "Шалгуур хангасан жолооч" },
    { icon: <PinIcon className="h-5 w-5" />, text: "GPS хяналт" },
  ];
  return (
    <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm text-gray-500">
      {items.map((it) => (
        <li key={it.text} className="flex items-center gap-2">
          <span className="text-gray-500">{it.icon}</span>
          {it.text}
        </li>
      ))}
    </ul>
  );
}

/** Hero-гийн дээд талын зарлалын "pill" */
export function AnnouncementPill() {
  return (
    <a
      href="#register"
      data-register="parent"
      className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-100 bg-white/80 px-4 py-2 text-xs text-gray-600 shadow-sm transition-colors hover:border-brand-blue sm:text-sm"
    >
      <span className="h-2 w-2 shrink-0 rounded-full bg-green-500" aria-hidden="true" />
      Kids Car Mongolia албан ёсны бүртгэлээ эхлүүллээ.
      <span className="inline-flex items-center gap-1 font-semibold text-brand-blue">
        Нэгдэх <ArrowIcon className="h-2.5 w-2.5" />
      </span>
    </a>
  );
}

/** "Хол байсан ч. Хажууд нь байгаа мэт." */
export function ParentsSection() {
  const features = [
    { n: "01", title: "Байршлыг нь хараарай.", text: "Хүүхдийнхээ замд яваа байршлыг GPS-ээр бодит цагт хянана." },
    { n: "02", title: "Алхам бүрийг мэдээрэй.", text: "Машинд суух, сургуульдаа хүрэх, буух бүрд мэдэгдэл авна." },
    { n: "03", title: "Өдөртөө төвлөрөөрэй.", text: "Хүүхдийнхээ зорчилтын мэдээллийг гар утаснаасаа хараарай." },
  ];
  return (
    <section id="parents" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 text-center sm:mb-12">
          <p className="mb-5 text-xs font-bold tracking-[0.15em] text-brand-blue">ЭЦЭГ ЭХЧҮҮДЭД</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Хол байсан ч.
            <br />
            <span className="text-gray-400">Хажууд нь байгаа мэт.</span>
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-gray-500 sm:text-lg">
            Шалгуур хангасан, найдвартай жолоочид хүүхдээ хүргүүлээрэй. Байршлыг нь харж, алхам бүрд нь мэдэгдэл аваарай.
          </p>
        </div>

        <div className="relative h-[390px] overflow-hidden rounded-2xl bg-blue-50 sm:h-[440px] sm:rounded-3xl lg:h-[515px]">
          <Image
            src="/landing/parent-office.webp"
            alt="Ээж ажил дээрээ гар утаснаасаа хүүхдийнхээ аяллын мэдээллийг харж байна"
            fill
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="object-cover object-[65%_center] sm:object-[center_49%]"
          />
          <div className="absolute bottom-5 left-4 w-60 rounded-2xl border border-white bg-white/90 p-4 shadow-[0_20px_50px_#172e4420] backdrop-blur-xl sm:bottom-auto sm:left-[5%] sm:top-[17%] sm:w-[335px] sm:p-5">
            <div className="mb-2 flex items-center gap-2 text-[9px] tracking-wider text-gray-500 sm:mb-3">
              <span className="text-lg leading-none text-brand-orange">●</span> KIDS CAR
              <span className="ml-auto tracking-normal">одоо</span>
            </div>
            <strong className="text-xs text-gray-900 sm:text-sm">Хүүхэд тань сургуульдаа хүрлээ.</strong>
            <p className="mt-1.5 text-[10px] text-gray-500 sm:text-xs">Өглөөгөө тайван үргэлжлүүлээрэй.</p>
          </div>
        </div>

        <div className="mt-8 grid gap-6 sm:mx-6 sm:mt-10 md:grid-cols-3 md:gap-12">
          {features.map((f) => (
            <div key={f.n} className="grid grid-cols-[28px_1fr] gap-x-2 md:block">
              <span className="row-span-2 pt-0.5 text-xs font-semibold text-brand-blue">{f.n}</span>
              <h3 className="mb-1.5 text-lg font-bold tracking-tight text-gray-900 md:mb-2 md:mt-3">{f.title}</h3>
              <p className="text-sm leading-relaxed text-gray-500">{f.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** "Нэг чиглэл. Нэмэлт орлого." — жолооч эцэг эх, багш нарт */
export function DriversSection() {
  return (
    <section id="drivers" className="grid scroll-mt-16 overflow-hidden bg-[#f5f6f8] lg:min-h-[660px] lg:grid-cols-[1fr_1.1fr]">
      <div className="self-center px-7 pb-10 pt-14 sm:px-10 lg:py-24 lg:pl-[max(2.5rem,calc((100vw-1216px)/2+2rem))] lg:pr-14">
        <p className="mb-5 text-xs font-bold tracking-[0.15em] text-orange-700">ЖОЛООЧ ЭЦЭГ ЭХ, БАГШ НАРТ</p>
        <h2 className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
          Нэг чиглэл.
          <br />
          Нэмэлт орлого.
        </h2>
        <p className="mb-4 mt-6 max-w-sm text-lg leading-relaxed text-gray-800">
          Хүүхдээ хүргэж өгөх замдаа ижил чиглэлийн хүүхдүүдийг хамт хүргээрэй.
        </p>
        <p className="mb-8 max-w-md text-sm leading-relaxed text-gray-500">
          Гэрийнхээ ойролцоох цэгээс хүүхдүүдийг аваад, сургуульд нь хүргэж өгч, аваад нэмэлт орлоготой болоорой.
        </p>
        <a
          href="#register"
          data-register="driver"
          className="inline-flex min-h-11 items-center gap-4 rounded-full bg-brand-blue px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-blue-700"
        >
          Жолоочоор бүртгүүлэх <ArrowIcon />
        </a>
        <div className="mt-7 flex gap-2.5 text-xs text-gray-500">
          <span>Жолооч эцэг эх</span>
          <span aria-hidden="true">·</span>
          <span>Багш</span>
        </div>
      </div>
      <div className="relative h-[390px] min-w-0 lg:h-auto">
        <Image
          src="/landing/driver-school.webp"
          alt="Жолооч ээж хоёр хүүхдийг сургуулийн үүдэнд хүргэж ирэв"
          fill
          sizes="(min-width: 1024px) 52vw, 100vw"
          className="object-cover object-[55%_center] lg:object-[63%_center]"
        />
      </div>
    </section>
  );
}

/** Түгээмэл асуулт */
export function FaqSection() {
  const faqs = [
    {
      q: "Kids Car хэнд зориулагдсан бэ?",
      a: "Хүүхдээ сургуульд найдвартай хүргүүлэх хүсэлтэй эцэг эх, мөн хүүхдээ хүргэж өгөх, авах замдаа ижил чиглэлийн хүүхдүүдийг хамт хүргэж нэмэлт орлого олохыг хүссэн жолооч эцэг эх, багш нарт зориулагдсан.",
    },
    {
      q: "Хүүхдийнхээ байршлыг хэрхэн харах вэ?",
      a: "Хүүхдийнхээ зорчиж буй байршлыг гар утаснаасаа GPS-ээр бодит цагт хянана. Машинд суух, сургуульдаа хүрэх, буух үед мэдэгдэл авна.",
    },
    {
      q: "Багш жолоочоор бүртгүүлж болох уу?",
      a: "Болно. Ижил чиглэлийн хүүхдүүдийг сургуульд нь хүргэж өгөх, авах хүсэлтэй багш нарыг жолоочийн бүртгэлд урьж байна. Жолооч нь үйлчилгээний шалгуурыг хангасан байна.",
    },
    {
      q: "Бүртгэлээ хаанаас эхлүүлэх вэ?",
      a: "«Бүртгүүлэх» товчийг дарж, эцэг эх эсвэл жолоочийн сонголтоо хийгээрэй. Нэр, утасны дугаар, гэрийн байршил, сургуулийн нэрээ оруулаад хүсэлтээ илгээнэ.",
    },
  ];
  return (
    <section id="faq" className="scroll-mt-16 px-4 py-16 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <div>
          <p className="mb-5 text-xs font-bold tracking-[0.15em] text-brand-blue">ТҮГЭЭМЭЛ АСУУЛТ</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Мэдэхийг хүссэн
            <br />
            зүйлс.
          </h2>
        </div>
        <div>
          {faqs.map((f) => (
            <details key={f.q} className="group border-b border-gray-200">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-5 text-sm font-semibold leading-relaxed text-gray-900 sm:py-6 sm:text-base [&::-webkit-details-marker]:hidden">
                {f.q}
                <span aria-hidden="true" className="text-2xl font-normal text-gray-400 transition-transform group-open:rotate-45">
                  +
                </span>
              </summary>
              <p className="mb-6 text-sm leading-relaxed text-gray-500">{f.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Хуудасны төгсгөлийн уриалга (footer-ийн өмнө) */
export function CtaSection() {
  return (
    <section className="overflow-hidden bg-brand-blue px-6 pt-16 text-center text-white sm:pt-24">
      <p className="mb-5 text-xs font-bold tracking-[0.15em] text-white/70">ХАМТДАА ЗАМД ГАРЪЯ.</p>
      <h2 className="text-4xl font-bold leading-tight tracking-tight sm:text-6xl">
        Өглөө бүрийг
        <br />
        илүү амар болгоё.
      </h2>
      <p className="mb-8 mt-6 text-base leading-relaxed text-white/70 sm:text-lg">
        Амар тайван эцэг эх. Орлоготой жолооч.
        <br />
        Жаргалтай хүүхэд.
      </p>
      <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-5">
        <a
          href="#register"
          data-register="parent"
          className="inline-flex min-h-11 min-w-60 items-center justify-center gap-4 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-brand-blue transition-transform hover:-translate-y-0.5 hover:bg-blue-50"
        >
          Эцэг эхээр бүртгүүлэх <ArrowIcon />
        </a>
        <a
          href="#register"
          data-register="driver"
          className="inline-flex min-h-11 min-w-60 items-center justify-center gap-4 rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 hover:bg-white/10"
        >
          Жолоочоор бүртгүүлэх <ArrowIcon />
        </a>
      </div>

      <div className="relative mx-auto mt-12 h-[300px] max-w-5xl overflow-hidden rounded-t-3xl bg-white sm:mt-16 sm:h-[460px]">
        <Image
          src="/landing/hero-ride.webp"
          alt="Эмэгтэй жолооч болон хамгаалалтын бүстэй хүүхдүүд цагаан машинаар сургууль руу явж буй 3D дүрслэл"
          fill
          sizes="(min-width: 1024px) 1024px, 100vw"
          className="object-cover object-[center_60%]"
        />
        <div className="absolute bottom-6 left-[6%] flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 text-left shadow-[0_12px_50px_#2947661a] backdrop-blur sm:bottom-12 sm:px-5 sm:py-4">
          <span className="grid h-8 w-8 place-items-center rounded-full bg-green-50 text-green-600">✓</span>
          <div>
            <strong className="block text-xs text-gray-900 sm:text-sm">Сургуульдаа хүрлээ.</strong>
            <small className="mt-1 block text-[10px] text-gray-500 sm:text-xs">Танд мэдэгдэл очно.</small>
          </div>
          <span className="ml-3 h-1.5 w-1.5 rounded-full bg-green-500" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
