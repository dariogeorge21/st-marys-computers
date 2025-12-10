import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Products & Laptops in New Delhi and Delhi-NCR | St Mary's Computers",
  description: "Quality laptops, monitors, UPS systems & accessories in New Delhi and Delhi-NCR. New & refurbished computers with service support. Expert guidance & competitive pricing. Call +91 99108 36286",
  keywords: "computers New Delhi and Delhi-NCR, laptops New Delhi and Delhi-NCR, monitors New Delhi and Delhi-NCR, UPS systems, computer accessories, refurbished laptops, new computers New Delhi and Delhi-NCR",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
