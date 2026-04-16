import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Apex Cloud Consulting. Let's discuss how we can support your automotive cloud transformation journey.",
  keywords: [
    "contact apex cloud consulting",
    "automotive cloud inquiry",
    "cloud consulting contact",
  ],
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Apex Cloud Consulting",
    description:
      "Reach out to discuss your automotive cloud transformation needs.",
    url: "/contact",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-gray-500 text-lg">Contact page – coming soon.</p>
    </div>
  );
}
