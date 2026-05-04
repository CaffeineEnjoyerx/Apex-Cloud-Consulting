import type { Metadata } from "next";
import Link from "next/link";
import { aboutPageCopy } from "@/content/about";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apex-cloud-consulting.vercel.app";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "About", item: `${siteUrl}/about` },
  ],
};

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{aboutPageCopy.headline}</h1>
            <p className="text-lg text-blue-100 leading-relaxed">{aboutPageCopy.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{aboutPageCopy.story.title}</h2>
              <div className="space-y-4">
                {aboutPageCopy.story.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{aboutPageCopy.mission.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-blue-600 pl-4">
                &ldquo;{aboutPageCopy.mission.statement}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">{aboutPageCopy.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPageCopy.values.items.map((value, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                  <span className="text-white font-bold text-sm">{String(idx + 1).padStart(2, "0")}</span>
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{value.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{aboutPageCopy.team.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{aboutPageCopy.team.description}</p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
              <p className="text-gray-600 italic mb-4">{aboutPageCopy.team.placeholder.note}</p>
              <Link
                href={aboutPageCopy.team.placeholder.cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                {aboutPageCopy.team.placeholder.cta.label}
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold mb-2">{aboutPageCopy.certifications.title}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {aboutPageCopy.certifications.items.map((cert) => (
              <span
                key={cert}
                className="px-4 py-2 bg-white/10 border border-white/20 rounded-full text-sm text-gray-200 hover:bg-white/20 transition-colors"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
