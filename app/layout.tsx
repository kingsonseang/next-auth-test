import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "FastBird Logistics",
  description:
    "Reliable and efficient logistics solutions for businesses of all sizes. We specialize in fast and secure shipping, real-time tracking, and comprehensive supply chain management to keep your business moving forward.",
  openGraph: {
    title:
      "FastBird Logistics - Your Trusted Partner for Fast, Secure, and Reliable Shipping Solutions",
    description:
      "Discover reliable and efficient logistics solutions with FastBird Logistics. From fast shipping to real-time tracking and comprehensive supply chain management, we keep your business moving forward seamlessly.",
    images: ["/Largest Container Ships.webp"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={outfit.className}>{children}</body>
    </html>
  );
}
