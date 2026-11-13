"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useReducedMotion } from "framer-motion";

interface StatItem {
  value: number;
  suffix: string;
  prefix?: string;
  label: string;
  subtext: string;
}

const stats: StatItem[] = [
  { value: 18, suffix: "+", label: "Years Experience", subtext: "Serving Delhi since 2007" },
  { value: 10, suffix: "k+", label: "Devices Repaired", subtext: "Laptops, PCs & Printers" },
  { value: 4.9, suffix: "★", label: "Google Rating", subtext: "127+ verified reviews" },
  { value: 30, suffix: "m", prefix: "<", label: "Avg. Response", subtext: "Fast doorstep pickup" },
];

function AnimatedCounter({ value, suffix, prefix = "" }: { value: number; suffix: string; prefix?: string }) {
  const [display, setDisplay] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    if (!isInView) return;
    if (prefersReduced) {
      setDisplay(value);
      return;
    }
    const isDecimal = value % 1 !== 0;
    const duration = 1200;
    const startTime = performance.now();

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
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
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 pt-4 border-t border-slate-200/80">
      {stats.map((stat) => (
        <div key={stat.label} className="flex flex-col">
          <span className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900">
            <AnimatedCounter value={stat.value} suffix={stat.suffix} prefix={stat.prefix} />
          </span>
          <span className="text-xs font-semibold text-slate-800 mt-1">
            {stat.label}
          </span>
          <span className="text-[11px] text-slate-500 hidden sm:block">
            {stat.subtext}
          </span>
        </div>
      ))}
    </div>
  );
}
