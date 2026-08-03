"use client";

import { FloatingBackground } from "./FloatingBackground";
import { HeroContent } from "./HeroContent";
import { QuickServicePanel } from "./QuickServicePanel";

export function Hero() {
  return (
    <section
      className="relative min-h-[90vh] flex items-center bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 py-20 px-4 sm:px-6 overflow-hidden"
      aria-label="Hero section"
    >
      <FloatingBackground />

      <div className="relative z-10 w-full max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_460px] gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <HeroContent />

          {/* Right: Live Service Panel */}
          <div className="w-full lg:max-w-none">
            <QuickServicePanel />
          </div>
        </div>
      </div>
    </section>
  );
}
