"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-white text-gray-800 font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0 flex items-center">
              <Image
                src="/logo.png"
                alt="Kids Car Logo"
                width={120}
                height={40}
                className="h-10 w-auto"
                priority
              />
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Нүүр</a>
              <a href="#features" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Давуу тал</a>
              <a href="#how-it-works" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Хэрхэн ажилладаг вэ?</a>
              <a href="#contact" className="text-gray-600 hover:text-brand-orange transition-colors font-medium">Холбоо барих</a>
            </div>
            <div className="md:hidden">
              <button
                className="text-gray-600 focus:outline-none"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu');
                  if (menu) menu.classList.toggle('hidden');
                }}
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div id="mobile-menu" className="hidden md:hidden bg-white border-b border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#home" className="block px-3 py-2 text-gray-600 hover:text-brand-orange font-medium" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>Нүүр</a>
            <a href="#features" className="block px-3 py-2 text-gray-600 hover:text-brand-orange font-medium" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>Давуу тал</a>
            <a href="#how-it-works" className="block px-3 py-2 text-gray-600 hover:text-brand-orange font-medium" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>Хэрхэн ажилладаг вэ?</a>
            <a href="#contact" className="block px-3 py-2 text-gray-600 hover:text-brand-orange font-medium" onClick={() => document.getElementById('mobile-menu')?.classList.add('hidden')}>Холбоо барих</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
          <div className="lg:w-1/2 lg:pr-12">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight mb-6">
              Хүүхдэд зориулсан <br />
              <span className="text-brand-orange">Аюулгүй унаа</span>
            </h1>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              Kids Car LLC нь найдвартай жолооч нарыг эцэг эхчүүдтэй холбож, сурагч болон хүүхдүүдэд аюулгүй, баяртай, цэвэрхэн унаагаар үйлчилнэ. Өнөөдөр манай хамт олонд нэгдээрэй!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-brand-blue hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold text-lg transition-all transform hover:scale-105 shadow-lg">
                Эхлэх
              </button>
              <button className="border-2 border-brand-orange text-brand-orange hover:bg-brand-orange hover:text-white px-8 py-3 rounded-full font-bold text-lg transition-all">
                Дэлгэрэнгүй
              </button>
            </div>
          </div>
            <div className="lg:w-1/2 mt-12 lg:mt-0 relative">
              <div className="bg-brand-orange/10 rounded-full w-64 h-64 absolute -top-10 -left-10 blur-3xl"></div>
              <div className="bg-brand-blue/10 rounded-full w-64 h-64 absolute -bottom-10 -right-10 blur-3xl"></div>
              <div className="relative bg-white p-2 rounded-3xl shadow-2xl border border-gray-100 overflow-hidden">
                <div className="rounded-2xl overflow-hidden aspect-[4/3] bg-gradient-to-br from-blue-100 to-orange-50 flex items-center justify-center relative">
                  <div className="absolute inset-0 opacity-20">
                    <svg className="h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none">
                      <path d="M0,50 Q25,25 50,50 T100,50" fill="none" stroke="currentColor" strokeWidth="2" />
                      <path d="M0,70 Q25,45 50,70 T100,70" fill="none" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div className="text-center z-10">
                    <div className="text-6xl mb-4">🚗</div>
                    <div className="text-brand-blue font-bold text-xl px-6 py-2 bg-white rounded-full shadow-md">
                      Kids Car LLC
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Бүх хүнд зориулсан давуу талууд</h2>
            <div className="h-1.5 w-20 bg-brand-orange mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <svg className="w-8 h-8 text-brand-blue group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Итгэлтэй хамт олон</h3>
              <p className="text-gray-600 leading-relaxed">
                Эцэг эхчүүд болон шалгуур давсан жолооч нарын аюулгүй сүлжээ. Таны хүүхдийн аюулгүй байдал бидний нэн тэргүүний зорилт юм.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-brand-orange/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-orange group-hover:text-white transition-colors">
                <svg className="w-8 h-8 text-brand-orange group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Бодит цагийн хяналт</h3>
              <p className="text-gray-600 leading-relaxed">
                Хүүхдийнхээ аяллыг бодит цаг хугацаанд хянаарай. Хаана яваа болон хэзээ ирэхийг нь яг таг мэдэх боломжтой.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="p-8 rounded-2xl bg-white border border-gray-100 shadow-sm hover:shadow-xl transition-shadow group">
              <div className="w-14 h-14 bg-brand-blue/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-brand-blue group-hover:text-white transition-colors">
                <svg className="w-8 h-8 text-brand-blue group-hover:text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Хялбар төлөвлөлт</h3>
              <p className="text-gray-600 leading-relaxed">
                Унаагаа урьдчилан төлөвлөх эсвэл шууд захиалах боломжтой. Завгүй сурагчдад зориулсан уян хатан хуваарь.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* For Parents & Drivers Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-brand-blue">
              <h3 className="text-2xl font-bold text-brand-blue mb-4">Эцэг эхчүүдэд</h3>
              <ul className="space-y-4">
                {['Шалгуур давсан, найдвартай жолооч нар', 'Сургуулийн хүргэлт, авалтын зохицуулалт', 'Шуурхай мэдэгдэл болон аяллын түүх', 'Хөрш найзуудтайгаа хамт явах унаа'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-10 rounded-3xl shadow-lg border-t-4 border-brand-orange">
              <h3 className="text-2xl font-bold text-brand-orange mb-4">Жолооч нарт</h3>
              <ul className="space-y-4">
                {['Хамт олондоо туслангаа орлого олох', 'Өөрийн хуваарь, чиглэлийг тохируулах', 'Жолооч нарыг дэмжих нэгдэл', 'Ашиглахад хялбар жолоочийн аппликейшн'].map((item, i) => (
                  <li key={i} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-3 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Хэрхэн ажилладаг вэ?</h2>
            <div className="h-1.5 w-20 bg-brand-blue mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Бүртгүүлэх', desc: 'Эцэг эх эсвэл жолоочоор бүртгэл үүсгэнэ.' },
              { step: '02', title: 'Баталгаажуулах', desc: 'Аюулгүй байдлын шалгуур, баталгаажуулалтыг дуусгана.' },
              { step: '03', title: 'Холбогдох', desc: 'Өөрийн орчимд унаа хайх эсвэл санал болгох.' },
              { step: '04', title: 'Явах', desc: 'Аюулгүй, баяртай аяллыг мэдрээрэй!' },
            ].map((item, i) => (
              <div key={i} className="text-center relative">
                <div className="text-6xl font-black text-gray-100 absolute -top-10 left-1/2 -translate-x-1/2 z-0">
                  {item.step}
                </div>
                <div className="relative z-10">
                  <h4 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h4>
                  <p className="text-gray-600">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer / Contact Section */}
      <footer id="contact" className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center border-b border-gray-800 pb-12 mb-12">
            <div className="flex items-center mb-8 md:mb-0">
              <Image
                src="/logo.png"
                alt="Kids Car Logo"
                width={120}
                height={40}
                className="h-12 w-auto brightness-0 invert"
              />
            </div>
            <div className="text-center md:text-right">
              <h5 className="text-lg font-semibold mb-2">Холбоо барих</h5>
              <a href="mailto:info@kidscar.mn" className="text-brand-orange text-xl font-bold hover:underline transition-all">
                info@kidscar.mn
              </a>
            </div>
          </div>
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Kids Car LLC. Бүх эрх хуулиар хамгаалагдсан.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy" className="hover:text-white transition-colors">Нууцлалын бодлого</Link>
              <Link href="/terms" className="hover:text-white transition-colors">Үйлчилгээний нөхцөл</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
