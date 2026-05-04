import type { Metadata } from "next";
import Link from "next/link";
import { aboutPageCopyDe } from "@/content/de/about";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apex-cloud-consulting.vercel.app";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Startseite", item: `${siteUrl}/de` },
    { "@type": "ListItem", position: 2, name: "Über uns", item: `${siteUrl}/de/about` },
  ],
};

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über Apex Cloud Consulting – unser Team aus Automotive-Cloud-Experten unterstützt OEMs und Tier-1-Zulieferer bei der Cloud-Transformation.",
  keywords: [
    "über apex cloud consulting",
    "automotive cloud experten",
    "cloud consulting team",
    "OEM technologiepartner",
  ],
  alternates: {
    canonical: "/de/about",
    languages: {
      "en": "/about",
      "de": "/de/about",
    },
  },
  openGraph: {
    title: "Über Apex Cloud Consulting",
    description:
      "Lernen Sie die Automotive-Cloud-Experten hinter Apex Cloud Consulting kennen.",
    url: "/de/about",
    type: "website",
    locale: "de_DE",
  },
};

export default function AboutPageDe() {
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
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{aboutPageCopyDe.headline}</h1>
            <p className="text-lg text-blue-100 leading-relaxed">{aboutPageCopyDe.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">{aboutPageCopyDe.story.title}</h2>
              <div className="space-y-4">
                {aboutPageCopyDe.story.paragraphs.map((para, idx) => (
                  <p key={idx} className="text-gray-600 leading-relaxed">
                    {para}
                  </p>
                ))}
              </div>
            </div>
            <div className="bg-blue-50 rounded-2xl p-8 border border-blue-100">
              <h3 className="text-xl font-bold text-gray-900 mb-4">{aboutPageCopyDe.mission.title}</h3>
              <p className="text-gray-700 leading-relaxed text-lg italic border-l-4 border-blue-600 pl-4">
                &ldquo;{aboutPageCopyDe.mission.statement}&rdquo;
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-bold text-gray-900">{aboutPageCopyDe.values.title}</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {aboutPageCopyDe.values.items.map((value, idx) => (
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
            <h2 className="text-3xl font-bold text-gray-900 mb-4">{aboutPageCopyDe.team.title}</h2>
            <p className="text-gray-600 leading-relaxed mb-8">{aboutPageCopyDe.team.description}</p>
            <div className="bg-blue-50 rounded-xl p-6 border border-blue-100 mb-6">
              <p className="text-gray-600 italic mb-4">{aboutPageCopyDe.team.placeholder.note}</p>
              <Link
                href={aboutPageCopyDe.team.placeholder.cta.href}
                className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
              >
                {aboutPageCopyDe.team.placeholder.cta.label}
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
            <h2 className="text-2xl font-bold mb-2">{aboutPageCopyDe.certifications.title}</h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {aboutPageCopyDe.certifications.items.map((cert) => (
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
