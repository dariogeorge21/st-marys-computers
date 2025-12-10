"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Phone, MessageCircle, Clock, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const faqCategories = [
  {
    title: "Service Process & Procedures",
    faqs: [
      {
        question: "How do I schedule a computer repair service?",
        answer: "Simply call us at +91 99108 36286 or send a WhatsApp message. We'll discuss your problem, provide an initial assessment, and schedule a convenient time for pickup or on-site service."
      },
      {
        question: "Do you provide on-site repair services?",
        answer: "Yes! We offer on-site repair services across Delhi and NCR. This is convenient for desktop computers, network issues, or when you prefer not to transport your device. On-site service is available Monday to Saturday."
      },
      {
        question: "How long does a typical repair take?",
        answer: "Most software issues and simple hardware repairs are completed within 24 hours. Complex repairs or those requiring special parts may take 2-3 days. We'll provide a realistic timeline after initial diagnosis."
      },
      {
        question: "What happens if my device cannot be repaired?",
        answer: "We provide honest assessments. If repair costs exceed the device value or if the device is beyond repair, we'll advise you accordingly and help you explore replacement options. No charges for diagnosis in such cases."
      }
    ]
  },
  {
    title: "Pickup & Delivery",
    faqs: [
      {
        question: "Do you offer pickup and delivery service?",
        answer: "Yes, we provide free pickup and delivery service across Delhi NCR. We'll arrange a convenient time that works for your schedule."
      },
      {
        question: "How do you ensure my device is safe during transport?",
        answer: "We use protective packaging and handle all devices with care. Each device is logged with its condition and any existing damage noted. We take full responsibility for your device while in our care."
      },
      {
        question: "Can I track the status of my repair?",
        answer: "Absolutely! We'll keep you updated via phone or WhatsApp throughout the repair process. You can also call us anytime for status updates."
      }
    ]
  },
  {
    title: "Payment & Pricing",
    faqs: [
      {
        question: "How much do your services cost?",
        answer: "Pricing varies based on the specific issue and required parts. We provide transparent quotes after diagnosis. Contact us at +91 99108 36286 for current pricing on specific services."
      },
      {
        question: "What payment methods do you accept?",
        answer: "We accept cash, UPI payments (Google Pay, PhonePe, Paytm), bank transfers, and card payments. Payment is typically due upon completion of service."
      },
      {
        question: "Do you charge for diagnosis?",
        answer: "Diagnosis is free if you proceed with the repair. If you choose not to repair (for any reason), a nominal diagnosis fee may apply for complex issues that require extensive testing."
      },
      {
        question: "Are there any hidden charges?",
        answer: "No hidden charges ever. We provide clear, upfront pricing for all services. Any additional costs (like special parts) are discussed and approved before proceeding."
      }
    ]
  },
  {
    title: "Service Areas & Response Times",
    faqs: [
      {
        question: "Which areas do you serve?",
        answer: "We primarily serve Laxmi Nagar and surrounding areas in East Delhi. We also provide services across Central Delhi, Shahdara, Preet Vihar, and other parts of Delhi NCR. Contact us to confirm service availability in your area."
      },
      {
        question: "Do you offer emergency repair services?",
        answer: "Yes, we provide emergency repair services for critical issues. Emergency service is available with same-day response for urgent business or personal needs. Additional charges may apply for emergency calls."
      },
      {
        question: "What are your working hours?",
        answer: "Our regular hours are Monday to Saturday, 10 AM to 8 PM. We're closed on Sundays except for emergency services. We can also arrange appointments outside regular hours for urgent needs."
      }
    ]
  },
  {
    title: "Technical Questions",
    faqs: [
      {
        question: "What types of computers do you repair?",
        answer: "We repair all types of computers: laptops, desktops, all-in-ones, and tablets. We work with all major brands including Dell, HP, Lenovo, ASUS, Acer, Apple, and more."
      },
      {
        question: "Do you repair both hardware and software issues?",
        answer: "Yes, we handle both hardware and software problems. From virus removal and OS installation to motherboard repair and component replacement - we cover all aspects of computer repair."
      },
      {
        question: "Can you recover data from a crashed hard drive?",
        answer: "We offer data recovery services for various scenarios including crashed hard drives, corrupted files, and accidental deletion. Success depends on the extent of damage, but we have good success rates with most recoverable situations."
      },
      {
        question: "Do you work on gaming computers and custom builds?",
        answer: "Absolutely! We specialize in gaming computers, custom builds, and high-performance systems. We can upgrade components, optimize performance, and troubleshoot gaming-specific issues."
      }
    ]
  }
];

export default function FAQPage() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  return (
    <div className="min-h-screen py-16 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Find answers to common questions about our computer repair services
          </p>
          
          {/* Quick Contact */}
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-gray-700 mb-4">
              Can&apos;t find what you&apos;re looking for? Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-green-600 hover:bg-green-700" asChild>
                <a href="tel:+919910836286" className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  Call +91 99108 36286
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a 
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex}>
              <CardHeader>
                <CardTitle className="text-2xl text-blue-600">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems.includes(itemId);
                    
                    return (
                      <div key={faqIndex} className="border border-gray-200 rounded-lg">
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
                        >
                          <span className="font-medium text-gray-900 pr-4">
                            {faq.question}
                          </span>
                          {isOpen ? (
                            <ChevronUp className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          ) : (
                            <ChevronDown className="w-5 h-5 text-gray-500 flex-shrink-0" />
                          )}
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-4">
                            <p className="text-gray-700 leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Contact Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Our team is here to help! Contact us for personalized assistance with your 
              computer repair needs.
            </p>
            
            <div className="grid md:grid-cols-2 gap-6 mb-8">
              <div className="flex items-center justify-center gap-3">
                <Clock className="w-5 h-5 text-blue-600" />
                <div>
                  <p className="font-medium">Business Hours</p>
                  <p className="text-sm text-gray-600">Mon-Sat: 10AM-8PM</p>
                </div>
              </div>
              <div className="flex items-center justify-center gap-3">
                <MapPin className="w-5 h-5 text-green-600" />
                <div>
                  <p className="font-medium">Service Area</p>
                  <p className="text-sm text-gray-600">Delhi & NCR</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="tel:+919910836286" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call Now for Help
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20help%20with%20my%20computer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  Get Quick Support
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
