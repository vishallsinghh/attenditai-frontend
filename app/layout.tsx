import type { Metadata } from "next";
import "./globals.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import { Geist } from "next/font/google";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

export const metadata: Metadata = {
  title: "AttenditAI — Roll call, without the roll call.",
  description: "Attendance that feels like nothing. QR, kiosk, face, or link.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={cn("font-sans", geist.variable)}>
      <body className="antialiased bg-white text-[#0F172A]">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}