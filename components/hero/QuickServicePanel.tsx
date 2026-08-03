"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Phone, MessageCircle, MapPin, Clock, Zap, ChevronRight } from "lucide-react";

function LiveDot() {
  return (
    <span className="relative inline-flex h-2.5 w-2.5" aria-label="Live — available now">
      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
      <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500" />
    </span>
  );
}

function PanelRow({
  icon: Icon,
  label,
  value,
  href,
  iconBg = "bg-blue-50",
  iconColor = "text-blue-600",
  valueColor = "text-gray-900",
  isLink = false,
}: {
  icon: React.ElementType;
  label: string;
  value: string;
  href?: string;
  iconBg?: string;
  iconColor?: string;
  valueColor?: string;
  isLink?: boolean;
}) {
  const inner = (
    <div className="flex items-center justify-between gap-3 w-full">
      <div className="flex items-center gap-3 min-w-0">
        <span className={`flex-shrink-0 w-9 h-9 rounded-lg flex items-center justify-center ${iconBg} ${iconColor}`}>
          <Icon className="w-4 h-4" aria-hidden="true" />
        </span>
        <div className="min-w-0">
          <p className="text-xs text-gray-500 font-medium leading-none mb-1">{label}</p>
          <p className={`text-sm font-semibold ${valueColor} truncate`}>{value}</p>
        </div>
      </div>
      {isLink && (
        <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0 group-hover:text-gray-500 transition-colors" aria-hidden="true" />
      )}
    </div>
  );

  if (href) {
    return (
      <a
        href={href}
        target={href.startsWith("http") ? "_blank" : undefined}
        rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
        className="group flex items-center px-4 py-3.5 rounded-xl hover:bg-gray-50 transition-colors duration-150 cursor-pointer"
        aria-label={`${label}: ${value}`}
      >
        {inner}
      </a>
    );
  }

  return (
    <div className="flex items-center px-4 py-3.5">
      {inner}
    </div>
  );
}

const panelVariants: Variants = {
  hidden: { opacity: 0, x: 30, y: 10 },
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.3 },
  },
};

export function QuickServicePanel() {
  return (
    <motion.div
      className="relative w-full"
      variants={panelVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Subtle glow behind panel */}
      <div
        className="absolute -inset-4 rounded-3xl opacity-30"
        style={{
          background: "radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.15), transparent 70%)",
          filter: "blur(20px)",
        }}
        aria-hidden="true"
      />

      {/* Main panel — white card */}
      <div
        className="relative rounded-2xl border border-gray-200 overflow-hidden
          bg-white/95 backdrop-blur-sm
          shadow-[0_4px_6px_-1px_rgba(0,0,0,0.07),0_20px_50px_-10px_rgba(0,0,0,0.12)]"
        role="complementary"
        aria-label="Quick service contact panel"
      >
        {/* Panel header */}
        <div className="px-5 py-4 border-b border-gray-100 flex items-center justify-between bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="flex items-center gap-2.5">
            <LiveDot />
            <span className="text-sm font-semibold text-gray-900">Live Service Status</span>
          </div>
          <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-green-100 text-green-700 border border-green-200">
            Open Now
          </span>
        </div>

        {/* Status row */}
        <div className="px-5 py-4 border-b border-gray-100 bg-gray-50/50">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-xs text-gray-500 mb-1">Technician Status</p>
              <p className="text-sm font-semibold text-green-600">🟢 Available — Ready to Help</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500 mb-1">Est. Response</p>
              <p className="text-sm font-bold text-gray-900">15–30 min</p>
            </div>
          </div>
        </div>

        {/* Contact rows */}
        <div className="py-1">
          <PanelRow
            icon={Phone}
            label="One-Click Call"
            value="+91 99108 36286"
            href="tel:+919910836286"
            iconBg="bg-blue-50"
            iconColor="text-blue-600"
            valueColor="text-blue-700"
            isLink
          />
          <div className="mx-4 h-px bg-gray-100" />
          <PanelRow
            icon={MessageCircle}
            label="WhatsApp Chat"
            value="Instant response"
            href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20repair%20service"
            iconBg="bg-green-50"
            iconColor="text-green-600"
            valueColor="text-green-700"
            isLink
          />
        </div>

        {/* Info rows */}
        <div className="border-t border-gray-100 py-1">
          <PanelRow
            icon={MapPin}
            label="Service Area"
            value="New Delhi & Delhi-NCR"
            iconBg="bg-violet-50"
            iconColor="text-violet-600"
          />
          <div className="mx-4 h-px bg-gray-100" />
          <PanelRow
            icon={Clock}
            label="Business Hours"
            value="Mon–Sat · 10 AM – 8 PM"
            iconBg="bg-amber-50"
            iconColor="text-amber-600"
          />
          <div className="mx-4 h-px bg-gray-100" />
          <PanelRow
            icon={Zap}
            label="Emergency Support"
            value="Same-day service available"
            iconBg="bg-orange-50"
            iconColor="text-orange-600"
            valueColor="text-orange-700"
          />
        </div>

        {/* Bottom CTA strip */}
        <div className="p-4 border-t border-gray-100 bg-gray-50/50">
          <a
            href="tel:+919910836286"
            className="block w-full text-center py-3.5 px-4 rounded-xl font-semibold text-sm text-white
              bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
              shadow-md hover:shadow-lg hover:shadow-blue-500/20
              transition-all duration-200
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
            aria-label="Call now for urgent computer repair service"
          >
            Call for Urgent Service
          </a>
        </div>
      </div>

      {/* Decorative floating elements */}
      <motion.div
        className="absolute -top-3 -right-3 w-6 h-6 rounded-full bg-blue-400/20 border border-blue-300/50"
        animate={{ y: [0, -6, 0], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        aria-hidden="true"
      />
      <motion.div
        className="absolute -bottom-2 -left-2 w-4 h-4 rounded-full bg-indigo-400/20 border border-indigo-300/40"
        animate={{ y: [0, 5, 0], opacity: [0.5, 0.9, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.5 }}
        aria-hidden="true"
      />
    </motion.div>
  );
}
