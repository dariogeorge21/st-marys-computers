import { Monitor, Wrench, Printer, Zap, Home, HardDrive, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Repair Services in Laxmi Nagar, New Delhi | St Mary's Computers",
  description: "Professional laptop, desktop, printer repair services in Laxmi Nagar. On-site computer repair across Delhi. Free diagnostics, genuine parts, 30-day warranty.",
  keywords: "computer repair Laxmi Nagar, laptop repair new delhi, printer repair Delhi, on-site computer repair, desktop repair services",
};

const services = [
  {
    icon: Monitor,
    title: "Laptop Repair",
    description: "Complete laptop repair services including screen replacement, battery issues, motherboard repair, and performance optimization.",
    features: ["Screen & LCD replacement", "Battery replacement", "Motherboard repair", "Keyboard & trackpad fix", "Performance upgrades"],
    href: "/services/laptop-repair",
    color: "blue"
  },
  {
    icon: Wrench,
    title: "Desktop Repair",
    description: "Professional desktop computer repair, hardware upgrades, and system optimization for home and office use.",
    features: ["Hardware diagnostics", "Component replacement", "Performance upgrades", "Virus removal", "System optimization"],
    href: "/services/desktop-repair",
    color: "green"
  },
  {
    icon: Printer,
    title: "Printer & Scanner Setup",
    description: "Printer installation, repair, and maintenance services for all major brands including HP, Canon, Epson.",
    features: ["Printer installation", "Cartridge replacement", "Network setup", "Scanner configuration", "Maintenance service"],
    href: "/services/printer-repair",
    color: "purple"
  },
  {
    icon: Zap,
    title: "UPS Sales & Service",
    description: "UPS sales, installation, and repair services to protect your computers from power fluctuations.",
    features: ["UPS sales & installation", "Battery replacement", "Power backup solutions", "Maintenance service", "Emergency repairs"],
    href: "/services/ups-service",
    color: "yellow"
  },
  {
    icon: Home,
    title: "On-site Repairs",
    description: "Convenient on-site computer repair services across Delhi. We come to your home or office.",
    features: ["Home service", "Office visits", "Same-day service", "Emergency repairs", "Setup & installation"],
    href: "/services/onsite-repair",
    color: "red"
  },
  {
    icon: HardDrive,
    title: "Accessories & Upgrades",
    description: "Computer accessories, hardware upgrades, and performance enhancement services.",
    features: ["RAM upgrades", "SSD installation", "Graphics card upgrade", "Accessories sales", "Custom builds"],
    href: "/services/accessories",
    color: "indigo"
  }
];

const faqs = [
  {
    question: "How long does a typical laptop repair take?",
    answer: "Most laptop repairs are completed within 24-48 hours. Simple issues like software problems or battery replacement can often be done the same day. Complex repairs like motherboard issues may take 2-3 days."
  },
  {
    question: "Do you provide warranty on repairs?",
    answer: "Yes, we provide a 30-day warranty on all repair work. This covers the specific issue that was repaired. We use only genuine parts to ensure long-lasting repairs."
  },
  {
    question: "What areas do you cover for on-site service?",
    answer: "We provide on-site computer repair services across New Delhi, including Laxmi Nagar, East Delhi, Central Delhi, and surrounding areas. Emergency service is available for urgent issues."
  },
  {
    question: "Do you repair all computer brands?",
    answer: "Yes, we repair all major computer brands including Dell, HP, Lenovo, ASUS, Acer, Samsung, and more. We have experience with both Windows and Mac systems."
  },
  {
    question: "How much do repairs typically cost?",
    answer: "Repair costs vary depending on the issue and parts required. We provide free diagnostics and transparent pricing before starting any work. Contact us for a quote specific to your problem."
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Computer Repair Services in Laxmi Nagar
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Professional laptop, desktop, and printer repair services with same-day support. 
            Personal service from George CV with 30-day warranty on all repairs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="tel:+919910836286" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call for Free Diagnosis
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
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className={`w-12 h-12 bg-${service.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                      <IconComponent className={`w-6 h-6 text-${service.color}-600`} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <Button asChild className="w-full">
                      <Link href={service.href}>Learn More</Link>
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about our computer repair services in Laxmi Nagar
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
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Computer Repair? We're Here to Help!
          </h2>
          <p className="text-xl mb-8">
            Contact St Mary's Computers for fast, reliable computer repair services in Laxmi Nagar, New Delhi.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+919910836286">Call +91 99108 36286</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/contact">Book Repair Online</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
