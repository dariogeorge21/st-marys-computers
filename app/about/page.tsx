import { Phone, MessageCircle, MapPin, Clock, Award, Users, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About St Mary's Computers - 20 Years Computer Repair Experience in Delhi",
  description: "Learn about George CV and St Mary's Computers - over 20 years of trusted computer repair service in Laxmi Nagar, New Delhi. Professional, reliable, and customer-focused.",
  keywords: "about St Mary's Computers, George CV, computer repair experience Delhi, trusted technician Laxmi Nagar",
};

const achievements = [
  {
    icon: Award,
    title: "20+ Years Experience",
    description: "Over two decades of professional computer repair and service experience"
  },
  {
    icon: Users,
    title: "5000+ Happy Customers",
    description: "Thousands of satisfied customers across Delhi and NCR region"
  },
  {
    icon: Shield,
    title: "Quality Service Guarantee",
    description: "Professional standards maintained with every repair and service"
  },
  {
    icon: Star,
    title: "4.8★ Customer Rating",
    description: "Consistently high ratings from customers for quality and reliability"
  }
];

const values = [
  {
    title: "Honesty & Transparency",
    description: "We provide honest assessments and transparent pricing. If your device isn't worth repairing, we'll tell you upfront and help you find the best alternative."
  },
  {
    title: "Quality First",
    description: "We use only genuine parts and follow professional repair standards. Your device's performance and longevity are our top priorities."
  },
  {
    title: "Customer Convenience",
    description: "We come to you! Our on-site service saves you time and ensures your data stays secure during repairs."
  },
  {
    title: "Continuous Learning",
    description: "Technology evolves rapidly, and so do we. George stays updated with the latest repair techniques and technologies to serve you better."
  }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-50 to-indigo-100 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                Meet George CV - Your Trusted Computer Expert
              </h1>
              <p className="text-xl text-gray-700 mb-8">
                With over 20 years of experience in computer repair and service, George CV has been 
                the go-to technician for thousands of customers across Delhi. From simple software 
                issues to complex hardware repairs, no problem is too big or too small.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
                  <a href="tel:+919910836286" className="flex items-center gap-2">
                    <Phone className="w-5 h-5" />
                    Call George Now
                  </a>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <a 
                    href="https://wa.me/919910836286?text=Hi%20George%2C%20I%20need%20computer%20repair%20service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Quick Facts</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <MapPin className="w-5 h-5 text-blue-600" />
                  <span>Based in Laxmi Nagar, New Delhi</span>
                </div>
                <div className="flex items-center gap-3">
                  <Clock className="w-5 h-5 text-green-600" />
                  <span>Mon-Sat: 10AM-8PM</span>
                </div>
                <div className="flex items-center gap-3">
                  <Phone className="w-5 h-5 text-purple-600" />
                  <span>+91 99108 36286</span>
                </div>
                <div className="flex items-center gap-3">
                  <Award className="w-5 h-5 text-yellow-600" />
                  <span>20+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Story</h2>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-700 mb-6">
              St Mary&apos;s Computers was founded by George CV in 2004 with a simple mission: to provide
              honest, reliable, and professional computer repair services to the people of Delhi. 
              What started as a small repair service in Laxmi Nagar has grown into one of the most 
              trusted names in computer repair across the region.
            </p>
            
            <p className="text-gray-700 mb-6">
              George&apos;s journey in technology began in the early 2000s when computers were just becoming
              common in Indian households. Recognizing the growing need for reliable repair services, 
              he dedicated himself to mastering every aspect of computer hardware and software. His 
              commitment to continuous learning has kept him at the forefront of technology trends.
            </p>
            
            <p className="text-gray-700 mb-6">
              Over the years, St Mary&apos;s Computers has evolved from a traditional repair shop to a
              comprehensive computer service provider. We now offer on-site repairs, bringing our 
              expertise directly to your home or office. This approach ensures your convenience while 
              maintaining the highest standards of service quality.
            </p>
            
            <p className="text-gray-700">
              Today, George continue to serve the community with the same dedication and
              integrity that built our reputation. Whether you&apos;re a student needing a laptop repair,
              a business requiring IT support, or a family dealing with a computer emergency, we&apos;re
              here to help with professional, reliable service.
            </p>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Why Choose St Mary&apos;s Computers</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <achievement.icon className="w-12 h-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle className="text-lg">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">Our Values & Principles</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-600">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Philosophy Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Service Philosophy</h2>
          <p className="text-xl mb-8">
            &ldquo;Every customer deserves honest advice, quality service, and fair pricing. We treat
            every computer repair as if it were our own family&apos;s device.&rdquo;
          </p>
          <p className="text-lg italic">- George CV, Founder</p>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Experience the Difference?</h2>
          <p className="text-xl text-gray-700 mb-8">
            Join thousands of satisfied customers who trust St Mary&apos;s Computers for all their
            computer repair and service needs. Contact us today for professional, reliable service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-green-600 hover:bg-green-700" asChild>
              <a href="tel:+919910836286" className="flex items-center gap-2">
                <Phone className="w-5 h-5" />
                Call +91 99108 36286
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a 
                href="https://wa.me/919910836286?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Start WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
