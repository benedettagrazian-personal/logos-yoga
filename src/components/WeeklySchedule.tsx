"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import {
  weekDays,
  weeklySchedule,
  whatsappBookingUrl,
  classDetails,
  teachers,
} from "@/data/content";

// Durata di default (in minuti) usata solo per il calcolo grafico quando
// un orario non ha un intervallo esplicito (es. "19:45").
const DEFAULT_DURATION_MINUTES = 60;
const PX_PER_MINUTE = 1.6;
// Altezza massima (px) riservata a una fascia oraria senza classi: le pause
// lunghe vengono "compresse" a questo valore invece di occupare spazio
// proporzionale alla loro reale durata.
const IDLE_GAP_MAX_PX = 28;

// Sfondo molto tenue per differenziare le classi per insegnante.
const TEACHER_BACKGROUNDS: Record<string, string> = {
  "Tatiana Pacini": "rgba(231, 249, 255, 0.5)",
  "Monica Formica": "rgba(232, 249, 234, 0.5)",
  "Debora Pugi": "rgba(255, 251, 231, 0.5)",
};

function parseTimeToMinutes(label: string): number {
  const [h, m] = label.split(":").map(Number);
  return h * 60 + (m || 0);
}

function parseSlotTime(time: string): { start: number; end: number } {
  const [startLabel, endLabel] = time.split(" – ");
  const start = parseTimeToMinutes(startLabel);
  const end = endLabel
    ? parseTimeToMinutes(endLabel)
    : start + DEFAULT_DURATION_MINUTES;
  return { start, end };
}

// Costruisce una mappa minuti → pixel che mantiene la scala reale nelle
// fasce orarie occupate da almeno una classe, ma comprime le fasce vuote
// (nessuna classe in nessun giorno) a un'altezza fissa ridotta.
function buildTimeAxis(slots: { start: number; end: number }[]) {
  const breakpoints = Array.from(
    new Set(slots.flatMap((s) => [s.start, s.end]))
  ).sort((a, b) => a - b);

  const pxAt = new Map<number, number>([[breakpoints[0], 0]]);
  let acc = 0;
  for (let i = 1; i < breakpoints.length; i++) {
    const t0 = breakpoints[i - 1];
    const t1 = breakpoints[i];
    const isBusy = slots.some((s) => s.start <= t0 && s.end >= t1);
    const realHeight = (t1 - t0) * PX_PER_MINUTE;
    acc += isBusy ? realHeight : Math.min(realHeight, IDLE_GAP_MAX_PX);
    pxAt.set(t1, acc);
  }

  return { toPx: (t: number) => pxAt.get(t) ?? 0, totalHeight: acc };
}

interface SelectedClass {
  day: string;
  time: string;
  title: string;
  teacher: string;
}

export default function WeeklySchedule() {
  const [selected, setSelected] = useState<SelectedClass | null>(null);

  const parsedSlots = weeklySchedule.map((slot) => ({
    ...slot,
    ...parseSlotTime(slot.time),
  }));

  const timeAxis = buildTimeAxis(parsedSlots);
  const timelineHeight = timeAxis.totalHeight;

  // Chiudi il pannello con Esc.
  useEffect(() => {
    if (!selected) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelected(null);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [selected]);

  const detail = selected ? classDetails[selected.title] : undefined;
  const teacherInfo = selected
    ? teachers.find((t) => t.name === selected.teacher)
    : undefined;

  return (
    <section
      className="section-padding bg-[#F5F1EB]"
      aria-label="Calendario settimanale"
    >
      <div className="max-w-6xl mx-auto px-6">
        <p className="text-sm text-[#2C2C2C]/60 text-center mb-6">
          Clicca su una classe per scoprire di più sulla pratica e su chi la
          insegna.
        </p>

        {/* Timeline proporzionale (scroll orizzontale su mobile) */}
        <div className="rounded-[1.5rem] overflow-x-auto shadow-sm border border-[#E8DFD0] bg-white">
          <div
            className="grid min-w-[900px]"
            style={{
              gridTemplateColumns: `repeat(${weekDays.length}, minmax(180px, 1fr))`,
            }}
          >
            {weekDays.map((day, i) => (
              <div
                key={day}
                className={`bg-[#5C4A3A] text-[#F5F1EB] font-medium px-5 py-4 text-center${
                  i !== weekDays.length - 1 ? " border-r border-[#4a3a2c]" : ""
                }`}
              >
                {day}
              </div>
            ))}

            {weekDays.map((day, i) => (
              <div
                key={day}
                className={`relative${
                  i !== weekDays.length - 1
                    ? " border-r border-[#E8DFD0]"
                    : ""
                }`}
                style={{ height: timelineHeight }}
              >
                {parsedSlots
                  .filter((slot) => slot.classesByDay[day])
                  .map((slot) => {
                    const yogaClass = slot.classesByDay[day]!;
                    return (
                      <button
                        key={slot.time}
                        type="button"
                        onClick={() =>
                          setSelected({
                            day,
                            time: slot.time,
                            title: yogaClass.title,
                            teacher: yogaClass.teacher,
                          })
                        }
                        className="absolute inset-x-0 w-full px-3 py-2 border-t border-[#E8DFD0] text-left cursor-pointer transition hover:brightness-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C4A3A] focus-visible:ring-inset"
                        style={{
                          top: timeAxis.toPx(slot.start),
                          minHeight:
                            timeAxis.toPx(slot.end) - timeAxis.toPx(slot.start),
                          backgroundColor:
                            TEACHER_BACKGROUNDS[yogaClass.teacher],
                        }}
                      >
                        <p className="text-xs font-semibold text-[#5C4A3A] mb-0.5">
                          {slot.time}
                        </p>
                        <p className="text-[#2C2C2C] text-sm font-medium leading-snug">
                          {yogaClass.title}
                        </p>
                        <p className="text-xs text-[#2C2C2C]/55 mt-0.5">
                          {yogaClass.teacher}
                        </p>
                      </button>
                    );
                  })}
              </div>
            ))}
          </div>
        </div>

        {/* CTA prenotazione via WhatsApp */}
        <div className="text-center mt-10">
          <a
            href={whatsappBookingUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#5C4A3A] text-[#F5F1EB] font-medium px-8 py-3.5 rounded-full hover:bg-[#4a3a2c] transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="w-5 h-5"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.198.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.372-.025-.521-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
              <path d="M12.004 2.003c-5.523 0-10 4.477-10 10 0 1.766.462 3.492 1.34 5.013L2 22l5.111-1.334A9.958 9.958 0 0 0 12.004 22c5.523 0 10-4.477 10-10s-4.477-9.997-10-9.997Zm0 18.166a8.14 8.14 0 0 1-4.15-1.135l-.298-.177-3.037.792.812-2.96-.194-.304a8.135 8.135 0 0 1-1.257-4.365c0-4.501 3.663-8.163 8.164-8.163 4.5 0 8.162 3.662 8.162 8.163 0 4.501-3.662 8.163-8.163 8.163Z" />
            </svg>
            Prenota su WhatsApp
          </a>
          <p className="text-xs text-[#2C2C2C]/50 mt-3">
            Ti unisci al nostro gruppo WhatsApp per riservare il tuo posto in
            classe.
          </p>
        </div>
      </div>

      {/* Pannello di dettaglio classe */}
      {selected && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-[#2C2C2C]/40 px-0 sm:px-6"
          role="dialog"
          aria-modal="true"
          aria-labelledby="class-detail-heading"
          onClick={() => setSelected(null)}
        >
          <div
            className="bg-[#F5F1EB] w-full sm:max-w-lg max-h-[85vh] overflow-y-auto rounded-t-[1.5rem] sm:rounded-[1.5rem] p-8 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setSelected(null)}
              aria-label="Chiudi"
              className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full text-[#5C4A3A] hover:bg-[#E8DFD0] transition-colors"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                className="w-4 h-4"
                aria-hidden="true"
              >
                <path d="M6 6l12 12M18 6L6 18" />
              </svg>
            </button>

            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-[#9BAF9B] mb-2">
              {selected.day} · {selected.time}
            </p>
            <h2
              id="class-detail-heading"
              className="text-2xl text-[#2C2C2C] mb-1 pr-8"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {selected.title}
            </h2>
            <p className="text-sm text-[#5C4A3A] font-medium mb-6">
              Con {selected.teacher}
            </p>

            <div className="flex flex-col gap-4">
              {detail ? (
                <>
                  <p className="text-sm text-[#2C2C2C]/75 leading-relaxed">
                    {detail.description}
                  </p>
                  {detail.extraSections?.map((section, i) => (
                    <div key={i}>
                      <p className="text-xs font-semibold uppercase tracking-widest text-[#5C4A3A] mb-2">
                        {section.title}
                      </p>
                      {section.text && (
                        <p className="text-sm text-[#2C2C2C]/75 leading-relaxed mb-2">
                          {section.text}
                        </p>
                      )}
                      {section.items && (
                        <ul className="flex flex-col gap-2">
                          {section.items.map((item, j) => (
                            <li
                              key={j}
                              className="text-sm text-[#2C2C2C]/75 leading-relaxed pl-5 relative before:content-['●'] before:absolute before:left-0 before:text-[#9BAF9B] before:text-xs before:top-1.5"
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
                  {detail.highlights && (
                    <div>
                      {detail.highlightsTitle && (
                        <p className="text-xs font-semibold uppercase tracking-widest text-[#5C4A3A] mb-2">
                          {detail.highlightsTitle}
                        </p>
                      )}
                      <ul className="flex flex-col gap-2">
                        {detail.highlights.map((h, i) => (
                          <li
                            key={i}
                            className="text-sm text-[#2C2C2C]/75 leading-relaxed pl-5 relative before:content-['●'] before:absolute before:left-0 before:text-[#9BAF9B] before:text-xs before:top-1.5"
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
                  {detail.quote && (
                    <blockquote className="border-l-2 border-[#9BAF9B] pl-4 italic text-sm text-[#2C2C2C]/75">
                      “{detail.quote.text}”
                      <cite className="block not-italic text-xs font-medium text-[#5C4A3A] mt-2">
                        — {detail.quote.author}
                      </cite>
                    </blockquote>
                  )}
                  {detail.closing && (
                    <p className="text-sm text-[#2C2C2C]/75 leading-relaxed italic">
                      {detail.closing}
                    </p>
                  )}
                </>
              ) : (
                <p className="text-sm text-[#2C2C2C]/60 italic">
                  Descrizione in arrivo.
                </p>
              )}

              {teacherInfo && (
                <div className="border-t border-[#E8DFD0] pt-4 mt-2 flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm text-[#2C2C2C] font-medium">
                      {teacherInfo.name}
                    </p>
                    <p className="text-xs text-[#9BAF9B] uppercase tracking-widest font-semibold">
                      {teacherInfo.specialization}
                    </p>
                  </div>
                  <Link
                    href={`/chi-siamo#${teacherInfo.id}`}
                    onClick={() => setSelected(null)}
                    className="shrink-0 text-xs font-medium px-4 py-2 rounded-full bg-[#E8DFD0] text-[#5C4A3A] hover:bg-[#5C4A3A] hover:text-[#F5F1EB] transition-colors whitespace-nowrap"
                  >
                    Vedi profilo
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
