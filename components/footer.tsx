import { Phone, MessageCircle, MapPin, Mail, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-gray-950 via-gray-900 to-black text-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
        <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full mix-blend-multiply filter blur-3xl opacity-30"></div>
      </div>

      <div className="relative z-10">
        <div className="max-w-6xl mx-auto px-4 py-16 sm:py-20">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-12">
            {/* Company Info */}
            <div className="md:col-span-2 animate-fade-in">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/blackLogo.png"
                  alt="St Mary's Computers Logo"
                  width={48}
                  height={48}
                  className="object-contain"
                />
                <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
                  St Mary&apos;s Computers
                </h3>
              </div>
              <p className="text-gray-400 mb-8 max-w-md leading-relaxed">
                Your trusted computer repair expert in New Delhi. Over 20 years of experience serving the community with quality service guarantee.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-blue-600 to-blue-700 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-1">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-blue-300 transition-colors">Laxmi Nagar, New Delhi - 110092</span>
                </div>
                <div className="flex items-start gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-green-600 to-green-700 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-1">
                    <Phone className="w-5 h-5" />
                  </div>
                  <a href="tel:+919910836286" className="text-gray-300 group-hover:text-green-300 transition-colors font-medium">
                    +91 99108 36286
                  </a>
                </div>
                <div className="flex items-start gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-purple-600 to-purple-700 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-1">
                    <Mail className="w-5 h-5" />
                  </div>
                  <a href="mailto:stmaryscomputers@gmail.com" className="text-gray-300 group-hover:text-purple-300 transition-colors font-medium">
                    stmaryscomputers@gmail.com
                  </a>
                </div>
                <div className="flex items-start gap-4 group p-3 rounded-lg hover:bg-white/5 transition-colors">
                  <div className="p-2 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg group-hover:scale-110 transition-transform flex-shrink-0 mt-1">
                    <Clock className="w-5 h-5" />
                  </div>
                  <span className="text-gray-300 group-hover:text-yellow-300 transition-colors">Mon-Sat: 10:00 AM - 8:00 PM</span>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                <h4 className="text-lg font-bold text-white">Our Services</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/services/laptop-repair" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>Laptop Repair</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/desktop-repair" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>Desktop Repair</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/printer-repair" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>Printer & Scanner</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/ups-service" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>UPS Sales & Service</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/onsite-repair" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>On-site Repairs</span>
                  </Link>
                </li>
                <li>
                  <Link href="/services/accessories" className="text-gray-400 hover:text-blue-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>Accessories & Upgrades</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                <h4 className="text-lg font-bold text-white">Quick Links</h4>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link href="/products" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>Products</span>
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>About</span>
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>Contact Us</span>
                  </Link>
                </li>
                <li>
                  <Link href="/faq" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>FAQ</span>
                  </Link>
                </li>
                <li>
                  <Link href="/privacy-policy" className="text-gray-400 hover:text-indigo-400 transition-colors flex items-center gap-2 group">
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-all transform group-hover:translate-x-1" />
                    <span>Privacy Policy</span>
                  </Link>
                </li>
              </ul>
            </div>

            {/* Social & Legal */}
            <div className="animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="flex items-center gap-3 mb-6">
                <div className="h-1 w-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
                <h4 className="text-lg font-bold text-white">Connect</h4>
              </div>
              <div className="flex flex-wrap gap-3 mb-8">
                <a 
                  href="https://wa.me/919910836286" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-3 bg-gradient-to-br from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg"
                  title="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </a>
                <a 
                  href="tel:+919910836286"
                  className="p-3 bg-gradient-to-br from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg"
                  title="Phone"
                >
                  <Phone className="w-5 h-5" />
                </a>
                <a 
                  href="mailto:stmaryscomputers@gmail.com"
                  className="p-3 bg-gradient-to-br from-red-600 to-red-700 hover:from-red-500 hover:to-red-600 rounded-lg transition-all transform hover:scale-110 hover:shadow-lg"
                  title="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
              <div className="space-y-2">
                <Link href="/terms-of-service" className="text-sm text-gray-500 hover:text-gray-300 transition-colors block">
                  Terms of Service
                </Link>
                <Link href="/privacy-policy" className="text-sm text-gray-500 hover:text-gray-300 transition-colors block">
                  Privacy Policy
                </Link>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="my-12 h-px bg-gradient-to-r from-transparent via-gray-700 to-transparent"></div>

          {/* Bottom section */}
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6 animate-fade-in" style={{animationDelay: '400ms'}}>
            <div className="text-center sm:text-left">
              <p className="text-gray-500 text-sm">
                © 2025 St Mary&apos;s Computers. All rights reserved.
              </p>
              <p className="text-gray-600 text-xs mt-2">
                Professional Computer Repair Services in New Delhi
              </p>
            </div>
            <div className="flex items-center gap-2 text-gray-500 text-sm">
              <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
              <span>Service Available</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile padding for sticky CTA */}
      <div className="h-14 md:hidden"></div>
    </footer>
  );
}
