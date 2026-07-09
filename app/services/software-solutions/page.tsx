import { Phone, MessageCircle, CheckCircle, Shield, Star, ShieldCheck, RefreshCw, Headphones, Key, Download, Laptop } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Antivirus & Microsoft Office Software Solutions in Delhi | St Mary's Computers",
  description:
    "Buy genuine Quick Heal, Norton antivirus & Microsoft Office 2024/365 in Delhi. Software installation, activation, license renewal & technical support. Call +91 99108 36286",
  keywords:
    "Quick Heal antivirus Delhi, Norton antivirus Delhi, Microsoft Office 2024 Delhi, Microsoft 365 Delhi, antivirus software Laxmi Nagar, software installation Delhi, license renewal Delhi, antivirus support New Delhi",
};

const antivirusProducts = [
  {
    brand: "Quick Heal",
    products: [
      { name: "Quick Heal Antivirus Pro", variants: ["1 Year – 1 User", "3 Years – 1 User"] },
      { name: "Quick Heal Internet Security", variants: ["1 Year – 1 User", "3 Years – 1 User"] },
      { name: "Quick Heal Total Security", variants: ["1 Year – 1 User", "3 Years – 1 User", "Multi-User"] },
    ],
    color: "orange",
    bgColor: "bg-orange-50",
    borderColor: "border-orange-200",
    textColor: "text-orange-600",
    badgeBg: "bg-orange-100",
  },
  {
    brand: "Norton",
    products: [
      { name: "Norton Plus", variants: ["1 Year – 1 Device"] },
      { name: "Norton Antivirus Plus", variants: ["1 Year – 1 Device"] },
      { name: "Norton 360 Deluxe", variants: ["1 Year – 3 Devices", "1 Year – 5 Devices"] },
      { name: "Norton 360 Standard", variants: ["1 Year – 1 Device"] },
    ],
    color: "yellow",
    bgColor: "bg-yellow-50",
    borderColor: "border-yellow-200",
    textColor: "text-yellow-600",
    badgeBg: "bg-yellow-100",
  },
];

const officeProducts = [
  {
    name: "Microsoft Office 2024",
    description: "One-time purchase. Includes Word, Excel, PowerPoint, and more. For personal or business use.",
    features: ["Word, Excel, PowerPoint", "One-time purchase — no subscription", "For 1 PC or Mac", "Genuine activation included"],
  },
  {
    name: "Microsoft 365 Personal",
    description: "Subscription plan for 1 user. Always up-to-date apps plus 1TB OneDrive storage.",
    features: ["1 User / 1 Month or 1 Year", "1TB OneDrive cloud storage", "Word, Excel, Teams & more", "Works on PC, Mac, tablets & phones"],
  },
  {
    name: "Microsoft 365 Family",
    description: "Best value for families. Up to 6 users with 1TB OneDrive each and premium Office apps.",
    features: ["Up to 6 Users / 1 Year", "1TB OneDrive per user", "All premium Office apps", "Ideal for home & students"],
  },
];

const supportServices = [
  {
    icon: <Download className="w-6 h-6" />,
    title: "Software Installation",
    desc: "We install your antivirus or Office software on your PC, laptop, or device — cleanly and correctly.",
  },
  {
    icon: <Key className="w-6 h-6" />,
    title: "Product Activation",
    desc: "Having trouble activating your software? We handle activation for Quick Heal, Norton, and Microsoft Office.",
  },
  {
    icon: <RefreshCw className="w-6 h-6" />,
    title: "License Renewal",
    desc: "Renew your existing antivirus or Microsoft 365 subscription before it expires to stay protected.",
  },
  {
    icon: <Shield className="w-6 h-6" />,
    title: "Subscription Management",
    desc: "We help you manage, upgrade, or transfer your software licenses across devices as needed.",
  },
  {
    icon: <Headphones className="w-6 h-6" />,
    title: "Technical Support",
    desc: "Expert troubleshooting for software errors, compatibility issues, and activation problems.",
  },
  {
    icon: <Laptop className="w-6 h-6" />,
    title: "Installation Assistance",
    desc: "On-site or remote installation help for antivirus and Microsoft Office on your devices.",
  },
];

const faqs = [
  {
    question: "Which antivirus is best for home use?",
    answer:
      "For home users, Quick Heal Antivirus Pro or Norton 360 Standard are excellent choices. Both provide real-time protection, malware removal, and are lightweight on system resources. We can help you choose the right plan based on the number of devices you want to protect.",
  },
  {
    question: "What is the difference between Microsoft Office 2024 and Microsoft 365?",
    answer:
      "Microsoft Office 2024 is a one-time purchase that includes classic apps like Word, Excel, and PowerPoint for one device. Microsoft 365 is a subscription (monthly or yearly) that includes the latest app updates, 1TB of OneDrive cloud storage, and works across multiple devices. For regular use, 365 is generally better value.",
  },
  {
    question: "Do you sell genuine (licensed) software?",
    answer:
      "Yes, absolutely. All software we sell — Quick Heal, Norton, and Microsoft Office — is 100% genuine and officially licensed. You receive authentic activation keys and can verify authenticity directly with the software manufacturer.",
  },
  {
    question: "Can you install the software at my home or office?",
    answer:
      "Yes! We offer on-site installation and setup. Whether you need antivirus installed on one PC or Microsoft Office set up across multiple computers, our technician can visit your home or office in Delhi NCR.",
  },
  {
    question: "My antivirus license has expired. Can you help renew it?",
    answer:
      "Certainly. We assist with renewals for Quick Heal, Norton, and other popular antivirus brands. Renewing on time ensures your device stays continuously protected without gaps in coverage.",
  },
  {
    question: "Can I transfer my software to a new computer?",
    answer:
      "It depends on the license type. Microsoft 365 subscriptions can be moved between devices. Office 2024 is typically tied to one device. For antivirus, most multi-device licenses allow transfers. Contact us and we'll guide you through the process.",
  },
  {
    question: "How long does installation take?",
    answer:
      "Antivirus installation and activation typically takes 15–30 minutes. Microsoft Office installation takes around 20–45 minutes depending on your internet speed and system. We aim for a quick, clean setup with no disruption.",
  },
];

export default function SoftwareSolutionsPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Software Solutions — Antivirus & Microsoft Office",
    description:
      "Genuine Quick Heal and Norton antivirus products, Microsoft Office 2024 and Microsoft 365 subscriptions, plus expert software installation, activation, and support services in Delhi",
    provider: {
      "@type": "LocalBusiness",
      name: "St Mary's Computers",
      address: {
        "@type": "PostalAddress",
        streetAddress: "Laxmi Nagar",
        addressLocality: "New Delhi",
        postalCode: "110092",
        addressCountry: "IN",
      },
      telephone: "+919910836286",
    },
    areaServed: "New Delhi",
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-100 py-16 px-4 relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Genuine{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                    Software Solutions
                  </span>{" "}
                  in Delhi
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Buy licensed antivirus software and Microsoft Office products with expert installation,
                  activation, and ongoing support — all at your doorstep or in-store.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <a href="tel:+919910836286" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call for Pricing
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-orange-300 hover:bg-orange-50" asChild>
                    <a
                      href="https://wa.me/919910836286?text=Hi%2C%20I%20am%20interested%20in%20software%20solutions%20(antivirus%20%2F%20Microsoft%20Office)"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Chat
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <ShieldCheck className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">100% Genuine</p>
                  </div>
                  <div>
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">Expert Support</p>
                  </div>
                  <div>
                    <Key className="w-8 h-8 text-amber-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Fast Activation</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-orange-100">
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-orange-600 to-amber-600">
                  What We Offer
                </h3>
                <div className="space-y-4">
                  {[
                    "Quick Heal Antivirus Pro, Internet Security & Total Security",
                    "Norton Plus, Norton 360 Standard & Deluxe",
                    "Microsoft Office 2024 (one-time purchase)",
                    "Microsoft 365 Personal & Family subscriptions",
                    "Software installation at home or office",
                    "Product activation & license management",
                    "License renewal before expiry",
                    "Troubleshooting & technical support",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-orange-600 flex-shrink-0" />
                      <span className="text-gray-700 text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Antivirus Products Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Antivirus Software
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Protect your devices with genuine, licensed antivirus software from trusted brands.
                Available for 1-year and multi-year plans with single or multi-user options.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {antivirusProducts.map((brand, brandIdx) => (
                <div key={brandIdx} className={`rounded-2xl border-2 ${brand.borderColor} ${brand.bgColor} p-6 sm:p-8`}>
                  <h3 className={`text-2xl font-bold ${brand.textColor} mb-6`}>{brand.brand}</h3>
                  <div className="space-y-5">
                    {brand.products.map((product, productIdx) => (
                      <div key={productIdx} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-3">{product.name}</h4>
                        <div className="flex flex-wrap gap-2">
                          {product.variants.map((variant, varIdx) => (
                            <span
                              key={varIdx}
                              className={`text-xs font-medium px-3 py-1.5 rounded-full ${brand.badgeBg} ${brand.textColor} border ${brand.borderColor}`}
                            >
                              {variant}
                            </span>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                  <Button
                    className={`w-full mt-6 ${
                      brand.brand === "Quick Heal"
                        ? "bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700"
                        : "bg-gradient-to-r from-yellow-600 to-orange-500 hover:from-yellow-700 hover:to-orange-600"
                    } text-white font-semibold shadow-md hover:shadow-lg transition-all`}
                    asChild
                  >
                    <a href="tel:+919910836286">Call for {brand.brand} Pricing</a>
                  </Button>
                </div>
              ))}
            </div>

            <p className="text-center text-sm text-gray-500 mt-8">
              * Other editions and plans may also be available. Contact us for the full list and current pricing.
            </p>
          </div>
        </section>

        {/* Microsoft Office Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Microsoft Office Products
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Genuine Microsoft Office licenses for personal, professional, and family use.
                We help you choose the right plan and handle complete activation.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6"></div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {officeProducts.map((product, idx) => (
                <Card key={idx} className="hover:shadow-lg transition-shadow border-blue-100 hover:border-blue-300">
                  <CardHeader>
                    <CardTitle className="text-lg text-blue-700">{product.name}</CardTitle>
                    <CardDescription>{product.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {product.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2 text-sm text-gray-700">
                          <CheckCircle className="w-4 h-4 text-blue-600 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white"
                      asChild
                    >
                      <a href="tel:+919910836286">Call for Pricing</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Software Support Services */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Software Support Services
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Beyond just selling software — we provide complete end-to-end support so everything runs smoothly.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {supportServices.map((service, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-100 hover:border-orange-200 animate-fade-in"
                  style={{ animationDelay: `${idx * 100}ms` }}
                >
                  <div className="w-14 h-14 bg-orange-50 group-hover:bg-orange-100 rounded-2xl flex items-center justify-center mb-4 text-orange-600 group-hover:scale-110 transition-transform">
                    {service.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{service.title}</h3>
                  <p className="text-sm text-gray-600">{service.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose St Mary&apos;s Computers for Software?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We make buying and using software simple, safe, and hassle-free.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-orange-500 to-amber-500 mx-auto mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <ShieldCheck className="w-7 h-7" />, title: "100% Genuine", desc: "Only official, licensed software — no pirated copies", color: "text-orange-600", bg: "bg-orange-50" },
                { icon: <Star className="w-7 h-7" />, title: "Expert Advice", desc: "We help you pick the right plan for your needs", color: "text-yellow-600", bg: "bg-yellow-50" },
                { icon: <Key className="w-7 h-7" />, title: "Fast Activation", desc: "Quick and clean activation with zero hassle", color: "text-amber-600", bg: "bg-amber-50" },
                { icon: <Headphones className="w-7 h-7" />, title: "Ongoing Support", desc: "We're here even after purchase for any issues", color: "text-blue-600", bg: "bg-blue-50" },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-100 hover:border-orange-200"
                >
                  <div className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}>
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 px-4 bg-gray-50">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Software Solutions FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about antivirus and Microsoft Office in Delhi
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent>{faq.answer}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 px-4 bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Need Antivirus or Microsoft Office?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact St Mary&apos;s Computers today. We supply genuine software, handle installation,
              and provide support — all at affordable prices.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-orange-700 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a href="tel:+919910836286" className="flex items-center gap-2">
                  <Phone className="w-5 h-5" />
                  Call +91 99108 36286
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <a
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20am%20interested%20in%20software%20solutions%20(antivirus%20%2F%20Microsoft%20Office)"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2"
                >
                  <MessageCircle className="w-5 h-5" />
                  WhatsApp Us
                </a>
              </Button>
              <Button
                size="lg"
                className="bg-white/20 border-2 border-white text-white hover:bg-white/30 font-semibold shadow-lg hover:shadow-xl transition-all"
                asChild
              >
                <Link href="/contact" className="flex items-center gap-2">
                  Contact Page
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
