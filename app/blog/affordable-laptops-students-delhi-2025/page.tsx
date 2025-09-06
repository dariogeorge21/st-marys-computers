import { Calendar, User, ArrowLeft, Phone, MessageCircle, Star, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "5 Affordable Laptops for Students in Delhi — 2025 Buying Guide | St Mary's Computers",
  description: "Best budget laptops for students in Delhi 2025. Refurbished and new laptop recommendations under ₹30,000. Expert buying guide from St Mary's Computers Laxmi Nagar.",
  keywords: "affordable laptops students Delhi, budget laptops 2025, student laptop buying guide, cheap laptops Delhi, refurbished laptops students",
};

const laptops = [
  {
    name: "Refurbished Dell Latitude 5520",
    price: "₹28,000 - ₹32,000",
    specs: ["Intel i5 11th Gen", "8GB RAM", "256GB SSD", "15.6\" Display", "6-month warranty"],
    pros: ["Excellent build quality", "Good performance", "Professional design", "Reliable brand"],
    bestFor: "Engineering & CS students, programming, multitasking"
  },
  {
    name: "HP 15s (New)",
    price: "₹35,000 - ₹40,000",
    specs: ["AMD Ryzen 5", "8GB RAM", "512GB SSD", "15.6\" Display", "1-year warranty"],
    pros: ["Latest processor", "Good battery life", "Fast SSD storage", "Lightweight"],
    bestFor: "General studies, online classes, document work"
  },
  {
    name: "Refurbished Lenovo ThinkPad E14",
    price: "₹25,000 - ₹30,000",
    specs: ["Intel i5 10th Gen", "8GB RAM", "256GB SSD", "14\" Display", "3-6 month warranty"],
    pros: ["Excellent keyboard", "Durable build", "Good for typing", "Business-grade"],
    bestFor: "Writing, research, business studies, long typing sessions"
  },
  {
    name: "ASUS VivoBook 15 (Refurbished)",
    price: "₹22,000 - ₹28,000",
    specs: ["Intel i3 10th Gen", "8GB RAM", "1TB HDD", "15.6\" Display", "3-month warranty"],
    pros: ["Large storage", "Good display", "Affordable price", "Decent performance"],
    bestFor: "Basic computing, media consumption, light office work"
  },
  {
    name: "Acer Aspire 3 (New)",
    price: "₹30,000 - ₹35,000",
    specs: ["AMD Ryzen 3", "8GB RAM", "256GB SSD", "15.6\" Display", "1-year warranty"],
    pros: ["New laptop warranty", "Good value", "Reliable performance", "Student-friendly"],
    bestFor: "All-around student use, online learning, basic programming"
  }
];

export default function AffordableLaptopsStudentsPage() {
  return (
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
            5 Affordable Laptops for Students in Delhi — 2025 Buying Guide
          </h1>
          <div className="flex items-center gap-6 text-gray-600 mb-6">
            <div className="flex items-center gap-2">
              <User className="w-5 h-5" />
              <span>George CV</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5" />
              <span>January 12, 2025</span>
            </div>
            <span>8 min read</span>
          </div>
          <p className="text-xl text-gray-700 leading-relaxed">
            Finding the perfect laptop as a student in Delhi doesn't have to break the bank. Here are our top 
            5 recommendations for budget-friendly laptops that deliver excellent value for money.
          </p>
        </header>

        {/* Article Content */}
        <div className="prose prose-lg max-w-none">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">What to Look for in a Student Laptop</h2>
          
          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Essential Features</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>8GB RAM minimum</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>SSD storage (faster than HDD)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Good battery life (6+ hours)</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                  <span>Reliable brand with service support</span>
                </li>
              </ul>
            </div>
            
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold mb-3">Budget Considerations</h3>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Refurbished = Better specs for less money</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Consider warranty and after-sales service</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Factor in software and accessories</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-blue-600" />
                  <span>Buy from trusted local dealers</span>
                </li>
              </ul>
            </div>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-6">Top 5 Student Laptop Recommendations</h2>
          
          <div className="space-y-8">
            {laptops.map((laptop, index) => (
              <Card key={index} className="border-l-4 border-l-blue-600">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl">{laptop.name}</CardTitle>
                      <div className="text-2xl font-bold text-green-600 mt-2">{laptop.price}</div>
                    </div>
                    <Badge variant="secondary">#{index + 1}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <h4 className="font-semibold mb-2">Specifications</h4>
                      <ul className="text-sm space-y-1">
                        {laptop.specs.map((spec, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <span className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
                            {spec}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Key Advantages</h4>
                      <ul className="text-sm space-y-1">
                        {laptop.pros.map((pro, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <Star className="w-3 h-3 text-yellow-500" />
                            {pro}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Best For</h4>
                      <p className="text-sm text-gray-600">{laptop.bestFor}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4 mt-12">Where to Buy in Delhi</h2>
          
          <h3 className="text-xl font-semibold text-gray-900 mb-3">St Mary's Computers, Laxmi Nagar</h3>
          <p className="text-gray-700 mb-4">
            We specialize in quality refurbished laptops with warranty and after-sales support. All laptops 
            are thoroughly tested and come with genuine software installation. Student discounts available.
          </p>
          
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-6 mb-6">
            <h4 className="font-semibold mb-2">💡 Pro Tips for Student Laptop Buying</h4>
            <ul className="text-sm space-y-1">
              <li>• Always test the laptop thoroughly before purchase</li>
              <li>• Check battery health and charging functionality</li>
              <li>• Ensure all ports and features work properly</li>
              <li>• Ask about warranty terms and service support</li>
              <li>• Consider buying essential accessories (mouse, laptop bag)</li>
              <li>• Negotiate for software installation and setup</li>
            </ul>
          </div>

          <h2 className="text-2xl font-bold text-gray-900 mb-4">Conclusion</h2>
          <p className="text-gray-700 mb-6">
            The key to finding a great student laptop in Delhi is balancing performance, price, and reliability. 
            Refurbished laptops from reputable dealers like St Mary's Computers offer excellent value, providing 
            higher-end specifications at student-friendly prices. Remember to prioritize your specific needs - 
            whether it's programming, design work, or general studies - and choose accordingly.
          </p>
        </div>

        {/* CTA Section */}
        <Card className="mt-12">
          <CardHeader>
            <CardTitle className="text-center">Need Help Choosing the Right Laptop?</CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            <p className="text-gray-600 mb-6">
              Visit St Mary's Computers in Laxmi Nagar for personalized laptop recommendations and student discounts. 
              We'll help you find the perfect laptop within your budget.
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
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20help%20choosing%20a%20student%20laptop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp for Advice
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </article>
    </div>
  );
}
