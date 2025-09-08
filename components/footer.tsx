import { Phone, MessageCircle, MapPin, Mail, Clock } from "lucide-react";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold text-blue-400 mb-4">
              St Mary's Computers
            </h3>
            <p className="text-gray-300 mb-6 max-w-md">
              Your trusted computer repair expert in New Delhi. Personal service from owner George CV
              with over 20 years of experience in computer repair and sales.
            </p>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <MapPin className="w-5 h-5 text-blue-400" />
                <span>Laxmi Nagar, New Delhi - 110092</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-green-400" />
                <a href="tel:+919910836286" className="hover:text-blue-300">
                  +91 99108 36286
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-purple-400" />
                <a href="mailto:stmaryscomputers@gmail.com" className="hover:text-blue-300">
                  stmaryscomputers@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-yellow-400" />
                <span>Mon-Sat: 10:00 AM - 8:00 PM</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/services/laptop-repair" className="hover:text-blue-300">
                  Laptop Repair
                </Link>
              </li>
              <li>
                <Link href="/services/desktop-repair" className="hover:text-blue-300">
                  Desktop Repair
                </Link>
              </li>
              <li>
                <Link href="/services/printer-repair" className="hover:text-blue-300">
                  Printer & Scanner
                </Link>
              </li>
              <li>
                <Link href="/services/ups-service" className="hover:text-blue-300">
                  UPS Sales & Service
                </Link>
              </li>
              <li>
                <Link href="/services/onsite-repair" className="hover:text-blue-300">
                  On-site Repairs
                </Link>
              </li>
              <li>
                <Link href="/services/accessories" className="hover:text-blue-300">
                  Accessories & Upgrades
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-300">
              <li>
                <Link href="/" className="hover:text-blue-300">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-300">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-blue-300">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-blue-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/privacy-policy" className="hover:text-blue-300">
                  Privacy Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom section */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2025 St Mary's Computers. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <a 
                href="https://wa.me/919910836286" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-green-400 hover:text-green-300"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
              <a 
                href="tel:+919910836286"
                className="text-blue-400 hover:text-blue-300"
              >
                <Phone className="w-6 h-6" />
              </a>
              <a 
                href="mailto:stmaryscomputers@gmail.com"
                className="text-red-400 hover:text-red-300"
              >
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile padding for sticky CTA */}
      <div className="h-14 md:hidden"></div>
    </footer>
  );
}
