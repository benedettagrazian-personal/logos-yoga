import Image from "next/image";
import { YogaClass, Level } from "@/data/content";

const levelColors: Record<Level, { bg: string; text: string }> = {
  Principiante: { bg: "#9BAF9B", text: "#F5F1EB" },
  Intermedio: { bg: "#B8CEDE", text: "#2C2C2C" },
  Avanzato: { bg: "#5C4A3A", text: "#F5F1EB" },
  "Tutti i livelli": { bg: "#E8DFD0", text: "#5C4A3A" },
};

interface ClassCardProps {
  yogaClass: YogaClass;
  showLevel?: boolean;
}

export default function ClassCard({ yogaClass, showLevel = true }: ClassCardProps) {
  const { title, description, level, duration, teacher, image, imageAlt } =
    yogaClass;
  const colors = levelColors[level];

  return (
    <article className="group bg-white rounded-[1.5rem] overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1 flex flex-col">
      {/* Immagine */}
      <div className="relative w-full aspect-video overflow-hidden">
        <Image
          src={image}
          alt={imageAlt}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
          placeholder="blur"
          blurDataURL="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAwIiBoZWlnaHQ9IjQwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSIjQjhDRURFIi8+PC9zdmc+"
        />
        {/* Livello badge */}
        {showLevel && (
          <span
            className="absolute top-3 left-3 text-xs font-semibold px-3 py-1 rounded-full"
            style={{ backgroundColor: colors.bg, color: colors.text }}
          >
            {level}
          </span>
        )}
      </div>

      {/* Contenuto */}
      <div className="p-6 flex flex-col flex-1">
        <h3
          className="text-xl text-[#2C2C2C] mb-2"
          style={{ fontFamily: "var(--font-display), Georgia, serif" }}
        >
          {title}
        </h3>
        <p className="text-sm text-[#2C2C2C]/65 leading-relaxed mb-4 flex-1">
          {description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between text-xs text-[#2C2C2C]/50 mb-5">
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.75-13a.75.75 0 0 0-1.5 0v5c0 .414.336.75.75.75h4a.75.75 0 0 0 0-1.5h-3.25V5Z" clipRule="evenodd" />
            </svg>
            {duration} min
          </span>
          <span className="flex items-center gap-1.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
              <path d="M10 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM3.465 14.493a1.23 1.23 0 0 0 .41 1.412A9.957 9.957 0 0 0 10 18c2.31 0 4.438-.784 6.131-2.1.43-.333.604-.903.408-1.41a7.002 7.002 0 0 0-13.074.003Z" />
            </svg>
            {teacher}
          </span>
        </div>
      </div>
    </article>
  );
}
