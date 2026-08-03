"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useReducedMotion } from "framer-motion";

interface Stat {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
}

const stats: Stat[] = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 10, suffix: "K+", label: "Repairs Done" },
  { value: 4.9, suffix: "★", label: "Customer Rating" },
  { value: 30, suffix: " min", label: "Avg. Response" },
];

function AnimatedCounter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    const isDecimal = value % 1 !== 0;
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = isDecimal
        ? parseFloat((eased * value).toFixed(1))
        : Math.round(eased * value);
      setDisplay(current);
      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isInView, value, prefersReduced]);

  return (
    <span ref={ref}>
      {prefix}{typeof display === "number" && display % 1 !== 0 ? display.toFixed(1) : display}{suffix}
    </span>
  );
}

export function HeroStats() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: true, margin: "-40px" });

  return (
    <div ref={containerRef} className="grid grid-cols-2 sm:grid-cols-4 gap-x-6 gap-y-5">
      {stats.map((stat, i) => (
        <motion.div
          key={stat.label}
          className="flex flex-col gap-0.5"
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
        >
          <span className="text-2xl font-bold text-blue-700 tracking-tight leading-none">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
          </span>
          <span className="text-xs text-gray-500 font-medium leading-tight">{stat.label}</span>
        </motion.div>
      ))}
    </div>
  );
}
