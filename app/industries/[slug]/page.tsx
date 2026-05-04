import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { industries } from "@/content/industries";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return industries.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) return {};
  return {
    title: industry.name,
    description: industry.metaDescription,
    keywords: industry.keywords,
    alternates: { canonical: `/industries/${industry.slug}` },
    openGraph: {
      title: `${industry.name} | Apex Cloud Consulting`,
      description: industry.metaDescription,
      url: `/industries/${industry.slug}`,
      type: "website",
    },
  };
}

export default function IndustryPage({ params }: Props) {
  const industry = industries.find((i) => i.slug === params.slug);
  if (!industry) notFound();

  const industrySchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: industry.name,
    description: industry.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Apex Cloud Consulting GmbH",
      url: "https://apex-cloud-consulting.vercel.app",
    },
    audience: { "@type": "Audience", audienceType: industry.name },
    datePublished: industry.publishedAt,
    dateModified: industry.updatedAt,
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(industrySchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/industries" className="text-blue-300 hover:text-blue-200 text-sm transition-colors">
              Industries
            </Link>
            <span className="text-blue-700">/</span>
            <span className="text-blue-200 text-sm">{industry.shortName}</span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{industry.heroHeadline}</h1>
            <p className="text-lg text-blue-100 leading-relaxed">{industry.heroDescription}</p>
          </div>
        </div>
      </section>

      {/* TL;DR — GEO */}
      <div className="bg-blue-50 border-l-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">TL;DR</p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{industry.tldr}</p>
        </div>
      </div>

      {/* Stats */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {industry.stats.map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Intro + Challenges */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">The {industry.shortName} Cloud Challenge</h2>
              <div className="text-gray-700 leading-relaxed space-y-4">
                {industry.intro.split("\n\n").map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Challenges We Solve</h2>
              <div className="space-y-5">
                {industry.challenges.map((challenge) => (
                  <div
                    key={challenge.title}
                    className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm"
                  >
                    <h3 className="font-bold text-gray-900 mb-2">{challenge.title}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">{challenge.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services for this industry */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10 text-center">
            Services for {industry.shortName}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {industry.services.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group block bg-gray-50 rounded-2xl p-6 border border-gray-100 hover:border-blue-200 hover:bg-blue-50 transition-all"
              >
                <h3 className="font-bold text-gray-900 group-hover:text-blue-600 mb-2 transition-colors">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-4">{service.description}</p>
                <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-800 transition-colors">
                  Learn more →
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Other industries */}
      <section className="py-12 bg-gray-50 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-5">
            Other Industries We Serve
          </h3>
          <div className="flex flex-wrap gap-3">
            {industries
              .filter((ind) => ind.slug !== industry.slug)
              .map((ind) => (
                <Link
                  key={ind.slug}
                  href={`/industries/${ind.slug}`}
                  className="px-4 py-2 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 hover:border-blue-300 hover:text-blue-600 transition-all"
                >
                  {ind.shortName}
                </Link>
              ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{industry.cta.headline}</h2>
          <p className="text-blue-100 text-lg mb-8">{industry.cta.subline}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Get in Touch
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Freshness marker — GEO */}
      <div className="bg-gray-50 py-3 text-center">
        <p className="text-xs text-gray-400">
          Last updated:{" "}
          {new Date(industry.updatedAt).toLocaleDateString("en-GB", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </>
  );
}
