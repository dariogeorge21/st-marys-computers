"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { TrustBadges } from "./TrustBadges";
import { HeroActions } from "./HeroActions";
import { HeroStats } from "./HeroStats";

import type { Variants } from "framer-motion";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

export function HeroContent() {
  return (
    <motion.div
      className="flex flex-col gap-6 lg:gap-7"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Eyebrow badge */}
      <motion.div variants={itemVariants}>
        <span
          className="inline-flex items-center gap-2 text-xs font-semibold tracking-widest uppercase
            text-blue-600 border border-blue-500/30 bg-blue-500/10 rounded-full px-4 py-1.5"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" aria-hidden="true" />
          New Delhi&apos;s Most Trusted · Since 2007
        </span>
      </motion.div>

      {/* Main headline */}
      <motion.div variants={itemVariants} className="space-y-2">
        <h1 className="text-[2.6rem] sm:text-[3.2rem] lg:text-[3.8rem] font-extrabold leading-[1.08] tracking-[-0.03em] text-gray-900">
          Professional
          <br />
          Computer Repair
          <br />
          <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
            Services
          </span>
        </h1>
      </motion.div>

      {/* Sub-headline */}
      <motion.p
        variants={itemVariants}
        className="text-lg text-gray-600 leading-relaxed max-w-[480px] font-medium"
      >
        Fast, reliable, and at your door. We fix laptops, desktops, and
        printers across New Delhi — same day, genuine parts, guaranteed.
      </motion.p>

      {/* Trust badges */}
      <motion.div variants={itemVariants}>
        <TrustBadges />
      </motion.div>

      {/* CTA Buttons */}
      <motion.div variants={itemVariants}>
        <HeroActions />
      </motion.div>

      {/* Divider */}
      <motion.div
        variants={itemVariants}
        className="h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"
        aria-hidden="true"
      />

      {/* Stats */}
      <motion.div variants={itemVariants}>
        <HeroStats />
      </motion.div>

      {/* Review snippet */}

    </motion.div>
  );
}
