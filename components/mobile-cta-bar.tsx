"use client";

import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

export function MobileCTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 shadow-lg md:hidden">
      <div className="flex">
        <Button
          className="flex-1 rounded-none h-14 bg-green-600 hover:bg-green-700 text-white"
          asChild
        >
          <a href="tel:+919910836286" className="flex items-center justify-center gap-2">
            <Phone className="w-5 h-5" />
            Call Now
          </a>
        </Button>
        
        <Button
          className="flex-1 rounded-none h-14 bg-blue-600 hover:bg-blue-700 text-white"
          asChild
        >
          <a 
            href="https://wa.me/919910836286?text=Hi%2C%20I%20need%20computer%20repair%20service" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-5 h-5" />
            WhatsApp
          </a>
        </Button>
      </div>
    </div>
  );
}
