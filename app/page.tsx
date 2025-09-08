import { Phone, MessageCircle, MapPin, Clock, Star, Shield, Wrench, Monitor, Laptop, Zap, Home, HardDrive } from "lucide-react";
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
      "addressRegion": "Delhi",
      "postalCode": "110092",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 28.6358,
      "longitude": 77.2764
    },
    "telephone": "+91-99108-36286",
    "email": "stmaryscomputers@gmail.com",
    "url": "https://stmaryscomputers.com",
    "openingHours": "Mo-Sa 10:00-20:00",
    "priceRange": "₹₹",
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "127"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Computer Repair Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Laptop Repair",
            "description": "Professional laptop repair services including screen replacement, battery issues, and motherboard repair"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Desktop Repair",
            "description": "Complete desktop computer repair, upgrades, and maintenance services"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Printer Service",
            "description": "Printer installation, repair, and maintenance for home and office use"
          }
        }
      ]
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
                Professional Computer Repair in Delhi-NCR
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Fast & reliable laptop, desktop and printer repair services. We come to you! 
                Over 20 years of experience serving Delhi with quality service guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <a href="tel:+919910836286" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call +91 99108 36286
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
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

              <div className="bg-white p-6 rounded-lg shadow-lg">
                <h3 className="text-lg font-semibold mb-4">Why Choose St Mary's Computers?</h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-6 h-6 text-blue-600" />
                    <span>Quick service</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Home className="w-6 h-6 text-green-600" />
                    <span>On-site repair available</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor className="w-6 h-6 text-purple-600" />
                    <span>Genuine parts only</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Star className="w-6 h-6 text-yellow-500" />
                    <span>4.8★ rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Service Request</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-blue-600" />
                  <span>Call: +91 99108 36286</span>
                </div>
                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-600" />
                  <span>WhatsApp: Quick response</span>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-red-600" />
                  <span>Service Area: Delhi NCR</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-purple-600" />
                  <span>Hours: Mon-Sat 10AM-8PM</span>
                </div>
              </div>
              
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  Quick repair service available for critical issues
                </p>
                <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:+919910836286">Call Now</a>
                </Button>
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
              Our Computer Repair Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Professional computer repair services in Delhi-NCR. 
              We come to you with fast, reliable, and affordable solutions for all your tech problems.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Laptop Repair */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Laptop Repair & Maintenance</h3>
              <p className="text-gray-600 mb-4">
                Expert laptop repair services for all brands including Dell, HP, Lenovo, ASUS. From screen 
                replacement to motherboard repair, we handle all laptop issues with professional expertise 
                and genuine parts.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Screen & LCD replacement</li>
                <li>• Battery replacement & optimization</li>
                <li>• Motherboard & component repair</li>
                <li>• Keyboard & trackpad fixes</li>
                <li>• Performance upgrades (RAM, SSD)</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-blue-700 font-medium">
                  ✓ Same-day service available<br/>
                  ✓ On-site repair option<br/>
                  ✓ Quality service guarantee
                </p>
              </div>
              <Button className="w-full bg-white text-black" asChild>
                <a href="/services/laptop-repair">Get Laptop Repair</a>
              </Button>
            </div>

            {/* Desktop Repair */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desktop Computer Solutions</h3>
              <p className="text-gray-600 mb-4">
                Complete desktop computer repair, upgrades, and maintenance services. We diagnose hardware 
                issues, replace faulty components, and optimize performance to get your desktop running 
                like new again.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Hardware diagnostics & testing</li>
                <li>• Component replacement & upgrades</li>
                <li>• Virus removal & system cleanup</li>
                <li>• Operating system installation</li>
                <li>• Data recovery services</li>
              </ul>
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-green-700 font-medium">
                  ✓ Free diagnosis with repair<br/>
                  ✓ Genuine parts only<br/>
                  ✓ Performance optimization
                </p>
              </div>
              <Button className="w-full bg-white text-black" variant="outline" asChild>
                <a href="/services/desktop-repair">Fix Desktop Issues</a>
              </Button>
            </div>

            {/* Printer Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Printer & Scanner Services</h3>
              <p className="text-gray-600 mb-4">
                Professional printer installation, repair, and maintenance for home and office use. We work 
                with all major brands including HP, Canon, Epson, Brother to ensure your printing needs 
                are met efficiently.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Printer installation & setup</li>
                <li>• Network printer configuration</li>
                <li>• Cartridge replacement & refilling</li>
                <li>• Print quality troubleshooting</li>
                <li>• Scanner setup & configuration</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-purple-700 font-medium">
                  ✓ All major brands supported<br/>
                  ✓ Network setup included<br/>
                  ✓ Quick response time
                </p>
              </div>
              <Button className="w-full bg-white text-black" asChild>
                <a href="/services/printer-repair">Setup Printer</a>
              </Button>
            </div>

            {/* UPS Services */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">UPS & Power Solutions</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive UPS sales, installation, and service solutions. Protect your valuable equipment 
                from power fluctuations with our range of UPS systems and professional installation services 
                across Delhi.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• UPS sales & installation</li>
                <li>• Battery replacement service</li>
                <li>• Power backup solutions</li>
                <li>• UPS repair & maintenance</li>
                <li>• Emergency UPS service</li>
              </ul>
              <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-yellow-700 font-medium">
                  ✓ All major brands available<br/>
                  ✓ Professional installation<br/>
                  ✓ Quality service
                </p>
              </div>
              <Button className="w-full bg-white text-black" variant="outline" asChild>
                <a href="/services/ups-service">Get UPS Service</a>
              </Button>
            </div>

            {/* On-site Support */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mb-4">
                <Home className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">On-site Technical Support</h3>
              <p className="text-gray-600 mb-4">
                Convenient on-site computer repair and technical support services. We come to your home or 
                office with all necessary tools and expertise to solve your computer problems at your location, 
                saving you time and hassle.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Home computer repair visits</li>
                <li>• Office IT support services</li>
                <li>• Network setup & configuration</li>
                <li>• Emergency repair service</li>
                <li>• System setup & installation</li>
              </ul>
              <div className="bg-red-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-red-700 font-medium">
                  ✓ We come to you<br/>
                  ✓ Same-day availability<br/>
                  ✓ All of Delhi NCR covered
                </p>
              </div>
              <Button className="w-full bg-white text-black" variant="outline" asChild>
                <a href="/services/onsite-repair">Book On-site Service</a>
              </Button>
            </div>

            {/* Accessories & Upgrades */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Computer Accessories & Upgrades</h3>
              <p className="text-gray-600 mb-4">
                Boost your computer's performance with our upgrade services and accessories. From RAM upgrades 
                to SSD installations, we help you get the most out of your existing hardware with professional 
                upgrade services.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• RAM memory upgrades</li>
                <li>• SSD installation & migration</li>
                <li>• Graphics card upgrades</li>
                <li>• Custom PC builds</li>
                <li>• Accessories sales & installation</li>
              </ul>
              <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-indigo-700 font-medium">
                  ✓ Performance optimization<br/>
                  ✓ Custom solutions available<br/>
                  ✓ Quality components used
                </p>
              </div>
              <Button className="w-full bg-white text-black" variant="outline" asChild>
                <a href="/services/accessories">Upgrade Computer</a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quality computers, laptops, and accessories at competitive prices. All products are
              thoroughly tested and come with professional service support.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* New Laptops */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Laptop className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">New Laptops</h3>
              <p className="text-gray-600 mb-4">
                Latest laptop models from top brands including Dell, HP, Lenovo, ASUS. Perfect for students,
                professionals, and gaming enthusiasts. We help you choose the right laptop for your needs
                and budget.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Latest Intel & AMD processors</li>
                <li>• Student-friendly options available</li>
                <li>• Gaming laptops for enthusiasts</li>
                <li>• Business laptops for professionals</li>
                <li>• Complete setup & configuration</li>
              </ul>
              <div className="bg-blue-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-blue-700 font-medium">
                  ✓ Authorized dealer pricing<br/>
                  ✓ Complete setup included<br/>
                  ✓ Expert buying guidance
                </p>
              </div>
              <Button className="w-full bg-white text-black" asChild>
                <a href="/products">View Laptops</a>
              </Button>
            </div>

            {/* Refurbished Laptops */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Refurbished Laptops</h3>
              <p className="text-gray-600 mb-4">
                Quality tested refurbished laptops at affordable prices. Perfect for students and budget-conscious
                buyers. Each laptop is thoroughly inspected, cleaned, and tested to ensure reliable performance.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Thoroughly tested & certified</li>
                <li>• Budget-friendly pricing</li>
                <li>• Multiple condition grades available</li>
                <li>• Ideal for students & basic use</li>
                <li>• Quality assurance guarantee</li>
              </ul>
              <div className="bg-green-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-green-700 font-medium">
                  ✓ Quality tested systems<br/>
                  ✓ Affordable pricing<br/>
                  ✓ Service support included
                </p>
              </div>
              <Button className="w-full bg-white text-black" asChild>
                <a href="/products">Browse Refurbished</a>
              </Button>
            </div>

            {/* Desktop Systems */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4">
                <Wrench className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desktop Systems</h3>
              <p className="text-gray-600 mb-4">
                Complete desktop computer systems and custom builds. From basic office computers to high-performance
                gaming rigs, we build systems tailored to your specific requirements and budget.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Custom PC builds available</li>
                <li>• Office & business systems</li>
                <li>• Gaming desktop configurations</li>
                <li>• Complete setup with peripherals</li>
                <li>• Performance optimization</li>
              </ul>
              <div className="bg-purple-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-purple-700 font-medium">
                  ✓ Custom configurations<br/>
                  ✓ Quality components<br/>
                  ✓ Complete system setup
                </p>
              </div>
              <Button className="w-full bg-white text-black" asChild>
                <a href="/products">Build Desktop</a>
              </Button>
            </div>

            {/* Printers & Peripherals */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Printers & Peripherals</h3>
              <p className="text-gray-600 mb-4">
                Wide selection of printers, scanners, and computer peripherals from trusted brands. We help you
                choose the right printing solution for your home or office needs with complete setup service.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• Inkjet & laser printers</li>
                <li>• All-in-one printer solutions</li>
                <li>• Scanners & document cameras</li>
                <li>• Keyboards, mice & accessories</li>
                <li>• Complete installation service</li>
              </ul>
              <div className="bg-yellow-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-yellow-700 font-medium">
                  ✓ Major brands available<br/>
                  ✓ Installation included<br/>
                  ✓ Ongoing support provided
                </p>
              </div>
              <Button className="w-full bg-white text-black" asChild>
                <a href="/products">Shop Printers</a>
              </Button>
            </div>

            {/* Accessories & Components */}
            <div className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-4">
                <HardDrive className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Accessories & Components</h3>
              <p className="text-gray-600 mb-4">
                Comprehensive range of computer accessories and components. From storage devices to networking
                equipment, we stock everything you need to enhance and upgrade your computer systems.
              </p>
              <ul className="text-sm text-gray-500 space-y-1 mb-4">
                <li>• RAM, SSD & storage devices</li>
                <li>• Cables, adapters & connectors</li>
                <li>• Networking equipment</li>
                <li>• Computer speakers & webcams</li>
                <li>• Professional installation available</li>
              </ul>
              <div className="bg-indigo-50 p-3 rounded-lg mb-4">
                <p className="text-sm text-indigo-700 font-medium">
                  ✓ Quality components<br/>
                  ✓ Competitive pricing<br/>
                  ✓ Expert installation
                </p>
              </div>
              <Button className="w-full bg-white text-black" asChild>
                <a href="/products">Browse Accessories</a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" asChild>
              <a href="/products">View All Products</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-white">
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
              <p className="text-gray-600 mb-3">Speak directly with us</p>
              <a
                href="tel:+919910836286"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                +91 99108 36286
              </a>
              <p className="text-sm text-gray-500 mt-2">
                Mon - Sat: 10:00 AM - 7:00 PM
              </p>
              
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

          <div className="bg-gray-50 rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">On-site Repair Service</h3>
            <p className="text-gray-600 mb-6">
              Need urgent computer repair? We offer same-day on-site service for critical issues.
              Call us now for immediate assistance at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">  
              <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                <a href="tel:+919910836286">Call for On-site Service</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Request Service Online</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
