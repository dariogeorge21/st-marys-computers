"use client";

import { useState } from "react";
import { Phone, MessageCircle, Menu, X, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Products", href: "/products" },
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="bg-white sticky top-0 z-40 shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Top bar with contact info */}
      <div className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-3 px-4 border-b border-gray-700">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center text-sm gap-4">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4 sm:gap-6">
            <div className="flex items-center gap-2 hover:text-blue-300 transition-colors">
              <MapPin className="w-4 h-4 text-blue-400 flex-shrink-0" />
              <span>Laxmi Nagar, New Delhi</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-gray-600"></div>
            <div className="flex items-center gap-2 hover:text-yellow-300 transition-colors">
              <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
              <span>Mon-Sat: 10AM-8PM</span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a 
              href="tel:+919910836286" 
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-green-600 hover:bg-green-700 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden sm:inline">+91 99108 36286</span>
              <span className="sm:hidden">Call</span>
            </a>
            <a 
              href="https://wa.me/919910836286" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-1.5 rounded-lg bg-green-700 hover:bg-green-800 transition-all duration-300 transform hover:scale-105 font-medium"
            >
              <MessageCircle className="w-4 h-4" />
              <span className="hidden sm:inline">WhatsApp</span>
              <span className="sm:hidden">Chat</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <div className="px-4 py-4 sm:py-5">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 sm:w-12 sm:h-12 relative group-hover:scale-110 transition-transform duration-300">
              <Image
                src="/NewLogo.png"
                alt="St Mary's Computers Logo"
                width={48}
                height={48}
                className="object-contain"
              />
            </div>
            <div className="flex flex-col">
              <div className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 group-hover:from-blue-700 group-hover:to-indigo-700 transition-all duration-300">
                St Mary&apos;s Computers
              </div>
              <div className="text-xs text-gray-500 font-medium">Expert Repair Services</div>
            </div>
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="relative px-4 py-2 text-gray-700 hover:text-blue-600 font-medium transition-colors duration-300 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}
          </nav>

          {/* Desktop CTA buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button 
              variant="outline" 
              size="sm" 
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold transition-all duration-300"
              asChild
            >
              <a href="tel:+919910836286" className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </Button>
            <Button 
              size="sm" 
              className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105"
              asChild
            >
              <a href="/contact" className="flex items-center gap-2">
                Book Repair
              </a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors duration-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile navigation */}
        {isMenuOpen && (
          <nav className="lg:hidden mt-4 pb-4 border-t border-gray-200 pt-4 animate-fade-in">
            <div className="flex flex-col space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 hover:bg-blue-50 font-medium py-3 px-4 rounded-lg transition-all duration-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="flex gap-3 pt-4 border-t border-gray-200 mt-4">
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="flex-1 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold"
                  asChild
                >
                  <a href="tel:+919910836286" className="flex items-center justify-center gap-2">
                    <Phone className="w-4 h-4" />
                    Call Now
                  </a>
                </Button>
                <Button 
                  size="sm" 
                  className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold"
                  asChild
                >
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
