"use client";

import { useState } from "react";
import { Monitor, Laptop, Zap, Phone, MessageCircle, Star, Shield, CheckCircle, Mail, Filter, Search, Grid, List } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BrandLogos } from "@/components/brand-logos";

const laptops = [
  {
    id: 1,
    brand: "Dell",
    serviceGuarantee: "Quality tested with professional setup",
    image: "/products/laptop/dell.avif"
  },
  {
    id: 2,
    brand: "HP",
    serviceGuarantee: "Quality tested with professional setup",
    image: "/products/laptop/hp.avif"
  },
  {
    id: 3,
    brand: "Lenovo",
    serviceGuarantee: "Quality tested with professional setup",
    image: "/products/laptop/lenovo.jpg"
  },
  {
    id: 4,
    brand: "ASUS",
    serviceGuarantee: "Quality tested with professional setup",
    image: "/products/laptop/asus.webp"
  },
  {
    id: 5,
    brand: "Acer",
    serviceGuarantee: "Quality tested with professional setup",
    image: "/products/laptop/acer.webp"
  }
];

const desktops = [
  {
    id: 1,
    brand: "Dell",
    serviceGuarantee: "Quality tested with professional setup",
    image: "/products/desktop/dell.jpg"
  },
  {
    id: 2,
    brand: "HP",
    serviceGuarantee: "Quality tested with professional setup",
    image: "/products/desktop/hp.webp"
  },
  {
    id: 3,
    brand: "Lenovo",
    serviceGuarantee: "Quality tested with professional setup",
    image: "/products/desktop/lenovo.avif"
  }
];

const upsUnits = [
  {
    id: 1,
    brand: "Nexus",
    serviceGuarantee: "Professional installation included",
    image: "/products/ups/nexus.jpg"
  },
  {
    id: 2,
    brand: "Microtech",
    serviceGuarantee: "Professional installation included",
    image: "/products/ups/microtech.jpg"
  },
  {
    id: 3,
    brand: "APC",
    serviceGuarantee: "Professional installation included",
    image: "/products//ups/apc.webp"
  }
];

const accessories = [
  {
    id: 1,
    brand: "Kingston",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/kingston.jpg"
  },
  {
    id: 2,
    brand: "Samsung",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/samsung.webp"
  },
  {
    id: 3,
    brand: "ADATA",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/adata.webp"
  },
  {
    id: 4,
    brand: "SanDisk",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/sandisk.png"
  },
  {
    id: 5,
    brand: "WD",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/wd.jpg"
  },
  {
    id: 6,
    brand: "Seagate",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/seagate.webp"
  },
  {
    id: 7,
    brand: "Crucial",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/crucial.jpg"
  },
  {
    id: 8,
    brand: "Dell",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/dell.jpg"
  },
  {
    id: 9,
    brand: "HP",
    serviceGuarantee: "Genuine products with warranty",
    image: "/products/accessories/hp.avif"
  }
];

const printers = [
  {
    id: 1,
    brand: "HP",
    serviceGuarantee: "Professional setup and configuration",
    image: "/products/printers/hp.jpg"
  },
  {
    id: 2,
    brand: "Canon",
    serviceGuarantee: "Professional setup and configuration",
    image: "/products/printers/canon.png"
  },
  {
    id: 3,
    brand: "Epson",
    serviceGuarantee: "Professional setup and configuration",
    image: "/products/printers/epson.png"
  }
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("brand");
  const [filterBy, setFilterBy] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const ProductCard = ({ product, type }: { product: any; type: string }) => (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <div className="flex justify-between items-start">
          <div>
            <CardTitle className="text-xl">{product.brand}</CardTitle>
            <CardDescription className="mt-2">{type.charAt(0).toUpperCase() + type.slice(1)} Solutions</CardDescription>
          </div>
          <Badge variant="outline">
            Available
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <img
          src={product.image}
          alt={`${product.brand} ${type}`}
          className="w-full h-48 object-cover mb-4 rounded-md"
        />
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4 text-green-600" />
            <span className="text-sm text-gray-600">{product.serviceGuarantee}</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-blue-600" />
            <span className="text-sm text-gray-600">Custom configurations available</span>
          </div>
          <div className="text-lg font-semibold text-blue-600 mb-4">
            Contact for Current Options & Pricing
          </div>
          <div className="flex gap-2">
            <Button className="flex-1" asChild>
              <a href="tel:+919910836286">Call for Options</a>
            </Button>
            <Button variant="outline" size="sm" asChild>
              <a 
                href={`https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20know%20about%20${product.brand}%20${type}%20options`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <MessageCircle className="w-4 h-4" />
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Quality Computer Products in Delhi-NCR
          </h1>
          <p className="text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
            Discover our comprehensive range of laptops, desktops, UPS systems, and accessories. 
            All products are quality tested with professional service support.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="tel:+919910836286" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call +91 99108 36286
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20know%20about%20your%20products" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                WhatsApp Inquiry
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

          <div className="bg-white p-6 rounded-lg shadow-lg max-w-2xl mx-auto">
            <h3 className="text-lg font-semibold mb-4">Why Buy From Us?</h3>
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-green-600" />
                <span>Quality tested products</span>
              </div>
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-blue-600" />
                <span>Service support included</span>
              </div>
              <div className="flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-500" />
                <span>Expert guidance</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-purple-600" />
                <span>Complete setup service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive selection of computer products. Each category offers 
              quality options with professional service support.
            </p>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full"
              />
            </div>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="brand">Sort by Brand</SelectItem>
                <SelectItem value="condition">Sort by Condition</SelectItem>
                <SelectItem value="category">Sort by Category</SelectItem>
              </SelectContent>
            </Select>
            <Select value={filterBy} onValueChange={setFilterBy}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Products</SelectItem>
                <SelectItem value="new">New Only</SelectItem>
                <SelectItem value="refurbished">Refurbished Only</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex gap-2">
              <Button
                variant={viewMode === "grid" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("grid")}
              >
                <Grid className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => setViewMode("list")}
              >
                <List className="w-4 h-4" />
              </Button>
            </div>
          </div>

          <Tabs defaultValue="laptops" className="w-full">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="laptops">Laptops</TabsTrigger>
              <TabsTrigger value="desktops">Desktops</TabsTrigger>
              <TabsTrigger value="ups">UPS Systems</TabsTrigger>
              <TabsTrigger value="accessories">Accessories</TabsTrigger>
              <TabsTrigger value="printers">Printers</TabsTrigger>
            </TabsList>
            
            <TabsContent value="laptops" className="mt-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Laptops & Notebooks</h3>
                <p className="text-gray-600 mb-6">
                  Quality laptops for students, professionals, and businesses. All laptops are thoroughly 
                  tested and come with our quality assurance guarantee.
                </p>
              </div>
              <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {laptops.map((laptop) => (
                  <ProductCard key={laptop.id} product={laptop} type="laptop" />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="desktops" className="mt-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Desktop Computers</h3>
                <p className="text-gray-600 mb-6">
                  Professional desktop computers for office and home use. Various sizes and specifications 
                  available to meet your display needs.
                </p>
              </div>
              <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {desktops.map((desktop) => (
                  <ProductCard key={desktop.id} product={desktop} type="desktop" />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="ups" className="mt-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">UPS & Power Solutions</h3>
                <p className="text-gray-600 mb-6">
                  Protect your valuable equipment with our range of UPS systems. Professional 
                  installation and setup service included.
                </p>
              </div>
              <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {upsUnits.map((ups) => (
                  <ProductCard key={ups.id} product={ups} type="ups" />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="accessories" className="mt-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Computer Accessories</h3>
                <p className="text-gray-600 mb-6">
                  Upgrade your computer with quality accessories. RAM, storage, and other components 
                  with professional installation service.
                </p>
              </div>
              <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {accessories.map((accessory) => (
                  <ProductCard key={accessory.id} product={accessory} type="accessory" />
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="printers" className="mt-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Printers & Scanners</h3>
                <p className="text-gray-600 mb-6">
                  Complete printing solutions for home and office. Installation, setup, and 
                  ongoing support included with every purchase.
                </p>
              </div>
              <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                {printers.map((printer) => (
                  <ProductCard key={printer.id} product={printer} type="printer" />
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="py-12 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <BrandLogos
            title="Brands We Use"
            brands={['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Canon', 'Epson', 'Crucial', 'Samsung', 'Kingston', 'ADATA', 'SanDisk', 'WD', 'Seagate', 'Apple', 'MSI', 'Compaq', 'Nexus', 'APC', 'Microtek', 'Gigabyte', 'Intel', 'AMD', ]}
            category="general"
          />
        </div>
      </section>

      {/* Why Buy From Us Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose St Mary's Computers?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We don't just sell products - we provide complete solutions with ongoing support
              to ensure you get the most value from your investment.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-blue-50 rounded-lg p-6 text-center">
              <CheckCircle className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Quality Testing & Assurance</h3>
              <p className="text-gray-600">
                Every product undergoes rigorous testing to ensure optimal performance. We stand
                behind the quality of everything we sell with comprehensive service support.
              </p>
            </div>

            <div className="bg-green-50 rounded-lg p-6 text-center">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Expert Guidance & Support</h3>
              <p className="text-gray-600">
                Our experienced team helps you choose the right products for your needs and budget.
                Ongoing technical support ensures you get maximum value from your purchase.
              </p>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 text-center">
              <Phone className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Complete Setup Service</h3>
              <p className="text-gray-600">
                Professional installation and setup service included. We ensure your new equipment
                is properly configured and optimized for your specific requirements.
              </p>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 text-center">
              <Star className="w-12 h-12 text-yellow-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Competitive Pricing</h3>
              <p className="text-gray-600">
                Fair and transparent pricing with no hidden costs. We work with you to find
                solutions that fit your budget without compromising on quality.
              </p>
            </div>

            <div className="bg-red-50 rounded-lg p-6 text-center">
              <MessageCircle className="w-12 h-12 text-red-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Local Service & Support</h3>
              <p className="text-gray-600">
                Based in Laxmi Nagar with deep understanding of local needs. Quick response times
                and personalized service you can count on.
              </p>
            </div>

            <div className="bg-indigo-50 rounded-lg p-6 text-center">
              <Monitor className="w-12 h-12 text-indigo-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Upgrade & Trade-in Options</h3>
              <p className="text-gray-600">
                Flexible upgrade paths and trade-in options for your existing equipment. We help
                you stay current with technology while maximizing your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Ready to Find Your Perfect Computer Solution?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Contact us today for personalized product recommendations and competitive pricing.
            Our experts are ready to help you find exactly what you need.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Call for Pricing</h3>
              <p className="text-gray-600 mb-3">Speak with our product experts</p>
              <a
                href="tel:+919910836286"
                className="text-blue-600 hover:text-blue-700 font-medium"
              >
                +91 99108 36286
              </a>
            </div>

            <div>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageCircle className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">WhatsApp Inquiry</h3>
              <p className="text-gray-600 mb-3">Quick product information</p>
              <a
                href="https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20know%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium"
              >
                Chat Now
              </a>
            </div>

            <div>
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Email Inquiry</h3>
              <p className="text-gray-600 mb-3">Detailed product information</p>
              <a
                href="mailto:stmaryscomputers@gmail.com"
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="bg-white rounded-lg p-8 shadow-lg">
            <h3 className="text-xl font-semibold mb-4">Product Consultation Service</h3>
            <p className="text-gray-600 mb-6">
              Not sure which product is right for you? Schedule a free consultation with us.
              We'll help you choose the perfect solution for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-blue-600 hover:bg-blue-700" asChild>
                <a href="tel:+919910836286">Call Now</a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
