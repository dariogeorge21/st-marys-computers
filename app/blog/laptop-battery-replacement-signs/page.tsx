import { Calendar, User, ArrowLeft, Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How to Tell if Your Laptop Battery Needs Replacing | St Mary's Computers",
  description: "Learn the warning signs of laptop battery failure and when to replace it. Expert advice from St Mary's Computers in Laxmi Nagar, Delhi. Battery replacement service available.",
  keywords: "laptop battery replacement Delhi, laptop battery signs, battery replacement Laxmi Nagar, laptop battery service",
};

const faqs = [
  {
    question: "How long should a laptop battery last?",
    answer: "Most laptop batteries last 2-4 years or 300-500 charge cycles. Usage patterns, temperature, and charging habits significantly affect battery lifespan."
  },
  {
    question: "Can I replace my laptop battery myself?",
    answer: "While some laptops have removable batteries, many modern laptops require professional installation. We recommend professional replacement to avoid damage and ensure proper calibration."
  },
  {
    question: "How much does laptop battery replacement cost in Delhi?",
    answer: "Battery replacement costs vary by laptop model, typically ranging from ₹2,500 to ₹6,000 including genuine battery and installation. Contact us for exact pricing for your laptop model."
  },
  {
    question: "Will a new battery improve my laptop's performance?",
    answer: "A new battery won't directly improve processing performance, but it will restore proper power management, eliminate unexpected shutdowns, and allow normal portable use."
  }
];

export default function LaptopBatteryReplacementPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "How to Tell if Your Laptop Battery Needs Replacing",
    "description": "Learn the warning signs of laptop battery failure and when to replace it",
    "author": {
      "@type": "Person",
      "name": "George CV"
    },
    "publisher": {
      "@type": "Organization",
      "name": "St Mary's Computers",
      "logo": {
        "@type": "ImageObject",
        "url": "https://stmaryscomputers.com/logo.png"
      }
    },
    "datePublished": "2025-01-15",
    "dateModified": "2025-01-15",
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": "https://stmaryscomputers.com/blog/laptop-battery-replacement-signs"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      
      <div className="min-h-screen">
        <article className="max-w-4xl mx-auto px-4 py-16">
          {/* Back Button */}
          <div className="mb-8">
            <Button variant="ghost" asChild>
              <Link href="/blog" className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                Back to Blog
              </Link>
            </Button>
          </div>

          {/* Article Header */}
          <header className="mb-12">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              How to Tell if Your Laptop Battery Needs Replacing
            </h1>
            <div className="flex items-center gap-6 text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <User className="w-5 h-5" />
                <span>George CV</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar className="w-5 h-5" />
                <span>January 15, 2025</span>
              </div>
              <span>5 min read</span>
            </div>
            <p className="text-xl text-gray-700 leading-relaxed">
              Is your laptop battery draining faster than usual? Learn the key warning signs that indicate 
              it's time for a battery replacement and what steps to take next.
            </p>
          </header>

          {/* Article Content */}
          <div className="prose prose-lg max-w-none">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Common Signs Your Laptop Battery is Failing</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">1. Dramatically Reduced Battery Life</h3>
            <p className="text-gray-700 mb-6">
              If your laptop used to last 4-6 hours on a single charge but now barely manages 1-2 hours, 
              this is the most obvious sign of battery degradation. Normal battery wear occurs gradually, 
              but sudden drops in battery life indicate significant deterioration.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">2. Unexpected Shutdowns</h3>
            <p className="text-gray-700 mb-6">
              When your laptop shuts down suddenly even when the battery indicator shows 20-30% charge remaining, 
              the battery can no longer provide stable power. This is particularly dangerous as it can lead to 
              data loss and potential file corruption.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">3. Physical Swelling or Bulging</h3>
            <p className="text-gray-700 mb-6">
              A swollen battery is a serious safety concern. If you notice your laptop's bottom panel bulging, 
              trackpad becoming difficult to click, or keyboard keys feeling raised, stop using the laptop 
              immediately and seek professional help. Swollen batteries can be dangerous and should be replaced urgently.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">4. Overheating Issues</h3>
            <p className="text-gray-700 mb-6">
              A failing battery often generates excessive heat. If your laptop becomes uncomfortably hot during 
              normal use, especially around the battery area, this could indicate battery problems. Overheating 
              can damage other components, so address this quickly.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">5. Charging Problems</h3>
            <p className="text-gray-700 mb-6">
              If your battery takes much longer to charge than before, won't charge to 100%, or the charging 
              indicator behaves erratically, these are clear signs of battery failure. Sometimes the laptop 
              may only work when plugged in.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-8">What to Do When You Notice These Signs</h2>
            
            <h3 className="text-xl font-semibold text-gray-900 mb-3">Check Battery Health</h3>
            <p className="text-gray-700 mb-4">
              On Windows, open Command Prompt and type <code className="bg-gray-100 px-2 py-1 rounded">powercfg /batteryreport</code> 
              to generate a detailed battery report. This will show your battery's design capacity versus current capacity.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Professional Diagnosis</h3>
            <p className="text-gray-700 mb-6">
              Bring your laptop to St Mary's Computers for a free battery diagnosis. We'll test your battery's 
              actual capacity, check for any safety issues, and provide honest advice about whether replacement 
              is necessary or if other factors might be affecting battery life.
            </p>

            <h3 className="text-xl font-semibold text-gray-900 mb-3">Battery Replacement Service</h3>
            <p className="text-gray-700 mb-6">
              If replacement is needed, we use only genuine or high-quality compatible batteries with proper 
              warranty. Our technicians ensure correct installation and calibration for optimal performance. 
              Most battery replacements are completed within 2-4 hours.
            </p>
          </div>

          {/* FAQ Section */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
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
          </section>

          {/* CTA Section */}
          <Card className="mt-12">
            <CardHeader>
              <CardTitle className="text-center">Need Battery Replacement?</CardTitle>
            </CardHeader>
            <CardContent className="text-center">
              <p className="text-gray-600 mb-6">
                Contact St Mary's Computers for professional laptop battery replacement in Laxmi Nagar. 
                Free diagnosis and genuine batteries with warranty.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" asChild>
                  <a href="tel:+919910836286" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call +91 99108 36286
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20laptop%20battery%20replacement" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </article>
      </div>
    </>
  );
}
