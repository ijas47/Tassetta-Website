"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

type SplitTitleProps = {
  text: string;
  as?: "h1" | "h2" | "h3" | "p";
  className?: string;
  style?: React.CSSProperties;
  delay?: number;
};

export default function SplitTitle({
  text,
  as = "h1",
  className = "",
  style,
  delay = 0,
}: SplitTitleProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let cancelled = false;

    void import("splitting").then(({ default: Splitting }) => {
      if (cancelled) return;
      Splitting({ target: el, by: "chars" });

      const chars = el.querySelectorAll(".char");
      if (!chars.length) return;

      gsap.fromTo(
        chars,
        { opacity: 0, y: "1.1em" },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.025,
          delay,
          ease: "power3.out",
        }
      );
    });

    return () => {
      cancelled = true;
    };
  }, [text, delay]);

  const Component = as;

  return (
    <Component
      ref={ref as never}
      className={`split-title ${className}`}
      style={style}
      data-splitting=""
    >
      {text}
    </Component>
  );
}