import { Phone, MessageCircle, Clock, Shield, Star, Zap, Home, HardDrive, Laptop, Wrench, CheckCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Repair Services in Delhi | St Mary's Computers",
  description: "Professional laptop, desktop, printer repair & UPS services in Delhi. On-site repair available. Free diagnosis with repair. Call +91 99108 36286",
  keywords: "computer repair Delhi, laptop repair Laxmi Nagar, desktop repair service, printer repair Delhi, on-site computer repair",
};

interface ServiceCard {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  bgColor: string;
  textColor: string;
  borderColor: string;
  href: string;
}

const services: ServiceCard[] = [
  {
    id: "laptop-repair",
    title: "Laptop Repair & Maintenance",
    description: "Expert repair services for all laptop brands with genuine parts and warranty",
    icon: <Laptop className="w-8 h-8" />,
    features: ["Screen replacement", "Battery issues", "Motherboard repair", "Performance upgrade"],
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    href: "/services/laptop-repair"
  },
  {
    id: "desktop-repair",
    title: "Desktop Computer Solutions",
    description: "Complete desktop repair, upgrades, and maintenance with expert diagnostics",
    icon: <Wrench className="w-8 h-8" />,
    features: ["Hardware diagnostics", "Component replacement", "Virus removal", "OS installation"],
    bgColor: "bg-green-50",
    textColor: "text-green-600",
    borderColor: "border-green-200",
    href: "/services/desktop-repair"
  },
  {
    id: "printer-repair",
    title: "Printer & Scanner Services",
    description: "Professional printer setup, repair, and maintenance for all major brands",
    icon: <Shield className="w-8 h-8" />,
    features: ["Installation & setup", "Network configuration", "Cartridge replacement", "Troubleshooting"],
    bgColor: "bg-purple-50",
    textColor: "text-purple-600",
    borderColor: "border-purple-200",
    href: "/services/printer-repair"
  },
  {
    id: "ups-service",
    title: "UPS & Power Solutions",
    description: "UPS sales, installation, and maintenance to protect your valuable equipment",
    icon: <Zap className="w-8 h-8" />,
    features: ["UPS sales & installation", "Battery replacement", "Maintenance service", "Emergency support"],
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-600",
    borderColor: "border-yellow-200",
    href: "/services/ups-service"
  },
  {
    id: "onsite-repair",
    title: "On-site Technical Support",
    description: "Convenient repair service at your home or office with professional expertise",
    icon: <Home className="w-8 h-8" />,
    features: ["Home repair visits", "Office IT support", "Emergency service", "Network setup"],
    bgColor: "bg-red-50",
    textColor: "text-red-600",
    borderColor: "border-red-200",
    href: "/services/onsite-repair"
  },
  {
    id: "accessories",
    title: "Accessories & Upgrades",
    description: "Boost performance with quality upgrades and accessories with professional installation",
    icon: <HardDrive className="w-8 h-8" />,
    features: ["RAM upgrades", "SSD installation", "Graphics upgrade", "Custom builds"],
    bgColor: "bg-indigo-50",
    textColor: "text-indigo-600",
    borderColor: "border-indigo-200",
    href: "/services/accessories"
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-4 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10 px-4 sm:px-0">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-fade-in">
            Professional Computer Repair Services in Delhi
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-100">
            Fast, reliable, and affordable solutions for all your computer repair needs. 
            Expert technicians with 20+ years of experience serving Delhi NCR.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 animate-fade-in animation-delay-200 px-4">
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

          <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-white/20 animate-fade-in animation-delay-300 px-4">
            <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">What We Offer</h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Quick service</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">On-site repair</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Genuine parts</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Expert support</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Comprehensive computer repair and maintenance solutions for every need
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={service.id} href={service.href}>
                <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm group hover:translate-y-[-4px] overflow-hidden h-full cursor-pointer animate-fade-in" style={{animationDelay: `${index * 100}ms`}}>
                  <CardHeader className={`${service.bgColor} pb-4 border-b`}>
                    <div className={`w-12 h-12 ${service.bgColor} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <div className={service.textColor}>{service.icon}</div>
                    </div>
                    <CardTitle className="text-lg sm:text-xl text-gray-900 group-hover:text-blue-600 transition-colors">{service.title}</CardTitle>
                    <CardDescription className="text-gray-600 mt-2">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-6">
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all group/btn" asChild>
                      <span className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </span>
                    </Button>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-0">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose Our Services?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Experience quality repair service with professional expertise and genuine parts
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {[
              { icon: <Star className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Expert Technicians", desc: "20+ years of experience" },
              { icon: <Zap className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Fast Service", desc: "Same-day repair available" },
              { icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />, title: "Quality Guaranteed", desc: "Warranty on all repairs" },
              { icon: <Home className="w-6 h-6 sm:w-8 sm:h-8" />, title: "On-site Service", desc: "We come to you" }
            ].map((item, idx) => (
              <div key={idx} className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-200 hover:border-blue-200 animate-fade-in" style={{animationDelay: `${idx * 100}ms`}}>
                <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors text-blue-600">
                  {item.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold mb-2 text-gray-900 text-center">{item.title}</h3>
                <p className="text-sm sm:text-base text-gray-600 text-center">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Need Computer Repair Service?
          </h2>
          <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto leading-relaxed animate-fade-in animation-delay-100">
            Contact us today for quick assessment and affordable repair solutions. 
            Expert service with guaranteed results.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto" asChild>
              <a href="tel:+919910836286" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span>Call Now</span>
              </a>
            </Button>
            <Button size="lg" className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-semibold shadow-lg hover:shadow-xl transition-all w-full sm:w-auto" asChild>
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
        </div>
      </section>
    </div>
  );
}
