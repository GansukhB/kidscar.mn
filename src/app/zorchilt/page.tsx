import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { Metadata } from "next";

import ZorchiltGate from "./ZorchiltGate";

export const metadata: Metadata = {
  title: "Улаанбаатар · Сурагчдын зорчилтын урсгал | Kids Car",
  description:
    "Kids Car судалгаа: Улаанбаатар хотын 9 дүүргийн сурагчдын гэр → сургуулийн өдөр тутмын зорчилтын урсгалын интерактив газрын зураг.",
  openGraph: {
    title: "Улаанбаатар · Сурагчдын зорчилтын урсгал",
    description:
      "Kids Car судалгаа: Улаанбаатар хотын 9 дүүргийн сурагчдын гэр → сургуулийн өдөр тутмын зорчилтын урсгал.",
    url: "https://kidscar.mn/zorchilt",
    siteName: "Kids Car",
    locale: "mn_MN",
    type: "website",
  },
};

// Газрын зургийн бүтэн, бие даасан HTML документыг build үед уншиж iframe-д
// srcDoc-оор шингээнэ. public/ доторх .html файлыг URL-ээр дуудвал Vercel-ийн
// cleanUrls өргөтгөлийг тасалж 404 өгдөг (dev дээр эсрэгээрээ), тул хостоос
// хамаардаггүй энэ аргыг сонгов.
const mapHtml = readFileSync(
  join(process.cwd(), "data", "UB_zorchilt_map.html"),
  "utf8",
);

export default function ZorchiltPage() {
  // Хуудас хаалттай — газрын зургийг зөвхөн нэвтэрсний дараа ZorchiltGate үзүүлнэ.
  return <ZorchiltGate mapHtml={mapHtml} />;
}
