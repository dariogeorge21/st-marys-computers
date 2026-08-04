"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Create WhatsApp message
    const message = `Hi, I'm ${formData.name}. I need ${formData.service} service. ${formData.message}. My phone: ${formData.phone}, Email: ${formData.email}`;
    const whatsappUrl = `https://wa.me/919910836286?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 tracking-tight mb-6 pb-2">
            Contact St Mary&apos;s Computers
          </h1>
          <p className="text-lg lg:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed">
            Get in touch for computer repair, laptop service, or any technical support. 
            We&apos;re here to help with fast and reliable service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4 bg-gradient-to-b from-white via-gray-50 to-gray-100 relative">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="border border-white/20 shadow-xl bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50/50 to-indigo-50/50 border-b border-gray-100/50 pb-6">
                  <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700">Send us a Message</CardTitle>
                  <CardDescription className="text-gray-600 text-base mt-2">
                    Fill out the form below and we&apos;ll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6 mt-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <Label htmlFor="name" className="text-sm font-semibold text-gray-700">Full Name <span className="text-red-500">*</span></Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Your full name"
                          className="bg-white/50 focus:bg-white transition-colors duration-200"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="phone" className="text-sm font-semibold text-gray-700">Phone Number <span className="text-red-500">*</span></Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          placeholder="+91 XXXXX XXXXX"
                          className="bg-white/50 focus:bg-white transition-colors duration-200"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-semibold text-gray-700">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                        className="bg-white/50 focus:bg-white transition-colors duration-200"
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="service" className="text-sm font-semibold text-gray-700">Service Required <span className="text-red-500">*</span></Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)} required>
                        <SelectTrigger className="bg-white/50 focus:bg-white transition-colors duration-200">
                          <SelectValue placeholder="Select service type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="laptop-repair">Laptop Repair</SelectItem>
                          <SelectItem value="desktop-repair">Desktop Repair</SelectItem>
                          <SelectItem value="printer-repair">Printer/Scanner Service</SelectItem>
                          <SelectItem value="ups-service">UPS Sales/Service</SelectItem>
                          <SelectItem value="onsite-repair">On-site Repair</SelectItem>
                          <SelectItem value="accessories">Accessories/Upgrades</SelectItem>
                          <SelectItem value="buy-laptop">Buy Refurbished Laptop</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message" className="text-sm font-semibold text-gray-700">Message <span className="text-red-500">*</span></Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        placeholder="Describe your computer issue or requirements..."
                        rows={4}
                        className="bg-white/50 focus:bg-white transition-colors duration-200 resize-none"
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full h-12 text-base font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group" 
                      size="lg"
                    >
                      <Send className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card className="border border-white/20 shadow-xl bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all duration-300 h-fit">
                <CardHeader className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-b border-gray-100/50 pb-6">
                  <CardTitle className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">Get in Touch</CardTitle>
                  <CardDescription className="text-gray-600 text-base mt-2">
                    Multiple ways to reach us for computer repair and support
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-8 mt-6">
                  <a href="tel:+919910836286" className="flex items-start gap-4 group p-3 -m-3 rounded-xl hover:bg-green-50/50 transition-colors">
                    <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-green-200 transition-all duration-300 shadow-sm">
                      <Phone className="w-7 h-7 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-green-700 transition-colors">Call Us</h3>
                      <p className="text-gray-600 mb-1">Speak with our expert</p>
                      <span className="text-green-600 font-semibold group-hover:underline decoration-2 underline-offset-4">
                        +91 99108 36286
                      </span>
                    </div>
                  </a>
                  
                  <a href="https://wa.me/919910836286" target="_blank" rel="noopener noreferrer" className="flex items-start gap-4 group p-3 -m-3 rounded-xl hover:bg-blue-50/50 transition-colors">
                    <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-blue-200 transition-all duration-300 shadow-sm">
                      <MessageCircle className="w-7 h-7 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-blue-700 transition-colors">WhatsApp</h3>
                      <p className="text-gray-600 mb-1">Quick response guaranteed</p>
                      <span className="text-blue-600 font-semibold group-hover:underline decoration-2 underline-offset-4">
                        Chat on WhatsApp
                      </span>
                    </div>
                  </a>
                  
                  <a href="mailto:stmaryscomputers@gmail.com" className="flex items-start gap-4 group p-3 -m-3 rounded-xl hover:bg-purple-50/50 transition-colors">
                    <div className="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 group-hover:bg-purple-200 transition-all duration-300 shadow-sm">
                      <Mail className="w-7 h-7 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900 group-hover:text-purple-700 transition-colors">Email</h3>
                      <p className="text-gray-600 mb-1">Send us your queries</p>
                      <span className="text-purple-600 font-semibold group-hover:underline decoration-2 underline-offset-4 break-all">
                        stmaryscomputers@gmail.com
                      </span>
                    </div>
                  </a>
                  
                  <div className="flex items-start gap-4 p-3 -m-3">
                    <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <MapPin className="w-7 h-7 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Service Areas</h3>
                      <p className="text-gray-600 font-medium">New Delhi & NCR</p>
                      <p className="text-sm text-gray-500 mt-1">We come to you for service</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4 p-3 -m-3">
                    <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                      <Clock className="w-7 h-7 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg text-gray-900">Business Hours</h3>
                      <p className="text-gray-600 font-medium">Mon - Sat: 10:00 AM - 8:00 PM</p>
                      <p className="text-sm text-gray-500 mt-1">Sunday: Closed (Urgent services available)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border border-red-100 shadow-xl bg-white/90 backdrop-blur-md hover:shadow-2xl transition-all duration-300 overflow-hidden relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-red-50 to-orange-50 opacity-50 pointer-events-none"></div>
                <CardHeader className="relative border-b border-red-100/50 pb-6">
                  <CardTitle className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-red-600 to-orange-600 flex items-center gap-2">
                    <span className="relative flex h-3 w-3">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
                    </span>
                    Urgent Service
                  </CardTitle>
                  <CardDescription className="text-gray-700 font-medium mt-2">
                    Same-day emergency support for critical issues
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative pt-6">
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    Need urgent computer repair? We provide rapid, same-day service to get your system back up and running.
                  </p>
                  <Button 
                    className="w-full h-12 text-base bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group-hover:shadow-red-500/25" 
                    asChild
                  >
                    <a href="tel:+919910836286" className="flex items-center justify-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call for Urgent Service
                    </a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
