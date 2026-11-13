"use client";

import { FloatingBackground } from "./FloatingBackground";
import { HeroContent } from "./HeroContent";

export function Hero() {
  return (
    <section
      className="relative min-h-[82vh] sm:min-h-[86vh] lg:min-h-[88vh] flex items-center justify-center bg-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32 overflow-hidden border-b border-slate-100"
      aria-label="Hero section"
    >
      {/* Radiant perspective wave lines background — Replicating reference image */}
      <FloatingBackground />

      {/* Centered Large Typography Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center justify-center">
        <HeroContent />
      </div>
    </section>
  );
}
