import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { caseStudies } from "@/content/caseStudies";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return caseStudies.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) return {};
  return {
    title: `${cs.title} | Apex Cloud Consulting`,
    description: cs.metaDescription,
    keywords: cs.keywords,
    alternates: { canonical: `/case-studies/${cs.slug}` },
    openGraph: {
      title: cs.title,
      description: cs.metaDescription,
      url: `/case-studies/${cs.slug}`,
      type: "article",
      publishedTime: cs.publishedAt,
      modifiedTime: cs.updatedAt,
    },
  };
}

const serviceColors: Record<string, string> = {
  "SAP S/4HANA Migration": "bg-blue-100 text-blue-700",
  "TISAX & Security Compliance": "bg-purple-100 text-purple-700",
};

export default function CaseStudyPage({ params }: Props) {
  const cs = caseStudies.find((c) => c.slug === params.slug);
  if (!cs) notFound();

  const related = caseStudies.filter((c) => c.slug !== cs.slug);

  const caseStudySchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "@id": `https://apex-cloud-consulting.vercel.app/case-studies/${cs.slug}`,
    headline: cs.title,
    description: cs.metaDescription,
    datePublished: cs.publishedAt,
    dateModified: cs.updatedAt,
    author: {
      "@type": "Organization",
      name: "Apex Cloud Consulting GmbH",
      url: "https://apex-cloud-consulting.vercel.app",
    },
    publisher: {
      "@type": "Organization",
      name: "Apex Cloud Consulting GmbH",
      url: "https://apex-cloud-consulting.vercel.app",
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://apex-cloud-consulting.vercel.app/case-studies/${cs.slug}`,
    },
    keywords: cs.keywords.join(", "),
    about: [
      { "@type": "Thing", name: cs.industry },
      { "@type": "Thing", name: cs.service },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(caseStudySchema) }}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6 flex-wrap">
            <Link href="/case-studies" className="text-blue-300 hover:text-blue-200 text-sm transition-colors">
              Case Studies
            </Link>
            <span className="text-blue-700">/</span>
            <span
              className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold ${serviceColors[cs.service] ?? "bg-gray-700 text-gray-200"}`}
            >
              {cs.service}
            </span>
          </div>
          <div className="max-w-3xl">
            <p className="text-blue-300 text-sm font-medium mb-3 uppercase tracking-wider">{cs.client}</p>
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">{cs.title}</h1>
            <div className="flex items-center gap-4 text-blue-400 text-sm flex-wrap">
              <span>{cs.industry}</span>
              <span>·</span>
              <span>{cs.readingTime} min read</span>
              <span>·</span>
              <time dateTime={cs.publishedAt}>
                {new Date(cs.publishedAt).toLocaleDateString("en-GB", {
                  month: "long",
                  year: "numeric",
                })}
              </time>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR */}
      <div className="bg-blue-50 border-l-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">TL;DR</p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed max-w-3xl">{cs.tldr}</p>
        </div>
      </div>

      {/* Metrics bar */}
      <div className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 divide-x divide-gray-700">
            {cs.metrics.map((m) => (
              <div key={m.label} className="px-4 py-6 text-center">
                <p className="text-2xl font-bold text-blue-400">{m.value}</p>
                <p className="text-xs text-gray-400 leading-tight mt-1">{m.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Content + sidebar */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2">
              {/* Challenge */}
              <div className="mb-10 p-6 bg-gray-50 rounded-2xl border border-gray-100">
                <h2 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">The Challenge</h2>
                <p className="text-gray-700 leading-relaxed">{cs.challenge}</p>
              </div>

              {/* Sections */}
              <div className="space-y-12">
                {cs.sections.map((section, i) => (
                  <div key={i}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                    <div className="text-gray-700 leading-relaxed space-y-4">
                      {section.content.split("\n\n").map((para, pi) => (
                        <p key={pi}>{para}</p>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              {/* Results summary */}
              <div className="mt-12 p-6 bg-blue-50 rounded-2xl border border-blue-100">
                <h2 className="text-lg font-bold text-gray-900 mb-4">Results at a Glance</h2>
                <ul className="space-y-2">
                  {cs.results.map((r, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-gray-700">
                      <span className="mt-0.5 w-5 h-5 flex-shrink-0 bg-blue-600 rounded-full flex items-center justify-center text-white text-xs font-bold">
                        ✓
                      </span>
                      {r}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Freshness */}
              <div className="mt-10 pt-6 border-t border-gray-100 text-sm text-gray-500 flex items-center gap-4 flex-wrap">
                <span>
                  Published:{" "}
                  {new Date(cs.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>
                  Last updated:{" "}
                  {new Date(cs.updatedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Engagement summary */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Engagement Summary</h3>
                <dl className="space-y-3 text-sm">
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide">Client</dt>
                    <dd className="font-semibold text-gray-900 mt-0.5">{cs.client}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide">Industry</dt>
                    <dd className="font-semibold text-gray-900 mt-0.5">{cs.industry}</dd>
                  </div>
                  <div>
                    <dt className="text-gray-500 text-xs uppercase tracking-wide">Service</dt>
                    <dd className="font-semibold text-gray-900 mt-0.5">{cs.service}</dd>
                  </div>
                </dl>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-2">Facing a Similar Challenge?</h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  We&apos;ve run this kind of engagement before. Let&apos;s talk about what&apos;s on your plate.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Talk to a Consultant
                </Link>
              </div>

              {/* Related */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Other Case Studies</h3>
                  <div className="space-y-4">
                    {related.map((r) => (
                      <Link
                        key={r.slug}
                        href={`/case-studies/${r.slug}`}
                        className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">{r.title}</p>
                        <p className="text-xs text-gray-500">{r.service}</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Related resource */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Related Resource</h3>
                <Link
                  href="/resources/tisax-cloud-checklist"
                  className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                >
                  <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">
                    TISAX Cloud Readiness Checklist
                  </p>
                  <p className="text-xs text-blue-600">Download free checklist →</p>
                </Link>
              </div>
            </aside>
          </div>
        </div>
      </article>

      {/* Bottom CTA */}
      <section className="py-16 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Start Your Own Success Story</h2>
          <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
            Every engagement starts with a conversation. Tell us what you&apos;re working on.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-white text-blue-600 font-bold rounded-xl hover:bg-blue-50 transition-colors"
            >
              Get in Touch
            </Link>
            <Link
              href="/case-studies"
              className="inline-block px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-blue-700 transition-colors"
            >
              All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
