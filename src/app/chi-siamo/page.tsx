import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import TeacherCard from "@/components/TeacherCard";
import { teachers, aboutPage, studio } from "@/data/content";

export const metadata: Metadata = {
  title: "La nostra storia",
  description:
    "La storia, la filosofia e il team di Logos Yoga Studio. Conosciamo i nostri insegnanti certificati e scopri cosa ci rende unici.",
};

export default function ChiSiamoPage() {
  const { hero, story, philosophy } = aboutPage;

  return (
    <>
      {/* ── Header pagina ─────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 text-center"
        style={{
          background:
            "linear-gradient(160deg, #9BAF9B 0%, #B8CEDE 50%, #F5F1EB 100%)",
        }}
        aria-labelledby="about-hero-heading"
      >
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5C4A3A]/70 mb-4">
            Logos Yoga Studio
          </p>
          <h1
            id="about-hero-heading"
            className="text-4xl md:text-5xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {hero.title}
          </h1>
          <p className="text-[#2C2C2C]/65 text-lg leading-relaxed">
            {hero.subtitle}
          </p>
        </div>
      </section>

      {/* ── Storia ───────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#F5F1EB]"
        aria-labelledby="story-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Immagine */}
            <div className="relative aspect-[4/3] rounded-[1.5rem] overflow-hidden shadow-md order-2 md:order-1">
              <Image
                src="/studio/sala.jpg"
                alt="Interno di Logos Yoga Studio — sala principale con il murale del mandorlo in fiore"
                fill
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover"
                placeholder="blur"
                blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjQwIiBoZWlnaHQ9IjgwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjOUJBRjlCIi8+PC9zdmc+"
              />
            </div>

            {/* Testo */}
            <div className="order-1 md:order-2">
              <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
                Il nostro percorso
              </p>
              <h2
                id="story-heading"
                className="text-3xl md:text-4xl text-[#2C2C2C] mb-6"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {story.title}
              </h2>
              <div className="flex flex-col gap-4">
                {story.paragraphs.map((p, i) => (
                  <p key={i} className="text-[#2C2C2C]/70 leading-relaxed">
                    {p}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Filosofia ─────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#E8DFD0]"
        aria-labelledby="philosophy-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
              I nostri valori
            </p>
            <h2
              id="philosophy-heading"
              className="text-3xl md:text-4xl text-[#2C2C2C]"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {philosophy.title}
            </h2>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {philosophy.points.map((point, i) => (
              <div
                key={i}
                className="bg-white rounded-[1.5rem] p-8 hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              >
                {/* Numero decorativo */}
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold text-[#F5F1EB] mb-5"
                  style={{ backgroundColor: "#9BAF9B" }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3
                  className="text-xl text-[#2C2C2C] mb-3"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {point.title}
                </h3>
                <p className="text-sm text-[#2C2C2C]/65 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Insegnanti ────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#F5F1EB]"
        aria-labelledby="team-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
              Chi siamo
            </p>
            <h2
              id="team-heading"
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
        </div>
      </section>

      {/* ── CTA contatti ─────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#5C4A3A] text-[#F5F1EB]"
        aria-labelledby="contact-cta-heading"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            id="contact-cta-heading"
            className="text-3xl md:text-4xl mb-4 text-[#E8DFD0]"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Vieni a trovarci
          </h2>
          <p className="text-[#E8DFD0]/75 mb-8 leading-relaxed">
            Siamo in {studio.address}. Scrivici per qualsiasi domanda: risponderemo
            entro 24 ore.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/classi"
              className="bg-[#B8CEDE] text-[#5C4A3A] font-medium px-8 py-3.5 rounded-full hover:bg-[#F5F1EB] transition-colors duration-200"
            >
              Prenota una lezione
            </Link>
            <a
              href={`mailto:${studio.email}`}
              className="border-2 border-[#E8DFD0] text-[#E8DFD0] font-medium px-8 py-3.5 rounded-full hover:bg-[#E8DFD0] hover:text-[#5C4A3A] transition-all duration-200"
            >
              Scrivici
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
