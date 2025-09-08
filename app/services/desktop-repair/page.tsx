import { Wrench, Phone, MessageCircle, CheckCircle, Clock, Shield, Star, Mail} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { BrandLogos } from "@/components/brand-logos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Desktop Computer Repair in Laxmi Nagar, New Delhi | St Mary's Computers",
  description: "Professional desktop PC repair in Laxmi Nagar - hardware upgrades, virus removal, performance optimization. Same-day service. Call +91 99108 36286",
  keywords: "desktop repair Laxmi Nagar, New Delhi, desktop PC repair New Delhi, computer hardware upgrade, virus removal Delhi",
};

const services = [
  {
    title: "Hardware Diagnostics",
    description: "Complete hardware testing and fault identification for all desktop components.",
    price: ""
  },
  {
    title: "Component Replacement",
    description: "Motherboard, RAM, hard drive, power supply, and graphics card replacement.",
    price: ""
  },
  {
    title: "Performance Upgrades",
    description: "RAM upgrades, SSD installation, graphics card upgrades for better performance.",
    price: ""
  },
  {
    title: "Virus Removal & Cleanup",
    description: "Complete virus removal, malware cleanup, and system optimization.",
    price: ""
  },
  {
    title: "Operating System Installation",
    description: "Fresh Windows installation, driver setup, and software configuration.",
    price: ""
  },
  {
    title: "Data Recovery",
    description: "Professional data recovery from failed hard drives and corrupted systems.",
    price: ""
  }
];

const faqs = [
  {
    question: "How do you diagnose desktop computer problems?",
    answer: "We perform comprehensive hardware and software diagnostics using professional tools. This includes testing RAM, hard drives, power supply, motherboard, and all components to identify the exact issue."
  },
  {
    question: "Can you upgrade my old desktop computer?",
    answer: "Yes, we can upgrade most desktop computers with more RAM, faster SSD drives, better graphics cards, and other components to improve performance significantly."
  },
  {
    question: "Do you build custom desktop computers?",
    answer: "Yes, we build custom desktop computers based on your requirements and budget. We help you choose the right components for gaming, office work, or professional use."
  },
  {
    question: "What if my desktop won't turn on at all?",
    answer: "This could be due to power supply failure, motherboard issues, or other hardware problems. We'll diagnose the exact cause and provide repair options with transparent pricing."
  },
  {
    question: "How long does desktop repair typically take?",
    answer: "Simple repairs like virus removal or software issues can be completed the same day. Hardware replacements may take 1-2 days depending on parts availability."
  },
  {
    question: "Do you provide on-site desktop repair service?",
    answer: "Yes, we offer on-site desktop repair service across Delhi. This is especially convenient for office setups and when the desktop is difficult to transport."
  }
];

export default function DesktopRepairPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Desktop Computer Repair Services",
    "description": "Professional desktop PC repair services in Laxmi Nagar, New Delhi including hardware upgrades, virus removal, and performance optimization",
    "provider": {
      "@type": "LocalBusiness",
      "name": "St Mary's Computers",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Laxmi Nagar",
        "addressLocality": "New Delhi",
        "postalCode": "110092",
        "addressCountry": "IN"
      },
      "telephone": "+919910836286"
    },
    "areaServed": "New Delhi"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Desktop Computer Repair across Delhi-NCR
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Professional desktop PC repair and upgrade services. Hardware diagnostics, 
                  component replacement, performance optimization, and virus removal with quick service.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                    <a href="tel:+919910836286" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call for Diagnosis
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a 
                      href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20desktop%20repair%20service" 
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
                    <Clock className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Quick Service</p>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Quality Service</p>
                  </div>
                  <div>
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">Expert Service</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Common Desktop Issues We Fix</h3>
                <div className="space-y-4">
                  {[
                    "Computer won't start",
                    "Slow performance",
                    "Blue screen errors",
                    "Overheating problems",
                    "Hardware failures",
                    "Virus and malware",
                    "Network connectivity",
                    "Software crashes"
                  ].map((issue, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                      <span>{issue}</span>
                    </div>
                  ))}
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
                Desktop Repair Services & Pricing
              </h2>
              <p className="text-lg text-gray-600">
                Comprehensive desktop computer repair with transparent pricing and no hidden charges.
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
                    <div className="text-2xl font-bold text-green-600 mb-4">
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

        {/* Brand Logos Section */}
        <section className="py-12 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <BrandLogos
              title="Desktop Brands We Service"
              brands={['Dell', 'HP', 'Lenovo', 'Compaq']}
              category="desktop"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Desktop Repair FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about desktop computer repairs
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
        <section className="py-16 px-4 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Desktop Computer Repair?
            </h2>
            <p className="text-xl mb-8">
              Contact St Mary's Computers for professional desktop repair at Delhi-NCR. 
              Quick diagnosis and expert service.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+919910836286">Call +91 99108 36286</a>
              </Button>
              <Button size="lg" variant="outline" className="text-green-600 border-white hover:bg-green-100 hover:text-green-600" asChild>
                <Link href="/contact">Ask Repair Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
