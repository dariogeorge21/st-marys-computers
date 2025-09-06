"use client";

import { useState } from "react";
import { Phone, MessageCircle, Menu, X, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      {/* Top bar with contact info */}
      <div className="bg-gray-900 text-white py-2 px-4">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              <span>Laxmi Nagar, New Delhi - 110092</span>
            </div>
            <span className="hidden sm:block">|</span>
            <span>Mon-Sat: 10AM-8PM</span>
          </div>
          <div className="flex items-center gap-4 mt-1 sm:mt-0">
            <a 
              href="tel:+919910836286" 
              className="flex items-center gap-1 hover:text-blue-300 transition-colors"
            >
              <Phone className="w-4 h-4" />
              +91 99108 36286
            </a>
            <a 
              href="https://wa.me/919910836286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-1 hover:text-green-300 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 py-4">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              St Mary's Computers
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden md:flex items-center gap-3">
            <Button variant="outline" size="sm" asChild>
              <a href="tel:+919910836286">Call Now</a>
            </Button>
            <Button size="sm" asChild>
              <a href="/contact">Book Repair</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-gray-200 pt-4">
            <div className="flex flex-col space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-3">
                <Button variant="outline" size="sm" className="flex-1" asChild>
                  <a href="tel:+919910836286">Call Now</a>
                </Button>
                <Button size="sm" className="flex-1" asChild>
                  <a href="/contact">Book Repair</a>
                </Button>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}
