import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/features/layout/components/Navbar";
import Footer from "@/features/layout/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "TKCyber | SIEM & Security - InfoSec Knowledge Base",
  description:
    "A modern cybersecurity blog sharing knowledge about Offensive Security, SOC, GRC, and AI Security. Learn about SIEM, XDR, SOAR, and Penetration Testing.",
  keywords: [
    "cybersecurity",
    "infosec",
    "SIEM",
    "SOC",
    "GRC",
    "penetration testing",
    "AI security",
    "XDR",
    "SOAR",
    "offensive security",
  ],
  authors: [{ name: "TKCyber" }],
  creator: "TKCyber",
  publisher: "TKCyber",
  metadataBase: new URL("https://tkcyber.com"), // Change to your actual domain
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://tkcyber.com",
    siteName: "TKCyber",
    title: "TKCyber | SIEM & Security - InfoSec Knowledge Base",
    description:
      "A modern cybersecurity blog sharing knowledge about Offensive Security, SOC, GRC, and AI Security.",
    images: [
      {
        url: "/og-image.jpg", // You'll need to add this image
        width: 1200,
        height: 630,
        alt: "TKCyber - InfoSec Knowledge Base",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TKCyber | SIEM & Security",
    description:
      "A modern cybersecurity blog sharing knowledge about Offensive Security, SOC, GRC, and AI Security.",
    images: ["/og-image.jpg"], // You'll need to add this image
    creator: "@tkcyber", // Change to your Twitter handle
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`scroll-smooth ${inter.variable} ${jetbrainsMono.variable}`}
    >
      <body
        className={`${inter.className} min-h-screen bg-sec-main font-sans text-indigo-100 selection:bg-indigo-400 selection:text-white antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
