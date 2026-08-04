import { Phone, MessageCircle, MapPin, Clock, Award, Users, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About St Mary's Computers - 20 Years Computer Repair Experience in Delhi",
  description: "Learn about George CV and St Mary's Computers - over 20 years of trusted computer repair service in New Delhi and Delhi-NCR. Professional, reliable, and customer-focused.",
  keywords: "about St Mary's Computers, George CV, computer repair experience Delhi, trusted technician across Delhi, computer service Delhi-NCR, professional computer repair, reliable computer technician, Delhi computer repair history, St Mary's Computers story, computer repair values, customer-focused service",
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
    description: "Thousands of satisfied customers across Delhi NCR region"
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
      <section className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-100 py-20 px-4 overflow-hidden">
        {/* Animated background blobs */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl lg:text-7xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 tracking-tight mb-6 pb-2">
                Trusted Computer Repair for Over 20 Years
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed font-medium">
                With over 20 years of professional expertise, George CV has been the trusted technician for thousands of customers across Delhi. From simple software issues to complex hardware repairs, we handle every challenge with dedication and integrity.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group" asChild>
                  <a href="tel:+919910836286" className="flex items-center gap-2">
                    <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                    Call George Now
                  </a>
                </Button>
                <Button size="lg" className="h-12 px-8 bg-white border-2 border-indigo-100 text-indigo-700 hover:border-indigo-200 hover:bg-indigo-50/50 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group" asChild>
                  <a 
                    href="https://wa.me/919910836286?text=Hi%20George%2C%20I%20need%20computer%20repair%20service" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-2"
                  >
                    <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-indigo-600" />
                    WhatsApp Chat
                  </a>
                </Button>
              </div>
            </div>
            
            <div className="animate-fade-in animation-delay-300 bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-xl border border-white/40 hover:shadow-2xl transition-all duration-500 relative overflow-hidden group/facts">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-indigo-50/50 opacity-0 group-hover/facts:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
              <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-700 to-indigo-700 mb-8 relative z-10">Quick Facts</h3>
              <div className="space-y-4 relative z-10">
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-blue-100 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 rounded-xl flex items-center justify-center transition-colors">
                    <MapPin className="w-5 h-5 text-blue-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-800 font-medium">Based in Laxmi Nagar, New Delhi</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-green-100 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-green-50 to-emerald-50 group-hover:from-green-100 group-hover:to-emerald-100 rounded-xl flex items-center justify-center transition-colors">
                    <Clock className="w-5 h-5 text-green-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-800 font-medium">Mon-Sat: 10AM-8PM</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-purple-100 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-50 to-fuchsia-50 group-hover:from-purple-100 group-hover:to-fuchsia-100 rounded-xl flex items-center justify-center transition-colors">
                    <Phone className="w-5 h-5 text-purple-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-800 font-medium">+91 99108 36286</span>
                </div>
                <div className="flex items-center gap-4 p-3 rounded-xl hover:bg-white transition-colors duration-300 shadow-sm hover:shadow-md border border-transparent hover:border-yellow-100 group">
                  <div className="w-12 h-12 bg-gradient-to-br from-yellow-50 to-amber-50 group-hover:from-yellow-100 group-hover:to-amber-100 rounded-xl flex items-center justify-center transition-colors">
                    <Award className="w-5 h-5 text-yellow-600 group-hover:scale-110 group-hover:-rotate-3 transition-transform duration-300" />
                  </div>
                  <span className="text-gray-800 font-medium">20+ Years Experience</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white via-blue-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute top-20 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight mb-4 pb-2">Our Story</h2>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto rounded-full"></div>
          </div>
          
          <div className="space-y-6">
            <div className="group bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-blue-100 animate-fade-in animation-delay-100">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                St Mary&apos;s Computers was founded by George CV with a simple mission: to provide
                honest, reliable, and professional computer repair services to the people of Delhi. 
                What started as a small repair service in Laxmi Nagar has grown into one of the most 
                trusted names in computer repair across the region.
              </p>
            </div>
            
            <div className="group bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-indigo-100 animate-fade-in animation-delay-200">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                St Mary&apos;s Computers&apos; journey in technology began in the early 2000s when computers were just becoming
                common in Indian households. Recognizing the growing need for reliable repair services, 
                the team dedicated themselves to mastering every aspect of computer hardware and software. Their
                commitment to continuous learning has kept them at the forefront of technology trends.
              </p>
            </div>
            
            <div className="group bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-purple-100 animate-fade-in animation-delay-300">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                Over the years, St Mary&apos;s Computers has evolved from a traditional repair shop to a
                comprehensive computer service provider. We now offer on-site repairs, bringing our 
                expertise directly to your home or office. This approach ensures your convenience while 
                maintaining the highest standards of service quality.
              </p>
            </div>
            
            <div className="group bg-white/90 backdrop-blur-md p-8 sm:p-10 rounded-3xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border border-green-100 animate-fade-in animation-delay-400">
              <p className="text-lg sm:text-xl text-gray-700 leading-relaxed font-medium">
                St Mary&apos;s Computers continues to serve the community with the same dedication and
                integrity that built our reputation. Whether you&apos;re a student needing a laptop repair,
                a business requiring IT support, or a family dealing with a computer emergency, we&apos;re
                here to help with professional, reliable service. With over 5000 satisfied customers
                and a 4.8★ rating, we&apos;re honored to be your trusted technology partner.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="relative bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 py-20 px-4 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight mb-4 pb-2">Why Choose St Mary&apos;s Computers</h2>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto font-medium">Proven expertise and dedication to excellence</p>
            <div className="h-1 w-20 bg-gradient-to-r from-blue-600 to-indigo-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="flex flex-col border border-white shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-md group hover:-translate-y-2 overflow-hidden animate-fade-in rounded-3xl h-full" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="text-center pb-4 pt-8">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-50 to-indigo-50 group-hover:from-blue-100 group-hover:to-indigo-100 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm border border-white group-hover:scale-110 group-hover:-rotate-3 transition-all duration-300">
                    <achievement.icon className="w-10 h-10 text-blue-600" />
                  </div>
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-blue-700 transition-colors">{achievement.title}</CardTitle>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-center">
                  <p className="text-gray-600 font-medium text-center leading-relaxed">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-20 left-0 w-80 h-80 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>
        
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-purple-700 tracking-tight mb-4 pb-2">Our Values & Principles</h2>
            <p className="text-lg sm:text-xl text-gray-600 font-medium">The foundation of our service excellence</p>
            <div className="h-1 w-20 bg-gradient-to-r from-indigo-600 to-purple-600 mx-auto mt-6 rounded-full"></div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 sm:gap-8">
            {values.map((value, index) => (
              <Card key={index} className="flex flex-col border border-white shadow-md hover:shadow-xl transition-all duration-300 bg-white/90 backdrop-blur-md group overflow-hidden animate-fade-in hover:-translate-y-1 rounded-3xl h-full" style={{animationDelay: `${index * 100}ms`}}>
                <CardHeader className="bg-gradient-to-r from-indigo-50/50 to-purple-50/50 border-b border-white/50 group-hover:from-indigo-100/50 group-hover:to-purple-100/50 transition-colors duration-500 pb-5 pt-6 px-8">
                  <CardTitle className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-purple-700">{value.title}</CardTitle>
                </CardHeader>
                <CardContent className="pt-6 px-8 pb-8 flex-grow">
                  <p className="text-gray-600 font-medium leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Service Philosophy Section */}
      <section className="relative bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white py-20 px-4 overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-8">Our Service Philosophy</h2>
          <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 shadow-xl">
            <p className="text-2xl mb-8 leading-relaxed font-light italic">
              &ldquo;Every customer deserves honest advice, quality service, and fair pricing. We treat
              every computer repair as if it were our own family&apos;s device.&rdquo;
            </p>
            <p className="text-lg font-semibold">- George CV, Founder St Mary&apos;s Computers</p>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="relative py-20 px-4 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-10"></div>
        </div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700 tracking-tight mb-6 pb-2 animate-fade-in">Ready to Experience the Difference?</h2>
          <p className="text-lg sm:text-xl text-gray-600 mb-10 max-w-3xl mx-auto animate-fade-in animation-delay-100 font-medium">
            Join thousands of satisfied customers who trust St Mary&apos;s Computers for all their
            computer repair and service needs. Contact us today for professional, reliable service.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in animation-delay-200">
            <Button size="lg" className="h-12 px-8 bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group" asChild>
              <a href="tel:+919910836286" className="flex items-center gap-2">
                <Phone className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                Call +91 99108 36286
              </a>
            </Button>
            <Button size="lg" className="h-12 px-8 bg-white border-2 border-blue-100 text-blue-700 hover:border-blue-200 hover:bg-blue-50/50 font-semibold shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5 group" asChild>
              <a 
                href="https://wa.me/919910836286?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <MessageCircle className="w-5 h-5 group-hover:scale-110 transition-transform duration-300 text-blue-600" />
                Start WhatsApp Chat
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
