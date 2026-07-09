"use client";

import { useState } from "react";
import Image from "next/image";
import { Monitor, Phone, MessageCircle, Star, Shield, CheckCircle, Mail, Grid, List, ShieldCheck, Key } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { BrandLogos } from "@/components/brand-logos";

interface Product {
  id: number;
  brand: string;
  serviceGuarantee: string;
  image: string;
}

const laptops: Product[] = [
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

const desktops: Product[] = [
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

const upsUnits: Product[] = [
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
    image: "/products/ups/apc.webp"
  }
];

const accessories: Product[] = [
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

interface SoftwareProduct {
  id: number;
  name: string;
  brand: string;
  category: "antivirus" | "office";
  variants: string[];
  features: string[];
  bgColor: string;
  textColor: string;
  borderColor: string;
  badgeBg: string;
}

const softwareProducts: SoftwareProduct[] = [
  {
    id: 1,
    name: "Quick Heal Antivirus Pro",
    brand: "Quick Heal",
    category: "antivirus",
    variants: ["1 Year – 1 User", "3 Years – 1 User"],
    features: ["Real-time virus protection", "Web security & phishing protection", "Ransomware protection", "Lightweight on system resources"],
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    badgeBg: "bg-orange-100",
  },
  {
    id: 2,
    name: "Quick Heal Internet Security",
    brand: "Quick Heal",
    category: "antivirus",
    variants: ["1 Year – 1 User", "3 Years – 1 User"],
    features: ["Advanced internet threat protection", "Safe banking & browsing", "Parental controls", "Firewall protection"],
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    badgeBg: "bg-orange-100",
  },
  {
    id: 3,
    name: "Quick Heal Total Security",
    brand: "Quick Heal",
    category: "antivirus",
    variants: ["1 Year – 1 User", "3 Years – 1 User", "Multi-User"],
    features: ["All-in-one comprehensive protection", "PC tuner & optimizer", "Data backup & recovery", "Multi-device support"],
    bgColor: "bg-orange-50",
    textColor: "text-orange-600",
    borderColor: "border-orange-200",
    badgeBg: "bg-orange-100",
  },
  {
    id: 4,
    name: "Norton Antivirus Plus",
    brand: "Norton",
    category: "antivirus",
    variants: ["1 Year – 1 Device"],
    features: ["Award-winning antivirus protection", "Smart firewall", "Password Manager", "2GB cloud backup"],
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200",
    badgeBg: "bg-yellow-100",
  },
  {
    id: 5,
    name: "Norton 360 Standard",
    brand: "Norton",
    category: "antivirus",
    variants: ["1 Year – 1 Device"],
    features: ["Real-time threat protection", "VPN for private browsing", "10GB cloud PC backup", "Dark web monitoring"],
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200",
    badgeBg: "bg-yellow-100",
  },
  {
    id: 6,
    name: "Norton 360 Deluxe",
    brand: "Norton",
    category: "antivirus",
    variants: ["1 Year – 3 Devices", "1 Year – 5 Devices"],
    features: ["Protection for up to 5 devices", "VPN included", "50GB cloud PC backup", "Parental controls"],
    bgColor: "bg-yellow-50",
    textColor: "text-yellow-700",
    borderColor: "border-yellow-200",
    badgeBg: "bg-yellow-100",
  },
  {
    id: 7,
    name: "Microsoft Office 2024",
    brand: "Microsoft",
    category: "office",
    variants: ["1 PC – One-time purchase"],
    features: ["Word, Excel, PowerPoint & OneNote", "One-time purchase — no subscription", "Works offline on 1 PC or Mac", "Genuine activation included"],
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    badgeBg: "bg-blue-100",
  },
  {
    id: 8,
    name: "Microsoft 365 Personal",
    brand: "Microsoft",
    category: "office",
    variants: ["1 Year – 1 User"],
    features: ["Always up-to-date Office apps", "1TB OneDrive cloud storage", "Works on PC, Mac, phone & tablet", "Teams, Outlook & more included"],
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    badgeBg: "bg-blue-100",
  },
  {
    id: 9,
    name: "Microsoft 365 Family",
    brand: "Microsoft",
    category: "office",
    variants: ["1 Year – Up to 6 Users"],
    features: ["Up to 6 users on all their devices", "1TB OneDrive per user", "All premium Office apps", "Best value for families & teams"],
    bgColor: "bg-blue-50",
    textColor: "text-blue-600",
    borderColor: "border-blue-200",
    badgeBg: "bg-blue-100",
  },
];

export default function ProductsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortBy, setSortBy] = useState("brand");
  const [filterBy, setFilterBy] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  const ProductCard = ({ product, type }: { product: Product; type: string }) => (
    <Card className="border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm group hover:translate-y-[-4px] overflow-hidden">
      <CardHeader className="pb-4">
        <div className="flex justify-between items-start gap-3">
          <div>
            <CardTitle className="text-xl text-gray-900 group-hover:text-blue-600 transition-colors">{product.brand}</CardTitle>
            <CardDescription className="mt-2 text-gray-600">{type.charAt(0).toUpperCase() + type.slice(1)} Solutions</CardDescription>
          </div>
          <Badge className="bg-green-100 text-green-700 border-green-300">
            Available
          </Badge>
        </div>
      </CardHeader>
      <CardContent>
        <div className="relative overflow-hidden rounded-xl mb-4 bg-gradient-to-br from-gray-100 to-gray-50 h-48">
          <Image
            src={product.image}
            alt={`${product.brand} ${type}`}
            width={400}
            height={192}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="space-y-3">
          <div className="flex items-start gap-3 p-3 rounded-lg bg-green-50 group-hover:bg-green-100 transition-colors">
            <Shield className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">{product.serviceGuarantee}</span>
          </div>
          <div className="flex items-start gap-3 p-3 rounded-lg bg-blue-50 group-hover:bg-blue-100 transition-colors">
            <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
            <span className="text-sm text-gray-700">Custom configurations available</span>
          </div>
          <div className="text-lg font-semibold text-blue-600 mb-4 mt-3">
            Contact for Current Options & Pricing
          </div>
          <div className="flex gap-2">
            <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
              <a href="tel:+919910836286">Call for Options</a>
            </Button>
            <Button variant="outline" size="sm" className="border-2 hover:bg-green-50 transition-colors" asChild>
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
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-4 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 animate-fade-in">
            Quality Computer Products in Delhi-NCR
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 mb-8 max-w-3xl mx-auto leading-relaxed animate-fade-in animation-delay-100 px-4">
            Discover our comprehensive range of laptops, desktops, UPS systems, accessories, and licensed software.
            All products are quality tested with professional service support and expert guidance.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center mb-12 animate-fade-in animation-delay-200 px-4">
            <Button size="lg" className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" asChild>
              <a href="tel:+919910836286" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                <span className="hidden sm:inline">Call +91 99108 36286</span>
                <span className="sm:hidden">Call Now</span>
              </a>
            </Button>
            <Button size="lg" className="bg-white border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" asChild>
              <a 
                href="https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20know%20about%20your%20products" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>WhatsApp</span>
              </a>
            </Button>
            <Button size="lg" className="bg-white border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-semibold shadow-lg hover:shadow-xl transition-all duration-300 w-full sm:w-auto" asChild>
              <a 
                href="mailto:stmaryscomputers@gmail.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Mail className="w-5 h-5" />
                <span>Email</span>
              </a>
            </Button>
          </div>

          <div className="bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-2xl max-w-2xl mx-auto border border-white/20 animate-fade-in animation-delay-300 px-4">
            <h3 className="text-lg sm:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 mb-6">Why Buy From Us?</h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-5">
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Quality tested products</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <Shield className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Service support included</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-500 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Expert guidance</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-50 transition-colors">
                <Phone className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium text-xs sm:text-sm">Complete setup service</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-0">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Our Product Categories
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              Browse our comprehensive selection of computer products. Each category offers 
              quality options with professional service support.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
          </div>

          {/* Filters and Search */}
          <div className="flex flex-col gap-4 mb-8 animate-fade-in animation-delay-100">
            <div className="w-full">
              <Input
                placeholder="Search products..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full border-2 border-gray-200 hover:border-blue-400 focus:border-blue-600 transition-colors"
              />
            </div>
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4">
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full sm:flex-1 border-2 border-gray-200 text-sm">
                  <SelectValue placeholder="Sort by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="brand">Sort by Brand</SelectItem>
                  <SelectItem value="condition">Sort by Condition</SelectItem>
                  <SelectItem value="category">Sort by Category</SelectItem>
                </SelectContent>
              </Select>
              <Select value={filterBy} onValueChange={setFilterBy}>
                <SelectTrigger className="w-full sm:flex-1 border-2 border-gray-200 text-sm">
                  <SelectValue placeholder="Filter by" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Products</SelectItem>
                  <SelectItem value="new">New Only</SelectItem>
                  <SelectItem value="refurbished">Refurbished Only</SelectItem>
                </SelectContent>
              </Select>
              <div className="flex gap-2 w-full sm:w-auto">
                <Button
                  variant={viewMode === "grid" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("grid")}
                  className="flex-1 sm:flex-none hover:shadow-lg transition-all"
                  title="Grid view"
                >
                  <Grid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "outline"}
                  size="sm"
                  onClick={() => setViewMode("list")}
                  className="flex-1 sm:flex-none hover:shadow-lg transition-all"
                  title="List view"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          <Tabs defaultValue="laptops" className="w-full">
            <TabsList className="grid w-full grid-cols-3 sm:grid-cols-4 lg:grid-cols-6 mb-8 bg-gradient-to-r from-gray-100 to-gray-50 p-1 gap-1 h-auto">
              <TabsTrigger value="laptops" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-xs sm:text-sm">Laptops</TabsTrigger>
              <TabsTrigger value="desktops" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-xs sm:text-sm">Desktops</TabsTrigger>
              <TabsTrigger value="ups" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-xs sm:text-sm">UPS</TabsTrigger>
              <TabsTrigger value="accessories" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-xs sm:text-sm">Accessories</TabsTrigger>
              <TabsTrigger value="printers" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-xs sm:text-sm hidden sm:block">Printers</TabsTrigger>
              <TabsTrigger value="software" className="data-[state=active]:bg-white data-[state=active]:shadow-md transition-all text-xs sm:text-sm hidden lg:block">Software</TabsTrigger>
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

            <TabsContent value="software" className="mt-8">
              <div className="mb-6">
                <h3 className="text-2xl font-semibold mb-4">Software Products</h3>
                <p className="text-gray-600 mb-2">
                  Genuine licensed antivirus software and Microsoft Office products. Expert installation,
                  activation, and support included with every purchase.
                </p>
                <p className="text-sm text-gray-500 mb-6">* Contact us for current pricing and availability.</p>
              </div>

              {/* Antivirus subsection */}
              <div className="mb-10">
                <div className="flex items-center gap-3 mb-4">
                  <ShieldCheck className="w-5 h-5 text-orange-500" />
                  <h4 className="text-lg font-semibold text-gray-800">Antivirus Software</h4>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                  {softwareProducts.filter(p => p.category === "antivirus").map((software) => (
                    <Card key={software.id} className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm group hover:translate-y-[-4px] overflow-hidden border-t-4 ${software.borderColor}`}>
                      <CardHeader className={`${software.bgColor} pb-4 border-b ${software.borderColor}`}>
                        <div className="flex justify-between items-start gap-3">
                          <div>
                            <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${software.badgeBg} ${software.textColor}`}>
                              <ShieldCheck className="w-3 h-3" />
                              {software.brand}
                            </div>
                            <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{software.name}</CardTitle>
                          </div>
                          <Badge className="bg-green-100 text-green-700 border-green-300 flex-shrink-0">
                            Available
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-5">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {software.variants.map((v, vi) => (
                            <span key={vi} className={`text-xs font-medium px-2.5 py-1 rounded-full ${software.badgeBg} ${software.textColor} border ${software.borderColor}`}>{v}</span>
                          ))}
                        </div>
                        <ul className="space-y-2 mb-5">
                          {software.features.map((f, fi) => (
                            <li key={fi} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{f}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="text-sm font-semibold text-blue-600 mb-3">Contact for Current Pricing</div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                            <a href="tel:+919910836286">Call for Options</a>
                          </Button>
                          <Button variant="outline" size="sm" className="border-2 hover:bg-green-50 transition-colors" asChild>
                            <a href={`https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20know%20about%20${encodeURIComponent(software.name)}`} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              {/* Microsoft Office subsection */}
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <Key className="w-5 h-5 text-blue-500" />
                  <h4 className="text-lg font-semibold text-gray-800">Microsoft Office</h4>
                  <div className="flex-1 h-px bg-gray-200"></div>
                </div>
                <div className={`grid gap-6 ${viewMode === "grid" ? "md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"}`}>
                  {softwareProducts.filter(p => p.category === "office").map((software) => (
                    <Card key={software.id} className={`border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/95 backdrop-blur-sm group hover:translate-y-[-4px] overflow-hidden border-t-4 ${software.borderColor}`}>
                      <CardHeader className={`${software.bgColor} pb-4 border-b ${software.borderColor}`}>
                        <div className="flex justify-between items-start gap-3">
                          <div>
                            <div className={`inline-flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1 rounded-full mb-2 ${software.badgeBg} ${software.textColor}`}>
                              <Key className="w-3 h-3" />
                              {software.brand}
                            </div>
                            <CardTitle className="text-lg text-gray-900 group-hover:text-blue-600 transition-colors leading-snug">{software.name}</CardTitle>
                          </div>
                          <Badge className="bg-green-100 text-green-700 border-green-300 flex-shrink-0">
                            Available
                          </Badge>
                        </div>
                      </CardHeader>
                      <CardContent className="pt-5">
                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {software.variants.map((v, vi) => (
                            <span key={vi} className={`text-xs font-medium px-2.5 py-1 rounded-full ${software.badgeBg} ${software.textColor} border ${software.borderColor}`}>{v}</span>
                          ))}
                        </div>
                        <ul className="space-y-2 mb-5">
                          {software.features.map((f, fi) => (
                            <li key={fi} className="flex items-start gap-2">
                              <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0 mt-0.5" />
                              <span className="text-sm text-gray-700">{f}</span>
                            </li>
                          ))}
                        </ul>
                        <div className="text-sm font-semibold text-blue-600 mb-3">Contact for Current Pricing</div>
                        <div className="flex gap-2">
                          <Button className="flex-1 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all" asChild>
                            <a href="tel:+919910836286">Call for Options</a>
                          </Button>
                          <Button variant="outline" size="sm" className="border-2 hover:bg-green-50 transition-colors" asChild>
                            <a href={`https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20know%20about%20${encodeURIComponent(software.name)}`} target="_blank" rel="noopener noreferrer">
                              <MessageCircle className="w-4 h-4" />
                            </a>
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>

              <div className="mt-8 p-5 bg-orange-50 rounded-2xl border border-orange-100">
                <div className="flex items-start gap-3">
                  <ShieldCheck className="w-5 h-5 text-orange-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-semibold text-gray-800 mb-1">Genuine Licensed Software — Installation & Support Included</p>
                    <p className="text-sm text-gray-600">All software sold is 100% official and licensed. We handle installation, activation, and provide ongoing support after purchase. <a href="/services/software-solutions" className="text-orange-600 hover:underline font-medium">Learn more about our Software Solutions service →</a></p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Brand Logos Section */}
      <section className="relative py-16 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <BrandLogos
            title="Brands We Use"
            brands={['Dell', 'HP', 'Lenovo', 'ASUS', 'Acer', 'Canon', 'Epson', 'Crucial', 'Samsung', 'Kingston', 'ADATA', 'SanDisk', 'WD', 'Seagate', 'Apple', 'MSI', 'Compaq', 'Nexus', 'APC', 'Microtek', 'Gigabyte', 'Intel', 'AMD', ]}
            category="general"
          />
        </div>
      </section>

      {/* Why Buy From Us Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10 px-4 sm:px-0">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              Why Choose St Mary&apos;s Computers?
            </h2>
            <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto">
              We don&apos;t just sell products - we provide complete solutions with ongoing support
              to ensure you get the most value from your investment.
            </p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <div className="group bg-blue-50 hover:bg-blue-100 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-blue-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <CheckCircle className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Quality Testing & Assurance</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Every product undergoes rigorous testing to ensure optimal performance. We stand
                behind the quality of everything we sell with comprehensive service support.
              </p>
            </div>

            <div className="group bg-green-50 hover:bg-green-100 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-green-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 group-hover:bg-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Expert Guidance & Support</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Our experienced team helps you choose the right products for your needs and budget.
                Ongoing technical support ensures you get maximum value from your purchase.
              </p>
            </div>

            <div className="group bg-purple-50 hover:bg-purple-100 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-purple-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 group-hover:bg-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Complete Setup Service</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Professional installation and setup service included. We ensure your new equipment
                is properly configured and optimized for your specific requirements.
              </p>
            </div>

            <div className="group bg-yellow-50 hover:bg-yellow-100 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-yellow-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-yellow-100 group-hover:bg-yellow-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <Star className="w-6 h-6 sm:w-8 sm:h-8 text-yellow-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Competitive Pricing</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Fair and transparent pricing with no hidden costs. We work with you to find
                solutions that fit your budget without compromising on quality.
              </p>
            </div>

            <div className="group bg-red-50 hover:bg-red-100 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-red-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-red-100 group-hover:bg-red-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-red-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Local Service & Support</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Based in Laxmi Nagar with deep understanding of local needs. Quick response times
                and personalized service you can count on.
              </p>
            </div>

            <div className="group bg-indigo-50 hover:bg-indigo-100 rounded-2xl p-6 sm:p-8 text-center transition-all duration-300 hover:shadow-lg hover:translate-y-[-4px] border border-indigo-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-indigo-100 group-hover:bg-indigo-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <Monitor className="w-6 h-6 sm:w-8 sm:h-8 text-indigo-600" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-3 text-gray-900">Upgrade & Trade-in Options</h3>
              <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                Flexible upgrade paths and trade-in options for your existing equipment. We help
                you stay current with technology while maximizing your investment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-0 left-0 w-80 h-80 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 px-4 sm:px-0">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-6 animate-fade-in">
            Ready to Find Your Perfect Computer Solution?
          </h2>
          <p className="text-base sm:text-lg text-gray-600 mb-12 animate-fade-in animation-delay-100">
            Contact us today for personalized product recommendations and competitive pricing.
            Our experts are ready to help you find exactly what you need.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16 animate-fade-in animation-delay-200">
            <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-blue-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-blue-100 group-hover:bg-blue-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900">Call for Pricing</h3>
              <p className="text-gray-600 mb-4 text-sm">Speak with our product experts</p>
              <a
                href="tel:+919910836286"
                className="text-blue-600 hover:text-blue-700 font-medium text-base"
              >
                +91 99108 36286
              </a>
            </div>

            <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-green-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-green-100 group-hover:bg-green-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900">WhatsApp Inquiry</h3>
              <p className="text-gray-600 mb-4 text-sm">Quick product information</p>
              <a
                href="https://wa.me/919910836286?text=Hi%2C%20I%20want%20to%20know%20about%20your%20products"
                target="_blank"
                rel="noopener noreferrer"
                className="text-green-600 hover:text-green-700 font-medium text-base"
              >
                Chat Now
              </a>
            </div>

            <div className="group bg-white/95 backdrop-blur-sm p-6 sm:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-purple-100">
              <div className="w-14 h-14 sm:w-16 sm:h-16 bg-purple-100 group-hover:bg-purple-200 rounded-2xl flex items-center justify-center mx-auto mb-4 sm:mb-6 transition-colors">
                <Mail className="w-6 h-6 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-base sm:text-lg font-semibold mb-3 text-gray-900">Email Inquiry</h3>
              <p className="text-gray-600 mb-4 text-sm">Detailed product information</p>
              <a
                href="mailto:stmaryscomputers@gmail.com"
                className="text-purple-600 hover:text-purple-700 font-medium text-base"
              >
                Send Email
              </a>
            </div>
          </div>

          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 sm:p-8 shadow-lg border border-blue-200 animate-fade-in animation-delay-300">
            <h3 className="text-xl sm:text-2xl font-semibold mb-4 text-gray-900">Product Consultation Service</h3>
            <p className="text-gray-600 mb-8 text-base">
              Not sure which product is right for you? Schedule a free consultation with us.
              We&apos;ll help you choose the perfect solution for your needs and budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold shadow-md hover:shadow-lg transition-all w-full sm:w-auto" asChild>
                <a href="tel:+919910836286">Call Now</a>
              </Button>
              <Button size="lg" className="bg-white border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold shadow-md hover:shadow-lg transition-all w-full sm:w-auto" asChild>
                <a href="/contact">Contact Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
