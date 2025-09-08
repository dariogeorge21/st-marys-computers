import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Computer Products & Laptops in Laxmi Nagar | St Mary's Computers",
  description: "Quality laptops, monitors, UPS systems & accessories in Laxmi Nagar. New & refurbished computers with service support. Expert guidance & competitive pricing. Call +91 99108 36286",
  keywords: "computers Laxmi Nagar, laptops Delhi, monitors Delhi, UPS systems, computer accessories, refurbished laptops, new computers Delhi",
};

export default function ProductsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
