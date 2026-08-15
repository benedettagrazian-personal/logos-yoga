import { studio } from "@/data/content";

// ─────────────────────────────────────────────────────────────────────────────
// MomoyogaEmbed
//
// Integra il widget di prenotazione Momoyoga tramite iframe.
//
// Per aggiornare lo slug dello studio:
//   1. Vai su https://www.momoyoga.com/dashboard
//   2. Copia il tuo slug (es. "logos-yoga")
//   3. Aggiorna `studio.momoyogaSlug` in /src/data/content.ts
//
// L'URL finale sarà: https://www.momoyoga.com/{slug}/
// ─────────────────────────────────────────────────────────────────────────────

export default function MomoyogaEmbed() {
  const momoyogaUrl = `https://www.momoyoga.com/${studio.momoyogaSlug}/`;

  return (
    <section
      className="section-padding bg-[#F5F1EB]"
      aria-labelledby="momoyoga-heading"
    >
      <div className="max-w-6xl mx-auto px-6">
        {/* Intestazione */}
        <div className="text-center mb-12">
          <h2
            id="momoyoga-heading"
            className="text-3xl md:text-4xl text-[#2C2C2C] mb-3"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            Calendario e Prenotazioni
          </h2>
          <p className="text-[#2C2C2C]/65 max-w-xl mx-auto">
            Scegli la classe che fa per te e prenota direttamente qui sotto.
          </p>
        </div>

        {/* Contenitore iframe */}
        <div className="rounded-[1.5rem] overflow-hidden shadow-sm border border-[#E8DFD0] bg-white">
          <iframe
            src={momoyogaUrl}
            title="Calendario classi e prenotazioni Logos Yoga Studio su Momoyoga"
            className="w-full"
            style={{ minHeight: "600px", border: "none" }}
            loading="lazy"
            allow="payment"
          />
        </div>

        {/* Fallback per chi blocca iframe */}
        <p className="text-center text-sm text-[#2C2C2C]/50 mt-4">
          Se il calendario non si carica,{" "}
          <a
            href={momoyogaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#5C4A3A] underline underline-offset-2 hover:no-underline"
          >
            aprilo direttamente su Momoyoga
          </a>
          .
        </p>
      </div>
    </section>
  );
}
