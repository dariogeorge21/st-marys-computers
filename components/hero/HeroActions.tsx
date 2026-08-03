"use client";

import { motion, useReducedMotion } from "framer-motion";
import { Phone, MessageCircle } from "lucide-react";

export function HeroActions() {
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      className="flex flex-col sm:flex-row gap-3"
      initial={{ opacity: 0, y: 16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.6, ease: "easeOut" }}
    >
      {/* Primary CTA — Call Now */}
      <motion.a
        href="tel:+919910836286"
        className="group relative inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl
          bg-blue-600 hover:bg-blue-700
          text-white font-semibold text-base
          shadow-lg hover:shadow-blue-500/30
          transition-all duration-200 select-none
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="Call St Mary's Computers at +91 99108 36286"
        whileTap={prefersReduced ? {} : { scale: 0.97 }}
        whileHover={prefersReduced ? {} : { y: -1 }}
      >
        <motion.span
          animate={prefersReduced ? {} : { rotate: [0, -12, 8, -5, 0] }}
          transition={{ duration: 0.5, delay: 1.5, repeat: Infinity, repeatDelay: 4 }}
          aria-hidden="true"
        >
          <Phone className="w-5 h-5" />
        </motion.span>
        <span>Call Now</span>
        {/* Glow ring on hover */}
        <span
          className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300
            bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.15),transparent_70%)]"
          aria-hidden="true"
        />
      </motion.a>

      {/* Secondary CTA — WhatsApp */}
      <motion.a
        href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20repair%20service"
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center justify-center gap-2.5 px-7 py-4 rounded-xl
          bg-white hover:bg-green-50
          border border-gray-200 hover:border-green-400
          text-gray-700 hover:text-gray-900 font-semibold text-base
          shadow-sm hover:shadow-md
          transition-all duration-200 select-none
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        aria-label="Chat on WhatsApp for computer repair"
        whileTap={prefersReduced ? {} : { scale: 0.97 }}
        whileHover={prefersReduced ? {} : { y: -1 }}
      >
        <motion.span
          className="text-green-400"
          whileHover={prefersReduced ? {} : { rotate: 15, scale: 1.1 }}
          transition={{ duration: 0.2 }}
          aria-hidden="true"
        >
          <MessageCircle className="w-5 h-5" />
        </motion.span>
        <span>WhatsApp</span>
      </motion.a>
    </motion.div>
  );
}
