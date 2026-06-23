"use client";

import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Sections from "@/components/Sections";
import Footer from "@/components/Footer";

const SmoothScroll = dynamic(() => import("@/components/SmoothScroll"), {
  ssr: false,
});

const PaintedBackground = dynamic(
  () => import("@/components/PaintedBackground"),
  { ssr: false }
);

const ScrollAnimations = dynamic(
  () => import("@/components/ScrollAnimations"),
  { ssr: false }
);

export default function HomePage() {
  return (
    <SmoothScroll>
      <PaintedBackground />
      <div className="site-content">
        <Navigation />
        <main>
          <Hero />
          <Sections />
        </main>
        <Footer />
      </div>
      <ScrollAnimations />
    </SmoothScroll>
  );
}