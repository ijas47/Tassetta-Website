"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#services", label: "What we handle" },
  { href: "#pricing", label: "Pricing" },
  { href: "#compare", label: "Compare" },
  { href: "#about", label: "About" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onHero = !scrolled;

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        padding: "clamp(0.75rem, 2vw, 1.25rem) var(--space-gutter)",
        background: scrolled ? "rgba(244, 247, 245, 0.92)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(15, 27, 26, 0.06)" : "none",
      }}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between">
        <a
          href="#"
          className="flex items-center gap-2.5 no-underline"
          style={{ color: onHero ? "#fff" : "var(--ink)" }}
        >
          <span
            className="flex items-center justify-center rounded-2xl font-extrabold"
            style={{
              width: "2.5rem",
              height: "2.5rem",
              background: "#fff",
              color: "var(--teal)",
              fontFamily: "var(--font-manrope)",
              fontSize: "1.25rem",
            }}
          >
            T
          </span>
          <span
            style={{
              fontFamily: "var(--font-manrope)",
              fontWeight: 700,
              fontSize: "var(--text-body)",
              letterSpacing: "-0.02em",
            }}
          >
            Tassetta
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              style={{
                color: onHero ? "rgba(255, 255, 255, 0.88)" : "var(--muted)",
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-4 md:flex">
          <a
            href="#login"
            className="nav-link"
            style={{
              color: onHero ? "rgba(255, 255, 255, 0.88)" : "var(--muted)",
            }}
          >
            Log in
          </a>
          <a href="#nexus-study" className="btn-primary">
            Get your free nexus study
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-xl border md:hidden"
          style={{
            borderColor: onHero ? "rgba(255,255,255,0.35)" : "rgba(0,0,0,0.1)",
            background: onHero ? "rgba(255,255,255,0.12)" : "#fff",
            color: onHero ? "#fff" : "var(--ink)",
          }}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span className="text-lg">{menuOpen ? "✕" : "☰"}</span>
        </button>
      </div>

      {menuOpen && (
        <nav
          className="mx-auto mt-4 flex max-w-6xl flex-col gap-4 rounded-2xl border border-black/8 bg-white p-5 md:hidden"
          data-lenis-prevent
        >
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link"
              onClick={() => setMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <a href="#nexus-study" className="btn-primary mt-2">
            Get your free nexus study
          </a>
        </nav>
      )}
    </header>
  );
}