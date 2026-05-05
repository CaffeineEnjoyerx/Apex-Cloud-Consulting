import type { Metadata } from "next";
import Link from "next/link";
import { caseStudies, caseStudyListingCopy } from "@/content/caseStudies";

export const metadata: Metadata = {
  title: "Case Studies | Apex Cloud Consulting",
  description:
    "Case studies from Apex Cloud Consulting — SAP S/4HANA migrations, TISAX compliance programs, and cloud transformations for the automotive industry.",
  keywords: [
    "automotive consulting case studies",
    "SAP S/4HANA migration case study",
    "TISAX remediation case study",
    "cloud migration automotive",
  ],
  alternates: { canonical: "/case-studies" },
  openGraph: {
    title: "Case Studies | Apex Cloud Consulting",
    description:
      "Real projects, measurable outcomes. SAP S/4HANA migrations, TISAX compliance programs, and cloud transformations for automotive OEMs and suppliers.",
    url: "/case-studies",
    type: "website",
  },
};

const serviceColors: Record<string, string> = {
  "SAP S/4HANA Migration": "bg-blue-100 text-blue-700",
  "TISAX & Security Compliance": "bg-purple-100 text-purple-700",
};

export default function CaseStudiesPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/" className="text-blue-300 hover:text-blue-200 text-sm transition-colors">
              Home
            </Link>
            <span className="text-blue-700">/</span>
            <span className="text-blue-300 text-sm">Case Studies</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{caseStudyListingCopy.headline}</h1>
            <p className="text-xl text-blue-200 mb-3 font-medium">{caseStudyListingCopy.subheadline}</p>
            <p className="text-blue-100 text-lg leading-relaxed">{caseStudyListingCopy.description}</p>
          </div>
        </div>
      </section>

      {/* Case study cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {caseStudies.map((cs) => (
              <Link
                key={cs.slug}
                href={`/case-studies/${cs.slug}`}
                className="group block bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-blue-300 hover:shadow-lg transition-all duration-200"
              >
                {/* Card header */}
                <div className="bg-gradient-to-br from-gray-900 to-blue-950 p-8">
                  <div className="flex items-center gap-2 mb-4 flex-wrap">
                    <span
                      className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold ${serviceColors[cs.service] ?? "bg-gray-700 text-gray-200"}`}
                    >
                      {cs.service}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-lg text-xs font-semibold bg-gray-700 text-gray-200">
                      {cs.industry}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-white leading-snug group-hover:text-blue-200 transition-colors">
                    {cs.title}
                  </h2>
                </div>

                {/* Metrics strip */}
                <div className="grid grid-cols-3 divide-x divide-gray-100 border-b border-gray-100">
                  {cs.metrics.slice(0, 3).map((m) => (
                    <div key={m.label} className="px-4 py-4 text-center">
                      <p className="text-xl font-bold text-blue-600">{m.value}</p>
                      <p className="text-xs text-gray-500 leading-tight mt-0.5">{m.label}</p>
                    </div>
                  ))}
                </div>

                {/* Excerpt */}
                <div className="p-6">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4">{cs.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <div className="text-xs text-gray-400">
                      {cs.readingTime} min read ·{" "}
                      {new Date(cs.publishedAt).toLocaleDateString("en-GB", {
                        month: "long",
                        year: "numeric",
                      })}
                    </div>
                    <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                      Read case study →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Facing a Similar Challenge?</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Every engagement starts with a specific problem. Tell us what you&apos;re working on and we&apos;ll tell you
            how we can help.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors text-base"
          >
            Talk to a Consultant
          </Link>
        </div>
      </section>
    </>
  );
}
