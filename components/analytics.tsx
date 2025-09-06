"use client";

import { useEffect } from 'react';
import Script from 'next/script';

// Replace with actual Google Analytics 4 Measurement ID
const GA_MEASUREMENT_ID = 'G-XXXXXXXXXX';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
  }
}

export function GoogleAnalytics() {
  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_MEASUREMENT_ID}', {
            page_title: document.title,
            page_location: window.location.href,
          });
        `}
      </Script>
    </>
  );
}

// Analytics event tracking functions
export const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

// Specific tracking functions for St Mary's Computers
export const trackPhoneClick = (source: string) => {
  trackEvent('phone_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
};

export const trackWhatsAppClick = (source: string) => {
  trackEvent('whatsapp_click', {
    event_category: 'engagement',
    event_label: source,
    value: 1
  });
};

export const trackFormSubmission = (formType: string) => {
  trackEvent('form_submit', {
    event_category: 'lead_generation',
    event_label: formType,
    value: 1
  });
};

export const trackServicePageView = (serviceName: string) => {
  trackEvent('service_page_view', {
    event_category: 'service_interest',
    event_label: serviceName,
    value: 1
  });
};

export const trackProductInquiry = (productType: string) => {
  trackEvent('product_inquiry', {
    event_category: 'sales_interest',
    event_label: productType,
    value: 1
  });
};

// Enhanced phone click tracking component
export function TrackablePhoneLink({ 
  children, 
  source, 
  className = "",
  ...props 
}: {
  children: React.ReactNode;
  source: string;
  className?: string;
  [key: string]: any;
}) {
  const handleClick = () => {
    trackPhoneClick(source);
  };

  return (
    <a 
      href="tel:+919910836286" 
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}

// Enhanced WhatsApp click tracking component
export function TrackableWhatsAppLink({ 
  children, 
  source, 
  message = "Hi, I need computer repair service",
  className = "",
  ...props 
}: {
  children: React.ReactNode;
  source: string;
  message?: string;
  className?: string;
  [key: string]: any;
}) {
  const handleClick = () => {
    trackWhatsAppClick(source);
  };

  const whatsappUrl = `https://wa.me/919910836286?text=${encodeURIComponent(message)}`;

  return (
    <a 
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={handleClick}
      className={className}
      {...props}
    >
      {children}
    </a>
  );
}
