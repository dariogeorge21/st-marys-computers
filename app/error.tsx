"use client";

import { useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Home, Phone, MessageCircle, RefreshCcw, AlertTriangle } from "lucide-react";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function ErrorPage({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    // Log the error to the console for debugging
    console.error("[ErrorBoundary]", error);
  }, [error]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 flex flex-col">
      {/* Decorative background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute -top-40 -left-40 w-[500px] h-[500px] rounded-full opacity-50"
          style={{ background: "radial-gradient(circle, rgba(239,68,68,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
        />
        <div
          className="absolute -top-20 -right-20 w-[400px] h-[400px] rounded-full opacity-40"
          style={{ background: "radial-gradient(circle, rgba(59,130,246,0.1) 0%, transparent 70%)", filter: "blur(70px)" }}
        />
        <div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] rounded-full opacity-30"
          style={{ background: "radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%)", filter: "blur(60px)" }}
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

      {/* Mini header */}
      <header className="relative z-10 border-b border-white/60 bg-white/70 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center">
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label="St Mary's Computers — Go to homepage"
          >
            <Image src="/NewLogo.png" alt="St Mary's Computers Logo" width={34} height={34} className="object-contain group-hover:opacity-80 transition-opacity" />
            <span className="text-[15px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">
              St Mary&apos;s Computers
            </span>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex items-center justify-center px-4 py-16" role="main">
        <div className="max-w-xl w-full text-center">

          {/* Icon */}
          <motion.div
            className="flex justify-center mb-6"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
          >
            <div className="relative">
              <span className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-white border border-red-100 shadow-lg shadow-red-100/40">
                <AlertTriangle className="w-9 h-9 text-red-400" aria-hidden="true" />
              </span>
              {/* Subtle pulse ring */}
              <span className="absolute inset-0 rounded-2xl border-2 border-red-200/60 animate-ping" style={{ animationDuration: "2s" }} aria-hidden="true" />
            </div>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.15 }}
          >
            Something went wrong
          </motion.h1>

          <motion.p
            className="text-base text-gray-500 mb-8 leading-relaxed max-w-sm mx-auto"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.22 }}
          >
            An unexpected error occurred on this page. You can try refreshing, or
            go back to the homepage to continue browsing.
          </motion.p>

          {/* Error digest — shown in development for debugging */}
          {error.digest && (
            <motion.div
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-red-50 border border-red-100 mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              role="status"
              aria-label="Error reference code"
            >
              <span className="text-xs text-red-500 font-mono">Error ref: {error.digest}</span>
            </motion.div>
          )}

          {/* Primary actions */}
          <motion.div
            className="flex flex-col sm:flex-row gap-3 justify-center mb-10"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.3 }}
          >
            {/* Try again */}
            <button
              onClick={reset}
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                text-white font-semibold text-sm
                bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                shadow-md hover:shadow-lg hover:shadow-blue-500/20
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="Try loading the page again"
            >
              <RefreshCcw className="w-4 h-4" aria-hidden="true" />
              Try Again
            </button>

            {/* Go home */}
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl
                text-gray-700 hover:text-gray-900 font-semibold text-sm
                bg-white border border-gray-200 hover:border-blue-300 hover:bg-blue-50
                shadow-sm hover:shadow-md
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
            >
              <Home className="w-4 h-4 text-blue-500" aria-hidden="true" />
              Back to Home
            </Link>
          </motion.div>

          {/* Contact strip */}
          <motion.div
            className="rounded-2xl bg-white/80 border border-gray-200 p-6 shadow-sm"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.38 }}
          >
            <p className="text-sm font-semibold text-gray-700 mb-1">Need immediate help?</p>
            <p className="text-xs text-gray-500 mb-4">
              Our team is available Mon–Sat, 10 AM – 8 PM. Reach us directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-2">
              <a
                href="tel:+919910836286"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                  text-sm font-semibold text-white
                  bg-blue-600 hover:bg-blue-700
                  shadow-sm hover:shadow-md
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                aria-label="Call St Mary's Computers"
              >
                <Phone className="w-4 h-4" aria-hidden="true" />
                +91 99108 36286
              </a>
              <a
                href="https://wa.me/919910836286?text=Hi%2C%20I%20encountered%20an%20error%20on%20your%20website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl
                  text-sm font-semibold text-gray-700 hover:text-gray-900
                  bg-gray-50 hover:bg-green-50 border border-gray-200 hover:border-green-300
                  transition-all duration-200
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
                aria-label="Chat on WhatsApp"
              >
                <MessageCircle className="w-4 h-4 text-green-500" aria-hidden="true" />
                WhatsApp Chat
              </a>
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer strip */}
      <footer className="relative z-10 border-t border-white/60 bg-white/70 backdrop-blur-sm py-4">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-400">
          <p>© {new Date().getFullYear()} St Mary&apos;s Computers · Laxmi Nagar, New Delhi</p>
          <p>Mon–Sat · 10 AM – 8 PM · +91 99108 36286</p>
        </div>
      </footer>
    </div>
  );
}
