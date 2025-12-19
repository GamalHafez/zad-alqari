import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./index.css";

const rubik = Rubik({
  variable: "--font-rubik",
  display: "swap",
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "زاد القارئ",
  description:
    "موقع زاد القارئ لعرض الكتب المميزة والمراجعات بأسلوب حديث باستخدام Next.js.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body className={`${rubik.className} antialiased`}>{children}</body>
    </html>
  );
}
