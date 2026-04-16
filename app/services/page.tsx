import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Services for Automotive",
  description:
    "Discover Apex Cloud Consulting's services: cloud migration, Connected Car platform development, OEM cloud solutions, and DevOps for the automotive industry.",
  keywords: [
    "cloud migration automotive",
    "connected car platform",
    "OEM cloud services",
    "Tier-1 supplier DevOps",
    "automotive cloud architecture",
  ],
  alternates: {
    canonical: "/services",
  },
  openGraph: {
    title: "Cloud Services for Automotive – Apex Cloud Consulting",
    description:
      "Cloud migration, Connected Car platforms, OEM solutions, and DevOps for the automotive industry.",
    url: "/services",
    type: "website",
  },
};

export default function ServicesPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-lg">Services page – coming soon.</p>
    </div>
  );
}
