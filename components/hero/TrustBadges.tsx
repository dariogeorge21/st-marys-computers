"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const badges = [
  "Same-Day Repairs",
  "20+ Years Experience",
  "Genuine Spare Parts",
  "Home Service",
  "4.9★ Rating",
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.5,
    },
  },
};

const badgeVariants: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

export function TrustBadges() {
  return (
    <motion.div
      className="flex flex-wrap gap-2"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      aria-label="Trust indicators"
    >
      {badges.map((badge) => (
        <motion.span
          key={badge}
          variants={badgeVariants}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium
            bg-white border border-blue-200 text-gray-700
            hover:bg-blue-50 hover:border-blue-400 hover:text-blue-700
            transition-colors duration-200 cursor-default shadow-sm"
        >
          <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 flex-shrink-0" aria-hidden="true" />
          {badge}
        </motion.span>
      ))}
    </motion.div>
  );
}
