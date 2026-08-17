import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kids Car - Хүүхдийн аюулгүй, найдвартай тээврийн үйлчилгээ",
  description: "Kids Car LLC нь найдвартай жолооч нарыг эцэг эхчүүдтэй холбож, сурагч болон хүүхдүүдэд аюулгүй, тав тухтай унаагаар үйлчилнэ.",
  icons: {
    icon: "/favicon.png",
  },
  openGraph: {
    title: "Kids Car - Хүүхдийн аюулгүй, найдвартай тээврийн үйлчилгээ",
    description: "Kids Car LLC нь найдвартай жолооч нарыг эцэг эхчүүдтэй холбож, сурагч болон хүүхдүүдэд аюулгүй, тав тухтай унаагаар үйлчилнэ.",
    url: "https://kidscar.mn",
    siteName: "Kids Car",
    images: [
      {
        url: "/hero.webp",
        width: 1200,
        height: 630,
        alt: "Kids Car Hero",
      },
    ],
    locale: "mn_MN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col font-sans">{children}</body>
    </html>
  );
}
