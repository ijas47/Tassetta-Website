"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitTitle from "./SplitTitle";

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const hero = heroRef.current;
    const content = contentRef.current;
    if (!hero || !content) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: hero,
        start: "top top",
        end: "+=120%",
        pin: true,
        pinSpacing: true,
      });

      gsap.to(content, {
        y: -80,
        opacity: 0.4,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative flex min-h-screen items-end overflow-hidden"
    >
      <div className="hero-bg" aria-hidden="true">
        <div className="hero-glow" />
      </div>

      <div className="hero-overlay absolute inset-0" />

      <div
        ref={contentRef}
        className="relative z-10 w-full"
        style={{ padding: "var(--space-section) var(--space-gutter)" }}
      >
        <div className="mx-auto max-w-6xl">
          <p
            className="mb-4 font-medium uppercase tracking-widest text-white/80"
            style={{ fontSize: "var(--text-small)" }}
          >
            Managed US sales tax compliance
          </p>

          <SplitTitle
            text="Sales tax, handled."
            as="h1"
            className="font-extrabold leading-[1.05] tracking-tight"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-hero)",
              color: "#fff",
            }}
          />

          <p
            className="mt-2 max-w-2xl font-semibold text-white/95"
            style={{
              fontFamily: "var(--font-manrope)",
              fontSize: "var(--text-display)",
              lineHeight: 1.1,
            }}
          >
            Not handed back to you.
          </p>

          <p
            className="mt-6 max-w-xl text-white/80"
            style={{ fontSize: "var(--text-body)" }}
          >
            Nexus monitoring, registrations, filing, and audit response, managed
            end to end for Shopify brands and multi-channel sellers.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a href="#how-it-works" className="btn-primary">
              See how it works
            </a>
            <a
              href="#nexus-study"
              className="inline-flex items-center rounded-full border border-white/40 px-6 py-3.5 text-sm font-semibold text-white no-underline backdrop-blur-sm transition hover:bg-white/10"
            >
              Free nexus study →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}