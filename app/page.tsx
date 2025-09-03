"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Monitor, 
  Laptop, 
  Printer, 
  HardDrive, 
  Home, 
  Wrench, 
  HeadphonesIcon,
  CheckCircle,
  Star,
  Award,
  Clock,
  Users,
  Mail,
  User
} from "lucide-react";

export default function HomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-400/10 to-green-400/10"></div>
        <div className="relative container mx-auto px-4 py-16 lg:py-24">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 text-sm font-semibold">
              🖥️ New Delhi's Trusted Computer Expert
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              <span className="text-orange-300">St Mary's</span> Computers
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-blue-100">
              Your Trusted Computer Sales & Repair Expert in New Delhi
            </p>
            <p className="text-lg mb-8 text-blue-200 max-w-2xl mx-auto">
              From selling the latest computers to fixing your tech problems - we're your one-stop solution 
              for all computer needs in Laxmi Nagar and across New Delhi.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg">
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-700 px-8 py-3 text-lg">
                <Wrench className="mr-2 h-5 w-5" />
                Book a Repair
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent"></div>
      </section>

      {/* About Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Meet <span className="text-blue-600">George CV</span>
              </h2>
              <p className="text-lg text-gray-600">Your Local Computer Expert</p>
            </div>
            <Card className="border-none shadow-xl bg-white">
              <CardContent className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-full flex items-center justify-center mb-6 mx-auto md:mx-0">
                      <User className="h-16 w-16 text-white" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">
                      Why Choose a Local Expert Over Big Corporates?
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      As a self-employed computer specialist with years of experience in New Delhi, 
                      I provide personalized service that big companies simply can't match. Every customer 
                      gets my direct attention, honest pricing, and solutions tailored to their specific needs.
                    </p>
                    <div className="flex flex-wrap gap-2">
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">Personal Touch</Badge>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">Local Expert</Badge>
                      <Badge variant="secondary" className="bg-orange-100 text-orange-700">Honest Pricing</Badge>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our <span className="text-blue-600">Services</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Complete computer solutions for individuals and small businesses across New Delhi
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Service Cards */}
            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <Monitor className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Computer Sales</CardTitle>
                <CardDescription>
                  Desktops, laptops, and complete systems tailored to your needs and budget. 
                  Get expert guidance on the perfect setup.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                  <Laptop className="h-6 w-6 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Laptop Repair</CardTitle>
                <CardDescription>
                  Screen repairs, keyboard fixes, battery replacement, and performance optimization. 
                  Fast turnaround guaranteed.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-orange-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-orange-500 transition-colors">
                  <Printer className="h-6 w-6 text-orange-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Printers & Scanners</CardTitle>
                <CardDescription>
                  Setup, installation, and repair of all printer and scanner brands. 
                  Troubleshooting connectivity issues.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-purple-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-purple-500 transition-colors">
                  <HardDrive className="h-6 w-6 text-purple-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Accessories & Upgrades</CardTitle>
                <CardDescription>
                  RAM upgrades, SSD installations, graphics cards, and all computer accessories. 
                  Boost your system's performance.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-500 transition-colors">
                  <Home className="h-6 w-6 text-blue-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">On-site Repairs</CardTitle>
                <CardDescription>
                  I come to you! Home and office visits across New Delhi for repairs and setup. 
                  Convenient doorstep service.
                </CardDescription>
              </CardHeader>
            </Card>

            <Card className="group hover:shadow-xl transition-all duration-300 border-2 hover:border-green-200">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-green-500 transition-colors">
                  <HeadphonesIcon className="h-6 w-6 text-green-600 group-hover:text-white" />
                </div>
                <CardTitle className="text-xl">Tech Support & Consultation</CardTitle>
                <CardDescription>
                  Phone and WhatsApp support for urgent issues. Get expert advice on purchases 
                  and technical problems.
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Choose <span className="text-blue-600">St Mary's Computers</span>?
              </h2>
              <p className="text-lg text-gray-600">
                Experience the difference of personalized, professional computer services
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Affordable Prices</h3>
                    <p className="text-gray-600">Competitive pricing with transparent costs. No hidden fees or surprise charges.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Clock className="h-6 w-6 text-blue-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Fast Service</h3>
                    <p className="text-gray-600">Quick turnaround times for repairs. Same-day service available for urgent issues.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Star className="h-6 w-6 text-orange-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Personalized Guidance</h3>
                    <p className="text-gray-600">Expert advice tailored to your specific needs and budget. No pushy sales tactics.</p>
                  </div>
                </div>
              </div>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Users className="h-6 w-6 text-green-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Trusted by Local Customers</h3>
                    <p className="text-gray-600">Years of satisfied customers across New Delhi. Check our reviews and references.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Award className="h-6 w-6 text-purple-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">All-in-One Computer Needs</h3>
                    <p className="text-gray-600">Sales, repairs, upgrades, and support - everything you need under one roof.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <MessageSquare className="h-6 w-6 text-blue-500 mt-1" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">24/7 WhatsApp Support</h3>
                    <p className="text-gray-600">Get help when you need it most. WhatsApp support for urgent technical issues.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Get In <span className="text-blue-600">Touch</span>
              </h2>
              <p className="text-lg text-gray-600">
                Ready to solve your computer problems? Contact us today!
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div className="space-y-8">
                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <MapPin className="h-6 w-6 text-blue-500 mt-1" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Visit Our Location</h3>
                        <p className="text-gray-600">
                          Laxmi Nagar, New Delhi - 110092<br />
                          <span className="text-sm text-gray-500">On-site visits available across New Delhi</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-none shadow-lg">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="flex-shrink-0">
                        <Phone className="h-6 w-6 text-green-500 mt-1" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">Call or WhatsApp</h3>
                        <p className="text-gray-600">
                          <span className="font-semibold text-lg">+91 XXXXX-XXXXX</span><br />
                          <span className="text-sm text-gray-500">Available for emergency support</span>
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Map Placeholder */}
                <Card className="border-none shadow-lg">
                  <CardContent className="p-0">
                    <div className="h-64 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-500">Google Maps Integration</p>
                        <p className="text-sm text-gray-400">Laxmi Nagar, New Delhi</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Contact Form */}
              <Card className="border-none shadow-lg">
                <CardHeader>
                  <CardTitle className="text-2xl">Send us a Message</CardTitle>
                  <CardDescription>
                    Tell us about your computer needs and we'll get back to you quickly.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Name</label>
                      <Input placeholder="Your full name" />
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-2 block">Phone</label>
                      <Input placeholder="Your phone number" />
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Email</label>
                    <Input type="email" placeholder="your.email@example.com" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Service Needed</label>
                    <Input placeholder="e.g., Laptop repair, Computer purchase guidance" />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 mb-2 block">Message</label>
                    <Textarea 
                      placeholder="Describe your computer issue or requirements in detail..."
                      rows={4}
                    />
                  </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white">
                    <Mail className="mr-2 h-4 w-4" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 mb-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">
                  <span className="text-orange-300">St Mary's</span> Computers
                </h3>
                <p className="text-gray-400 mb-4">
                  Your trusted computer expert in New Delhi. Personal service, professional results.
                </p>
                <div className="flex space-x-2">
                  <Badge className="bg-blue-600 text-white">Est. Local Business</Badge>
                  <Badge className="bg-green-600 text-white">24/7 Support</Badge>
                </div>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
                <ul className="space-y-2 text-gray-400">
                  <li><a href="#" className="hover:text-white transition-colors">Home</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Services</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">About</a></li>
                  <li><a href="#" className="hover:text-white transition-colors">Contact</a></li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold mb-4">Services</h4>
                <ul className="space-y-2 text-gray-400">
                  <li>Computer Sales</li>
                  <li>Laptop Repairs</li>
                  <li>On-site Support</li>
                  <li>Tech Consultation</li>
                </ul>
              </div>
            </div>
            <Separator className="bg-gray-700 mb-8" />
            <div className="text-center text-gray-400">
              <p>&copy; 2025 St Mary's Computers. All Rights Reserved.</p>
              <p className="text-sm mt-2">Serving New Delhi with quality computer services since years.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}