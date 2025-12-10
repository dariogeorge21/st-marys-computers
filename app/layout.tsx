import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { MobileCTABar } from "@/components/mobile-cta-bar";
import { GoogleAnalytics } from "@/components/analytics";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "St Mary's Computers — Laptop & Desktop Repair | New Delhi & Delhi-NCR",
  description: "Fast & reliable laptop, desktop and printer repair in New Delhi & Delhi-NCR. On-site service across Delhi. Call +91 99108 36286 for same-day support.",
  keywords: "laptop repair New Delhi, computer repair New Delhi, printer repair New Delhi, buy second hand laptop New Delhi, on-site computer repair New Delhi",
  authors: [{ name: "George CV" }],
  creator: "St Mary's Computers",
  publisher: "St Mary's Computers",
  robots: "index, follow",
  openGraph: {
    title: "St Mary's Computers — Laptop & Desktop Repair | New Delhi & Delhi-NCR",
    description: "Fast & reliable laptop, desktop and printer repair in New Delhi & Delhi-NCR. On-site service across Delhi. Call +91 99108 36286 for same-day support.",
    url: "https://stmaryscomputers.com",
    siteName: "St Mary's Computers",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "St Mary's Computers — Laptop & Desktop Repair | New Delhi & Delhi-NCR",
    description: "Fast & reliable laptop, desktop and printer repair in New Delhi & Delhi-NCR. On-site service across Delhi. Call +91 99108 36286 for same-day support.",
  },
  verification: {
    google: "your-google-verification-code-here",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <GoogleAnalytics />
        <Header />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
        <MobileCTABar />
      </body>
    </html>
  );
}
