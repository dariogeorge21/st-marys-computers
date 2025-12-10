import { Phone, MessageCircle, MapPin, Clock, Star, Shield, Wrench, Monitor, Laptop, Zap, Home, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "St Mary's Computers",
    "image": "https://stmaryscomputers.com/images/shop-front.jpg",
    "description": "Fast & reliable laptop, desktop and printer repair in New Delhi & Delhi-NCR. On-site service across New Delhi.",
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
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-4 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center px-4 sm:px-0">
            <div className="animate-fade-in">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600">
                Professional Computer Repair in New Delhi
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
                Fast & reliable laptop, desktop and printer repair services. We come to you! 
                Over 20 years of experience serving New Delhi with quality service guarantee.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-fade-in animation-delay-100">
                <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" asChild>
                  <a href="tel:+919910836286" className="flex items-center justify-center gap-2">
                    <Phone className="w-5 h-5" />
                    <span className="hidden sm:inline">Call +91 99108 36286</span>
                    <span className="sm:hidden">Call Now</span>
                  </a>
                </Button>
                <Button size="lg" className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" asChild>
                  <a 
                    href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20repair%20service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    <span>WhatsApp</span>
                  </a>
                </Button>
              </div>

              <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl border border-white/20 animate-fade-in animation-delay-200">
                <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">Why Choose St Mary&apos;s Computers?</h3>
                <div className="grid grid-cols-2 gap-4 sm:gap-5">
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors group">
                    <Clock className="w-5 h-5 text-blue-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium text-sm">Quick service</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-green-50 transition-colors group">
                    <Home className="w-5 h-5 text-green-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium text-sm">On-site repair</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-purple-50 transition-colors group">
                    <Monitor className="w-5 h-5 text-purple-600 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium text-sm">Genuine parts</span>
                  </div>
                  <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-yellow-50 transition-colors group">
                    <Star className="w-5 h-5 text-yellow-500 group-hover:scale-110 transition-transform" />
                    <span className="text-gray-700 font-medium text-sm">4.8★ rating</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="bg-white/95 backdrop-blur-sm p-8 rounded-2xl shadow-2xl border border-white/20 hover:shadow-3xl transition-shadow duration-300 animate-fade-in animation-delay-300">
              <h3 className="text-2xl sm:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-8">Quick Service Request</h3>
              <div className="space-y-5">
                <div className="flex items-center gap-4 p-4 rounded-lg bg-blue-50 hover:bg-blue-100 transition-colors">
                  <div className="p-3 bg-blue-600 rounded-lg">
                    <Phone className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Call us</p>
                    <p className="font-semibold text-blue-600">+91 99108 36286</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-green-50 hover:bg-green-100 transition-colors">
                  <div className="p-3 bg-green-600 rounded-lg">
                    <MessageCircle className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">WhatsApp message</p>
                    <p className="font-semibold text-green-600">Quick response</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-purple-50 hover:bg-purple-100 transition-colors">
                  <div className="p-3 bg-purple-600 rounded-lg">
                    <MapPin className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Service area</p>
                    <p className="font-semibold text-purple-600">All of New Delhi</p>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 rounded-lg bg-yellow-50 hover:bg-yellow-100 transition-colors">
                  <div className="p-3 bg-yellow-600 rounded-lg">
                    <Clock className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">Business hours</p>
                    <p className="font-semibold text-yellow-600">Mon-Sat 10AM-8PM</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 pt-8 border-t-2 border-gray-200">
                <p className="text-sm text-gray-600 mb-4 font-medium">
                  ⚡ Same-day service available for urgent issues
                </p>
                <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all h-12 text-base" asChild>
                  <a href="tel:+919910836286">Call for Urgent Service</a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-0">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Products
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Quality computers, laptops, and accessories at competitive prices. All products are
              thoroughly tested and come with professional service support.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* New Laptops */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '0ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Laptop className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">New Laptops</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Latest laptop models from top brands including Dell, HP, Lenovo, ASUS. Perfect for students,
                professionals, and gaming enthusiasts. We help you choose the right laptop for your needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Latest Intel & AMD processors</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Student-friendly options</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Gaming laptops available</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-xl mb-6 border border-blue-100">
                <p className="text-sm text-blue-700 font-semibold">
                  ✓ Authorized pricing<br/>
                  ✓ Complete setup<br/>
                  ✓ Expert guidance
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                <a href="/products">View Laptops</a>
              </Button>
            </div>

            {/* Refurbished Laptops */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Monitor className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Refurbished Laptops</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Quality tested refurbished laptops at affordable prices. Perfect for students and budget-conscious
                buyers. Each laptop is thoroughly inspected and tested.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Thoroughly tested</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Budget-friendly pricing</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Quality assurance</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-xl mb-6 border border-green-100">
                <p className="text-sm text-green-700 font-semibold">
                  ✓ Quality tested<br/>
                  ✓ Affordable pricing<br/>
                  ✓ Support included
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                <a href="/products">Browse Refurbished</a>
              </Button>
            </div>

            {/* Desktop Systems */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Wrench className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Desktop Systems</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Complete desktop computer systems and custom builds. From office computers to high-performance
                gaming rigs tailored to your needs.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-purple-600 font-bold">✓</span> Custom PC builds</li>
                <li className="flex items-center gap-2"><span className="text-purple-600 font-bold">✓</span> Office & gaming systems</li>
                <li className="flex items-center gap-2"><span className="text-purple-600 font-bold">✓</span> Complete setup</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-xl mb-6 border border-purple-100">
                <p className="text-sm text-purple-700 font-semibold">
                  ✓ Custom configurations<br/>
                  ✓ Quality components<br/>
                  ✓ System setup
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                <a href="/products">Build Desktop</a>
              </Button>
            </div>

            {/* Printers & Peripherals */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Shield className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Printers & Peripherals</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Wide selection of printers, scanners, and peripherals from trusted brands with complete
                setup service for your home or office.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">✓</span> Inkjet & laser printers</li>
                <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">✓</span> All-in-one solutions</li>
                <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">✓</span> Installation service</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-xl mb-6 border border-yellow-100">
                <p className="text-sm text-yellow-700 font-semibold">
                  ✓ Major brands<br/>
                  ✓ Installation included<br/>
                  ✓ Ongoing support
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                <a href="/products">Shop Printers</a>
              </Button>
            </div>

            {/* Accessories & Components */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <HardDrive className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Accessories & Components</h3>
              <p className="text-gray-600 mb-4 leading-relaxed">
                Comprehensive range of computer accessories and components. From storage devices to networking
                equipment, we have everything you need.
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> RAM & SSD devices</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Cables & adapters</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Professional installation</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-xl mb-6 border border-indigo-100">
                <p className="text-sm text-indigo-700 font-semibold">
                  ✓ Quality components<br/>
                  ✓ Competitive pricing<br/>
                  ✓ Expert installation
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                <a href="/products">Browse Accessories</a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '500ms'}}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl px-8" asChild>
              <a href="/products">View All Products</a>
            </Button>
          </div>
        </div>
      </section>


      {/* Services Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-0">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Computer Repair Services
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Professional computer repair services in Delhi. We come to you with fast, reliable, and affordable solutions for all your tech problems.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Laptop Repair */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '0ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-blue-100 to-blue-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Laptop className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Laptop Repair & Maintenance</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Expert repair services for all laptop brands with genuine parts and warranty
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Screen replacement</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Battery issues</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Motherboard repair</li>
                <li className="flex items-center gap-2"><span className="text-blue-600 font-bold">✓</span> Performance upgrade</li>
              </ul>
              <div className="bg-blue-50 p-4 rounded-xl mb-6 border border-blue-100">
                <p className="text-xs sm:text-sm text-blue-700 font-semibold">
                  ✓ Same-day service<br/>
                  ✓ On-site option<br/>
                  ✓ Quality guaranteed
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all text-sm" asChild>
                <a href="/services/laptop-repair">Get Laptop Repair</a>
              </Button>
            </div>

            {/* Desktop Repair */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '100ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-green-100 to-green-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Wrench className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Desktop Computer Solutions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Complete desktop repair, upgrades, and maintenance with expert diagnostics
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Hardware diagnostics</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Component replacement</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> Virus removal</li>
                <li className="flex items-center gap-2"><span className="text-green-600 font-bold">✓</span> OS installation</li>
              </ul>
              <div className="bg-green-50 p-4 rounded-xl mb-6 border border-green-100">
                <p className="text-xs sm:text-sm text-green-700 font-semibold">
                  ✓ Free diagnosis<br/>
                  ✓ Genuine parts<br/>
                  ✓ Performance boost
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all text-sm" asChild>
                <a href="/services/desktop-repair">Fix Desktop Issues</a>
              </Button>
            </div>

            {/* Printer Services */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '200ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Printer & Scanner Services</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Professional printer setup, repair, and maintenance for all major brands
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-purple-600 font-bold">✓</span> Installation & setup</li>
                <li className="flex items-center gap-2"><span className="text-purple-600 font-bold">✓</span> Network configuration</li>
                <li className="flex items-center gap-2"><span className="text-purple-600 font-bold">✓</span> Cartridge replacement</li>
                <li className="flex items-center gap-2"><span className="text-purple-600 font-bold">✓</span> Troubleshooting</li>
              </ul>
              <div className="bg-purple-50 p-4 rounded-xl mb-6 border border-purple-100">
                <p className="text-xs sm:text-sm text-purple-700 font-semibold">
                  ✓ All brands supported<br/>
                  ✓ Network setup<br/>
                  ✓ Quick response
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-semibold shadow-md hover:shadow-lg transition-all text-sm" asChild>
                <a href="/services/printer-repair">Setup Printer</a>
              </Button>
            </div>

            {/* UPS Services */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '300ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Zap className="w-6 h-6 text-yellow-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">UPS & Power Solutions</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                UPS sales, installation, and maintenance to protect your valuable equipment
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">✓</span> UPS sales & installation</li>
                <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">✓</span> Battery replacement</li>
                <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">✓</span> Maintenance service</li>
                <li className="flex items-center gap-2"><span className="text-yellow-600 font-bold">✓</span> Emergency support</li>
              </ul>
              <div className="bg-yellow-50 p-4 rounded-xl mb-6 border border-yellow-100">
                <p className="text-xs sm:text-sm text-yellow-700 font-semibold">
                  ✓ All brands available<br/>
                  ✓ Professional install<br/>
                  ✓ Quality service
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-700 hover:to-orange-700 text-white font-semibold shadow-md hover:shadow-lg transition-all text-sm" asChild>
                <a href="/services/ups-service">Get UPS Service</a>
              </Button>
            </div>

            {/* On-site Support */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '400ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-red-100 to-red-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <Home className="w-6 h-6 text-red-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">On-site Technical Support</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Convenient repair service at your home or office with professional expertise
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> Home repair visits</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> Office IT support</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> Emergency service</li>
                <li className="flex items-center gap-2"><span className="text-red-600 font-bold">✓</span> Network setup</li>
              </ul>
              <div className="bg-red-50 p-4 rounded-xl mb-6 border border-red-100">
                <p className="text-xs sm:text-sm text-red-700 font-semibold">
                  ✓ We come to you<br/>
                  ✓ Same-day available<br/>
                  ✓ All of Delhi
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white font-semibold shadow-md hover:shadow-lg transition-all text-sm" asChild>
                <a href="/services/onsite-repair">Book On-site Service</a>
              </Button>
            </div>

            {/* Accessories & Upgrades */}
            <div className="group bg-white border border-gray-200 rounded-2xl p-6 sm:p-8 hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] overflow-hidden animate-fade-in" style={{animationDelay: '500ms'}}>
              <div className="w-12 h-12 bg-gradient-to-br from-indigo-100 to-indigo-200 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-transform">
                <HardDrive className="w-6 h-6 text-indigo-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-gray-900">Computer Accessories & Upgrades</h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                Boost performance with quality upgrades and accessories with professional installation
              </p>
              <ul className="text-sm text-gray-600 space-y-2 mb-6 font-medium">
                <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> RAM upgrades</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> SSD installation</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Graphics upgrade</li>
                <li className="flex items-center gap-2"><span className="text-indigo-600 font-bold">✓</span> Custom builds</li>
              </ul>
              <div className="bg-indigo-50 p-4 rounded-xl mb-6 border border-indigo-100">
                <p className="text-xs sm:text-sm text-indigo-700 font-semibold">
                  ✓ Performance boost<br/>
                  ✓ Custom solutions<br/>
                  ✓ Quality components
                </p>
              </div>
              <Button className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold shadow-md hover:shadow-lg transition-all text-sm" asChild>
                <a href="/services/accessories">Upgrade Computer</a>
              </Button>
            </div>
          </div>

          <div className="text-center mt-16 animate-fade-in" style={{animationDelay: '600ms'}}>
            <Button size="lg" className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-700 hover:via-indigo-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl px-8" asChild>
              <a href="/services">View All Services</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-green-600 via-indigo-600 to-green-600 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Need Computer Repair? Contact Us Today
          </h2>
          <p className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-100">
            Get in touch with our expert technicians for fast, reliable, and affordable computer repair solutions.
            Same-day service available for critical issues!
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 mb-12 animate-fade-in animation-delay-200">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="p-4 bg-white/20 rounded-xl w-fit mx-auto mb-6">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Call Us</h3>
              <p className="text-white/80 mb-4 text-sm sm:text-base">Speak directly with us</p>
              <a
                href="tel:+919910836286"
                className="text-white font-bold text-lg hover:underline"
              >
                +91 99108 36286
              </a>
              <p className="text-sm text-white/70 mt-3 font-medium">
                Mon - Sat: 10:00 AM - 8:00 PM
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="p-4 bg-white/20 rounded-xl w-fit mx-auto mb-6">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">WhatsApp</h3>
              <p className="text-white/80 mb-4 text-sm sm:text-base">Quick response guaranteed</p>
              <a
                href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20repair%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white font-bold hover:underline inline-flex items-center gap-2"
              >
                Chat Now <MessageCircle className="w-4 h-4" />
              </a>
              <p className="text-sm text-white/70 mt-3 font-medium">
                Available 24/7
              </p>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 sm:p-8 hover:bg-white/20 transition-all duration-300 hover:translate-y-[-4px]">
              <div className="p-4 bg-white/20 rounded-xl w-fit mx-auto mb-6">
                <MapPin className="w-6 h-6 sm:w-8 sm:h-8" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3">Email Us</h3>
              <p className="text-white/80 mb-4 text-sm sm:text-base">For general queries</p>
              <a
                href="mailto:stmaryscomputers@gmail.com"
                className="text-white font-bold hover:underline"
              >
                stmaryscomputers@gmail.com
              </a>
              <p className="text-sm text-white/70 mt-3 font-medium">
                We respond within 2 hours
              </p>
            </div>
          </div>

          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8 sm:p-12 shadow-2xl max-w-2xl mx-auto mb-12 animate-fade-in animation-delay-300">
            <div className="flex items-center justify-center mb-6">
              <Zap className="w-8 h-8 text-yellow-300 mr-2" />
              <h3 className="text-xl sm:text-2xl font-bold">Emergency Service Available</h3>
            </div>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              Need urgent computer repair? We offer same-day on-site service for critical issues.
              Call us now for immediate assistance at your location.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center"> 
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-base" asChild>
                <a href="tel:+919910836286" className="flex items-center justify-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call for Emergency Service
                </a>
              </Button>
              <Button size="lg" className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto text-base" asChild>
                <a href="/contact" className="flex items-center justify-center gap-2">
                  Request Service Online
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
