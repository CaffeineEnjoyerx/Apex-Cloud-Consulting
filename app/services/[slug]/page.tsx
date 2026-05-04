import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { serviceDetails } from "@/content/serviceDetails";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return serviceDetails.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const service = serviceDetails.find((s) => s.slug === params.slug);
  if (!service) return {};
  return {
    title: service.title,
    description: service.metaDescription,
    keywords: service.keywords,
    alternates: { canonical: `/services/${service.slug}` },
    openGraph: {
      title: `${service.title} | Apex Cloud Consulting`,
      description: service.metaDescription,
      url: `/services/${service.slug}`,
      type: "article",
    },
  };
}

const iconPaths: Record<string, string> = {
  "cloud-upload": "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
  "git-branch": "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z",
  "bar-chart": "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
  car: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
  server: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z",
  shield: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
};

const serviceIcons: Record<string, string> = {
  "cloud-migration": "cloud-upload",
  "devops-cicd": "git-branch",
  "data-analytics": "bar-chart",
  "connected-car": "car",
  "sap-on-cloud": "server",
  "security-compliance": "shield",
};

export default function ServiceDetailPage({ params }: Props) {
  const service = serviceDetails.find((s) => s.slug === params.slug);
  if (!service) notFound();

  const iconKey = serviceIcons[service.slug] ?? "cloud-upload";

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.metaDescription,
    provider: {
      "@type": "Organization",
      name: "Apex Cloud Consulting GmbH",
      url: "https://apex-cloud-consulting.vercel.app",
    },
    datePublished: service.publishedAt,
    dateModified: service.updatedAt,
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: service.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/services" className="text-blue-300 hover:text-blue-200 text-sm transition-colors">
              Services
            </Link>
            <span className="text-blue-700">/</span>
            <span className="text-blue-200 text-sm">{service.title}</span>
          </div>
          <div className="flex items-start gap-6 max-w-4xl">
            <div className="w-16 h-16 bg-blue-600 rounded-2xl flex items-center justify-center flex-shrink-0 mt-1">
              <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={iconPaths[iconKey]} />
              </svg>
            </div>
            <div>
              <span className="text-xs font-semibold text-blue-400 uppercase tracking-wider">{service.tagline}</span>
              <h1 className="text-4xl sm:text-5xl font-bold mt-2 mb-4">{service.title}</h1>
              <p className="text-lg text-blue-100 leading-relaxed">{service.heroDescription}</p>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR Box — GEO */}
      <div className="bg-blue-50 border-l-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">TL;DR</p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{service.tldr}</p>
        </div>
      </div>

      {/* Main content + sidebar */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Body */}
            <div className="lg:col-span-2">
              <p className="text-lg text-gray-700 leading-relaxed mb-10">{service.body.intro}</p>
              <div className="space-y-10">
                {service.body.sections.map((section) => (
                  <div key={section.heading}>
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">{section.heading}</h2>
                    <p className="text-gray-700 leading-relaxed">{section.content}</p>
                  </div>
                ))}
              </div>

              {/* Process */}
              <div className="mt-16">
                <h2 className="text-2xl font-bold text-gray-900 mb-8">Our Approach</h2>
                <div className="space-y-6">
                  {service.process.map((step) => (
                    <div key={step.step} className="flex gap-5">
                      <div className="flex-shrink-0 w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {step.step}
                      </div>
                      <div className="pt-1">
                        <h3 className="font-semibold text-gray-900 mb-1">{step.title}</h3>
                        <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Benefits */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="font-bold text-gray-900 mb-4">Key Benefits</h3>
                <ul className="space-y-3">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-gray-700">
                      <svg className="w-4 h-4 text-blue-500 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                      </svg>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA card */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-lg mb-2">{service.cta.headline}</h3>
                <p className="text-blue-100 text-sm mb-5 leading-relaxed">{service.cta.subline}</p>
                <Link
                  href="/contact"
                  className="block text-center px-5 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Other services */}
              <div>
                <h3 className="font-bold text-gray-900 mb-3 text-sm uppercase tracking-wider">Other Services</h3>
                <ul className="space-y-2">
                  {serviceDetails
                    .filter((s) => s.slug !== service.slug)
                    .map((s) => (
                      <li key={s.slug}>
                        <Link
                          href={`/services/${s.slug}`}
                          className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                        >
                          {s.title}
                        </Link>
                      </li>
                    ))}
                </ul>
              </div>

              {/* Freshness marker — GEO */}
              <p className="text-xs text-gray-400">
                Last updated:{" "}
                {new Date(service.updatedAt).toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </aside>
          </div>
        </div>
      </section>

      {/* FAQ block */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-10">Frequently Asked Questions</h2>
          <div className="space-y-6">
            {service.faqs.map((faq, i) => (
              <details
                key={i}
                className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
              >
                <summary className="cursor-pointer flex items-center justify-between gap-4 p-6 font-semibold text-gray-900 list-none">
                  {faq.question}
                  <svg
                    className="w-5 h-5 text-blue-600 flex-shrink-0 transition-transform group-open:rotate-180"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-6 pb-6 text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">{service.cta.headline}</h2>
          <p className="text-blue-100 text-lg mb-8">{service.cta.subline}</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Talk to Our Team
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
