import type { Metadata } from "next";
import { allPractices } from "@/data/content";

export const metadata: Metadata = {
  title: "Pratiche",
  description:
    "Tutte le pratiche insegnate a Logos Yoga Studio: Hatha Yoga, Yoga Terapia, Sri Sri Yoga, Pranayama, Meditazione e molto altro.",
};

export default function PraticheePage() {
  return (
    <>
      {/* ── Header pagina ─────────────────────────────────────────────── */}
      <section
        className="pt-32 pb-16 text-center"
        style={{
          background:
            "linear-gradient(160deg, #B8CEDE 0%, #E8DFD0 60%, #F5F1EB 100%)",
        }}
        aria-labelledby="pratiche-hero-heading"
      >
        <div className="max-w-2xl mx-auto px-6">
          <p className="text-xs font-semibold uppercase tracking-[0.25em] text-[#9BAF9B] mb-4">
            Cosa insegniamo
          </p>
          <h1
            id="pratiche-hero-heading"
            className="text-4xl md:text-5xl text-[#2C2C2C] mb-4"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Le nostre pratiche
          </h1>
          <p className="text-[#2C2C2C]/65 text-lg leading-relaxed">
            Ogni insegnante porta con sé un bagaglio di tecniche e specializzazioni.
            Scopri tutte le pratiche che compongono il metodo di Logos Yoga Studio.
          </p>
        </div>
      </section>

      {/* ── Elenco pratiche ──────────────────────────────────────────── */}
      <section className="section-padding bg-[#F5F1EB]" aria-label="Elenco delle pratiche">
        <div className="max-w-3xl mx-auto px-6">
          <div className="flex flex-col gap-3">
            {allPractices.map((practice) => (
              <details
                key={practice.title}
                className="group bg-white rounded-[1.25rem] shadow-sm overflow-hidden"
              >
                <summary className="flex items-center justify-between gap-4 px-6 py-5 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C4A3A] focus-visible:ring-inset">
                  <div>
                    <h2
                      className="text-lg text-[#2C2C2C]"
                      style={{ fontFamily: "var(--font-display), Georgia, serif" }}
                    >
                      {practice.title}
                    </h2>
                    <p className="text-xs text-[#9BAF9B] uppercase tracking-widest font-semibold mt-1">
                      {practice.teacher}
                    </p>
                  </div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 16 16"
                    fill="currentColor"
                    className="w-4 h-4 text-[#5C4A3A] shrink-0 transition-transform duration-300 group-open:rotate-180"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                      clipRule="evenodd"
                    />
                  </svg>
                </summary>
                <div className="px-6 pb-6 border-t border-[#E8DFD0] pt-4 flex flex-col gap-4">
                  <p className="text-sm text-[#2C2C2C]/70 leading-relaxed">
                    {practice.description}
                  </p>
                  {practice.extraSections?.map((section, i) => (
                    <div key={i}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#5C4A3A] mb-2">
                        {section.title}
                      </p>
                      {section.text && (
                        <p className="text-sm text-[#2C2C2C]/70 leading-relaxed mb-2">
                          {section.text}
                        </p>
                      )}
                      {section.items && (
                        <ul className="flex flex-col gap-2">
                          {section.items.map((item, j) => (
                            <li
                              key={j}
                              className="text-sm text-[#2C2C2C]/70 leading-relaxed pl-5 relative before:content-['●'] before:absolute before:left-0 before:text-[#9BAF9B] before:text-xs before:top-1.5"
                            >
                              <span className="font-semibold text-[#2C2C2C]">
                                {item.label}:
                              </span>{" "}
                              {item.text}
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  ))}
                  {practice.highlights && (
                    <div>
                      {practice.highlightsTitle && (
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#5C4A3A] mb-2">
                          {practice.highlightsTitle}
                        </p>
                      )}
                      <ul className="flex flex-col gap-2">
                        {practice.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-sm text-[#2C2C2C]/70 leading-relaxed pl-5 relative before:content-['●'] before:absolute before:left-0 before:text-[#9BAF9B] before:text-xs before:top-1.5"
                          >
                            <span className="font-semibold text-[#2C2C2C]">
                              {h.label}:
                            </span>{" "}
                            {h.text}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {practice.quote && (
                    <blockquote className="border-l-2 border-[#9BAF9B] pl-4 italic text-sm text-[#2C2C2C]/70">
                      “{practice.quote.text}”
                      <cite className="block not-italic text-xs font-medium text-[#5C4A3A] mt-2">
                        — {practice.quote.author}
                      </cite>
                    </blockquote>
                  )}
                  {practice.closing && (
                    <p className="text-sm text-[#2C2C2C]/70 leading-relaxed italic">
                      {practice.closing}
                    </p>
                  )}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
