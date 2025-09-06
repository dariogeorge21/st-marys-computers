import { Calendar, User, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Repair Tips & Tech Blog | St Mary's Computers Laxmi Nagar",
  description: "Expert computer repair tips, laptop maintenance guides, and tech advice from St Mary's Computers in Laxmi Nagar, New Delhi. Learn how to maintain your devices.",
  keywords: "computer repair tips, laptop maintenance, tech blog Delhi, computer troubleshooting guide",
};

const blogPosts = [
  {
    title: "How to Tell if Your Laptop Battery Needs Replacing",
    excerpt: "Learn the warning signs that indicate your laptop battery is failing and what steps to take next for replacement in Delhi.",
    author: "George CV",
    date: "2025-01-15",
    category: "Laptop Repair",
    slug: "laptop-battery-replacement-signs",
    readTime: "5 min read",
    featured: true
  },
  {
    title: "5 Affordable Laptops for Students in Delhi — 2025 Buying Guide",
    excerpt: "Best budget-friendly laptop recommendations for students in Delhi with specifications, pricing, and where to buy refurbished options.",
    author: "George CV", 
    date: "2025-01-12",
    category: "Buying Guide",
    slug: "affordable-laptops-students-delhi-2025",
    readTime: "8 min read",
    featured: true
  },
  {
    title: "Quick Fixes Before You Call a Technician",
    excerpt: "Simple troubleshooting steps for common printer and laptop issues that you can try at home before seeking professional help.",
    author: "George CV",
    date: "2025-01-10",
    category: "Troubleshooting",
    slug: "quick-computer-fixes-before-technician",
    readTime: "6 min read",
    featured: false
  },
  {
    title: "How to Buy a Reliable Second-Hand Laptop in Laxmi Nagar",
    excerpt: "Complete guide to purchasing refurbished laptops in Laxmi Nagar including what to check, pricing tips, and warranty considerations.",
    author: "George CV",
    date: "2025-01-08",
    category: "Buying Guide",
    slug: "buy-second-hand-laptop-laxmi-nagar",
    readTime: "7 min read",
    featured: false
  },
  {
    title: "Why Local On-Site Repair is Faster Than Mail-In Services",
    excerpt: "Advantages of choosing local computer repair services over mail-in options, including time savings and personalized service benefits.",
    author: "George CV",
    date: "2025-01-05",
    category: "Service Tips",
    slug: "local-onsite-repair-vs-mail-in-services",
    readTime: "4 min read",
    featured: false
  },
  {
    title: "UPS Buying & Maintenance Basics for Home Offices",
    excerpt: "Essential guide to choosing the right UPS for your home office setup and maintaining it for optimal performance and longevity.",
    author: "George CV",
    date: "2025-01-03",
    category: "UPS Guide",
    slug: "ups-buying-maintenance-home-office",
    readTime: "6 min read",
    featured: false
  }
];

const categories = ["All", "Laptop Repair", "Buying Guide", "Troubleshooting", "Service Tips", "UPS Guide"];

export default function BlogPage() {
  const featuredPosts = blogPosts.filter(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-purple-50 to-indigo-100 py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Computer Repair Tips & Tech Blog
          </h1>
          <p className="text-xl text-gray-700 mb-8">
            Expert advice, repair tips, and buying guides from St Mary's Computers. 
            Learn how to maintain your devices and make informed tech decisions.
          </p>
        </div>
      </section>

      {/* Featured Posts */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Articles</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="secondary">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-xl hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription className="text-base">
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author}
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(post.date).toLocaleDateString('en-IN')}
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                        Read More <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* All Posts */}
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900">All Articles</h2>
            <div className="flex gap-2 flex-wrap">
              {categories.map((category, index) => (
                <Badge key={index} variant="outline" className="cursor-pointer hover:bg-gray-100">
                  {category}
                </Badge>
              ))}
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularPosts.map((post, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-2">
                    <Badge variant="outline">{post.category}</Badge>
                    <span className="text-sm text-gray-500">{post.readTime}</span>
                  </div>
                  <CardTitle className="text-lg hover:text-blue-600 transition-colors">
                    <Link href={`/blog/${post.slug}`}>
                      {post.title}
                    </Link>
                  </CardTitle>
                  <CardDescription>
                    {post.excerpt}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">
                      {new Date(post.date).toLocaleDateString('en-IN')}
                    </div>
                    <Button variant="ghost" size="sm" asChild>
                      <Link href={`/blog/${post.slug}`} className="flex items-center gap-1">
                        Read <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">
            Need Computer Help?
          </h2>
          <p className="text-xl mb-8">
            Can't find the answer you're looking for? Contact St Mary's Computers for personalized help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild>
              <a href="tel:+919910836286">Call +91 99108 36286</a>
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white hover:text-blue-600" asChild>
              <Link href="/contact">Get Expert Help</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
