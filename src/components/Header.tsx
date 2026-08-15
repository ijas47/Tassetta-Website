"use client";

import Link from "next/link";
import { useState } from "react";

const NAV = [
  { href: "/how-it-works", label: "How it works" },
  { href: "/what-we-handle", label: "What we handle" },
  { href: "/pricing", label: "Pricing" },
  { href: "/compare/software", label: "Compare" },
  { href: "/about", label: "About" },
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        background: "rgba(255,255,255,0.92)",
        backdropFilter: "saturate(140%) blur(8px)",
        WebkitBackdropFilter: "saturate(140%) blur(8px)",
        borderBottom: "1px solid #eef2f0",
      }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 clamp(20px,4vw,32px)",
          height: 68,
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: 24,
        }}
      >
        <Link
          href="/"
          onClick={close}
          style={{ display: "flex", alignItems: "center", gap: 9, textDecoration: "none", flex: "none" }}
        >
          <span
            style={{
              width: 26,
              height: 26,
              borderRadius: 8,
              background: "#0d7d72",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontWeight: 800,
              fontSize: 16,
            }}
          >
            T
          </span>
          <span
            style={{
              fontFamily: "var(--font-manrope), Manrope, sans-serif",
              fontWeight: 800,
              fontSize: 20,
              letterSpacing: "-0.02em",
              color: "#0f1b1a",
            }}
          >
            Tassetta
          </span>
        </Link>

        <nav className="t-nav-desktop" style={{ alignItems: "center", gap: 30 }}>
          {NAV.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="t-navlink"
              style={{ fontWeight: 600, fontSize: 14, color: "#0f1b1a", textDecoration: "none" }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="t-nav-desktop" style={{ alignItems: "center", gap: 18, flex: "none" }}>
          <Link
            href="/login"
            className="t-loginlink"
            style={{ fontWeight: 600, fontSize: 14, color: "#41504d", textDecoration: "none" }}
          >
            Log in
          </Link>
          <Link
            href="/nexus-study"
            className="t-cta-primary"
            style={{
              display: "inline-flex",
              alignItems: "center",
              background: "#0d7d72",
              color: "#fff",
              fontWeight: 600,
              fontSize: 14,
              padding: "11px 20px",
              borderRadius: 24,
              textDecoration: "none",
            }}
          >
            Get your free nexus study
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="t-mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          className="t-burger"
          style={{
            alignItems: "center",
            justifyContent: "center",
            width: 42,
            height: 42,
            borderRadius: 12,
            border: "1px solid #eef2f0",
            background: "#fff",
            cursor: "pointer",
            flex: "none",
            color: "#0f1b1a",
            fontSize: 18,
          }}
        >
          {open ? "×" : "☰"}
        </button>
      </div>

      <div
        id="t-mobile-menu"
        className={`t-mobile-menu${open ? " t-open" : ""}`}
        style={{
          flexDirection: "column",
          padding: "8px 20px 20px",
          gap: 4,
          borderTop: "1px solid #eef2f0",
          background: "#fff",
        }}
      >
        {NAV.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={close}
            style={{
              fontWeight: 600,
              fontSize: 16,
              color: "#0f1b1a",
              textDecoration: "none",
              padding: "12px 4px",
              borderBottom: "1px solid #f4f7f5",
            }}
          >
            {item.label}
          </Link>
        ))}
        <Link
          href="/login"
          onClick={close}
          style={{
            fontWeight: 600,
            fontSize: 16,
            color: "#41504d",
            textDecoration: "none",
            padding: "12px 4px",
            borderBottom: "1px solid #f4f7f5",
          }}
        >
          Log in
        </Link>
        <Link
          href="/nexus-study"
          onClick={close}
          style={{
            marginTop: 12,
            textAlign: "center",
            background: "#0d7d72",
            color: "#fff",
            fontWeight: 600,
            fontSize: 16,
            padding: 14,
            borderRadius: 24,
            textDecoration: "none",
          }}
        >
          Get your free nexus study
        </Link>
      </div>
    </header>
  );
}
