import type { Metadata } from "next";
import { Inter, Orbitron } from "next/font/google";
import { languages } from "../../i18n/settings";
import SmoothScroll from "@/components/smooth-scroll";
import "../globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["700", "900"],
  variable: "--font-orbitron",
});

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export const metadata: Metadata = {
  title: "CertiFerox - 以科技反叛未来",
  description:
    "CertiFerox (鼎革逐日) 是一家先锋创新公司，融合AI驱动的深度洞察与多学科专家知识，专注于打造面向未来人才的新一代教育科技产品与开发者平台。",
};

export default function RootLayout({
  children,
  params: { lng },
}: Readonly<{
  children: React.ReactNode;
  params: { lng: string };
}>) {
  return (
    <html lang={lng} dir="ltr">
      <body
        className={`${inter.variable} ${orbitron.variable} font-sans antialiased`}
      >
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
