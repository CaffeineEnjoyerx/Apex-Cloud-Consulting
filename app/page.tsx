import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cloud Consulting for Automotive – Home",
  description:
    "Apex Cloud Consulting helps OEMs, Tier-1 automotive suppliers, and Connected Car platform providers accelerate cloud transformation with expert consulting.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Apex Cloud Consulting – Cloud Solutions for Automotive",
    description:
      "Expert cloud transformation, connected car platforms, and DevOps consulting for the automotive industry.",
    url: "/",
    type: "website",
  },
};

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-lg">Home page – coming soon.</p>
    </div>
  );
}
