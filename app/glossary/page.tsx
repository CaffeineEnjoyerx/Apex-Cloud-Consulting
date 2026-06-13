import type { Metadata } from "next";
import Link from "next/link";
import { glossaryPageCopy } from "@/content/glossary";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apexcloudconsulting.space";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Glossary", item: `${siteUrl}/glossary` },
  ],
};

const definedTermSetSchema = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${siteUrl}/glossary#termset`,
  name: "Automotive Cloud Glossary",
  description: glossaryPageCopy.subheadline,
  url: `${siteUrl}/glossary`,
  hasDefinedTerm: glossaryPageCopy.terms.map((t) => ({
    "@type": "DefinedTerm",
    "@id": `${siteUrl}/glossary#${t.slug}`,
    name: t.term,
    termCode: t.slug,
    description: t.definition,
    inDefinedTermSet: `${siteUrl}/glossary#termset`,
  })),
};

export const metadata: Metadata = {
  title: "Automotive Cloud Glossary – Key Terms Explained",
  description:
    "Definitions for 17 key automotive cloud terms: TISAX, WP.29, OTA, CSMS, SUMS, AUTOSAR, MQTT, OPC-UA, MES, SCADA, digital twin, zero trust, data lakehouse, and more.",
  keywords: [
    "TISAX definition",
    "WP.29 automotive",
    "OTA update automotive",
    "CSMS cybersecurity",
    "AUTOSAR cloud",
    "MQTT vehicle telematics",
    "automotive cloud glossary",
    "IATF 16949",
    "zero trust automotive",
    "data lakehouse automotive",
  ],
  alternates: {
    canonical: "/glossary",
    languages: {
      en: "/glossary",
      de: "/de/glossary",
    },
  },
  openGraph: {
    title: "Automotive Cloud Glossary – Apex Cloud Consulting",
    description:
      "Plain-English definitions for TISAX, WP.29, OTA, CSMS, MQTT, digital twin, zero trust, data lakehouse, and 9 more automotive cloud terms.",
    url: "/glossary",
    type: "website",
  },
};

export default function GlossaryPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(definedTermSetSchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <nav className="flex items-center gap-2 text-sm text-blue-300 mb-6">
              <Link href="/" className="hover:text-white transition-colors">Home</Link>
              <svg className="w-4 h-4 text-blue-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
              <span className="text-blue-100">Glossary</span>
            </nav>
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{glossaryPageCopy.headline}</h1>
            <p className="text-lg text-blue-100 leading-relaxed">{glossaryPageCopy.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Quick-jump index */}
      <section className="bg-white border-b border-gray-100 py-6 sticky top-16 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2">
            {glossaryPageCopy.terms.map((t) => (
              <a
                key={t.slug}
                href={`#${t.slug}`}
                className="px-3 py-1 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full hover:bg-blue-600 hover:text-white transition-colors"
              >
                {t.term}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Terms */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl className="space-y-10">
            {glossaryPageCopy.terms.map((t) => (
              <div
                key={t.slug}
                id={t.slug}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 scroll-mt-36"
              >
                <dt>
                  <span className="text-xs font-semibold text-blue-600 uppercase tracking-wider">
                    {t.shortDef}
                  </span>
                  <h2 className="text-2xl font-bold text-gray-900 mt-1 mb-4">{t.term}</h2>
                </dt>
                <dd>
                  <p className="text-gray-600 leading-relaxed mb-6">{t.definition}</p>
                  {t.relatedServices.length > 0 && (
                    <div className="border-t border-gray-100 pt-5">
                      <p className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Related Services
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {t.relatedServices.map((svc) => (
                          <Link
                            key={svc.href}
                            href={svc.href}
                            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-medium text-blue-700 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors"
                          >
                            {svc.label}
                            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ))}
                      </div>
                    </div>
                  )}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            {glossaryPageCopy.cta.label}
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Our senior consultants specialise in automotive cloud, TISAX, WP.29, and connected vehicle platforms.
            Tell us about your project and we&apos;ll get back to you within one business day.
          </p>
          <Link
            href={glossaryPageCopy.cta.href}
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
