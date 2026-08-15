import Link from "next/link";
import { navLinks, studio } from "@/data/content";
import NewsletterForm from "@/components/NewsletterForm";

export default function Footer() {
  return (
    <footer className="bg-[#5C4A3A] text-[#E8DFD0]">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand */}
          <div>
            <h2
              className="text-2xl text-[#F5F1EB] mb-3"
              style={{ fontFamily: "var(--font-display), Georgia, serif" }}
            >
              {studio.name}
            </h2>
            <p className="text-sm text-[#E8DFD0]/80 leading-relaxed max-w-xs">
              Uno spazio di pratica, silenzio e trasformazione nel cuore di
              Prato.
            </p>
            {/* Instagram */}
            <a
              href={studio.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-5 text-sm text-[#B8CEDE] hover:text-[#F5F1EB] transition-colors"
              aria-label="Segui Logos Yoga Studio su Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                className="w-5 h-5"
                aria-hidden="true"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="4" />
                <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
              </svg>
              {studio.instagramHandle}
            </a>
          </div>

          {/* Link rapidi */}
          <nav aria-label="Link rapidi footer">
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B8CEDE] mb-4">
              Esplora
            </h3>
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#E8DFD0]/80 hover:text-[#F5F1EB] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contatti + Newsletter */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#B8CEDE] mb-4">
              Contatti
            </h3>
            <address className="not-italic flex flex-col gap-1.5 mb-6">
              <a
                href={`tel:${studio.phone.replace(/\s/g, "")}`}
                className="text-sm text-[#E8DFD0]/80 hover:text-[#F5F1EB] transition-colors"
              >
                {studio.phone}
              </a>
              <a
                href={studio.mapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#E8DFD0]/80 hover:text-[#F5F1EB] transition-colors"
              >
                {studio.address}
              </a>
            </address>

            {/* Newsletter */}
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-widest text-[#B8CEDE] mb-3">
                Newsletter
              </h4>
              <NewsletterForm />
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-12 pt-6 border-t border-[#E8DFD0]/20 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[#E8DFD0]/50">
          <p>© {new Date().getFullYear()} {studio.name}. Tutti i diritti riservati.</p>
          <p>Fatto con amore e molti pranayama 🌸</p>
        </div>
      </div>
    </footer>
  );
}
