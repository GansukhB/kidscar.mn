'use client';

import { useCallback, useEffect, useState, type FormEvent } from 'react';

/**
 * Сайт нь `output: 'export'` (бүрэн статик) тул сервер тал байхгүй — энэ бол
 * клиент талын хаалт. Газрын зургийн HTML нь build-ийн үр дүнд шингэсэн байдаг
 * тул энэ нь шифрлэлт биш, зөвхөн санамсаргүй зочдыг зогсоох зорилготой.
 */

const STORAGE_KEY = 'kidscar_zorchilt_session';
const SESSION_MS = 24 * 60 * 60 * 1000;

// sha256('kidscar-zorchilt:' + нэвтрэх нэр (жижиг үсгээр) + ':' + нууц үг).
// Нэвтрэх мэдээллийг солихдоо доорхийг ажиллуулаад гарсан дүнг энд тавина:
//   printf '%s' 'kidscar-zorchilt:sodoo:99115710' | shasum -a 256
const CREDENTIAL_HASH =
  '9d49b6d98adf3e09d5d36f41b171c81e3c2c1dbe50a453e2a77e7615728e3e19';

type Session = { user: string; exp: number };

function readSession(): Session | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;

    const session = JSON.parse(raw) as Session | null;
    if (
      !session ||
      typeof session !== 'object' ||
      typeof session.exp !== 'number' ||
      typeof session.user !== 'string' ||
      session.exp <= Date.now()
    ) {
      window.localStorage.removeItem(STORAGE_KEY);
      return null;
    }
    return { user: session.user, exp: session.exp };
  } catch {
    return null;
  }
}

async function hashCredentials(user: string, password: string): Promise<string> {
  const subtle = globalThis.crypto?.subtle;
  if (!subtle) throw new Error('SubtleCrypto is unavailable (needs HTTPS).');

  const bytes = new TextEncoder().encode(`kidscar-zorchilt:${user}:${password}`);
  const digest = await subtle.digest('SHA-256', bytes);
  return Array.from(new Uint8Array(digest))
    .map((byte) => byte.toString(16).padStart(2, '0'))
    .join('');
}

function remainingLabel(exp: number, now: number): string {
  const minutesLeft = Math.max(0, Math.ceil((exp - now) / 60_000));
  const hours = Math.floor(minutesLeft / 60);
  const minutes = minutesLeft % 60;
  return hours > 0 ? `${hours}ц ${minutes}м` : `${minutes}м`;
}

export default function ZorchiltGate({ mapHtml }: { mapHtml: string }) {
  const [session, setSession] = useState<Session | null>(null);
  const [restored, setRestored] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [pending, setPending] = useState(false);
  const [now, setNow] = useState(0);

  // localStorage-г зөвхөн клиент дээр уншина — статик HTML нь үргэлж
  // "шалгаж байна" төлөвөөр render хийгддэг тул hydration зөрөхгүй.
  useEffect(() => {
    setSession(readSession());
    setRestored(true);
  }, []);

  const signOut = useCallback(() => {
    window.localStorage.removeItem(STORAGE_KEY);
    setSession(null);
    setUsername('');
    setPassword('');
  }, []);

  // Хугацаа дуусмагц хуудас өөрөө хаагдана; үлдсэн хугацааг минут тутам шинэчилнэ.
  useEffect(() => {
    if (!session) return;

    setNow(Date.now());
    const tick = window.setInterval(() => setNow(Date.now()), 60_000);
    const expiry = window.setTimeout(signOut, Math.max(0, session.exp - Date.now()));
    return () => {
      window.clearInterval(tick);
      window.clearTimeout(expiry);
    };
  }, [session, signOut]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setPending(true);
    setError('');

    try {
      const hash = await hashCredentials(username.trim().toLowerCase(), password);
      if (hash !== CREDENTIAL_HASH) {
        setError('Нэвтрэх нэр эсвэл нууц үг буруу байна.');
        setPassword('');
        return;
      }

      const next: Session = { user: username.trim(), exp: Date.now() + SESSION_MS };
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setPassword('');
      setSession(next);
    } catch {
      setError('Нэвтрэх боломжгүй байна. Хуудсыг HTTPS-ээр нээж дахин оролдоно уу.');
    } finally {
      setPending(false);
    }
  }

  if (!restored) {
    return <div className="fixed inset-0 bg-gray-50" aria-hidden />;
  }

  if (!session) {
    return (
      <div className="fixed inset-0 overflow-y-auto bg-gray-50">
        <div className="flex min-h-full items-center justify-center px-4 py-12">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-sm rounded-2xl border border-gray-200 bg-white p-8 shadow-sm"
          >
            <h1 className="text-xl font-bold text-gray-900">Хаалттай хуудас</h1>
            <p className="mt-2 text-sm leading-relaxed text-gray-500">
              Улаанбаатар · Сурагчдын зорчилтын урсгалын газрын зургийг үзэхийн тулд нэвтэрнэ үү.
            </p>

            <label className="mt-6 block text-sm font-medium text-gray-700" htmlFor="zorchilt-user">
              Нэвтрэх нэр
            </label>
            <input
              id="zorchilt-user"
              name="username"
              type="text"
              autoComplete="username"
              autoFocus
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />

            <label className="mt-4 block text-sm font-medium text-gray-700" htmlFor="zorchilt-pass">
              Нууц үг
            </label>
            <input
              id="zorchilt-pass"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              className="mt-1.5 w-full rounded-lg border border-gray-300 px-3 py-2 text-gray-900 outline-none focus:border-brand-blue focus:ring-2 focus:ring-brand-blue/20"
            />

            {error ? (
              <p role="alert" className="mt-4 text-sm font-medium text-red-600">
                {error}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={pending}
              className="mt-6 w-full rounded-lg bg-brand-blue px-4 py-2.5 font-semibold text-white transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {pending ? 'Шалгаж байна…' : 'Нэвтрэх'}
            </button>

            <p className="mt-4 text-center text-xs text-gray-400">
              Нэвтэрсний дараа энэ төхөөрөмж дээр 24 цаг хүчинтэй.
            </p>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0">
      <iframe
        srcDoc={mapHtml}
        title="Улаанбаатар · Сурагчдын зорчилтын урсгал"
        className="block h-full w-full border-0"
      />
      <div className="absolute right-3 top-3 flex items-center gap-3 rounded-full border border-gray-200 bg-white/95 px-3 py-1.5 text-xs shadow-sm backdrop-blur">
        <span className="text-gray-500">
          <span className="font-semibold text-gray-900">{session.user}</span>
          <span className="mx-1.5 text-gray-300">·</span>
          {remainingLabel(session.exp, now || Date.now())}
        </span>
        <button
          type="button"
          onClick={signOut}
          className="font-semibold text-brand-orange transition hover:opacity-80"
        >
          Гарах
        </button>
      </div>
    </div>
  );
}
