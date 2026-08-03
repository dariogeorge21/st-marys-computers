"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Phone, MessageCircle, Search, ArrowRight } from "lucide-react";

const quickLinks = [
  { name: "Computer Repair Services", href: "/services" },
  { name: "Laptop & Desktop Products", href: "/products" },
  { name: "About St Mary's Computers", href: "/about" },
  { name: "Contact & Support", href: "/contact" },
];

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Decorative background orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.15) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(139,92,246,0.1) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        {/* Dot grid */}
        <div
          className="absolute inset-0 opacity-[0.1]"
          style={{
            backgroundImage: "radial-gradient(circle, rgba(99,102,241,0.6) 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-16">
        <div className="max-w-2xl w-full text-center">
          {/* 404 number */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <div
              className="text-[9rem] sm:text-[12rem] font-extrabold leading-none tracking-tighter
                bg-gradient-to-br from-blue-200 via-indigo-200 to-purple-200 bg-clip-text text-transparent
                select-none"
              aria-hidden="true"
            >
              404
            </div>
          </motion.div>

          {/* Icon */}
          <motion.div
            className="flex justify-center -mt-4 mb-6"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            <span className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-white border border-blue-100 shadow-md shadow-blue-100/50">
              <Search className="w-7 h-7 text-blue-500" aria-hidden="true" />
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            Page not found
          </motion.h1>

          <motion.p
            className="text-base text-gray-500 mb-10 leading-relaxed max-w-md mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.28 }}
          >
            The page you&apos;re looking for doesn&apos;t exist or may have been moved.
            Let&apos;s get you back to something useful.
          </motion.p>

          {/* Primary actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-12"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.36 }}
          >
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                text-white font-semibold text-sm
                bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                shadow-md hover:shadow-lg hover:shadow-blue-500/20
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              Back to Home
            </Link>
            <a
              href="tel:+919910836286"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                text-gray-700 hover:text-gray-900 font-semibold text-sm
                bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50
                shadow-sm hover:shadow-md
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Phone className="w-4 h-4 text-blue-500" aria-hidden="true" />
              Call for Help
            </a>
            <a
              href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20help%20finding%20a%20page"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                text-gray-700 hover:text-gray-900 font-semibold text-sm
                bg-white border border-gray-200 hover:border-green-300 hover:bg-green-50
                shadow-sm hover:shadow-md
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
            >
              <MessageCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
              WhatsApp Us
            </a>
          </motion.div>

          {/* Quick links */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.44 }}
          >
            <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">
              Or try one of these pages
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 max-w-md mx-auto">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="group flex items-center justify-between gap-2 px-4 py-3 rounded-xl
                    bg-white/80 hover:bg-white border border-gray-200 hover:border-blue-200
                    text-sm text-gray-600 hover:text-blue-600 font-medium
                    shadow-sm hover:shadow-md
                    transition-all duration-200 text-left
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                >
                  <span>{link.name}</span>
                  <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all duration-200" aria-hidden="true" />
                </Link>
              ))}
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
}
