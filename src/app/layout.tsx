"use client";

import type { Metadata } from "next";
import { Inter, Urbanist, Space_Grotesk } from "next/font/google";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/nav/NavBar";
import { Footer } from "@/components/sections/Footer";
import { Preloader } from "@/components/preloader/Preloader";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

// If you need metadata, export it separately or use generateMetadata
// export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [isLoading, setIsLoading] = useState(true);
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    // Ensure minimum loading time for better UX
    const minLoadTime = setTimeout(() => {
      // You can add additional loading logic here
      // like waiting for critical resources to load
    }, 1000);

    return () => clearTimeout(minLoadTime);
  }, []);

  const handlePreloadComplete = () => {
    setIsLoading(false);
    // Small delay to ensure smooth transition
    setTimeout(() => setShowContent(true), 100);
  };

  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased min-h-screen bg-grid`}
      >
        {/* Global Preloader */}
        {/*isLoading && (
          <Preloader
            onComplete={handlePreloadComplete}
            duration={3000} // 3 seconds loading time
          />
        )*/}

        {/* Main Content - Hidden until preloader completes */}
        {/*<div
          className={`transition-opacity duration-500 ${
            showContent ? "opacity-100" : "opacity-0"
          }`}
          style={{
            visibility: showContent ? "visible" : "hidden",
            position: showContent ? "relative" : "absolute",
          }}
        >*/}
        <Navbar />
        {children}
        <Footer />
        {/*</div>*/}
      </body>
    </html>
  );
}

// Alternative approach if you need static metadata
// Create a separate ClientLayout component and wrap it with a server component:

/*
// src/app/layout.tsx (Alternative Server Component approach)
import type { Metadata } from "next";
import { Inter, Urbanist, Space_Grotesk } from "next/font/google";
import { defaultMetadata } from "@/lib/seo";
import ClientLayout from "./ClientLayout";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata = defaultMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.variable} ${spaceGrotesk.variable} ${inter.variable} antialiased min-h-screen bg-grid`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
*/
