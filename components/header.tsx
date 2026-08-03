"use client";

import { useState, useEffect, useCallback } from "react";
import { Phone, MessageCircle, Menu, X, Loader2 } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [loadingHref, setLoadingHref] = useState<string | null>(null);
  const pathname = usePathname();

  // Clear loading state whenever the route actually changes
  useEffect(() => {
    setLoadingHref(null);
    setIsMenuOpen(false);
  }, [pathname]);

  const handleNavClick = useCallback(
    (href: string) => {
      // Don't show loading if we're already on this page
      if (href === pathname) return;
      setLoadingHref(href);
    },
    [pathname]
  );

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl border-b border-gray-200 shadow-sm"
          : "bg-white border-b border-gray-100"
      }`}
    >
      {/* Top progress bar — shown while any nav item is loading */}
      <AnimatePresence>
        {loadingHref && (
          <motion.div
            key="progress-bar"
            className="absolute top-0 left-0 h-[2px] bg-gradient-to-r from-blue-500 via-indigo-500 to-blue-400 z-50"
            initial={{ width: "0%", opacity: 1 }}
            animate={{ width: "85%" }}
            exit={{ width: "100%", opacity: 0 }}
            transition={{
              width: { duration: 1.8, ease: "easeOut" },
              opacity: { duration: 0.3, delay: 0.05 },
            }}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-[68px]">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 rounded-lg"
            aria-label="St Mary's Computers — Home"
            onClick={() => handleNavClick("/")}
          >
            <div className="w-8 h-8 sm:w-9 sm:h-9 relative flex-shrink-0 group-hover:opacity-85 transition-opacity">
              <Image
                src="/NewLogo.png"
                alt="St Mary's Computers Logo"
                width={36}
                height={36}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-[15px] font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 tracking-[-0.01em]">
                St Mary&apos;s Computers
              </span>
              <span className="text-[11px] text-gray-500 font-medium mt-0.5">
                Expert Repair Services
              </span>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">
            {navigation.map((item) => {
              const isActive = pathname === item.href;
              const isLoading = loadingHref === item.href;

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => handleNavClick(item.href)}
                  aria-current={isActive ? "page" : undefined}
                  aria-busy={isLoading}
                  className={`
                    relative inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg
                    text-sm font-medium transition-all duration-200
                    focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2
                    ${isActive
                      ? "text-blue-600 bg-blue-50"
                      : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                    }
                    ${isLoading ? "opacity-70" : ""}
                  `}
                >
                  {/* Label — fades slightly during load */}
                  <span className={`transition-opacity duration-150 ${isLoading ? "opacity-50" : ""}`}>
                    {item.name}
                  </span>

                  {/* Active dot */}
                  {isActive && !isLoading && (
                    <motion.span
                      layoutId="active-nav-dot"
                      className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-blue-500"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      aria-hidden="true"
                    />
                  )}

                  {/* Spinner — shown while this item's route is loading */}
                  <AnimatePresence>
                    {isLoading && (
                      <motion.span
                        key="spinner"
                        initial={{ opacity: 0, scale: 0.6 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.6 }}
                        transition={{ duration: 0.15 }}
                        aria-hidden="true"
                      >
                        <Loader2 className="w-3 h-3 text-blue-500 animate-spin" />
                      </motion.span>
                    )}
                  </AnimatePresence>
                </Link>
              );
            })}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-2">
            <a
              href="https://wa.me/919910836286"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium
                text-gray-700 hover:text-gray-900
                bg-gray-100 hover:bg-green-50 border border-gray-200 hover:border-green-300
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400 focus-visible:ring-offset-2"
              aria-label="WhatsApp St Mary's Computers"
            >
              <MessageCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
              WhatsApp
            </a>
            <a
              href="tel:+919910836286"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold
                text-white bg-gradient-to-r from-blue-600 to-indigo-600
                hover:from-blue-700 hover:to-indigo-700
                shadow-sm hover:shadow-md hover:shadow-blue-500/20
                transition-all duration-200
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="Call St Mary's Computers"
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              Call Now
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="lg:hidden p-2 rounded-lg text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition-colors
              focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            aria-controls="mobile-nav"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isMenuOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              ) : (
                <motion.span
                  key="open"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.15 }}
                >
                  <Menu className="w-5 h-5" aria-hidden="true" />
                </motion.span>
              )}
            </AnimatePresence>
          </button>
        </div>

        {/* Mobile nav drawer */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              id="mobile-nav"
              key="mobile-nav"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.25, ease: "easeInOut" }}
              className="lg:hidden overflow-hidden border-t border-gray-100"
              aria-label="Mobile navigation"
            >
              <div className="py-3 flex flex-col gap-1">
                {navigation.map((item) => {
                  const isActive = pathname === item.href;
                  const isLoading = loadingHref === item.href;

                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => handleNavClick(item.href)}
                      aria-current={isActive ? "page" : undefined}
                      aria-busy={isLoading}
                      className={`
                        inline-flex items-center gap-2 px-4 py-2.5 rounded-lg
                        text-sm font-medium transition-all duration-150
                        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500
                        ${isActive
                          ? "text-blue-600 bg-blue-50"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                        }
                        ${isLoading ? "opacity-70" : ""}
                      `}
                    >
                      <span className={`flex-1 transition-opacity duration-150 ${isLoading ? "opacity-50" : ""}`}>
                        {item.name}
                      </span>
                      <AnimatePresence>
                        {isLoading && (
                          <motion.span
                            key="mobile-spinner"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.6 }}
                            transition={{ duration: 0.15 }}
                            aria-hidden="true"
                          >
                            <Loader2 className="w-3.5 h-3.5 text-blue-500 animate-spin" />
                          </motion.span>
                        )}
                        {isActive && !isLoading && (
                          <motion.span
                            key="mobile-active"
                            initial={{ opacity: 0, scale: 0.6 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"
                            aria-hidden="true"
                          />
                        )}
                      </AnimatePresence>
                    </Link>
                  );
                })}
                <div className="flex gap-2 pt-3 mt-2 border-t border-gray-100">
                  <a
                    href="https://wa.me/919910836286"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-medium
                      text-gray-700 bg-gray-100 hover:bg-green-50 border border-gray-200 hover:border-green-300
                      transition-all duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green-400"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-4 h-4 text-green-600" aria-hidden="true" />
                    WhatsApp
                  </a>
                  <a
                    href="tel:+919910836286"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-lg text-sm font-semibold
                      text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700
                      shadow-sm transition-all duration-200
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
                    aria-label="Call Now"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    Call Now
                  </a>
                </div>
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
