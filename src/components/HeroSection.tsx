import Image from "next/image";
import Link from "next/link";
import { homePage } from "@/data/content";

export default function HeroSection() {
  const { headline, subheadline, ctaPrimary, ctaStory } = homePage.hero;

  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      aria-label="Hero — benvenuto in Logos Yoga Studio"
    >
      {/* Sfondo gradiente ispirato alla sala (celeste → crema) */}
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "linear-gradient(160deg, #B8CEDE 0%, #ccd9e5 30%, #E8DFD0 65%, #F5F1EB 100%)",
        }}
        aria-hidden="true"
      />

      {/* Cerchio del logo — elemento decorativo molto leggero */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-0 w-[90vw] max-w-[900px] aspect-square opacity-[0.14] pointer-events-none"
        aria-hidden="true"
      >
        <Image src="/logo-ring.png" alt="" fill className="object-contain" />
      </div>

      {/* Contenuto */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        {/* Tagline */}
        <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5C4A3A]/70 mb-6 animate-fade-in-up">
          Logos Yoga Studio — Prato
        </p>

        {/* Headline */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl text-[#2C2C2C] leading-tight mb-6 animate-fade-in-up animate-delay-100"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {headline.split("\n").map((line, i) => (
            <span key={i} className="block">
              {line}
            </span>
          ))}
        </h1>

        {/* Sottotitolo */}
        <p className="text-lg text-[#2C2C2C]/70 leading-relaxed mb-10 max-w-xl mx-auto animate-fade-in-up animate-delay-200">
          {subheadline}
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in-up animate-delay-300">
          <Link
            href={ctaPrimary.href}
            className="bg-[#5C4A3A] text-[#F5F1EB] font-medium px-8 py-3.5 rounded-full hover:bg-[#4a3a2c] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 text-base"
          >
            {ctaPrimary.label}
          </Link>
          <Link
            href={ctaStory.href}
            className="border-2 border-[#5C4A3A] text-[#5C4A3A] font-medium px-8 py-3.5 rounded-full hover:bg-[#5C4A3A] hover:text-[#F5F1EB] transition-all duration-200 text-base"
          >
            {ctaStory.label}
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 animate-fade-in-up animate-delay-400">
          <span className="text-xs text-[#5C4A3A]/50 tracking-widest uppercase">
            Scorri
          </span>
          <div className="w-px h-10 bg-gradient-to-b from-[#5C4A3A]/40 to-transparent" />
        </div>
      </div>
    </section>
  );
}
