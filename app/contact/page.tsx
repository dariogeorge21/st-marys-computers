"use client";

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Mail, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import type { Metadata } from "next";

const metadata: Metadata = {
  title: "Contact St Mary's Computers - Computer Repair in Laxmi Nagar, Delhi",
  description: "Contact St Mary's Computers for computer repair, laptop service, printer setup in Laxmi Nagar. Call +91 99108 36286 or visit our shop in New Delhi.",
  keywords: "contact computer repair Laxmi Nagar, St Mary's Computers address, computer service Delhi contact",
};

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
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Contact St Mary's Computers
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Get in touch for computer repair, laptop service, or any technical support. 
            We're here to help with fast and reliable service.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Fill out the form below and we'll get back to you as soon as possible.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => handleInputChange("name", e.target.value)}
                          required
                          placeholder="Your full name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => handleInputChange("phone", e.target.value)}
                          required
                          placeholder="+91 XXXXX XXXXX"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange("email", e.target.value)}
                        placeholder="your.email@example.com"
                      />
                    </div>
                    
                    <div>
                      <Label htmlFor="service">Service Required *</Label>
                      <Select onValueChange={(value) => handleInputChange("service", value)} required>
                        <SelectTrigger>
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
                    
                    <div>
                      <Label htmlFor="message">Message *</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => handleInputChange("message", e.target.value)}
                        required
                        placeholder="Describe your computer issue or requirements..."
                        rows={4}
                      />
                    </div>
                    
                    <Button type="submit" className="w-full" size="lg">
                      <Send className="w-5 h-5 mr-2" />
                      Send Message via WhatsApp
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach us for computer repair and support
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                      <Phone className="w-6 h-6 text-green-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Call Us</h3>
                      <p className="text-gray-600">Speak directly with George CV</p>
                      <a href="tel:+919910836286" className="text-green-600 hover:text-green-700 font-medium">
                        +91 99108 36286
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <MessageCircle className="w-6 h-6 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">WhatsApp</h3>
                      <p className="text-gray-600">Quick response guaranteed</p>
                      <a 
                        href="https://wa.me/919910836286" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-blue-600 hover:text-blue-700 font-medium"
                      >
                        Chat on WhatsApp
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                      <Mail className="w-6 h-6 text-purple-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">Send us your queries</p>
                      <a 
                        href="mailto:stmaryscomputers@gmail.com"
                        className="text-purple-600 hover:text-purple-700 font-medium"
                      >
                        stmaryscomputers@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center">
                      <MapPin className="w-6 h-6 text-red-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Visit Our Shop</h3>
                      <p className="text-gray-600">Laxmi Nagar, New Delhi - 110092</p>
                      <p className="text-sm text-gray-500">Near Laxmi Nagar Metro Station</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-yellow-100 rounded-lg flex items-center justify-center">
                      <Clock className="w-6 h-6 text-yellow-600" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">Monday - Saturday: 10:00 AM - 8:00 PM</p>
                      <p className="text-sm text-gray-500">Sunday: Closed (Emergency service available)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Emergency Service</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Need urgent computer repair? We provide emergency service for critical issues.
                  </p>
                  <Button className="w-full bg-red-600 hover:bg-red-700" asChild>
                    <a href="tel:+919910836286">Call for Emergency Service</a>
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
