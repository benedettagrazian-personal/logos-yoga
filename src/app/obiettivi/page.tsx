import type { Metadata } from "next";
import Link from "next/link";
import { goalsPage, studio } from "@/data/content";

export const metadata: Metadata = {
  title: "Obiettivi",
  description:
    "Perché Logos Yoga Studio è un'associazione: la nostra storia, la nostra missione e il legame tra yoga e performance sportiva.",
};

export default function ObiettiviPage() {
  const { hero, sportIntro, mission, stats, benefits, champions, closing } =
    goalsPage;

  return (
    <>
      {/* ── Header pagina ─────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 text-center"
        style={{
          background:
            "linear-gradient(160deg, #B8CEDE 0%, #9BAF9B 50%, #F5F1EB 100%)",
        }}
        aria-labelledby="goals-hero-heading"
      >
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#5C4A3A]/70 mb-4">
            {hero.tagline}
          </p>
          <h1
            id="goals-hero-heading"
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

      {/* ── Yoga nello sport ─────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#E8DFD0]"
        aria-labelledby="sport-heading"
      >
        <div className="max-w-3xl mx-auto px-6">
          <h2
            id="sport-heading"
            className="text-3xl md:text-4xl text-[#2C2C2C] mb-4 text-center"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {sportIntro.title}
          </h2>
          <p className="text-[#2C2C2C]/70 leading-relaxed text-center mb-10">
            {sportIntro.text}
          </p>
          <div className="grid sm:grid-cols-2 gap-6">
            {sportIntro.quotes.map((q, i) => (
              <blockquote
                key={i}
                className="bg-[#F5F1EB] rounded-[1.5rem] p-8 shadow-sm"
              >
                <p className="text-[#2C2C2C]/80 leading-relaxed italic mb-4">
                  “{q.text}”
                </p>
                <cite className="text-sm font-medium text-[#5C4A3A] not-italic">
                  — {q.author}
                </cite>
              </blockquote>
            ))}
          </div>
        </div>
      </section>

      {/* ── Missione ─────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#5C4A3A] text-[#F5F1EB]"
        aria-labelledby="mission-heading"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            id="mission-heading"
            className="text-3xl md:text-4xl mb-4 text-[#E8DFD0]"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {mission.title}
          </h2>
          <p className="text-[#E8DFD0]/85 leading-relaxed">{mission.text}</p>
        </div>
      </section>

      {/* ── Numeri / scienza ─────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#F5F1EB]"
        aria-labelledby="stats-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
              I numeri
            </p>
            <h2
              id="stats-heading"
              className="text-3xl md:text-4xl text-[#2C2C2C] mb-3"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {stats.title}
            </h2>
            <p className="text-[#2C2C2C]/65 max-w-xl mx-auto">{stats.subtitle}</p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            {stats.items.map((item, i) => (
              <div
                key={i}
                className="bg-[#E8DFD0] rounded-[1.5rem] p-8 text-center"
              >
                <p
                  className="text-4xl text-[#5C4A3A] mb-3"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {item.value}
                </p>
                <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Benefici corpo/mente ─────────────────────────────────────── */}
      <section
        className="section-padding bg-[#E8DFD0]"
        aria-labelledby="benefits-heading"
      >
        <div className="max-w-4xl mx-auto px-6">
          <h2
            id="benefits-heading"
            className="text-3xl md:text-4xl text-[#2C2C2C] mb-12 text-center"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {benefits.title}
          </h2>

          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-[#F5F1EB] rounded-[1.5rem] p-8">
              <h3
                className="text-xl text-[#2C2C2C] mb-4"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {benefits.physical.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {benefits.physical.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-[#2C2C2C]/70 leading-relaxed pl-5 relative before:content-['●'] before:absolute before:left-0 before:text-[#9BAF9B] before:text-xs before:top-1.5"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-[#F5F1EB] rounded-[1.5rem] p-8">
              <h3
                className="text-xl text-[#2C2C2C] mb-4"
                style={{ fontFamily: "var(--font-display), Georgia, serif" }}
              >
                {benefits.mental.title}
              </h3>
              <ul className="flex flex-col gap-3">
                {benefits.mental.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-[#2C2C2C]/70 leading-relaxed pl-5 relative before:content-['●'] before:absolute before:left-0 before:text-[#B8CEDE] before:text-xs before:top-1.5"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Campioni ─────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#F5F1EB]"
        aria-labelledby="champions-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="champions-heading"
            className="text-3xl md:text-4xl text-[#2C2C2C] mb-12 text-center"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {champions.title}
          </h2>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {champions.items.map((c, i) => (
              <div
                key={i}
                className="bg-[#E8DFD0] rounded-[1.5rem] p-6 flex flex-col gap-3"
              >
                <p className="text-[#2C2C2C]/75 leading-relaxed text-sm flex-1">
                  “{c.text}”
                </p>
                <div>
                  <p className="text-sm font-semibold text-[#5C4A3A]">{c.name}</p>
                  <p className="text-xs text-[#2C2C2C]/55 uppercase tracking-wide">
                    {c.sport}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Chiusura + CTA ───────────────────────────────────────────── */}
      <section
        className="section-padding"
        style={{
          background: "linear-gradient(135deg, #B8CEDE 0%, #9BAF9B 100%)",
        }}
        aria-labelledby="goals-cta-heading"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <h2
            id="goals-cta-heading"
            className="text-3xl md:text-4xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {closing.title}
          </h2>
          <p className="text-[#2C2C2C]/70 mb-8 leading-relaxed">
            {closing.text}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/classi"
              className="bg-[#5C4A3A] text-[#F5F1EB] font-medium px-8 py-3.5 rounded-full hover:bg-[#4a3a2c] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
            >
              Scopri i corsi
            </Link>
            <a
              href={`mailto:${studio.email}`}
              className="border-2 border-[#5C4A3A] text-[#5C4A3A] font-medium px-8 py-3.5 rounded-full hover:bg-[#5C4A3A] hover:text-[#F5F1EB] transition-all duration-200"
            >
              {closing.cta.label}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
