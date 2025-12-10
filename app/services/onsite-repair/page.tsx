import { Phone, MessageCircle, Clock, Shield, Star, MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "On-site Computer Repair in Delhi | St Mary's Computers",
  description: "Professional on-site computer repair service across Delhi. We come to your home & office for laptop, desktop, printer repair. Same-day service. Call +91 99108 36286",
  keywords: "on-site computer repair Delhi, home computer repair, office computer service, laptop repair at home Delhi",
};

const services = [
  {
    title: "Home Computer Repair",
    description: "Convenient computer repair service at your home across Delhi with earliest availability.",
    price: ""
  },
  {
    title: "Office IT Support",
    description: "Professional on-site IT support for offices including network setup and maintenance.",
    price: ""
  },
  {
    title: "Urgent Repair Service",
    description: "Urgent on-site repair service for critical computer and network issues.",
    price: ""
  },
  {
    title: "Network Setup & Configuration",
    description: "Complete network setup, WiFi configuration, and printer sharing at your location.",
    price: ""
  },
  {
    title: "Data Recovery On-site",
    description: "Professional data recovery service performed at your location for security and convenience.",
    price: ""
  },
  {
    title: "System Setup & Installation",
    description: "New computer setup, software installation, and system configuration at your place.",
    price: ""
  }
];

const areas = [
  "Laxmi Nagar", "East Delhi", "Central Delhi", "Shahdara", "Preet Vihar", 
  "Mayur Vihar", "IP Extension", "Patparganj", "Anand Vihar", "Karkardooma"
];

const faqs = [
  {
    question: "Which areas in Delhi do you cover for on-site service?",
    answer: "We provide on-site computer repair service across Delhi, East Delhi, Central Delhi, Shahdara, Preet Vihar, Mayur Vihar, and surrounding areas. Contact us to confirm service availability in your area."
  },
  {
    question: "What are the charges for on-site computer repair?",
    answer: "On-site service includes our technician coming to your location plus the actual repair cost. Emergency service charges are higher. We provide transparent pricing before starting work."
  },
  {
    question: "How quickly can you reach for urgent repairs?",
    answer: "For urgent on-site repairs, we aim to reach within 2-4 hours during business hours, depending on your location and traffic conditions."
  },
  {
    question: "Do you carry spare parts for on-site repairs?",
    answer: "Yes, we carry common spare parts and tools for most repairs. For specific parts, we may need to schedule a follow-up visit or arrange for part delivery."
  },
  {
    question: "Can you setup new computers and networks on-site?",
    answer: "Absolutely! We provide complete on-site setup services including new computer installation, network configuration, printer setup, and software installation at your home or office."
  },
  {
    question: "Is on-site service available on weekends?",
    answer: "Yes, we provide on-site service on weekends and holidays. Weekend service may have slightly higher charges."
  }
];

export default function OnsiteRepairPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-red-50 to-pink-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                On-site Computer Repair Across Delhi-NCR
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Professional computer repair service at your home or office. We come to you with 
                tools and expertise to fix laptops, desktops, printers, and network issues.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:+919910836286" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call for Services
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20on-site%20computer%20repair" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Chat
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                    <a 
                      href="mailto:stmaryscomputers@gmail.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Email US
                    </a>
                  </Button>
              </div>
              
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <Clock className="w-8 h-8 text-red-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Quick Service</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Trusted Service</p>
                </div>
                <div>
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Expert Technician</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Service Areas in Delhi</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {areas.map((area, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-red-600" />
                    <span className="text-sm">{area}</span>
                  </div>
                ))}
              </div>
              <div className="bg-red-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Why Choose On-site Service:</h4>
                <ul className="text-sm space-y-1">
                  <li>• No need to disconnect & transport</li>
                  <li>• Convenient for heavy desktops</li>
                  <li>• Network & setup issues resolved</li>
                  <li>• Multiple devices serviced together</li>
                  <li>• Immediate problem resolution</li>
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
              On-site Computer Services & Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Professional on-site computer repair and IT support with transparent pricing.
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
                  <div className="text-2xl font-bold text-red-600 mb-4">
                    {service.price}
                  </div>
                  <Button className="w-full" asChild>
                    <a href="tel:+919910836286">Book Service</a>
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
              On-site Service FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our on-site computer repair service
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
      <section className="py-16 px-4 bg-red-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need On-site Computer Repair?
          </h2>
          <p className="text-xl mb-8">
            Contact St Mary&apos;s Computers for professional on-site computer repair across Delhi.
            We come to your home or office with quick, professional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+919910836286">Call +91 99108 36286</a>
            </Button>
            <Button size="lg" variant="outline" className="text-red-600 border-white hover:bg-red-100 hover:text-red-600" asChild>
              <Link href="/contact">Schedule Service</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
