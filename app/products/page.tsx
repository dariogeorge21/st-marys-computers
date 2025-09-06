import { Monitor, Laptop, Zap, Phone, MessageCircle, Star, Shield, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refurbished Laptops & Computer Products in Laxmi Nagar | St Mary's Computers",
  description: "Quality refurbished laptops, monitors, UPS systems in Laxmi Nagar. Dell, HP, Lenovo second-hand laptops with warranty. Best prices in Delhi. Call +91 99108 36286",
  keywords: "refurbished laptops Delhi, second hand laptop Laxmi Nagar, used computers Delhi, buy laptop Delhi, computer monitors Delhi",
};

const laptops = [
  {
    brand: "Dell",
    model: "Latitude 5520",
    specs: "Intel i5 11th Gen, 8GB RAM, 256GB SSD, 15.6\" Display",
    condition: "Excellent",
    warranty: "6 months",
    price: "₹32,000",
    originalPrice: "₹45,000",
    image: "/images/dell-latitude.jpg"
  },
  {
    brand: "HP",
    model: "EliteBook 840 G7",
    specs: "Intel i7 10th Gen, 16GB RAM, 512GB SSD, 14\" Display",
    condition: "Very Good",
    warranty: "6 months",
    price: "₹42,000",
    originalPrice: "₹65,000",
    image: "/images/hp-elitebook.jpg"
  },
  {
    brand: "Lenovo",
    model: "ThinkPad E14",
    specs: "Intel i5 10th Gen, 8GB RAM, 256GB SSD, 14\" Display",
    condition: "Good",
    warranty: "3 months",
    price: "₹28,000",
    originalPrice: "₹40,000",
    image: "/images/lenovo-thinkpad.jpg"
  },
  {
    brand: "ASUS",
    model: "VivoBook 15",
    specs: "Intel i3 10th Gen, 8GB RAM, 1TB HDD, 15.6\" Display",
    condition: "Good",
    warranty: "3 months",
    price: "₹22,000",
    originalPrice: "₹35,000",
    image: "/images/asus-vivobook.jpg"
  }
];

const monitors = [
  {
    brand: "Dell",
    model: "P2414H",
    specs: "24\" Full HD, IPS Panel, VGA + DVI",
    condition: "Excellent",
    price: "₹8,500",
    originalPrice: "₹12,000"
  },
  {
    brand: "HP",
    model: "E223",
    specs: "21.5\" Full HD, LED Backlit, HDMI + VGA",
    condition: "Very Good",
    price: "₹7,200",
    originalPrice: "₹10,500"
  },
  {
    brand: "Samsung",
    model: "S22F350",
    specs: "22\" Full HD, PLS Panel, HDMI + VGA",
    condition: "Good",
    price: "₹6,800",
    originalPrice: "₹9,500"
  }
];

const upsUnits = [
  {
    brand: "APC",
    model: "Back-UPS 600VA",
    specs: "600VA/360W, 4 Outlets, USB Connectivity",
    condition: "Refurbished",
    price: "₹3,200",
    originalPrice: "₹4,500"
  },
  {
    brand: "Luminous",
    model: "Zelio 1100VA",
    specs: "1100VA/660W, 6 Outlets, Digital Display",
    condition: "New",
    price: "₹4,800",
    originalPrice: "₹6,200"
  },
  {
    brand: "Microtek",
    model: "UPS-EB 900VA",
    specs: "900VA/540W, 4 Outlets, Auto Restart",
    condition: "Refurbished",
    price: "₹3,800",
    originalPrice: "₹5,000"
  }
];

export default function ProductsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Store",
    "name": "St Mary's Computers",
    "description": "Quality refurbished laptops, monitors, and UPS systems in Laxmi Nagar, New Delhi",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Laxmi Nagar",
      "addressLocality": "New Delhi",
      "postalCode": "110092",
      "addressCountry": "IN"
    },
    "telephone": "+919910836286",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Computer Products",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Refurbished Laptops",
            "description": "Quality refurbished laptops from Dell, HP, Lenovo with warranty"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "Computer Monitors",
            "description": "Used computer monitors in excellent condition"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Product",
            "name": "UPS Systems",
            "description": "New and refurbished UPS systems for power backup"
          }
        }
      ]
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
        <section className="bg-gradient-to-br from-green-50 to-emerald-100 py-16 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Quality Refurbished Laptops & Computer Products
            </h1>
            <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
              Best deals on refurbished laptops, monitors, and UPS systems in Laxmi Nagar. 
              All products tested and certified with warranty. Student-friendly prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                <a href="tel:+919910836286" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call for Best Prices
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a 
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20buy%20a%20laptop" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp for Stock
                </a>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center justify-center gap-2">
                <Shield className="w-6 h-6 text-green-600" />
                <span className="font-medium">6-Month Warranty</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <CheckCircle className="w-6 h-6 text-blue-600" />
                <span className="font-medium">Tested & Certified</span>
              </div>
              <div className="flex items-center justify-center gap-2">
                <Star className="w-6 h-6 text-yellow-500" />
                <span className="font-medium">Best Prices in Delhi</span>
              </div>
            </div>
          </div>
        </section>

        {/* Laptops Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Refurbished Laptops
              </h2>
              <p className="text-lg text-gray-600">
                Quality second-hand laptops from top brands with warranty and support
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
              {laptops.map((laptop, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div>
                        <CardTitle className="text-xl">{laptop.brand} {laptop.model}</CardTitle>
                        <CardDescription className="mt-2">{laptop.specs}</CardDescription>
                      </div>
                      <Badge variant={laptop.condition === "Excellent" ? "default" : "secondary"}>
                        {laptop.condition}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Warranty:</span>
                        <span className="font-medium">{laptop.warranty}</span>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-2xl font-bold text-green-600">{laptop.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{laptop.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      <Button className="flex-1" asChild>
                        <a href="tel:+919910836286">Call for Details</a>
                      </Button>
                      <Button variant="outline" className="flex-1" asChild>
                        <a 
                          href={`https://wa.me/919910836286?text=Hi%2C%20I'm%20interested%20in%20${laptop.brand}%20${laptop.model}`}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          WhatsApp
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Monitors Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Computer Monitors
              </h2>
              <p className="text-lg text-gray-600">
                Quality used monitors for home and office use
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {monitors.map((monitor, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{monitor.brand} {monitor.model}</CardTitle>
                    <CardDescription>{monitor.specs}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Condition:</span>
                        <Badge variant="secondary">{monitor.condition}</Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xl font-bold text-green-600">{monitor.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{monitor.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href="tel:+919910836286">Call for Details</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* UPS Section */}
        <section className="py-16 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                UPS Systems
              </h2>
              <p className="text-lg text-gray-600">
                Power backup solutions for your computers and electronics
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {upsUnits.map((ups, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{ups.brand} {ups.model}</CardTitle>
                    <CardDescription>{ups.specs}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between">
                        <span className="text-sm text-gray-600">Condition:</span>
                        <Badge variant={ups.condition === "New" ? "default" : "secondary"}>
                          {ups.condition}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <div>
                          <span className="text-xl font-bold text-green-600">{ups.price}</span>
                          <span className="text-sm text-gray-500 line-through ml-2">{ups.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                    <Button className="w-full" asChild>
                      <a href="tel:+919910836286">Call for Details</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 px-4 bg-blue-600 text-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">
                Why Buy from St Mary's Computers?
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <Shield className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Warranty Included</h3>
                <p className="text-blue-100">All products come with warranty and after-sales support</p>
              </div>
              <div className="text-center">
                <CheckCircle className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Tested & Certified</h3>
                <p className="text-blue-100">Every product is thoroughly tested before sale</p>
              </div>
              <div className="text-center">
                <Star className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Best Prices</h3>
                <p className="text-blue-100">Competitive prices with transparent pricing</p>
              </div>
              <div className="text-center">
                <Phone className="w-12 h-12 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-2">Personal Service</h3>
                <p className="text-blue-100">Direct service from owner George CV</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Looking for Specific Products?
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Contact us for current stock availability and best prices. We get new inventory regularly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+919910836286">Call +91 99108 36286</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20check%20current%20stock"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Check Current Stock
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
