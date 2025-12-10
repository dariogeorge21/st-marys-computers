import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { BrandLogos } from "@/components/brand-logos";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Laptop Repair Services in New Delhi & Delhi-NCR | St Mary's Computers",
  description: "Professional laptop repair in New Delhi & Delhi-NCR - screen replacement, battery issues, motherboard repair. Same-day service, quality guarantee. Call +91 99108 36286",
  keywords: "laptop repair New Delhi & Delhi-NCR, laptop screen replacement Delhi, laptop battery replacement, motherboard repair New Delhi",
};

const services = [
  {
    title: "Screen & LCD Replacement",
    description: "Professional laptop screen replacement for all brands including Dell, HP, Lenovo, ASUS.",
    price: ""
  },
  {
    title: "Battery Replacement",
    description: "Genuine laptop battery replacement with quality assurance.",
    price: ""
  },
  {
    title: "Motherboard Repair",
    description: "Expert motherboard repair and component-level troubleshooting.",
    price: ""
  },
  {
    title: "Keyboard & Trackpad Repair",
    description: "Keyboard replacement and trackpad repair for all laptop models.",
    price: ""
  },
  {
    title: "Performance Upgrades",
    description: "RAM upgrades, SSD installation, and performance optimization.",
    price: ""
  },
  {
    title: "Virus Removal & Software Issues",
    description: "Complete virus removal, OS installation, antivirus installation and software troubleshooting.",
    price: ""
  }
];

const faqs = [
  {
    question: "How long does laptop screen replacement take?",
    answer: "Most laptop screen replacements are completed within 6-8 hours if the screen is in stock. For special orders, it may take 1-2 days. We'll provide an accurate timeline after diagnosis."
  },
  {
    question: "Do you use genuine laptop parts?",
    answer: "Yes, we use only genuine OEM parts or high-quality compatible parts. All parts are quality tested and we never compromise on quality to save costs."
  },
  {
    question: "What if my laptop is not worth repairing?",
    answer: "We provide honest assessment and will advise if repair costs exceed the laptop's value. In such cases, we can help you with data recovery and suggest affordable replacement options."
  },
  {
    question: "Can you repair water-damaged laptops?",
    answer: "Yes, we specialize in liquid damage repair. Success depends on the extent of damage and how quickly we can service it. We recommend immediate shutdown and calling us for emergency pickup service."
  },
  {
    question: "Do you provide pickup and delivery service?",
    answer: "Yes, we offer pickup and delivery service across Delhi for laptop repairs. There's a nominal charge for this service depending on your location."
  },
  {
    question: "What brands of laptops do you repair?",
    answer: "We repair all major laptop brands including Dell, HP, Lenovo, ASUS, Acer, Samsung, Apple MacBook, MSI, and more."
  }
];

export default function LaptopRepairPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Laptop Repair Services",
    "description": "Professional laptop repair services in New Delhi & Delhi-NCR including screen replacement, battery replacement, and motherboard repair",
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
    "areaServed": "New Delhi",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Laptop Repair Services",
      "itemListElement": services.map(service => ({
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": service.title,
          "description": service.description
        },
        "priceSpecification": {
          "@type": "PriceSpecification",
          "price": service.price
        }
      }))
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                  Professional Laptop Repair in Delhi-NCR
                </h1>
                <p className="text-xl text-gray-700 mb-8">
                  Expert laptop repair services for all brands. Screen replacement, battery issues, 
                  motherboard repair, and more. Same-day service available with quality guarantee.
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
                      href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20laptop%20repair%20service" 
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
                    <Clock className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Quick Service</p>
                  </div>
                  <div>
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Quality Service</p>
                  </div>
                  <div>
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">4.8★ Rating</p>
                  </div>
                </div>
              </div>
              
              <div className="bg-white rounded-lg shadow-xl p-8">
                <h3 className="text-2xl font-semibold mb-6">Common Laptop Issues We Fix</h3>
                <div className="space-y-4">
                  {[
                    "Cracked or broken screen",
                    "Battery not charging",
                    "Laptop won't turn on",
                    "Overheating issues",
                    "Keyboard not working",
                    "Slow performance",
                    "Virus and malware",
                    "Water damage"
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
                Laptop Repair Services & Pricing
              </h2>
              <p className="text-lg text-gray-600">
                Transparent pricing with no hidden charges. Quick diagnosis for all laptop issues.
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
                    <div className="text-2xl font-bold text-blue-600 mb-4">
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
              title="Laptop Brands We Service"
              brands={['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Apple', 'Samsung', 'Toshiba', 'Sony', 'MSI', 'Compaq']}
              category="laptop"
            />
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Laptop Repair FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about laptop repair services in Laxmi Nagar
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
              Ready to Fix Your Laptop?
            </h2>
            <p className="text-xl mb-8">
              Contact St Mary&apos;s Computers for professional laptop repair in Delhi-NCR.
              Quick diagnosis and transparent pricing.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+919910836286">Call +91 99108 36286</a>
              </Button>
              <Button size="lg" variant="outline" className="text-blue-600 border-white hover:bg-blue-100 hover:text-blue-600" asChild>
                <Link href="/contact">Ask Repair Online</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
