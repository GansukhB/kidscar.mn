import type { Metadata } from "next";

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

export default function ZorchiltPage() {
  return (
    <div className="fixed inset-0">
      <iframe
        src="/zorchilt-map.html"
        title="Улаанбаатар · Сурагчдын зорчилтын урсгал"
        className="block h-full w-full border-0"
      />
    </div>
  );
}
