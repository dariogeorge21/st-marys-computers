"use client";

import { motion, Variants } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  PhoneCall, 
  MessageCircleMore, 
  Mail, 
  ShieldCheck, 
  Clock3, 
  Sparkles, 
  Zap, 
  MapPin,
  CheckCircle2,
  MessageCircle
} from "lucide-react";

export function ContactSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
  };

  return (
    <section className="relative py-32 px-4 bg-[#0A0A0A] text-white overflow-hidden selection:bg-blue-500/30">
      {/* Premium Dark Background with Subtleties */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Subtle mesh glow */}
        <div className="absolute top-1/4 left-1/4 w-[800px] h-[800px] bg-blue-600/10 rounded-full mix-blend-screen filter blur-[100px] opacity-50 animate-pulse" />
        <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-slate-600/10 rounded-full mix-blend-screen filter blur-[80px] opacity-40" />
        {/* Grid Texture */}
        <div 
          className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff0a_1px,transparent_1px),linear-gradient(to_bottom,#ffffff0a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
        />
      </div>

      <motion.div 
        className="max-w-6xl mx-auto relative z-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        {/* Hero Area */}
        <div className="flex flex-col items-center text-center mb-16 space-y-6">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-blue-400" />
            <span className="text-sm font-medium text-slate-300">Premium Tech Support</span>
          </motion.div>
          
          <motion.h2 
            variants={itemVariants} 
            className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight max-w-[650px] leading-[1.1] text-transparent bg-clip-text bg-gradient-to-b from-white to-white/60"
          >
            Need Your Computer Fixed?
          </motion.h2>
          
          <motion.p 
            variants={itemVariants} 
            className="text-lg sm:text-xl text-slate-400 max-w-[600px] leading-relaxed font-light"
          >
            Professional Computer Repair & Home Service in New Delhi & NCR. Fast service, expert technicians, and transparent pricing.
          </motion.p>

          {/* Trust Badges */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-3 pt-4">
            <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-slate-200 border-white/10 rounded-full px-4 py-1.5 transition-colors">
              <Zap className="w-3.5 h-3.5 mr-2 text-yellow-400" /> Same Day Service
            </Badge>
            <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-slate-200 border-white/10 rounded-full px-4 py-1.5 transition-colors">
              <Sparkles className="w-3.5 h-3.5 mr-2 text-blue-400" /> Highly Rated
            </Badge>
            <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-slate-200 border-white/10 rounded-full px-4 py-1.5 transition-colors">
              <ShieldCheck className="w-3.5 h-3.5 mr-2 text-green-400" /> Certified Technicians
            </Badge>
            <Badge variant="secondary" className="bg-white/5 hover:bg-white/10 text-slate-200 border-white/10 rounded-full px-4 py-1.5 transition-colors">
              <MapPin className="w-3.5 h-3.5 mr-2 text-red-400" /> Home Service
            </Badge>
          </motion.div>
        </div>

        {/* Featured Emergency Card */}
        <motion.div variants={itemVariants} className="mb-16">
          <div className="relative overflow-hidden rounded-3xl bg-white/[0.03] border border-white/[0.08] backdrop-blur-xl shadow-2xl hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.15)] transition-all duration-500 p-8 sm:p-12 group">
            {/* Soft inner glow */}
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 tracking-tight">Emergency Service</h3>
                <p className="text-slate-400 text-lg max-w-md">
                  Critical issue? We offer priority on-site service. Call us immediately for fast response.
                </p>
                <div className="flex items-center gap-4 mt-6 text-sm text-slate-300">
                  <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-green-400" /> Available Today</span>
                  <span className="flex items-center gap-1.5"><Clock3 className="w-4 h-4 text-blue-400" /> Fast Response</span>
                </div>
              </div>
              
              <div className="flex flex-col w-full md:w-auto gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-xl shadow-[0_0_20px_-5px_rgba(37,99,235,0.4)] hover:shadow-[0_0_25px_-5px_rgba(37,99,235,0.6)] transition-all h-14 px-8 text-lg font-medium group/btn" asChild>
                  <a href="tel:+919910836286">
                    <PhoneCall className="w-5 h-5 mr-2 group-hover/btn:animate-pulse" />
                    Call Technician
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/5 hover:bg-white/10 border-white/10 text-white rounded-xl h-14 px-8 text-lg font-medium transition-all group/btn2" asChild>
                  <a href="https://wa.me/919910836286?text=Hi%2C%20I%20have%20an%20emergency%20computer%20issue" target="_blank" rel="noopener noreferrer">
                    <MessageCircleMore className="w-5 h-5 mr-2 text-green-400 group-hover/btn2:scale-110 transition-transform" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Three Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.05] p-8 transition-all hover:bg-white/[0.04]">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all pointer-events-none" />
            <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 text-slate-300 group-hover:text-white transition-colors group-hover:bg-white/10 group-hover:scale-110 duration-300">
              <PhoneCall className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">Call Us</h4>
            <p className="text-slate-400 text-sm mb-6">Speak directly with our technical team</p>
            <div className="mb-6">
              <a href="tel:+919910836286" className="text-2xl font-bold text-white hover:text-blue-400 transition-colors">
                +91 99108 36286
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Mon - Sat, 10am - 8pm</p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.05] p-8 transition-all hover:bg-white/[0.04]">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all pointer-events-none" />
            <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 text-green-400 group-hover:text-green-300 transition-colors group-hover:bg-green-400/10 group-hover:scale-110 duration-300">
              <MessageCircleMore className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">WhatsApp</h4>
            <p className="text-slate-400 text-sm mb-6">Quick response guaranteed</p>
            <div className="mb-6">
              <a 
                href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20repair%20service" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lg font-medium text-white hover:text-green-400 transition-colors"
              >
                Start Chat <MessageCircle className="w-4 h-4" />
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">Available 24/7</p>
          </motion.div>

          <motion.div variants={itemVariants} whileHover={{ y: -5 }} className="group relative rounded-2xl bg-white/[0.02] border border-white/[0.05] p-8 transition-all hover:bg-white/[0.04]">
            <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-white/10 group-hover:ring-white/20 transition-all pointer-events-none" />
            <div className="p-3 bg-white/5 rounded-xl w-fit mb-6 text-slate-300 group-hover:text-white transition-colors group-hover:bg-white/10 group-hover:scale-110 duration-300">
              <Mail className="w-6 h-6" />
            </div>
            <h4 className="text-xl font-semibold mb-2 text-white">Email</h4>
            <p className="text-slate-400 text-sm mb-6">For general queries and corporate tie-ups</p>
            <div className="mb-6">
              <a href="mailto:stmaryscomputers@gmail.com" className="text-base font-medium text-white hover:text-blue-400 transition-colors break-all">
                stmaryscomputers@gmail.com
              </a>
            </div>
            <p className="text-xs font-medium text-slate-500 uppercase tracking-wider">We respond within 2 hours</p>
          </motion.div>
        </div>

        {/* Trust Statistics */}
        <motion.div variants={containerVariants} className="grid grid-cols-2 md:grid-cols-4 gap-8 py-8 border-t border-white/[0.05]">
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">20+</div>
            <div className="text-sm font-medium text-slate-400">Years Experience</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">8000+</div>
            <div className="text-sm font-medium text-slate-400">Repairs Completed</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2">4.9<span className="text-yellow-400 text-2xl">★</span></div>
            <div className="text-sm font-medium text-slate-400">Customer Rating</div>
          </motion.div>
          <motion.div variants={itemVariants} className="text-center">
            <div className="text-3xl sm:text-4xl font-bold text-white mb-2 text-blue-400">Same Day</div>
            <div className="text-sm font-medium text-slate-400">Emergency Support</div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
