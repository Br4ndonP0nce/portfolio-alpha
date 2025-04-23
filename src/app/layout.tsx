import type { Metadata } from "next";
import { Inter, Urbanist, Space_Grotesk } from "next/font/google";
import { Navbar } from "@/components/nav/NavBar";
import { Footer } from "@/components/sections/Footer";
import { defaultMetadata } from "@/lib/seo";
import "./globals.css";
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Load Urbanist font for headings
const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
  weight: ["400", "500", "600", "700", "800", "900"],
});

// Load Space Grotesk as the mono font
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
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
