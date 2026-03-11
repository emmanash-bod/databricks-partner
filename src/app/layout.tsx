import type { Metadata } from "next";
import { DM_Serif_Display, Space_Mono, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: "swap",
});

const spaceMono = Space_Mono({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-mono",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Blue Orange Digital × Databricks | Partner Portal",
  description:
    "Equip Databricks AEs with pre-built accelerators, co-funded credits, and white-glove executive engagement to close deals faster.",
  openGraph: {
    title: "Blue Orange Digital × Databricks Partner Portal",
    description:
      "Your Data & AI Delivery Partner for Mid-Market and PE-Backed Companies",
    type: "website",
    url: "https://databricks.blueorange.digital",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${dmSerifDisplay.variable} ${spaceMono.variable} ${inter.variable} font-sans antialiased`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
