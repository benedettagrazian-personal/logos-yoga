import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import ClassCard from "@/components/ClassCard";
import TeacherCard from "@/components/TeacherCard";
import { classes, teachers, homePage } from "@/data/content";

export const metadata: Metadata = {
  title: "Home",
};

export default function HomePage() {
  const { intro } = homePage;
  // Mostra solo le prime 3 classi nella preview home
  const featuredClasses = classes.slice(0, 3);

  return (
    <>
      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <HeroSection />

      {/* ── Intro studio ──────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#F5F1EB]"
        aria-labelledby="intro-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Testo */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
                Il nostro spazio
              </p>
              <h2
                id="intro-heading"
                className="text-3xl md:text-4xl text-[#2C2C2C] mb-6 leading-snug"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {intro.title}
              </h2>
              <p className="text-[#2C2C2C]/70 leading-relaxed mb-4">
                {intro.body}
              </p>
              <p className="text-[#2C2C2C]/70 leading-relaxed mb-8">
                {intro.body2}
              </p>
              <Link
                href="/chi-siamo"
                className="inline-flex items-center gap-2 text-[#5C4A3A] font-medium text-sm hover:gap-3 transition-all duration-200"
              >
                Scopri la nostra storia
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="w-4 h-4"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M3 10a.75.75 0 0 1 .75-.75h10.638L10.23 5.29a.75.75 0 1 1 1.04-1.08l5.5 5.25a.75.75 0 0 1 0 1.08l-5.5 5.25a.75.75 0 1 1-1.04-1.08l4.158-3.96H3.75A.75.75 0 0 1 3 10Z"
                    clipRule="evenodd"
                  />
                </svg>
              </Link>
            </div>

            {/* Immagine sala */}
            <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-md">
              <Image
                src="/studio/sala.jpg"
                alt="La sala dello studio Logos Yoga — parquet chiaro, luce naturale, atmosfera calda"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQjhDRURFIi8+PC9zdmc+"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── Le nostre pratiche ───────────────────────────────────────── */}
      <section
        className="section-padding bg-[#E8DFD0]"
        aria-labelledby="classes-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
              Cosa proponiamo
            </p>
            <h2
              id="classes-heading"
              className="text-3xl md:text-4xl text-[#2C2C2C]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Le nostre pratiche
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredClasses.map((yogaClass) => (
              <ClassCard key={yogaClass.id} yogaClass={yogaClass} showLevel={false} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/pratiche"
              className="inline-block border-2 border-[#5C4A3A] text-[#5C4A3A] font-medium px-8 py-3 rounded-full hover:bg-[#5C4A3A] hover:text-[#F5F1EB] transition-all duration-200"
            >
              Scopri tutte le pratiche
            </Link>
          </div>
        </div>
      </section>

      {/* ── Insegnanti ────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#F5F1EB]"
        aria-labelledby="teachers-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
              Chi siamo
            </p>
            <h2
              id="teachers-heading"
              className="text-3xl md:text-4xl text-[#2C2C2C] mb-3"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Il nostro team
            </h2>
            <p className="text-[#2C2C2C]/65 max-w-xl mx-auto">
              Insegnanti certificati, appassionati e in continua formazione.
              Ognuno porta la propria voce unica alla pratica.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {teachers.map((teacher) => (
              <TeacherCard key={teacher.id} teacher={teacher} />
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/chi-siamo"
              className="inline-block border-2 border-[#5C4A3A] text-[#5C4A3A] font-medium px-8 py-3 rounded-full hover:bg-[#5C4A3A] hover:text-[#F5F1EB] transition-all duration-200"
            >
              Scopri la nostra storia
            </Link>
          </div>
        </div>
      </section>

      {/* ── CTA Prenota ───────────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background:
            "linear-gradient(135deg, #B8CEDE 0%, #9BAF9B 100%)",
        }}
        aria-labelledby="cta-heading"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            id="cta-heading"
            className="text-3xl md:text-4xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Pronto a iniziare il tuo viaggio?
          </h2>
          <p className="text-[#2C2C2C]/70 mb-8 text-lg">
            La prima lezione è sempre il passo più importante. Scegli la classe
            che risuona con te e prenota il tuo posto.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/classi"
              className="bg-[#5C4A3A] text-[#F5F1EB] font-medium px-8 py-3.5 rounded-full hover:bg-[#4a3a2c] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Prenota una lezione
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
