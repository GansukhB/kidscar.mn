import Link from 'next/link';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-brand-blue hover:underline mb-8 inline-block">
          ← Буцах
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Нууцлалын бодлого</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p>Сүүлд шинэчилсэн: {new Date().toLocaleDateString('mn-MN')}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Ерөнхий зүйл</h2>
            <p>
              Kids Car ("бид", "манай") нь хэрэглэгчийн хувийн мэдээллийн нууцлалыг чандлан хадгалахыг эрхэмлэдэг. Энэхүү нууцлалын бодлого нь манай үйлчилгээг ашиглах үед таны мэдээллийг хэрхэн цуглуулах, ашиглах болон хамгаалах талаар тайлбарлана.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Цуглуулах мэдээлэл</h2>
            <p>Бид дараах төрлийн мэдээллийг цуглуулж болно:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Холбоо барих мэдээлэл (Нэр, имэйл хаяг, утасны дугаар)</li>
              <li>Бүртгэлийн мэдээлэл</li>
              <li>Төхөөрөмжийн мэдээлэл</li>
              <li>Байршлын мэдээлэл (зөвшөөрөл өгсөн тохиолдолд)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Мэдээллийн ашиглалт</h2>
            <p>Бид цуглуулсан мэдээллийг дараах зорилгоор ашиглана:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Үйлчилгээ үзүүлэх, сайжруулах</li>
              <li>Хэрэглэгчидтэй холбоо барих</li>
              <li>Аюулгүй байдлыг хангах</li>
              <li>Хууль тогтоомжийн хэрэгжилтийг хангах</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Мэдээллийн аюулгүй байдал</h2>
            <p>
              Бид таны мэдээллийг зөвшөөрөлгүй хандалт, өөрчлөлт, задралаас хамгаалахын тулд техникийн болон зохион байгуулалтын зохих арга хэмжээг авдаг.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Холбоо барих</h2>
            <p>
              Нууцлалын бодлоготой холбоотой асуулт байвал info@kidscar.mn хаягаар холбогдоно уу.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
