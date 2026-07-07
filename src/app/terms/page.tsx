import Link from 'next/link';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-white">
      <main className="max-w-4xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="text-brand-blue hover:underline mb-8 inline-block">
          ← Буцах
        </Link>
        <h1 className="text-4xl font-bold text-gray-900 mb-8">Үйлчилгээний нөхцөл</h1>
        
        <div className="prose prose-blue max-w-none text-gray-600 space-y-6">
          <p>Сүүлд шинэчилсэн: {new Date().toLocaleDateString('mn-MN')}</p>
          
          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">1. Үйлчилгээний тухай</h2>
            <p>
              Kids Car нь хүүхэд тээвэрлэх үйлчилгээ үзүүлэх жолооч болон эцэг эхчүүдийг холбох платформ юм. Бид тээврийн үйлчилгээ шууд үзүүлдэггүй, харин зуучлах үйлчилгээ үзүүлдэг.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">2. Хэрэглэгчийн үүрэг хариуцлага</h2>
            <p>Хэрэглэгч нь дараах үүрэг хүлээнэ:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Үнэн зөв мэдээлэл өгөх</li>
              <li>Аюулгүй байдлын дүрмийг баримтлах</li>
              <li>Үйлчилгээний төлбөрийг хугацаанд нь төлөх</li>
              <li>Бусад хэрэглэгчдэд хүндэтгэлтэй хандах</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">3. Хориглох зүйлс</h2>
            <p>Манай үйлчилгээг ашиглахдаа дараах зүйлсийг хориглоно:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Хууль бус үйл ажиллагаанд ашиглах</li>
              <li>Хуурамч бүртгэл үүсгэх</li>
              <li>Системийн хэвийн үйл ажиллагаанд саад учруулах</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">4. Хариуцлагын хязгаарлалт</h2>
            <p>
              Бид хэрэглэгч хоорондын харилцаа, үйлчилгээний явцад гарч болох аливаа эрсдэлд хууль тогтоомжийн хүрээнд хариуцлага хүлээнэ. Гэсэн хэдий ч хэрэглэгчийн буруутай үйлдлээс үүдсэн хохирлыг бид хариуцахгүй.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-gray-900 mb-4">5. Нөхцөлд өөрчлөлт оруулах</h2>
            <p>
              Бид үйлчилгээний нөхцөлд хэдийд ч өөрчлөлт оруулж болох бөгөөд өөрчлөлтийг вэбсайтад байршуулснаар хүчинтэйд тооцно.
            </p>
          </section>
        </div>
      </main>
    </div>
  );
}
