import type { Metadata } from "next";
import { Cormorant_Garamond, DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { studio } from "@/data/content";

// ─── Font ─────────────────────────────────────────────────────────────────
const displayFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const bodyFont = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-body",
  display: "swap",
});

// ─── Metadata ─────────────────────────────────────────────────────────────
export const metadata: Metadata = {
  title: {
    template: `%s | ${studio.name}`,
    default: `${studio.name} — Yoga & Meditazione a Prato`,
  },
  description:
    "Logos Yoga Studio: classi di Hatha, Vinyasa, Yin e Yoga Nidra a Prato. Insegnanti certificati, piccoli gruppi, ambiente accogliente. Prenota la tua lezione.",
  keywords: [
    "yoga Prato",
    "lezioni yoga",
    "hatha yoga",
    "vinyasa flow",
    "yin yoga",
    "yoga nidra",
    "meditazione Prato",
    "Logos Yoga Studio",
  ],
  openGraph: {
    title: `${studio.name} — Yoga & Meditazione a Prato`,
    description:
      "Uno spazio di pratica, silenzio e trasformazione nel cuore della città.",
    type: "website",
    locale: "it_IT",
    siteName: studio.name,
  },
  robots: {
    index: true,
    follow: true,
  },
};

// ─── Layout ────────────────────────────────────────────────────────────────
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="it"
      className={`${displayFont.variable} ${bodyFont.variable}`}
    >
      <body className="min-h-screen flex flex-col" style={{ fontFamily: "var(--font-body), DM Sans, sans-serif" }}>
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
