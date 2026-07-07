import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kids Car - Хүүхдийн аюулгүй, найдвартай тээврийн үйлчилгээ",
  description: "Kids Car LLC нь найдвартай жолооч нарыг эцэг эхчүүдтэй холбож, сурагч болон хүүхдүүдэд аюулгүй, тав тухтай унаагаар үйлчилнэ.",
  openGraph: {
    title: "Kids Car - Хүүхдийн аюулгүй, найдвартай тээврийн үйлчилгээ",
    description: "Kids Car LLC нь найдвартай жолооч нарыг эцэг эхчүүдтэй холбож, сурагч болон хүүхдүүдэд аюулгүй, тав тухтай унаагаар үйлчилнэ.",
    url: "https://kidscar.mn",
    siteName: "Kids Car",
    images: [
      {
        url: "/logo.png",
        width: 1200,
        height: 630,
        alt: "Kids Car Logo",
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
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
