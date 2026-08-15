"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { navLinks, studio } from "@/data/content";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Chiudi menu mobile al cambio pagina
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#F5F1EB]/90 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav
        className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between"
        aria-label="Navigazione principale"
      >
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center gap-2.5 hover:opacity-80 transition-opacity"
        >
          <Image
            src="/logo.png"
            alt={studio.name}
            width={40}
            height={40}
            className="h-10 w-10 object-contain"
            priority
          />
          <span
            className="text-sm font-bold text-[#5C4A3A] tracking-wide"
            style={{ fontFamily: "var(--font-body), DM Sans, sans-serif" }}
          >
            {studio.name}
          </span>
        </Link>

        {/* Link desktop — centrati */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-medium tracking-wide transition-colors duration-200 ${
                  pathname === link.href
                    ? "text-[#5C4A3A] border-b-2 border-[#5C4A3A] pb-0.5"
                    : "text-[#2C2C2C] hover:text-[#5C4A3A]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* CTA desktop */}
        <div className="hidden md:block">
          <Link
            href="/classi"
            className="bg-[#5C4A3A] text-[#F5F1EB] text-sm font-medium px-5 py-2 rounded-full hover:bg-[#4a3a2c] transition-colors duration-200 focus-visible:outline-2 focus-visible:outline-[#5C4A3A]"
          >
            Prenota
          </Link>
        </div>

        {/* Hamburger mobile */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 rounded focus-visible:outline-2 focus-visible:outline-[#5C4A3A]"
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? "Chiudi menu" : "Apri menu"}
          aria-expanded={menuOpen}
        >
          <span
            className={`block w-6 h-0.5 bg-[#5C4A3A] transition-transform duration-200 ${
              menuOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#5C4A3A] transition-opacity duration-200 ${
              menuOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-[#5C4A3A] transition-transform duration-200 ${
              menuOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </nav>

      {/* Menu mobile */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        } bg-[#F5F1EB]/95 backdrop-blur-md`}
      >
        <ul className="px-6 py-4 flex flex-col gap-4">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`block text-base font-medium transition-colors ${
                  pathname === link.href ? "text-[#5C4A3A]" : "text-[#2C2C2C]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li>
            <Link
              href="/classi"
              className="inline-block mt-2 bg-[#5C4A3A] text-[#F5F1EB] text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#4a3a2c] transition-colors"
            >
              Prenota
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
