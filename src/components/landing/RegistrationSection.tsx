"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent } from "react";
import { CarIcon, PersonIcon } from "./icons";

type Role = "parent" | "driver";
type Fields = { name: string; phone: string; email: string; from: string; to: string };

// Google Apps Script Web App-ийн /exec URL. Build хийх үед JS-д шингэнэ
// (google-apps-script/README.md-г үзнэ үү).
const ENDPOINT = process.env.NEXT_PUBLIC_REGISTRATION_ENDPOINT;

const REQUIRED_MESSAGE = "Нэр, утасны дугаар, хаанаас, хаашаа гэсэн бүх талбарыг бөглөнө үү.";
const DRIVER_REQUIRED_MESSAGE = "Нэр, утасны дугаар, имэйл, хаанаас, хаашаа гэсэн бүх талбарыг бөглөнө үү.";
const PHONE_MESSAGE = "Утасны дугаараа зөв оруулна уу.";
const EMAIL_MESSAGE = "Имэйл хаягаа зөв оруулна уу.";
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const LENGTH_MESSAGE = "Оруулсан мэдээлэл хэт урт байна. Товчлон оруулна уу.";
const SERVER_MESSAGE =
  "Бүртгэл илгээхэд алдаа гарлаа. Дахин оролдоно уу эсвэл info@kidscar.mn хаягаар холбогдоно уу.";
const RATE_MESSAGE = "Хэт олон хүсэлт илгээлээ. Нэг минутын дараа дахин оролдоно уу.";

const EMPTY: Fields = { name: "", phone: "", email: "", from: "", to: "" };

// Имэйлийг зөвхөн жолоочийн бүртгэлд авч, илгээнэ.
function validate(f: Fields, role: Role): { data?: Record<string, string>; error?: string } {
  const isDriver = role === "driver";
  const data: Record<string, string> = {
    name: f.name.trim(),
    phone: f.phone.trim(),
    from: f.from.trim(),
    to: f.to.trim(),
  };
  if (isDriver) data.email = f.email.trim();
  if (!data.name || !data.phone || !data.from || !data.to || (isDriver && !data.email)) {
    return { error: isDriver ? DRIVER_REQUIRED_MESSAGE : REQUIRED_MESSAGE };
  }
  if (data.phone.replace(/\D/g, "").length < 8 || data.phone.length > 24 || !/^[+\d\s()-]+$/.test(data.phone)) {
    return { error: PHONE_MESSAGE };
  }
  if (isDriver && (data.email.length > 254 || !EMAIL_RE.test(data.email))) return { error: EMAIL_MESSAGE };
  if (data.name.length > 120 || data.from.length > 300 || data.to.length > 200) return { error: LENGTH_MESSAGE };
  if (Object.values(data).some((s) => /[\u0000-\u001f\u007f]/.test(s))) {
    return { error: "Мэдээллээ нэг мөрөөр зөв оруулна уу." };
  }
  return { data };
}

export default function RegistrationSection() {
  const [role, setRole] = useState<Role>("parent");
  const [fields, setFields] = useState<Fields>(EMPTY);
  const [honeypot, setHoneypot] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [busy, setBusy] = useState(false);
  const [submittedRole, setSubmittedRole] = useState<Role | null>(null);

  const errorRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);
  const busyRef = useRef(false);

  // Хуудасны аль ч хэсэгт байгаа data-register="parent|driver" холбоос дарахад
  // үүргийг урьдчилан сонгоно. href="#register" нь өөрөө энэ хэсэг рүү гүйлгэнэ.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest<HTMLElement>("[data-register]");
      if (!el || busyRef.current) return;
      setRole(el.dataset.register === "driver" ? "driver" : "parent");
      setSubmittedRole(null);
      setError(null);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  useEffect(() => {
    if (error) errorRef.current?.focus();
  }, [error]);

  useEffect(() => {
    if (submittedRole) {
      statusRef.current?.focus({ preventScroll: true });
      statusRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  }, [submittedRole]);

  const update = (key: keyof Fields) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFields((prev) => ({ ...prev, [key]: e.target.value }));
    setError(null);
  };

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (busyRef.current) return;
    setError(null);

    const result = validate(fields, role);
    if (!result.data) {
      setError(result.error ?? REQUIRED_MESSAGE);
      return;
    }
    if (!ENDPOINT) {
      console.error("NEXT_PUBLIC_REGISTRATION_ENDPOINT тохируулаагүй байна.");
      setError(SERVER_MESSAGE);
      return;
    }

    busyRef.current = true;
    setBusy(true);
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), 20000);
    try {
      // application/x-www-form-urlencoded нь "simple" CORS хүсэлт тул preflight
      // шаардахгүй — Apps Script Web App шууд хүлээн авна.
      const body = new URLSearchParams({
        role,
        ...result.data,
        website: honeypot,
        page: window.location.href,
      });
      const res = await fetch(ENDPOINT, { method: "POST", body, signal: controller.signal });
      const json = (await res.json().catch(() => null)) as { ok?: boolean; error?: string } | null;
      if (!res.ok || !json) throw new Error(`HTTP ${res.status}`);
      if (!json.ok) {
        setError(
          json.error === "rate_limited"
            ? RATE_MESSAGE
            : json.error === "invalid_email"
              ? EMAIL_MESSAGE
              : json.error === "invalid"
                ? role === "driver"
                  ? DRIVER_REQUIRED_MESSAGE
                  : REQUIRED_MESSAGE
                : SERVER_MESSAGE,
        );
        return;
      }
      setSubmittedRole(role);
      setFields(EMPTY);
    } catch (err) {
      console.error("Registration submit failed", err);
      setError(SERVER_MESSAGE);
    } finally {
      clearTimeout(timer);
      busyRef.current = false;
      setBusy(false);
    }
  }

  const isDriver = role === "driver";

  const roleCard = (value: Role, label: string, icon: React.ReactNode) => {
    const checked = role === value;
    const accent =
      value === "driver"
        ? "border-brand-orange bg-orange-50 ring-1 ring-orange-700"
        : "border-brand-blue bg-blue-50 ring-1 ring-brand-blue";
    return (
      <label
        className={`relative flex min-h-[8.5rem] cursor-pointer flex-col gap-3.5 rounded-2xl border-2 p-4 text-sm font-semibold leading-relaxed transition-colors focus-within:outline focus-within:outline-3 focus-within:outline-offset-4 focus-within:outline-gray-800 ${
          checked ? accent : "border-gray-400 bg-white hover:border-gray-500"
        }`}
      >
        <input
          type="radio"
          name="role"
          value={value}
          checked={checked}
          onChange={() => setRole(value)}
          className="absolute h-px w-px opacity-0"
        />
        <span className={value === "driver" ? "text-orange-700" : "text-brand-blue"}>{icon}</span>
        <span className="text-gray-900">{label}</span>
        <span
          aria-hidden="true"
          className={`absolute right-4 top-5 h-4 w-4 rounded-full border-[1.5px] ${
            checked
              ? value === "driver"
                ? "border-orange-700 bg-orange-700 shadow-[inset_0_0_0_3px_#fff]"
                : "border-brand-blue bg-brand-blue shadow-[inset_0_0_0_3px_#fff]"
              : "border-gray-400"
          }`}
        />
      </label>
    );
  };

  const inputClass =
    "w-full h-[52px] rounded-xl border border-gray-400 bg-white px-3.5 text-base sm:text-sm text-gray-900 placeholder:text-gray-500 focus:border-brand-blue focus:outline-3 focus:outline-brand-blue/20 focus:outline-offset-1";

  return (
    <section
      id="register"
      aria-labelledby="registration-title"
      className="relative isolate overflow-hidden scroll-mt-16 bg-[#FFF1E3] px-5 py-14 sm:px-8 sm:py-24"
    >
      <div aria-hidden="true" className="pointer-events-none absolute -left-44 -top-56 -z-10 h-[400px] w-[400px] rounded-full bg-brand-blue opacity-[0.065] md:-left-64 md:-top-72 md:h-[580px] md:w-[580px]" />
      <div aria-hidden="true" className="pointer-events-none absolute -bottom-48 -right-56 -z-10 h-[450px] w-[450px] rounded-full bg-brand-orange opacity-[0.11] md:-bottom-80 md:-right-44 md:h-[600px] md:w-[600px]" />

      <div className="mx-auto grid max-w-xl items-center gap-8 lg:max-w-6xl lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        {/* Copy */}
        <div>
          <p className="mb-5 text-xs font-bold tracking-[0.15em] text-orange-800">БҮРТГҮҮЛЭХ</p>
          <h2 id="registration-title" className="text-4xl font-bold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Kids Car-д <span className="block text-blue-700">нэгдээрэй.</span>
          </h2>
          <p className="mb-6 mt-5 text-base leading-relaxed text-stone-600 sm:text-lg">
            Kids Car Mongolia албан ёсны бүртгэлээ эхлүүллээ.
          </p>
          <ul className="grid gap-3 text-sm text-stone-700 sm:gap-4">
            {["Бүрэн даатгалтай зорчилт", "Шалгуур хангасан жолооч", "GPS хяналт, алхам бүрд мэдэгдэл"].map((t) => (
              <li key={t} className="flex items-center gap-3">
                <span aria-hidden="true" className="font-bold text-blue-700">✓</span>
                {t}
              </li>
            ))}
          </ul>
          <p className="mt-10 hidden text-sm leading-loose text-stone-500 sm:block">
            Амар тайван эцэг эх.
            <br />
            Орлоготой жолооч. Жаргалтай хүүхэд.
          </p>
        </div>

        {/* Card */}
        <div className={`min-w-0 rounded-3xl bg-white p-5 shadow-[0_18px_60px_#9e5a1b14] sm:p-9`}>
          {submittedRole ? (
            <div className="flex min-h-[560px] flex-col items-center justify-center py-6 text-center">
              <div ref={statusRef} role="status" aria-live="polite" aria-atomic="true" tabIndex={-1} className="outline-none">
                <div
                  aria-hidden="true"
                  className={`mx-auto mb-7 grid h-[72px] w-[72px] place-items-center rounded-full text-4xl text-white ${
                    submittedRole === "driver" ? "bg-brand-orange" : "bg-brand-blue"
                  }`}
                >
                  ✓
                </div>
                <h3 className="mx-auto max-w-md text-xl font-bold leading-relaxed tracking-tight text-gray-900">
                  {submittedRole === "driver"
                    ? "Бид таны аялалд тохирох чиглэлийн аялал таарангуут тантай холбогдох болно."
                    : "Бид таны хүүхдийн чиглэлд тохирох жолооч таарангуут тантай холбогдох болно."}
                </h3>
                <p className="mt-4 text-lg text-gray-500">Баярлалаа.</p>
                <Image
                  src="/landing/logo-square.png"
                  alt="Kids Car лого"
                  width={160}
                  height={160}
                  className="mx-auto mt-4 h-40 w-40 object-contain"
                />
                <p className="mx-auto mb-2 max-w-xs text-xs leading-relaxed text-gray-500">
                  Монголын анхны хүүхэд хүргэлтийн платформ
                </p>
                <p className="text-xs font-semibold text-gray-600">Kids Car Mongolia</p>
              </div>
              <button
                type="button"
                onClick={() => {
                  setSubmittedRole(null);
                  setError(null);
                }}
                className={`mt-8 min-h-12 rounded-full border px-6 py-3 text-sm ${
                  submittedRole === "driver"
                    ? "border-orange-300 bg-orange-50 text-orange-800"
                    : "border-blue-300 bg-blue-50 text-blue-700"
                }`}
              >
                Шинээр бүртгүүлэх
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate aria-label="Kids Car бүртгэлийн маягт">
              <fieldset disabled={busy} className="m-0 min-w-0 border-0 p-0">
                <fieldset className="m-0 min-w-0 border-0 p-0">
                  <legend className="mb-4 text-sm font-semibold text-gray-900">Та ямар үүргээр нэгдэх вэ?</legend>
                  <div className="mb-6 grid grid-cols-2 gap-2.5 sm:gap-3">
                    {roleCard("parent", "Би бол хүүхдээ хүргүүлэх эцэг эх", <PersonIcon />)}
                    {roleCard("driver", "Би бол хүүхэд хүргэх жолооч", <CarIcon />)}
                  </div>
                </fieldset>

                {error && (
                  <div
                    ref={errorRef}
                    role="alert"
                    tabIndex={-1}
                    className="mb-5 rounded-lg border border-red-300 bg-red-50 px-4 py-3 text-sm leading-relaxed text-red-800 focus:outline-2 focus:outline-offset-2 focus:outline-red-800"
                  >
                    {error}
                  </div>
                )}

                <div className="mb-5">
                  <label htmlFor="registration-name" className="mb-2 block text-xs font-semibold text-gray-700">Нэр</label>
                  <input
                    id="registration-name"
                    name="name"
                    value={fields.name}
                    onChange={update("name")}
                    placeholder="Таны нэр"
                    autoComplete="name"
                    required
                    maxLength={120}
                    aria-describedby={isDriver ? undefined : "parent-name-hint"}
                    className={inputClass}
                  />
                  {!isDriver && (
                    <p id="parent-name-hint" className="mt-2 text-xs leading-relaxed text-gray-500">
                      Эцэг эхийн өөрийн нэрийг бичнэ. Хүүхдийн мэдээлэл оруулахгүй.
                    </p>
                  )}
                </div>
                <div className="mb-5">
                  <label htmlFor="registration-phone" className="mb-2 block text-xs font-semibold text-gray-700">Утасны дугаар</label>
                  <input
                    id="registration-phone"
                    name="phone"
                    type="tel"
                    inputMode="tel"
                    value={fields.phone}
                    onChange={update("phone")}
                    placeholder="Утасны дугаар"
                    autoComplete="tel"
                    required
                    maxLength={24}
                    className={inputClass}
                  />
                </div>
                {isDriver && (
                  <div className="mb-5">
                    <label htmlFor="registration-email" className="mb-2 block text-xs font-semibold text-gray-700">Имэйл хаяг</label>
                    <input
                      id="registration-email"
                      name="email"
                      type="email"
                      inputMode="email"
                      value={fields.email}
                      onChange={update("email")}
                      placeholder="name@example.com"
                      autoComplete="email"
                      autoCapitalize="none"
                      spellCheck={false}
                      required
                      maxLength={254}
                      className={inputClass}
                    />
                  </div>
                )}
                <div className="mb-5">
                  <label htmlFor="registration-from" className="mb-2 block text-xs font-semibold text-gray-700">Хаанаас</label>
                  <input
                    id="registration-from"
                    name="from"
                    value={fields.from}
                    onChange={update("from")}
                    placeholder="Гэрийн байршил (дүүрэг, хороо, хороолол)"
                    autoComplete="street-address"
                    required
                    maxLength={300}
                    className={inputClass}
                  />
                </div>
                <div className="mb-5">
                  <label htmlFor="registration-to" className="mb-2 block text-xs font-semibold text-gray-700">Хаашаа</label>
                  <input
                    id="registration-to"
                    name="to"
                    value={fields.to}
                    onChange={update("to")}
                    placeholder="Сургуулийн нэр"
                    autoComplete="off"
                    required
                    maxLength={200}
                    className={inputClass}
                  />
                </div>

                {/* Spam bot-д зориулсан хавх — хүн харахгүй, бөглөхгүй */}
                <div aria-hidden="true" className="absolute -left-[10000px] h-px w-px overflow-hidden">
                  <label htmlFor="registration-website">Вэб хаяг</label>
                  <input
                    id="registration-website"
                    name="website"
                    tabIndex={-1}
                    autoComplete="off"
                    value={honeypot}
                    onChange={(e) => setHoneypot(e.target.value)}
                  />
                </div>

                <button
                  type="submit"
                  className={`mt-6 block min-h-[54px] w-full rounded-xl px-3 py-4 text-sm font-semibold transition-colors disabled:cursor-wait disabled:opacity-80 ${
                    isDriver ? "bg-brand-orange text-gray-900 hover:bg-orange-500" : "bg-brand-blue text-white hover:bg-blue-700"
                  }`}
                >
                  {busy ? "Илгээж байна…" : isDriver ? "Жолоочоор бүртгүүлэх" : "Эцэг эхээр бүртгүүлэх"}
                </button>
                <p className="mt-4 text-center text-xs leading-relaxed text-gray-500">
                  Зөвхөн насанд хүрсэн бүртгүүлэгчийн мэдээллийг авна. Хүүхдийн нэр, нас, зураг оруулахгүй.
                  <br />
                  Илгээснээр та{" "}
                  <Link href="/privacy" className="underline hover:text-gray-700">
                    Нууцлалын бодлого
                  </Link>
                  -ыг зөвшөөрч байна.
                </p>
              </fieldset>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
