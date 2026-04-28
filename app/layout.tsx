import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Jude Michael de Roma — Senior Mobile Engineer",
  description:
    "Senior Mobile Engineer specializing in Flutter, Dart, and Kotlin. Building scalable, clean, and AI-integrated mobile experiences. Available for new opportunities.",
  keywords: ["Mobile Engineer", "Flutter", "Dart", "Kotlin", "Android", "iOS", "Portfolio"],
  authors: [{ name: "Jude Michael de Roma" }],
  openGraph: {
    title: "Jude Michael de Roma — Senior Mobile Engineer",
    description: "Crafting world-class mobile experiences with 7+ years of expertise.",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Jude Michael de Roma — Senior Mobile Engineer",
    description: "Crafting world-class mobile experiences with 7+ years of expertise.",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen bg-[#070b14] text-slate-100 antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
