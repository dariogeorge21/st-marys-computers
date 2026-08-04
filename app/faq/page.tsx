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
    <div className="min-h-screen py-20 px-4 bg-gradient-to-br from-gray-50 via-blue-50/50 to-indigo-50/50 relative overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
      </div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 tracking-tight mb-6 pb-2">
            Frequently Asked Questions
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-2xl mx-auto font-medium">
            Find answers to common questions about our computer repair services
          </p>
          
          {/* Quick Contact */}
          <div className="bg-white/80 backdrop-blur-md p-8 rounded-3xl shadow-lg border border-white/50 animate-fade-in animation-delay-100 relative overflow-hidden group">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50/50 to-indigo-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            <p className="text-gray-700 mb-6 font-medium text-lg relative z-10">
              Can&apos;t find what you&apos;re looking for? Contact us directly:
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center relative z-10">
              <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group/btn" asChild>
                <a href="tel:+919910836286" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Call +91 99108 36286
                </a>
              </Button>
              <Button size="lg" className="h-12 px-8 bg-white border-2 border-blue-100 text-blue-700 hover:border-blue-200 hover:bg-blue-50/50 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group/btn" asChild>
                <a 
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20have%20a%20question%20about%20your%20services" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 text-blue-600" />
                  WhatsApp Chat
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqCategories.map((category, categoryIndex) => (
            <Card key={categoryIndex} className="bg-white/90 backdrop-blur-md border border-white/50 shadow-md hover:shadow-xl transition-all duration-300 rounded-3xl overflow-hidden animate-fade-in" style={{animationDelay: `${(categoryIndex + 2) * 100}ms`}}>
              <CardHeader className="bg-gradient-to-r from-gray-50/50 to-white pb-6 pt-8 px-6 sm:px-10 border-b border-gray-100">
                <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">
                  {category.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-10 bg-white/50">
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => {
                    const itemId = `${categoryIndex}-${faqIndex}`;
                    const isOpen = openItems.includes(itemId);
                    
                    return (
                      <div key={faqIndex} className={`border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-blue-200 shadow-sm bg-blue-50/30' : 'border-gray-200 hover:border-blue-300 hover:shadow-sm bg-white'}`}>
                        <button
                          onClick={() => toggleItem(itemId)}
                          className="w-full px-6 py-5 text-left flex justify-between items-center group/accordion"
                        >
                          <span className={`font-semibold pr-4 transition-colors duration-300 ${isOpen ? 'text-blue-700' : 'text-gray-800 group-hover/accordion:text-blue-600'}`}>
                            {faq.question}
                          </span>
                          <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors duration-300 ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-gray-100 text-gray-500 group-hover/accordion:bg-blue-50 group-hover/accordion:text-blue-500'}`}>
                            {isOpen ? (
                              <ChevronUp className="w-5 h-5 flex-shrink-0" />
                            ) : (
                              <ChevronDown className="w-5 h-5 flex-shrink-0" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-6 pb-6 pt-2 animate-fade-in">
                            <p className="text-gray-600 font-medium leading-relaxed">
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
        <Card className="mt-16 bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden group/cta">
          <div className="absolute inset-0 bg-white/40 opacity-0 group-hover/cta:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
          <CardHeader className="pt-10 pb-4 relative z-10">
            <CardTitle className="text-3xl font-bold text-center text-gray-900">Still Have Questions?</CardTitle>
          </CardHeader>
          <CardContent className="text-center pb-10 relative z-10">
            <p className="text-gray-600 mb-10 max-w-xl mx-auto font-medium text-lg">
              Our team is here to help! Contact us for personalized assistance with your 
              computer repair needs.
            </p>
            
            <div className="grid sm:grid-cols-2 gap-6 mb-10 max-w-2xl mx-auto">
              <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white hover:border-blue-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-blue-100 group-hover:bg-blue-200 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <Clock className="w-6 h-6 text-blue-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Business Hours</p>
                  <p className="text-sm font-medium text-gray-600">Mon-Sat: 10AM-8PM</p>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-sm border border-white hover:border-green-100 hover:shadow-md transition-all duration-300 group">
                <div className="w-12 h-12 bg-green-100 group-hover:bg-green-200 rounded-xl flex items-center justify-center mb-4 transition-colors duration-300">
                  <MapPin className="w-6 h-6 text-green-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 mb-1">Service Area</p>
                  <p className="text-sm font-medium text-gray-600">Delhi & NCR</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group/btn" asChild>
                <a href="tel:+919910836286" className="flex items-center gap-2">
                  <Phone className="w-5 h-5 group-hover/btn:rotate-12 transition-transform duration-300" />
                  Call Now for Help
                </a>
              </Button>
              <Button size="lg" className="h-12 px-8 bg-white border-2 border-indigo-100 text-indigo-700 hover:border-indigo-200 hover:bg-indigo-50/50 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group/btn" asChild>
                <a 
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20help%20with%20my%20computer" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5 group-hover/btn:scale-110 transition-transform duration-300 text-indigo-600" />
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
