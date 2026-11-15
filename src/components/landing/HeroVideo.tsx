"use client";

import Image from "next/image";
import { useState } from "react";

// Hero хэсгийн YouTube Shorts бичлэг: эхлээд thumbnail харагдана, дарахад
// тэр байрандаа тоглоно. YouTube-ийн iframe зөвхөн дарсны дараа ачаалагдана
// (хуудасны хурд, cookie-д нөлөөлөхгүй).
const VIDEO_ID = "JvAf-zeb100";
const TITLE = "Kids Car Mongolia бүртгэлээ авч эхэллээ";
// Бичлэгийн жинхэнэ харьцаа (1080×1300)
const ASPECT = "1080 / 1300";

export default function HeroVideo({ className = "" }: { className?: string }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`relative rounded-3xl border border-gray-100 bg-white p-2 shadow-2xl ${className}`}>
      <div className="relative overflow-hidden rounded-2xl bg-black" style={{ aspectRatio: ASPECT }}>
        {playing ? (
          <iframe
            src={`https://www.youtube-nocookie.com/embed/${VIDEO_ID}?autoplay=1&playsinline=1&rel=0`}
            title={TITLE}
            allow="autoplay; encrypted-media; picture-in-picture; fullscreen"
            allowFullScreen
            referrerPolicy="strict-origin-when-cross-origin"
            className="absolute inset-0 h-full w-full"
          />
        ) : (
          <button
            type="button"
            onClick={() => setPlaying(true)}
            aria-label={`Бичлэг тоглуулах: ${TITLE}`}
            className="group absolute inset-0 block h-full w-full focus-visible:outline-3 focus-visible:-outline-offset-4 focus-visible:outline-brand-orange"
          >
            <Image
              src="/landing/video-thumb.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 432px, 90vw"
              loading="eager"
              fetchPriority="high"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <span className="absolute inset-0 bg-gradient-to-t from-black/55 via-black/0 to-black/0" aria-hidden="true" />
            <span
              className="absolute left-1/2 top-1/2 grid h-16 w-16 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-white/95 shadow-xl ring-8 ring-white/30 transition-transform group-hover:scale-110 sm:h-20 sm:w-20"
              aria-hidden="true"
            >
              <svg viewBox="0 0 24 24" className="ml-1 h-7 w-7 fill-brand-blue sm:h-8 sm:w-8">
                <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.4-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
              </svg>
            </span>
            <span className="absolute inset-x-0 bottom-0 flex items-center gap-2 px-4 pb-4 text-left text-sm font-semibold text-white" aria-hidden="true">
              ▶ Бичлэг үзэх
            </span>
          </button>
        )}
      </div>
    </div>
  );
}
