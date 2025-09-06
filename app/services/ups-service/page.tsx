import { Zap, Phone, MessageCircle, CheckCircle, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "UPS Sales & Service in Laxmi Nagar, Delhi-NCR | St Mary's Computers",
  description: "UPS sales, installation, repair & battery replacement in Laxmi Nagar. Power backup solutions for home & office. APC, Luminous, Microtek UPS service. Call +91 99108 36286",
  keywords: "UPS repair Laxmi Nagar, UPS repair Gurugram, UPS repair Delhi-NCR, UPS battery replacement Delhi, power backup solutions, APC UPS service, Luminous UPS repair",
};

const services = [
  {
    title: "UPS Sales & Installation",
    description: "Wide range of UPS systems for home and office with professional installation service.",
    price: ""
  },
  {
    title: "UPS Battery Replacement",
    description: "Genuine UPS battery replacement for all brands with quality assurance.",
    price: ""
  },
  {
    title: "UPS Repair & Maintenance",
    description: "Professional UPS repair service and preventive maintenance for optimal performance.",
    price: ""
  },
  {
    title: "Power Backup Solutions",
    description: "Custom power backup solutions for offices, shops, and critical equipment protection.",
    price: ""
  },
  {
    title: "UPS Testing & Diagnostics",
    description: "Complete UPS testing, load testing, and performance diagnostics service.",
    price: ""
  },
  {
    title: "Urgent UPS Service",
    description: "Quickest UPS repair service for critical business operations.",
    price: ""
  }
];

const brands = [
  "APC", "Nexus", "Microtek" 
];

const faqs = [
  {
    question: "How do I know if my UPS battery needs replacement?",
    answer: "Signs include reduced backup time, frequent beeping, battery warning lights, or the UPS shutting down quickly during power cuts. We recommend battery replacement every 2-3 years."
  },
  {
    question: "What size UPS do I need for my computer setup?",
    answer: "UPS size depends on your total power consumption. For a basic computer setup, 600VA-1000VA is sufficient. For multiple devices or servers, you may need 1500VA or higher. We'll help you choose the right size."
  },
  {
    question: "Do you provide on-site UPS installation?",
    answer: "Yes, we provide on-site UPS installation and setup service across Delhi-NCR. This includes proper grounding, connection, and testing to ensure optimal performance."
  },
  {
    question: "How often should UPS be serviced?",
    answer: "We recommend annual UPS maintenance including battery testing, cleaning, and performance checks. For critical applications, 6-monthly service is advisable."
  },
  {
    question: "Can you repair UPS that's completely dead?",
    answer: "Yes, we can diagnose and repair most UPS issues including complete failures. Common problems include blown fuses, faulty batteries, or circuit board issues."
  },
  {
    question: "Do you buy old/dead UPS units?",
    answer: "Yes, we buy old UPS units for recycling and parts. We also offer exchange deals when you purchase a new UPS from us."
  }
];

export default function UPSServicePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-yellow-50 to-orange-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                UPS Sales & Service with St Mary's Computers
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Complete UPS solutions for home and office. Sales, installation, repair, and battery replacement 
                for all major brands. Protect your computers from power fluctuations.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-yellow-600 hover:bg-yellow-700" asChild>
                  <a href="tel:+919910836286" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call for UPS Sales & Service
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20UPS%20service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Quick Service</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Quality Service</p>
                </div>
                <div>
                  <Star className="w-8 h-8 text-green-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">All Major Brands</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">UPS Brands We Service</h3>
              <div className="grid grid-cols-2 gap-4 mb-6">
                {brands.map((brand, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-yellow-600" />
                    <span className="font-medium">{brand}</span>
                  </div>
                ))}
              </div>
              <div className="bg-yellow-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Why You Need UPS:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Protect from power cuts</li>
                  <li>• Prevent data loss</li>
                  <li>• Avoid hardware damage</li>
                  <li>• Ensure uninterrupted work</li>
                  <li>• Stabilize voltage fluctuations</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              UPS Services & Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Complete UPS solutions with professional service and competitive pricing.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-lg">{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold text-yellow-600 mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full" asChild>
                    <a href="tel:+919910836286">Call Now</a>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              UPS Services FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about UPS sales, service, and maintenance
            </p>
          </div>
          
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent>
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-yellow-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need UPS Sales or Service?
          </h2>
          <p className="text-xl mb-8">
            Contact St Mary's Computers for reliable UPS solutions in Delhi-NCR. 
            Sales, service, and urgent support available.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+919910836286">Call +91 99108 36286</a>
            </Button>
            <Button size="lg" variant="outline" className="text-yellow-600 border-white hover:bg-yellow-100 hover:text-yellow-600" asChild>
              <Link href="/contact">Get UPS Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
