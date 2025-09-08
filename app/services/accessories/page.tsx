import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { BrandLogos } from "@/components/brand-logos";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Accessories & Upgrades in Laxmi Nagar, New Delhi | St Mary's Computers",
  description: "Computer accessories, hardware upgrades, RAM, SSD, graphics cards in Laxmi Nagar, New Delhi. Custom PC builds, performance upgrades. Call +91 99108 36286",
  keywords: "computer accessories Laxmi Nagar, New Delhi, RAM upgrade Delhi, SSD installation, graphics card upgrade, custom PC build",
};

const services = [
  {
    title: "RAM Upgrades",
    description: "Memory upgrades for laptops and desktops to improve performance and multitasking.",
    price: ""
  },
  {
    title: "SSD Installation",
    description: "Solid State Drive installation for faster boot times and improved system performance.",
    price: ""
  },
  {
    title: "Graphics Card Upgrade",
    description: "Graphics card upgrades for gaming, video editing, and professional applications.",
    price: ""
  },
  {
    title: "Custom PC Builds",
    description: "Custom desktop computer builds tailored to your specific requirements and budget.",
    price: ""
  },
  {
    title: "Accessories Sales",
    description: "Wide range of computer accessories including keyboards, mice, speakers, and cables.",
    price: ""
  },
  {
    title: "Performance Optimization",
    description: "Hardware and software optimization to maximize your computer's performance.",
    price: ""
  }
];

const accessories = [
  "Keyboards & Mice", "Speakers & Headphones", "Webcams", "USB Drives", 
  "External Hard Drives", "Cables & Adapters", "Cooling Fans", "Power Supplies"
];

const faqs = [
  {
    question: "How much RAM do I need for my computer?",
    answer: "For basic use, 8GB RAM is sufficient. For gaming and professional work, 16GB is recommended. Heavy applications like video editing may require 32GB or more. We'll assess your needs and recommend the right amount."
  },
  {
    question: "Will SSD installation make my computer faster?",
    answer: "Yes, SSD installation dramatically improves boot times, application loading, and overall system responsiveness. It's one of the most effective upgrades for older computers."
  },
  {
    question: "Can you upgrade my laptop's graphics card?",
    answer: "Most laptops have integrated graphics that cannot be upgraded. However, we can recommend external GPU solutions or suggest desktop alternatives for gaming and professional graphics work."
  },
  {
    question: "Do you build custom gaming PCs?",
    answer: "Yes, we specialize in custom gaming PC builds. We'll help you choose components based on your budget, gaming requirements, and performance goals. All builds come with quality assurance and support."
  },
  {
    question: "What accessories do you stock?",
    answer: "We stock a wide range of computer accessories including keyboards, mice, speakers, webcams, USB drives, cables, and more. If we don't have something in stock, we can order it for you."
  },
  {
    question: "Do you provide installation service for accessories?",
    answer: "Yes, we provide installation and setup service for all accessories and upgrades. This includes driver installation, configuration, and testing to ensure everything works properly."
  }
];

export default function AccessoriesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-indigo-50 to-blue-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Computer Accessories & Upgrades in New Delhi
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                Boost your computer's performance with professional hardware upgrades. RAM, SSD, graphics cards, 
                custom PC builds, and a wide range of computer accessories.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <Button size="lg" className="bg-indigo-600 hover:bg-indigo-700" asChild>
                  <a href="tel:+919910836286" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call for Upgrades
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20upgrades" 
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
                  <Clock className="w-8 h-8 text-indigo-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Quick Service</p>
                </div>
                <div>
                  <Shield className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                  <p className="text-sm font-medium">Genuine Parts</p>
                </div>
                <div>
                  <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                  <p className="text-sm font-medium">Expert Installation</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h3 className="text-2xl font-semibold mb-6">Popular Accessories</h3>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {accessories.map((accessory, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-indigo-600" />
                    <span className="text-sm">{accessory}</span>
                  </div>
                ))}
              </div>
              <div className="bg-indigo-50 rounded-lg p-4">
                <h4 className="font-semibold mb-2">Upgrade Benefits:</h4>
                <ul className="text-sm space-y-1">
                  <li>• Faster performance</li>
                  <li>• Better multitasking</li>
                  <li>• Enhanced gaming experience</li>
                  <li>• Improved productivity</li>
                  <li>• Extended computer life</li>
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
              Upgrade Services & Pricing
            </h2>
            <p className="text-lg text-gray-600">
              Professional computer upgrades and accessories with expert installation service.
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
                  <div className="text-2xl font-bold text-indigo-600 mb-4">
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
              title="Accessories Brands We Service"
              brands={['Dell', 'HP', 'Lenovo', 'Adata', 'Samsung', 'Crucial', 'WD', 'SanDisk', 'Seagate', 'Kingston', 'ADATA', 'Intel', 'AMD', 'Gigabyte']}
              category="laptop"
            />
          </div>
        </section>

      {/* FAQ Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Accessories & Upgrades FAQ
            </h2>
            <p className="text-lg text-gray-600">
              Common questions about computer upgrades and accessories
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
      <section className="py-16 px-4 bg-indigo-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Upgrade Your Computer?
          </h2>
          <p className="text-xl mb-8">
            Contact St Mary's Computers for professional computer upgrades and accessories across New Delhi. 
            Expert installation and genuine parts guaranteed.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+919910836286">Call +91 99108 36286</a>
            </Button>
            <Button size="lg" variant="outline" className="text-indigo-700 border-white hover:bg-indigo-100 hover:text-indigo-600" asChild>
              <Link href="/contact">Get Upgrade Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
