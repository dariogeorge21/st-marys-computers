import { Phone, MessageCircle, CheckCircle, Clock, Shield, Star, Mail, Globe, Code, Rocket, IndianRupee } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Web Development Services in Delhi | Website Development Laxmi Nagar | St Mary's Computers",
  description:
    "Professional web development services in Delhi — company websites, e-commerce platforms, booking systems. Modern technologies, reasonable pricing, rapid delivery. Call +91 99108 36286",
  keywords:
    "web development Delhi, website development Laxmi Nagar, web developer New Delhi, company website Delhi, e-commerce website Delhi, booking system development, affordable web development India",
};

const services = [
  {
    title: "Company & Business Websites",
    description:
      "Professional websites for businesses of all sizes — showcase your brand, services, and products with a modern online presence.",
    price: "",
  },
  {
    title: "Personal & Portfolio Websites",
    description:
      "Stand-out personal websites, portfolios, and resume sites to highlight your skills and achievements.",
    price: "",
  },
  {
    title: "E-Commerce Platforms",
    description:
      "Fully-featured online stores with product catalogues, payment integration, and order management.",
    price: "",
  },
  {
    title: "Booking & Appointment Systems",
    description:
      "Custom booking platforms for clinics, salons, consultancies, and service businesses.",
    price: "",
  },
  {
    title: "Website Redesign & Modernisation",
    description:
      "Upgrade your outdated website to a fast, mobile-friendly, and SEO-optimised experience.",
    price: "",
  },
  {
    title: "Website Maintenance & Support",
    description:
      "Ongoing support, security updates, content changes, and performance monitoring for your website.",
    price: "",
  },
];

const faqs = [
  {
    question: "How long does it take to build a website?",
    answer:
      "A simple business website can be delivered in 1–2 weeks. More complex projects like e-commerce or booking platforms typically take 3–5 weeks depending on the features required. We always provide a clear timeline before starting work.",
  },
  {
    question: "What technologies do you use?",
    answer:
      "We build with modern, industry-standard technologies such as Next.js, React, Tailwind CSS, Node.js, and more. This ensures your website is fast, secure, mobile-friendly, and easy to maintain.",
  },
  {
    question: "How much does a website cost?",
    answer:
      "Our pricing is reasonable and transparent. A basic business website starts at very affordable rates. The final cost depends on features, number of pages, and complexity. Contact us for a free quote — no obligation.",
  },
  {
    question: "Will my website work on mobile phones?",
    answer:
      "Absolutely! Every website we build is fully responsive and optimised for mobile phones, tablets, and desktops. We follow a mobile-first approach to ensure the best experience for all users.",
  },
  {
    question: "Do you provide website hosting and domain?",
    answer:
      "Yes, we can help you choose and set up reliable hosting and a domain name. We also offer guidance on the most cost-effective options that suit your needs.",
  },
  {
    question: "Can you help with SEO so my website appears on Google?",
    answer:
      "Yes! All our websites are built with SEO best practices — proper headings, meta tags, fast loading, structured data, and mobile-friendliness. We can also provide additional local SEO services to help you rank higher in Delhi searches.",
  },
  {
    question: "What if I need changes after the website is delivered?",
    answer:
      "We offer affordable maintenance packages for ongoing updates. Minor text and image changes are usually included at no extra cost within the first month after delivery.",
  },
];

export default function WebDevelopmentPage() {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Web Development Services",
    description:
      "Professional web development services in Delhi — company websites, e-commerce, booking systems, and more with modern technologies and rapid delivery",
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
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Web Development Services",
      itemListElement: services.map((service) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: service.title,
          description: service.description,
        },
        priceSpecification: {
          "@type": "PriceSpecification",
          price: service.price,
        },
      })),
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-teal-50 via-cyan-50 to-emerald-100 py-16 px-4 relative overflow-hidden">
          {/* Animated background blobs */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-6xl mx-auto relative z-10">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                {/* NEW badge */}
                <span className="inline-block bg-gradient-to-r from-teal-500 to-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full mb-4 shadow-md animate-pulse">
                  ✨ NEW SERVICE
                </span>

                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Professional{" "}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                    Web Development
                  </span>{" "}
                  in Delhi
                </h1>
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Get a stunning, fast, and mobile-friendly website for your business.
                  From company websites to e-commerce platforms — we deliver modern web
                  solutions at reasonable prices with rapid turnaround.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all"
                    asChild
                  >
                    <a href="tel:+919910836286" className="flex items-center gap-2">
                      <Phone className="w-5 h-5" />
                      Call for Free Quote
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-teal-300 hover:bg-teal-50" asChild>
                    <a
                      href="https://wa.me/919910836286?text=Hi%2C%20I%20am%20interested%20in%20web%20development%20services"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <MessageCircle className="w-5 h-5" />
                      WhatsApp Chat
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" className="border-teal-300 hover:bg-teal-50" asChild>
                    <a
                      href="mailto:stmaryscomputers@gmail.com"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <Mail className="w-5 h-5" />
                      Email Us
                    </a>
                  </Button>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <Rocket className="w-8 h-8 text-teal-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Rapid Delivery</p>
                  </div>
                  <div>
                    <IndianRupee className="w-8 h-8 text-emerald-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Reasonable Pricing</p>
                  </div>
                  <div>
                    <Star className="w-8 h-8 text-yellow-500 mx-auto mb-2" />
                    <p className="text-sm font-medium">Modern Tech Stack</p>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100">
                <h3 className="text-2xl font-semibold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-teal-600 to-emerald-600">
                  What We Can Build For You
                </h3>
                <div className="space-y-4">
                  {[
                    "Company & business websites",
                    "Personal & portfolio sites",
                    "Online stores (e-commerce)",
                    "Booking & appointment systems",
                    "Landing pages & microsites",
                    "Blog & content platforms",
                    "Restaurant & café websites",
                    "School & institute websites",
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-teal-600 flex-shrink-0" />
                      <span className="text-gray-700">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Us for Web Development */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                Why Choose St Mary&apos;s Computers for Web Development?
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We combine technical expertise with a deep understanding of local business
                needs to deliver websites that actually bring results.
              </p>
              <div className="h-1 w-20 bg-gradient-to-r from-teal-500 to-emerald-500 mx-auto mt-6"></div>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Code className="w-7 h-7" />,
                  title: "Modern Technologies",
                  desc: "Built with Next.js, React & Tailwind CSS for speed and SEO",
                  color: "text-teal-600",
                  bg: "bg-teal-50",
                },
                {
                  icon: <IndianRupee className="w-7 h-7" />,
                  title: "Reasonable Charges",
                  desc: "Transparent, affordable pricing — no hidden costs",
                  color: "text-emerald-600",
                  bg: "bg-emerald-50",
                },
                {
                  icon: <Rocket className="w-7 h-7" />,
                  title: "Rapid Delivery",
                  desc: "Quick turnaround without compromising on quality",
                  color: "text-cyan-600",
                  bg: "bg-cyan-50",
                },
                {
                  icon: <Shield className="w-7 h-7" />,
                  title: "Ongoing Support",
                  desc: "Post-launch maintenance and free minor updates",
                  color: "text-blue-600",
                  bg: "bg-blue-50",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:translate-y-[-4px] border border-gray-100 hover:border-teal-200"
                >
                  <div
                    className={`w-14 h-14 ${item.bg} rounded-2xl flex items-center justify-center mb-4 ${item.color} group-hover:scale-110 transition-transform`}
                  >
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-gray-900">{item.title}</h3>
                  <p className="text-sm text-gray-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services & Pricing Section */}
        <section className="py-16 px-4 bg-gradient-to-b from-gray-50 to-white">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Web Development Services We Offer
              </h2>
              <p className="text-lg text-gray-600">
                End-to-end web solutions tailored to your business needs. Contact us for a
                free quote.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-shadow border-teal-100 hover:border-teal-300"
                >
                  <CardHeader>
                    <CardTitle className="text-lg">{service.title}</CardTitle>
                    <CardDescription>{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-teal-600 mb-4">
                      {service.price}
                    </div>
                    <Button
                      className="w-full bg-gradient-to-r from-teal-600 to-emerald-600 hover:from-teal-700 hover:to-emerald-700 text-white"
                      asChild
                    >
                      <a href="tel:+919910836286">Get Free Quote</a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Our Process Section */}
        <section className="py-16 px-4 bg-white">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">How It Works</h2>
              <p className="text-lg text-gray-600">
                A simple, transparent process from idea to launch
              </p>
            </div>

            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Free Consultation",
                  desc: "Tell us about your business and what you need. We'll discuss goals, features, and budget — completely free, no obligation.",
                },
                {
                  step: "2",
                  title: "Design & Development",
                  desc: "We design and build your website using modern technologies. You'll get regular updates and can share feedback at every stage.",
                },
                {
                  step: "3",
                  title: "Review & Launch",
                  desc: "Once you're happy with the result, we launch your website and ensure everything runs smoothly on all devices.",
                },
                {
                  step: "4",
                  title: "Ongoing Support",
                  desc: "We don't disappear after launch. Get continued support, maintenance, and updates whenever you need them.",
                },
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 items-start">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-teal-500 to-emerald-500 flex items-center justify-center text-white font-bold text-lg flex-shrink-0 shadow-md">
                    {item.step}
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">{item.title}</h3>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
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
                Web Development FAQ
              </h2>
              <p className="text-lg text-gray-600">
                Common questions about our web development services in Delhi
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
        <section className="py-16 px-4 bg-gradient-to-r from-teal-600 via-emerald-600 to-cyan-600 text-white relative overflow-hidden">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 left-0 w-96 h-96 bg-teal-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          </div>

          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              Ready to Get Your Website Built?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto leading-relaxed">
              Contact St Mary&apos;s Computers today for a free consultation and quote.
              Modern websites, reasonable prices, delivered fast.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-teal-700 hover:bg-gray-100 font-semibold shadow-lg hover:shadow-xl transition-all"
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
                  href="https://wa.me/919910836286?text=Hi%2C%20I%20am%20interested%20in%20web%20development%20services"
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
                  <Globe className="w-5 h-5" />
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
