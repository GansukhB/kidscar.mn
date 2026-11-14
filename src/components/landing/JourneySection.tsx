"use client";

import { useRef, useState, type KeyboardEvent } from "react";
import { ArrowIcon, CarIcon, SchoolIcon } from "./icons";

// Kids-Car-Mongolia.html-ийн "Гэрээс сургууль хүртэл" интерактив хэсэг.
const STEPS = [
  { title: "Бүртгүүлнэ.", desc: "Эцэг эх эсвэл жолоочоор нэгдэнэ." },
  { title: "Машиндаа сууна.", desc: "Хүүхэд суухад танд мэдэгдэл очно." },
  { title: "Замыг нь хянана.", desc: "Байршлыг GPS-ээр бодит цагт харна." },
  { title: "Сургуульдаа хүрнэ.", desc: "Хүрэх, буух бүрд нь мэдэгдэл авна." },
];

const STAGES = [
  { title: "Өдрийг хамтдаа эхлүүлье.", copy: "Эцэг эх эсвэл жолоочоор бүртгүүлээрэй.", icon: "✓", left: 32, top: 190 },
  { title: "Хүүхэд тань машиндаа суулаа.", copy: "Аялал эхлэхэд танд мэдэгдэл очно.", icon: "✓", left: 32, top: 160 },
  { title: "Сургууль руу явж байна.", copy: "Байршлыг GPS-ээр бодит цагт хянаарай.", icon: "›", left: 123, top: 116 },
  { title: "Сургуульдаа хүрлээ.", copy: "Хүүхэд буухад танд мэдэгдэл очно.", icon: "✓", left: 174, top: 43 },
];

export default function JourneySection() {
  const [active, setActive] = useState(0);
  const tabs = useRef<(HTMLButtonElement | null)[]>([]);
  const stage = STAGES[active];

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    let next = index;
    if (e.key === "ArrowDown") next = (index + 1) % STEPS.length;
    else if (e.key === "ArrowUp") next = (index + STEPS.length - 1) % STEPS.length;
    else if (e.key === "Home") next = 0;
    else if (e.key === "End") next = STEPS.length - 1;
    else return;
    e.preventDefault();
    setActive(next);
    tabs.current[next]?.focus();
  };

  return (
    <section id="journey" className="scroll-mt-16 bg-white px-4 py-16 sm:px-6 sm:py-28 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="mb-8 sm:mb-12">
          <p className="mb-5 text-xs font-bold tracking-[0.15em] text-brand-blue">ӨДӨР ТУТМЫН АЯЛАЛ</p>
          <h2 className="text-3xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl">
            Гэрээс сургууль хүртэл.
            <br />
            <span className="text-gray-400">Алхам бүр нь тодорхой.</span>
          </h2>
        </div>

        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-16">
          <div role="tablist" aria-label="Аяллын үе шат" aria-orientation="vertical">
            {STEPS.map((s, i) => {
              const on = i === active;
              return (
                <button
                  key={s.title}
                  ref={(el) => {
                    tabs.current[i] = el;
                  }}
                  id={`journey-step-${i}`}
                  role="tab"
                  aria-selected={on}
                  aria-controls="journey-panel"
                  tabIndex={on ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`flex w-full items-center gap-5 px-3 py-5 text-left transition-all sm:px-4 sm:py-6 ${
                    on ? "rounded-2xl border-b border-transparent bg-[#f5f8ff] text-gray-900" : "border-b border-gray-200 text-gray-400"
                  }`}
                >
                  <span className={`text-sm font-semibold ${on ? "text-brand-blue" : ""}`}>{String(i + 1).padStart(2, "0")}</span>
                  <span>
                    <strong className="block text-lg tracking-tight sm:text-xl">{s.title}</strong>
                    <small className={`mt-1.5 block text-xs leading-relaxed sm:text-sm ${on ? "text-gray-500" : ""}`}>{s.desc}</small>
                  </span>
                  <span className={`ml-auto text-brand-blue transition-opacity ${on ? "opacity-100" : "opacity-0"}`}>
                    <ArrowIcon />
                  </span>
                </button>
              );
            })}
          </div>

          <div
            id="journey-panel"
            role="tabpanel"
            aria-labelledby={`journey-step-${active}`}
            className="flex flex-col items-center overflow-hidden rounded-3xl bg-[#f4f7fd] px-5 pb-5 pt-8 sm:pt-10"
          >
            {/* Утасны дүрслэл */}
            <div className="relative h-[510px] w-[270px] rotate-2 overflow-hidden rounded-[43px] border-[7px] border-[#242426] bg-white shadow-[16px_20px_35px_#142d5b25,inset_0_0_0_2px_#ddd] sm:rotate-3">
              <div className="absolute left-1/2 top-2 z-10 h-[19px] w-[75px] -translate-x-1/2 rounded-full bg-[#1d1d1f]" />
              <div className="flex justify-between px-5 py-3.5 text-[10px] font-bold">
                <span>9:41</span>
                <span>● ▰</span>
              </div>
              <div className="flex items-center gap-1.5 px-4 pb-4 pt-5 text-[17px] font-extrabold text-brand-blue">
                <span className="text-brand-orange">●</span> Kids Car
                <span className="ml-auto grid h-7 w-7 place-items-center rounded-full bg-orange-50 text-[10px] text-amber-700">Б</span>
              </div>

              <div
                className="relative h-[265px]"
                style={{
                  background:
                    "repeating-linear-gradient(0deg,transparent 0 45px,#fff 45px 57px),repeating-linear-gradient(90deg,#eeeee9 0 62px,#fff 62px 76px)",
                }}
              >
                <div className="absolute left-3 top-2.5 h-[88px] w-[73px] rounded-2xl bg-[#c9dfc7]" />
                <div className="absolute bottom-5 right-4 h-[57px] w-[60px] rounded-2xl bg-[#c9dfc7]" />
                <div className="absolute left-[110px] top-5 h-[33px] w-8 rounded-md bg-[#dddfe6]" />
                <div className="absolute bottom-5 left-[110px] h-[34px] w-[50px] rounded-md bg-[#dddfe6]" />
                <div className="absolute bottom-6 left-4 h-5 w-[25px] rounded-md bg-[#dddfe6]" />
                <svg className="absolute inset-0 h-full w-full" viewBox="0 0 280 300" fill="none" aria-hidden="true">
                  <path d="M55 240V170Q55 150 75 150H190Q210 150 210 130V65" stroke="white" strokeWidth="15" />
                  <path d="M55 240V170Q55 150 75 150H190Q210 150 210 130V65" stroke="#0965ef" strokeWidth="7" strokeLinecap="round" />
                </svg>
                <div className="absolute bottom-7 left-[38px] h-[30px] w-[30px] rounded-full bg-white text-center text-[23px] leading-[27px] text-brand-blue">
                  ⌂<small className="block whitespace-nowrap text-[9px] leading-normal text-gray-500">Гэр</small>
                </div>
                <div className="absolute right-[43px] top-[31px] text-center text-brand-orange">
                  <SchoolIcon className="mx-auto h-[30px] w-[30px]" />
                  <small className="block whitespace-nowrap text-[9px] leading-normal text-gray-500">Сургууль</small>
                </div>
                <div
                  className="absolute grid h-9 w-9 place-items-center rounded-full border-[3px] border-white bg-brand-blue text-white shadow-[0_3px_12px_#0451bb30] transition-[top,left] duration-700 motion-reduce:transition-none"
                  style={{ left: stage.left, top: stage.top }}
                >
                  <CarIcon className="h-[21px] w-[21px]" />
                </div>
              </div>

              <div className="relative mx-2.5 -mt-2.5 min-h-[115px] rounded-[19px] border border-gray-100 bg-white px-4 py-3.5" aria-live="polite">
                <span className="mb-2 inline-grid h-[22px] w-[22px] place-items-center rounded-full bg-blue-50 text-xs text-brand-blue">{stage.icon}</span>
                <strong className="block text-xs text-gray-900">{stage.title}</strong>
                <p className="my-1.5 text-[10px] leading-normal text-gray-500">{stage.copy}</p>
                <div className="mt-3 flex gap-1">
                  {STAGES.map((_, i) => (
                    <i key={i} className={`h-[3px] w-[22px] rounded ${i <= active ? "bg-brand-blue" : "bg-gray-200"}`} />
                  ))}
                </div>
              </div>
              <div className="absolute bottom-1.5 left-1/2 h-1 w-20 -translate-x-1/2 rounded bg-[#252525]" />
            </div>
            <p className="mt-7 text-[10px] text-gray-400">Аяллын явцыг харуулсан жишээ дүрслэл</p>
          </div>
        </div>
      </div>
    </section>
  );
}
