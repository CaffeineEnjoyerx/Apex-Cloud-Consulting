import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about Apex Cloud Consulting – our team of automotive cloud experts helping OEMs and Tier-1 suppliers navigate cloud transformation.",
  keywords: [
    "about apex cloud consulting",
    "automotive cloud experts",
    "cloud consulting team",
    "OEM technology partner",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Apex Cloud Consulting",
    description:
      "Meet the automotive cloud experts behind Apex Cloud Consulting.",
    url: "/about",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-lg">About page – coming soon.</p>
    </div>
  );
}
