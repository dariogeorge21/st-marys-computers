"use client";

export function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5">
      {/* Primary Action — Matching reference blue CTA */}
      <a
        href="tel:+919910836286"
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-700 text-white font-medium text-base shadow-sm hover:shadow-md transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 active:scale-[0.99]"
        aria-label="Call St Mary's Computers at +91 99108 36286"
      >
        Call: +91 99108 36286
      </a>

      {/* Secondary Action — Matching reference clean white bordered button */}
      <a
        href="https://wa.me/919910836286?text=Hi%20George%2C%20I%20need%20computer%20repair%20service."
        target="_blank"
        rel="noopener noreferrer"
        className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 rounded-xl bg-white hover:bg-slate-50 text-slate-800 font-medium text-base border border-slate-200/90 hover:border-slate-300 shadow-[0_1px_2px_rgba(0,0,0,0.03)] transition-all duration-150 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 active:scale-[0.99]"
        aria-label="Chat on WhatsApp with St Mary's Computers"
      >
        WhatsApp Us
      </a>
    </div>
  );
}
