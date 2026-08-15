import Image from "next/image";
import { Teacher } from "@/data/content";

interface TeacherCardProps {
  teacher: Teacher;
}

export default function TeacherCard({ teacher }: TeacherCardProps) {
  const { name, role, bio, specialization, image, imageAlt, practices, certifications, philosophy } = teacher;

  return (
    <article className="bg-white rounded-[1.5rem] overflow-hidden hover:shadow-md transition-shadow duration-300">
      <details className="group">
        {/* ── Intestazione (sempre visibile) ── */}
        <summary className="flex flex-col items-center text-center p-8 cursor-pointer list-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#5C4A3A] focus-visible:ring-inset rounded-[1.5rem]">
          {/* Foto */}
          <div className="relative w-32 h-32 mb-5 shrink-0">
            <Image
              src={image}
              alt={imageAlt}
              fill
              sizes="128px"
              className="object-cover rounded-[1.25rem] shadow-sm"
              unoptimized
            />
          </div>

          <h3
            className="text-xl text-[#2C2C2C] mb-0.5"
            style={{ fontFamily: "var(--font-display), Georgia, serif" }}
          >
            {name}
          </h3>
          <p className="text-xs font-semibold text-[#9BAF9B] uppercase tracking-widest mb-2">
            {specialization}
          </p>
          <p className="text-xs text-[#5C4A3A]/60 mb-4">{role}</p>
          <p className="text-sm text-[#2C2C2C]/65 leading-relaxed italic mb-5">
            &ldquo;{bio}&rdquo;
          </p>

          {/* Toggle pill */}
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-4 py-1.5 rounded-full bg-[#E8DFD0] text-[#5C4A3A] group-open:bg-[#5C4A3A] group-open:text-[#F5F1EB] transition-colors duration-200">
            <span className="group-open:hidden">Scopri di più</span>
            <span className="hidden group-open:inline">Chiudi</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-3 h-3 transition-transform duration-300 group-open:rotate-180"
            >
              <path
                fillRule="evenodd"
                d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z"
                clipRule="evenodd"
              />
            </svg>
          </span>
        </summary>

        {/* ── Dettagli espandibili ── */}
        <div className="px-8 pb-8 flex flex-col gap-5 border-t border-[#E8DFD0]">

          {/* Approccio / Filosofia */}
          <div className="pt-5">
            <h4
              className="text-base text-[#5C4A3A] mb-2"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Approccio
            </h4>
            <p className="text-sm text-[#2C2C2C]/70 leading-relaxed italic">
              &ldquo;{philosophy}&rdquo;
            </p>
          </div>

          {/* Pratiche */}
          <div>
            <h4
              className="text-base text-[#5C4A3A] mb-2"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Pratiche insegnate
            </h4>
            <ul className="flex flex-wrap gap-2">
              {practices.map((p) => (
                <li
                  key={p}
                  className="text-xs bg-[#B8CEDE]/40 text-[#2C2C2C] px-3 py-1 rounded-full"
                >
                  {p}
                </li>
              ))}
            </ul>
          </div>

          {/* Certificazioni */}
          <div>
            <h4
              className="text-base text-[#5C4A3A] mb-2"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              Certificazioni
            </h4>
            <ul className="flex flex-col gap-1.5">
              {certifications.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-[#2C2C2C]/70">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[#9BAF9B] shrink-0" aria-hidden="true" />
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </details>
    </article>
  );
}
