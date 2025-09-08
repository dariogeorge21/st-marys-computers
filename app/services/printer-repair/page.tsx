import { Printer, Phone, MessageCircle, CheckCircle, Clock, Shield, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BrandLogos } from "@/components/brand-logos";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Printer Repair & Installation in Laxmi Nagar, New Delhi | St Mary's Computers",
  description: "Professional printer repair, installation & setup in Laxmi Nagar, New Delhi, Delhi-NCR. HP, Canon, Epson printer service. Network setup, cartridge replacement. Call +91 99108 36286",
  keywords: "printer repair Laxmi Nagar, printer installation Delhi, HP printer service, Canon printer repair, network printer setup",
};

const services = [
  {
    title: "Printer Installation & Setup",
    description: "Complete printer installation, driver setup, and network configuration for home and office.",
    price: ""
  },
  {
    title: "Cartridge Replacement",
    description: "Genuine ink cartridge replacement and refilling services for all printer brands.",
    price: ""
  },
  {
    title: "Network Printer Setup",
    description: "WiFi and network printer configuration for multiple users and devices.",
    price: ""
  },
  {
    title: "Scanner Configuration",
    description: "Scanner setup, document scanning, and scan-to-email configuration.",
    price: ""
  },
  {
    title: "Printer Repair & Maintenance",
    description: "Professional printer repair, cleaning, and preventive maintenance services.",
    price: ""
  },
  {
    title: "Print Quality Issues",
    description: "Fixing print quality problems, alignment issues, and color correction.",
    price: ""
  }
];

const brands = [
  "HP", "Canon", "Epson", "Brother", "Samsung", "Xerox", "Ricoh", "Kyocera"
];

const faqs = [
  {
    question: "Which printer brands do you service?",
    answer: "We service all major printer brands including HP, Canon, Epson, Brother. Our technicians are trained on both inkjet and laser printers."
  },
  {
    question: "How much does printer repair typically cost?",
    answer: "Repair costs vary depending on the issue. Simple problems like cartridge replacement start at low price, while complex repairs may cost a fair amount of price. We provide low cost diagnosis and transparent pricing."
  },
  {
    question: "Can you setup wireless printing from multiple devices?",
    answer: "Yes, we specialize in network printer setup. We can configure your printer to work wirelessly with laptops, desktops, smartphones, and tablets across your home or office network."
  },
  {
    question: "Do you provide on-site printer installation?",
    answer: "Yes, we offer on-site printer installation and setup service across Delhi. This is especially convenient for office environments with multiple printers and network requirements."
  },
  {
    question: "What if my printer is printing blank pages?",
    answer: "Blank pages can be caused by empty cartridges, clogged print heads, or driver issues. We'll diagnose the exact cause and fix it. Most blank page issues can be resolved the same day."
  },
  {
    question: "Do you sell printer cartridges and supplies?",
    answer: "Yes, we stock genuine and compatible cartridges for all major printer brands. We also provide cartridge refilling services at competitive prices."
  }
];

export default function PrinterRepairPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Printer Repair and Installation Services",
    "description": "Professional printer repair, installation, and setup services across New Delhi for all major brands",
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
        <section className="bg-gradient-to-br from-purple-50 to-violet-100 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Printer Repair & Installation across Delhi NCR
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Professional printer repair, installation, and network setup services for all major brands. 
                  Quick services for homes and offices across Delhi.
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button size="lg" className="bg-purple-600 hover:bg-purple-700" asChild>
                    <a href="tel:+919910836286" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call for Service
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a 
                      href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20printer%20repair%20service" 
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
                    <Clock className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Quick Service</p>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">All Brands</p>
                  </div>
                  <div>
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">Expert Setup</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Printer Brands We Service</h3>
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {brands.map((brand, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-purple-600" />
                      <span className="font-medium">{brand}</span>
                    </div>
                  ))}
                </div>
                <div className="bg-purple-50 rounded-lg p-4">
                  <h4 className="font-semibold mb-2">Common Issues We Fix:</h4>
                  <ul className="text-sm space-y-1">
                    <li>• Printer not responding</li>
                    <li>• Poor print quality</li>
                    <li>• Paper jam problems</li>
                    <li>• Network connectivity</li>
                    <li>• Cartridge issues</li>
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
                Printer Services & Pricing
              </h2>
              <p className="text-lg text-gray-600">
                Complete printer solutions for home and office with transparent pricing.
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
                    <div className="text-2xl font-bold text-purple-600 mb-4">
                      {service.price}
                    </div>
                    <Button className="w-full" asChild>
                      <a href="tel:+919910836286">Get Quote</a>
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
              title="Printer Brands We Service"
              brands={['HP', 'Canon', 'Epson']}
              category="printer"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Printer Repair FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about printer repair and installation services
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
        <section className="py-16 px-4 bg-purple-600 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">
              Need Printer Repair or Setup?
            </h2>
            <p className="text-xl mb-8">
              Contact St Mary's Computers for professional printer services in Delhi-NCR. 
              All brands serviced with same-day support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+919910836286">Call +91 99108 36286</a>
              </Button>
              <Button size="lg" variant="outline" className="text-purple-600 border-white hover:bg-purple-100 hover:text-purple-600" asChild>
                <Link href="/contact">Request Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
