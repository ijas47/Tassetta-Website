"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const sectionColors = [
  "var(--section-a)",
  "var(--section-b)",
  "var(--foam)",
  "var(--section-e)",
  "var(--mist)",
  "var(--mint)",
  "var(--section-c)",
  "var(--section-d)",
  "var(--foam)",
];

export default function ScrollAnimations() {
  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = gsap.utils.toArray<HTMLElement>(".scroll-section");

      sections.forEach((section, i) => {
        const content = section.querySelector(".scene-content");
        const nextColor = sectionColors[(i + 1) % sectionColors.length];

        ScrollTrigger.create({
          trigger: section,
          start: "top 80%",
          end: "top 20%",
          onEnter: () => {
            document.body.style.backgroundColor = nextColor;
          },
          onEnterBack: () => {
            document.body.style.backgroundColor =
              sectionColors[i] ?? "var(--foam)";
          },
        });

        if (content) {
          gsap.from(content, {
            opacity: 0,
            y: 64,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              once: true,
            },
          });

          const items = section.querySelectorAll(".scene-item");
          if (items.length) {
            gsap.from(items, {
              opacity: 0,
              y: 40,
              duration: 0.8,
              stagger: 0.12,
              ease: "power2.out",
              scrollTrigger: {
                trigger: section,
                start: "top 80%",
                once: true,
              },
            });
          }
        }
      });

      ScrollTrigger.refresh();
    });

    return () => ctx.revert();
  }, []);

  return null;
}