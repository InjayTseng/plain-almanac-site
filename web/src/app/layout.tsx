import type { Metadata, Viewport } from "next";
import { Noto_Sans_TC, Noto_Serif_TC } from "next/font/google";
import "./globals.css";

const sans = Noto_Sans_TC({ subsets: ["latin"], weight: ["400", "500", "700"], variable: "--font-noto-sans", display: "swap" });
const serif = Noto_Serif_TC({ subsets: ["latin"], weight: ["500", "700"], variable: "--font-noto-serif", display: "swap" });

const title = "每日農民曆 · 今日宜忌・節氣・找好日子";
const description = "今天適合做什麼、要避開什麼，看一眼就知道。每個傳統詞旁一句白話，找日子直接寫出沖到家裡誰。無廣告、不登入、不上傳。";

export const metadata: Metadata = {
  metadataBase: new URL("https://almanac.davidyc.com"),
  title,
  description,
  applicationName: "每日農民曆",
  icons: { icon: "/icon-64.png", apple: "/apple-touch-icon.png" },
  openGraph: {
    title,
    description,
    url: "https://almanac.davidyc.com",
    siteName: "每日農民曆",
    locale: "zh_TW",
    type: "website",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: "每日農民曆的今日頁面" }],
  },
  twitter: { card: "summary_large_image", title, description, images: ["/og.jpg"] },
};

export const viewport: Viewport = { themeColor: "#FBFBF8", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-Hant" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-paper text-ink antialiased">{children}</body>
    </html>
  );
}
