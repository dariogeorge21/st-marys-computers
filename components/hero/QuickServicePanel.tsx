"use client";

import { useState } from "react";
import { Laptop, Monitor, Apple, Printer, Phone, MessageCircle, Clock, ShieldCheck, Check } from "lucide-react";

type DeviceCategory = "laptop" | "desktop" | "mac" | "printer";

interface ServiceOption {
  id: string;
  name: string;
  turnaround: string;
  warranty: string;
  badge: string;
}

const servicesByDevice: Record<DeviceCategory, { label: string; icon: React.ElementType; options: ServiceOption[] }> = {
  laptop: {
    label: "Laptop",
    icon: Laptop,
    options: [
      { id: "screen", name: "Screen Replacement", turnaround: "Same-Day (2-3 hrs)", warranty: "90-Day Warranty", badge: "Most Common" },
      { id: "motherboard", name: "Motherboard / No Power", turnaround: "24-48 hrs (Chip-Level)", warranty: "90-Day Warranty", badge: "Expert Fix" },
      { id: "battery", name: "Battery & Charging", turnaround: "1-2 hrs", warranty: "6-Month Warranty", badge: "Genuine Parts" },
      { id: "ssd", name: "SSD Speed Upgrade", turnaround: "Same-Day (1 hr)", warranty: "3-5 Yr Brand Warranty", badge: "Instant Speed" },
      { id: "liquid", name: "Water / Liquid Damage", turnaround: "Same-Day Diagnosis", warranty: "Component Guarantee", badge: "Urgent Care" },
      { id: "hinge", name: "Hinge & Body Repair", turnaround: "Same-Day", warranty: "Durability Tested", badge: "Physical Repair" },
    ],
  },
  desktop: {
    label: "Desktop PC",
    icon: Monitor,
    options: [
      { id: "nopower", name: "No Power / SMPS Fault", turnaround: "Same-Day Doorstep", warranty: "1-Yr OEM Warranty", badge: "Home Visit" },
      { id: "display", name: "No Display / Beep Code", turnaround: "1-2 hrs", warranty: "Full Diagnosis", badge: "Hardware Check" },
      { id: "cleanup", name: "Thermal Paste & Deep Clean", turnaround: "1 hr", warranty: "Performance Tested", badge: "Cooling Fix" },
      { id: "storage", name: "SSD / RAM Upgrade", turnaround: "Under 1 hr", warranty: "Brand Warranty", badge: "Speed Boost" },
      { id: "os", name: "OS & Data Recovery", turnaround: "Same-Day", warranty: "Secure Backup", badge: "Safe & Private" },
      { id: "custom", name: "Custom PC Assembly", turnaround: "24 hrs", warranty: "Full Setup", badge: "Gaming / Office" },
    ],
  },
  mac: {
    label: "MacBook",
    icon: Apple,
    options: [
      { id: "macscreen", name: "Retina Display Replacement", turnaround: "Same-Day", warranty: "OEM Grade Screen", badge: "Air & Pro" },
      { id: "macbattery", name: "MacBook Battery Service", turnaround: "Same-Day", warranty: "OEM Replacement", badge: "Original Spec" },
      { id: "logicboard", name: "Logic Board Diagnostics", turnaround: "24-48 hrs", warranty: "Chip-Level Fix", badge: "Specialist" },
      { id: "keyboard", name: "Keyboard & Trackpad Repair", turnaround: "Same-Day", warranty: "OEM Grade", badge: "Full Assembly" },
    ],
  },
  printer: {
    label: "Printer & UPS",
    icon: Printer,
    options: [
      { id: "jam", name: "Paper Jam & Roller Service", turnaround: "Same-Day Doorstep", warranty: "Service Guarantee", badge: "Home & Office" },
      { id: "cartridge", name: "Cartridge & Ink System", turnaround: "Same-Day", warranty: "Clean Output", badge: "Laser & Inkjet" },
      { id: "upsbattery", name: "UPS Battery Replacement", turnaround: "Same-Day Doorstep", warranty: "1-Yr Battery Warranty", badge: "Power Backup" },
      { id: "network", name: "WiFi & Network Printing", turnaround: "On-Site Visit", warranty: "Multi-Device Config", badge: "Office Setup" },
    ],
  },
};

export function QuickServicePanel() {
  const [device, setDevice] = useState<DeviceCategory>("laptop");
  const currentCategory = servicesByDevice[device];
  const [selectedIssueId, setSelectedIssueId] = useState<string>(currentCategory.options[0].id);

  const selectedService =
    currentCategory.options.find((opt) => opt.id === selectedIssueId) || currentCategory.options[0];

  const handleDeviceChange = (newDevice: DeviceCategory) => {
    setDevice(newDevice);
    setSelectedIssueId(servicesByDevice[newDevice].options[0].id);
  };

  const whatsappMessage = encodeURIComponent(
    `Hi George, I need repair service for ${currentCategory.label} - ${selectedService.name} in Delhi.`
  );

  return (
    <div className="relative w-full">
      {/* Subtle outer backdrop shadow */}
      <div className="relative rounded-2xl bg-white border border-slate-200/90 shadow-[0_4px_24px_-4px_rgba(15,23,42,0.08),0_1px_2px_rgba(15,23,42,0.04)] overflow-hidden">
        {/* Terminal Header */}
        <div className="px-5 py-3.5 bg-slate-50/90 border-b border-slate-200/80 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-xs font-semibold text-slate-800 tracking-tight">
              Live Dispatch Desk
            </span>
          </div>
          <span className="text-[11px] font-medium text-slate-500">
            Laxmi Nagar · East Delhi
          </span>
        </div>

        {/* Device Category Tabs */}
        <div className="p-4 sm:p-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
            Select Your Device
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 p-1 bg-slate-100 rounded-xl">
            {(Object.keys(servicesByDevice) as DeviceCategory[]).map((key) => {
              const item = servicesByDevice[key];
              const Icon = item.icon;
              const isActive = device === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => handleDeviceChange(key)}
                  className={`flex items-center justify-center gap-1.5 py-2 px-2.5 rounded-lg text-xs font-medium transition-all duration-150 select-none ${
                    isActive
                      ? "bg-white text-slate-900 shadow-sm font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                  }`}
                  aria-pressed={isActive}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-600" : "text-slate-400"}`} />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>

          {/* Issue Selector Chips */}
          <div className="mt-4">
            <p className="text-xs font-semibold uppercase tracking-wider text-slate-500 mb-2.5">
              Select Common Issue
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {currentCategory.options.map((option) => {
                const isSelected = selectedIssueId === option.id;
                return (
                  <button
                    key={option.id}
                    type="button"
                    onClick={() => setSelectedIssueId(option.id)}
                    className={`flex items-center justify-between p-2.5 rounded-xl border text-left transition-all duration-150 select-none ${
                      isSelected
                        ? "bg-blue-50/60 border-blue-500/80 text-blue-950 shadow-xs"
                        : "bg-white border-slate-200/80 text-slate-700 hover:border-slate-300 hover:bg-slate-50/70"
                    }`}
                  >
                    <div className="min-w-0 pr-2">
                      <p className={`text-xs font-medium leading-tight truncate ${isSelected ? "text-blue-950 font-semibold" : "text-slate-800"}`}>
                        {option.name}
                      </p>
                      <p className="text-[10px] text-slate-500 mt-0.5 truncate">
                        {option.turnaround}
                      </p>
                    </div>
                    {isSelected ? (
                      <Check className="w-3.5 h-3.5 text-blue-600 flex-shrink-0" />
                    ) : (
                      <span className="w-3.5 h-3.5 rounded-full border border-slate-300 flex-shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Service Diagnostic Box */}
          <div className="mt-4 p-3.5 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-slate-400" /> Turnaround:
              </span>
              <span className="font-semibold text-slate-800">
                {selectedService.turnaround}
              </span>
            </div>

            <div className="flex items-center justify-between text-xs">
              <span className="text-slate-500 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-slate-400" /> Coverage:
              </span>
              <span className="font-semibold text-slate-800">
                {selectedService.warranty}
              </span>
            </div>

            <div className="pt-2 border-t border-slate-200/70 flex items-center justify-between text-[11px] text-slate-500">
              <span>Technician: <strong>George CV</strong></span>
              <span className="text-emerald-700 font-medium">Free Store Diagnosis</span>
            </div>
          </div>

          {/* Action Pathways */}
          <div className="mt-4 grid grid-cols-2 gap-2.5">
            <a
              href={`https://wa.me/919910836286?text=${whatsappMessage}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-medium text-xs sm:text-sm transition-all shadow-xs text-center"
            >
              <MessageCircle className="w-4 h-4 flex-shrink-0" />
              <span>Get WhatsApp Quote</span>
            </a>

            <a
              href="tel:+919910836286"
              className="inline-flex items-center justify-center gap-2 px-3 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-medium text-xs sm:text-sm transition-all shadow-xs text-center"
            >
              <Phone className="w-3.5 h-3.5 flex-shrink-0" />
              <span>Call Technician</span>
            </a>
          </div>

          <p className="mt-3 text-center text-[11px] text-slate-400">
            Workshop: St Mary&apos;s Computers, Laxmi Nagar · Open Mon–Sat 10:00–20:00
          </p>
        </div>
      </div>
    </div>
  );
}
