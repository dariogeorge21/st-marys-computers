import { Phone, MessageCircle, MapPin, Clock, Star, Shield, Wrench, Monitor } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "St Mary's Computers",
    "image": "https://stmaryscomputers.com/images/shop-front.jpg",
    "description": "Fast & reliable laptop, desktop and printer repair in Laxmi Nagar. On-site service across Delhi.",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Laxmi Nagar",
      "addressLocality": "New Delhi",
      "postalCode": "110092",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6304,
      "longitude": 77.2768
    },
    "url": "https://stmaryscomputers.com",
    "telephone": "+919910836286",
    "email": "stmaryscomputers@gmail.com",
    "priceRange": "₹₹",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        "opens": "10:00",
        "closes": "20:00"
      }
    ],
    "areaServed": [
      {
        "@type": "City",
        "name": "New Delhi"
      },
      {
        "@type": "Place",
        "name": "Laxmi Nagar"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Computer Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laptop Repair",
            "description": "Professional laptop repair services including screen replacement, battery replacement, and motherboard repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desktop Repair",
            "description": "Complete desktop computer repair and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Printer Repair",
            "description": "Printer and scanner repair, installation and maintenance services"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "George CV"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Your Trusted Computer & Repair Expert in New Delhi
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Fast, reliable laptop, desktop and printer repair in Laxmi Nagar.
                Personal service from owner George CV - not a call center. Same-day support available.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button
                  size="lg"
                  className="bg-green-600 hover:bg-green-700 text-white"
                  asChild
                >
                  <a href="tel:+919910836286" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call Now: +91 99108 36286
                  </a>
                </Button>

                <Button
                  size="lg"
                  variant="outline"
                  className="border-green-600 text-green-600 hover:bg-green-50"
                  asChild
                >
                  <a
                    href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20repair%20service"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>

              <div className="flex items-center gap-6 text-sm text-gray-600">
                <div className="flex items-center gap-2">
                  <MapPin className="w-4 h-4" />
                  Laxmi Nagar, New Delhi
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  Mon-Sat: 10AM-8PM
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-6 text-center">Why Choose St Mary's?</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Shield className="w-6 h-6 text-green-600" />
                    <span>30-day repair warranty</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Wrench className="w-6 h-6 text-blue-600" />
                    <span>Free diagnostics</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor className="w-6 h-6 text-purple-600" />
                    <span>Genuine parts only</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <span>4.8★ rating (127 reviews)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Computer Repair Services in Laxmi Nagar
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Professional repair services for all your computer needs. Fast turnaround, transparent pricing, and genuine parts.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Laptop Repair</h3>
              <p className="text-gray-600 mb-4">
                Screen replacement, battery issues, motherboard repair, keyboard problems, and more.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Screen & LCD replacement</li>
                <li>• Battery replacement</li>
                <li>• Motherboard repair</li>
                <li>• Keyboard & trackpad fix</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desktop Repair</h3>
              <p className="text-gray-600 mb-4">
                Complete desktop computer repair, upgrades, and maintenance services.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Hardware diagnostics</li>
                <li>• Component replacement</li>
                <li>• Performance upgrades</li>
                <li>• Virus removal</li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Printer & Scanner</h3>
              <p className="text-gray-600 mb-4">
                Printer installation, repair, and maintenance for home and office use.
              </p>
              <ul className="text-sm text-gray-500 space-y-1">
                <li>• Printer installation</li>
                <li>• Cartridge replacement</li>
                <li>• Network setup</li>
                <li>• Scanner configuration</li>
              </ul>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Need Computer Repair? Contact Us Today
          </h2>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call Us</h3>
              <p className="text-gray-600 mb-3">Speak directly with George CV</p>
              <a
                href="tel:+919910836286"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                +91 99108 36286
              </a>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp</h3>
              <p className="text-gray-600 mb-3">Quick response guaranteed</p>
              <a
                href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Chat Now
              </a>
            </div>

            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Us</h3>
              <p className="text-gray-600 mb-3">For general queries and feedback</p>
              <a
                href="mailto:stmaryscomputers@gmail.com"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                stmaryscomputers@gmail.com
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Repair Service</h3>
            <p className="text-gray-600 mb-6">
              Need urgent computer repair? We offer same-day service for critical issues.
              Call us now for immediate assistance.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <a href="tel:+919910836286">Directly Call</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Book Online</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}