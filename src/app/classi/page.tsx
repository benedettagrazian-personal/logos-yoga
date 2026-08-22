import type { Metadata } from "next";
import Link from "next/link";
import TeacherCard from "@/components/TeacherCard";
import WeeklySchedule from "@/components/WeeklySchedule";
import { teachers, pricing } from "@/data/content";

export const metadata: Metadata = {
  title: "Classi",
  description:
    "Scopri tutte le classi di Logos Yoga Studio: Hatha, Vinyasa, Yin Yoga e Yoga Nidra. Adatte a ogni livello. Prenota direttamente online.",
};

export default function ClassiPage() {
  return (
    <>
      {/* ── Header pagina ─────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 text-center"
        style={{
          background:
            "linear-gradient(160deg, #B8CEDE 0%, #E8DFD0 60%, #F5F1EB 100%)",
        }}
        aria-labelledby="classi-hero-heading"
      >
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
            Le nostre classi
          </p>
          <h1
            id="classi-hero-heading"
            className="text-4xl md:text-5xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Calendario settimanale
          </h1>
          <p className="text-[#2C2C2C]/65 text-lg leading-relaxed">
            Dalle pratiche più dolci alle sequenze dinamiche: trovi sempre la
            classe giusta per il tuo livello e il tuo momento.
          </p>
        </div>
      </section>

      {/* ── Calendario settimanale ────────────────────────────────────── */}
      <WeeklySchedule />

      {/* ── Insegnanti ────────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#E8DFD0]"
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

      {/* ── Abbonamenti ───────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#F5F1EB]"
        aria-labelledby="pricing-heading"
      >
        <div className="max-w-2xl mx-auto px-6 text-center">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
            In studio
          </p>
          <h2
            id="pricing-heading"
            className="text-2xl md:text-3xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Prezzi
          </h2>
          <p className="text-[#2C2C2C]/70 leading-relaxed mb-8">
            Scegli la frequenza che fa per te. Più pratichi, più il costo per
            lezione si riduce.
          </p>
          <div className="flex flex-col gap-8">
            {pricing.groups.map((group) => (
              <div key={group.title}>
                <h3 className="text-sm font-semibold text-[#5C4A3A] uppercase tracking-wide mb-3 text-left">
                  {group.title}
                </h3>
                <div className="flex flex-col gap-3">
                  {group.items.map(({ label, price, description }) => (
                    <div
                      key={label}
                      className="flex items-center justify-between gap-4 bg-white rounded-[1rem] px-5 py-3.5 text-left"
                    >
                      <div>
                        <span className="text-sm text-[#2C2C2C]">{label}</span>
                        {description && (
                          <p className="text-xs text-[#2C2C2C]/50 mt-0.5">
                            {description}
                          </p>
                        )}
                      </div>
                      <span className="text-sm font-semibold text-[#5C4A3A] whitespace-nowrap">
                        {price}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-xs text-[#2C2C2C]/50 mt-8">{pricing.note}</p>
        </div>
      </section>

      {/* ── Note pratiche ─────────────────────────────────────────────── */}
      <section
        className="section-padding bg-[#E8DFD0]"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-6xl mx-auto px-6">
          <h2
            id="faq-heading"
            className="text-2xl md:text-3xl text-[#2C2C2C] mb-10 text-center"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Informazioni pratiche
          </h2>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                q: "Cosa portare?",
                a: "Tappetino (ne abbiamo alcuni in prestito), abbigliamento comodo e una bottiglia d'acqua. Pratica a piedi scalzi.",
              },
              {
                q: "Come prenotare?",
                a: "Guarda il calendario settimanale qui sopra e prenota il tuo posto tramite il nostro gruppo WhatsApp. Puoi anche scriverci per acquistare abbonamenti.",
              },
              {
                q: "Prima volta?",
                a: "Arriva 5 minuti prima: ti accoglieremo e ti aiuteremo a trovare lo spazio più adatto a te.",
              },
            ].map(({ q, a }) => (
              <div
                key={q}
                className="bg-white rounded-[1.25rem] p-6"
              >
                <h3
                  className="text-lg text-[#2C2C2C] mb-2"
                  style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                >
                  {q}
                </h3>
                <p className="text-sm text-[#2C2C2C]/65 leading-relaxed">{a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
