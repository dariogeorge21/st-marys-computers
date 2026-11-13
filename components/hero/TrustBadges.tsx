"use client";

import { ShieldCheck, Clock, Award, Star } from "lucide-react";

const trustPoints = [
  { icon: Clock, label: "Same-Day Doorstep Service" },
  { icon: Award, label: "Genuine OEM Parts" },
  { icon: ShieldCheck, label: "90-Day Repair Guarantee" },
  { icon: Star, label: "4.9★ Rated (127+ Reviews)" },
];

export function TrustBadges() {
  return (
    <div
      className="flex flex-wrap items-center gap-2 sm:gap-2.5 pt-1"
      aria-label="Trust indicators"
    >
      {trustPoints.map((item) => {
        const Icon = item.icon;
        return (
          <span
            key={item.label}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-slate-700 bg-slate-50 border border-slate-200/80 shadow-[0_1px_2px_rgba(0,0,0,0.02)] transition-colors hover:bg-slate-100/80"
          >
            <Icon className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" aria-hidden="true" />
            <span>{item.label}</span>
          </span>
        );
      })}
    </div>
  );
}
