import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import CookieBanner from "@/components/CookieBanner";
import StudentDisclaimer from "@/components/StudentDisclaimer";

const inter = Inter({ subsets: ["latin"] });

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apex-cloud-consulting.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Apex Cloud Consulting – Cloud Solutions for Automotive",
    template: "%s | Apex Cloud Consulting",
  },
  description:
    "Apex Cloud Consulting delivers cloud transformation, connected car platforms, and DevOps solutions for OEMs and Tier-1 automotive suppliers.",
  keywords: [
    "cloud consulting",
    "automotive cloud",
    "connected car platform",
    "OEM cloud solutions",
    "Tier-1 supplier cloud",
    "cloud migration automotive",
    "DevOps automotive",
    "Azure automotive",
    "AWS automotive",
    "cloud transformation",
  ],
  authors: [{ name: "Apex Cloud Consulting GmbH" }],
  creator: "Apex Cloud Consulting GmbH",
  publisher: "Apex Cloud Consulting GmbH",
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
  alternates: {
    canonical: siteUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    siteName: "Apex Cloud Consulting",
    title: "Apex Cloud Consulting – Cloud Solutions for Automotive",
    description:
      "Apex Cloud Consulting delivers cloud transformation, connected car platforms, and DevOps solutions for OEMs and Tier-1 automotive suppliers.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Apex Cloud Consulting – Cloud Solutions for Automotive",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Apex Cloud Consulting – Cloud Solutions for Automotive",
    description:
      "Cloud transformation, connected car platforms, and DevOps for OEMs and Tier-1 automotive suppliers.",
    images: ["/og-image.png"],
    creator: "@apexcloudconsult",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "LocalBusiness"],
  name: "Apex Cloud Consulting GmbH",
  url: siteUrl,
  logo: `${siteUrl}/logo.png`,
  description:
    "Apex Cloud Consulting specializes in cloud transformation, connected car platforms, and DevOps solutions for the automotive industry — serving OEMs, Tier-1 suppliers, and Connected Car platform providers.",
  foundingDate: "2020",
  areaServed: ["DE", "EU"],
  serviceType: [
    "Cloud Migration",
    "Connected Car Platform Development",
    "DevOps Consulting",
    "Cloud Architecture",
    "OEM Cloud Solutions",
  ],
  knowsAbout: [
    "Cloud Computing",
    "Automotive Industry",
    "Connected Vehicles",
    "OEM Software",
    "DevOps",
    "Microsoft Azure",
    "Amazon Web Services",
    "Kubernetes",
  ],
  sameAs: [
    "https://www.linkedin.com/company/apex-cloud-consulting",
    "https://twitter.com/apexcloudconsult",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    availableLanguage: ["English", "German"],
    url: `${siteUrl}/contact`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        <StudentDisclaimer />
        <Navigation />
        <main className="pt-16">{children}</main>
        <Footer />
        <CookieBanner />
      </body>
    </html>
  );
}
