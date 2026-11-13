"use client";

import { motion } from "framer-motion";
import { HeroActions } from "./HeroActions";

export function HeroContent() {
  return (
    <div className="flex flex-col items-center text-center max-w-4xl mx-auto z-10 relative">
      {/* Large Typography Uppercased Branding with Bold & Stylish Liquid-Metallic Effects */}
      <motion.div
        initial={{ opacity: 0, y: -14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="mb-4 sm:mb-6 flex flex-col items-center select-none"
      >
        <div className="relative inline-flex flex-col items-center">
          {/* Ambient luminous aura behind the branding */}
          <span
            className="absolute inset-x-2 top-1/2 -translate-y-1/2 h-8 sm:h-12 blur-2xl opacity-40 bg-gradient-to-r from-blue-400 via-sky-300 to-indigo-500 pointer-events-none"
            aria-hidden="true"
          />

          {/* Uppercased Large Typography Branding */}
          <span className="relative text-2xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black uppercase tracking-[0.14em] sm:tracking-[0.18em] brand-text-shine drop-shadow-[0_2px_12px_rgba(37,99,235,0.15)]">
            ST MARY&apos;S COMPUTERS
          </span>

          {/* Minimalist Brand Accent Rule */}
          <div className="flex items-center gap-3 mt-2 sm:mt-2.5 w-full justify-center">
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent to-blue-400/60" />
            <span className="text-[10px] sm:text-xs font-semibold tracking-[0.25em] uppercase text-blue-600/90">
              Hardware & Repair Studio · New Delhi
            </span>
            <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent to-blue-400/60" />
          </div>
        </div>
      </motion.div>

      {/* Large Typography Display Headline */}
      <motion.div
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
      >
        <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-semibold tracking-[-0.035em] text-slate-900 leading-[1.08]">
          From broken devices
          <span className="block text-blue-600 font-semibold mt-1 sm:mt-2">
            to perfect performance
          </span>
        </h1>
      </motion.div>

      {/* Clean, Minimalist 2-line Subtitle — No over text content */}
      <motion.p
        initial={{ opacity: 0, y: 14 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.16, ease: [0.16, 1, 0.3, 1] }}
        className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-normal leading-relaxed mt-5 sm:mt-6 mb-8 sm:mb-10"
      >
        Fast, reliable computer, laptop, and printer repair across New Delhi —
        delivering same-day doorstep service with genuine parts and guaranteed reliability.
      </motion.p>

      {/* Centered Dual Action Pathways */}
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.24, ease: [0.16, 1, 0.3, 1] }}
        className="w-full sm:w-auto"
      >
        <HeroActions />
      </motion.div>
    </div>
  );
}
