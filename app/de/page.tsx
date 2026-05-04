import type { Metadata } from "next";
import Link from "next/link";
import { heroCopyDe } from "@/content/de/hero";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apex-cloud-consulting.vercel.app";

const webPageSchema = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/de#webpage`,
  url: `${siteUrl}/de`,
  name: "Apex Cloud Consulting – Cloud-Lösungen für Automotive",
  description:
    "Apex Cloud Consulting liefert Cloud-Transformation, Connected-Car-Plattformen und DevOps-Lösungen für OEMs und Tier-1-Automobilzulieferer.",
  isPartOf: { "@id": `${siteUrl}/#website` },
  about: { "@id": `${siteUrl}/#organization` },
  inLanguage: "de-DE",
};

export const metadata: Metadata = {
  title: "Cloud Consulting für Automotive – Startseite",
  description:
    "Apex Cloud Consulting unterstützt OEMs, Tier-1-Automobilzulieferer und Connected-Car-Plattformanbieter bei der Beschleunigung ihrer Cloud-Transformation.",
  alternates: {
    canonical: "/de",
    languages: {
      "en": "/",
      "de": "/de",
    },
  },
  openGraph: {
    title: "Apex Cloud Consulting – Cloud-Lösungen für Automotive",
    description:
      "Experten für Cloud-Transformation, Connected-Car-Plattformen und DevOps-Consulting für die Automobilindustrie.",
    url: "/de",
    type: "website",
    locale: "de_DE",
  },
};

export default function HomeDe() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900 text-white overflow-hidden">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage:
              "radial-gradient(circle at 25% 50%, #3b82f6 0%, transparent 50%), radial-gradient(circle at 75% 20%, #1d4ed8 0%, transparent 50%)",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight mb-6">
              {heroCopyDe.headline}
            </h1>
            <p className="text-lg sm:text-xl text-blue-100 mb-10 leading-relaxed max-w-2xl">
              {heroCopyDe.subheadline}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Link
                href={heroCopyDe.cta.primary.href}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl transition-colors text-center shadow-lg shadow-blue-900/30"
              >
                {heroCopyDe.cta.primary.label}
              </Link>
              <Link
                href={heroCopyDe.cta.secondary.href}
                className="px-8 py-4 border border-white/30 hover:border-white/60 hover:bg-white/10 text-white font-semibold rounded-xl transition-colors text-center"
              >
                {heroCopyDe.cta.secondary.label}
              </Link>
            </div>
            <p className="text-sm text-blue-300 flex items-center gap-2">
              <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                  clipRule="evenodd"
                />
              </svg>
              {heroCopyDe.trustBadge}
            </p>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 border-t border-white/10 pt-12">
            {heroCopyDe.stats.map((stat) => (
              <div key={stat.label} className="text-center sm:text-left">
                <div className="text-4xl font-bold text-white mb-1">{stat.value}</div>
                <div className="text-sm text-blue-300">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services teaser */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Cloud-Expertise für Automotive – aus einer Hand
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Von der Migration bis zur Connected-Car-Plattform – wir begleiten Sie auf jeder Ebene Ihrer Cloud-Journey.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: "Cloud-Migration",
                desc: "Zero-Downtime-Migrationen für 24/7-Fertigungsumgebungen.",
                path: "M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z",
              },
              {
                title: "DevOps & CI/CD",
                desc: "Automatisierte Pipelines für Embedded- und Cloud-native Software.",
                path: "M5.25 5.653c0-.856.917-1.398 1.667-.986l11.54 6.347a1.125 1.125 0 010 1.972l-11.54 6.347a1.125 1.125 0 01-1.667-.986V5.653z",
              },
              {
                title: "Daten & Analytics",
                desc: "Echtzeit-Telematik und skalierbare Data-Lakehouse-Plattformen.",
                path: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z",
              },
              {
                title: "Connected Car",
                desc: "OTA-Update-Backends und Fahrzeug-Cloud-Datenpipelines.",
                path: "M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12",
              },
              {
                title: "SAP in der Cloud",
                desc: "S/4HANA-Migrationen ohne Geschäftsunterbrechung.",
                path: "M5.25 14.25h13.5m-13.5 0a3 3 0 01-3-3m3 3a3 3 0 100 6h13.5a3 3 0 100-6m-16.5-3a3 3 0 013-3h13.5a3 3 0 013 3m-19.5 0a4.5 4.5 0 01.9-2.7L5.737 5.1a3.375 3.375 0 012.7-1.35h7.126c1.062 0 2.062.5 2.7 1.35l2.587 3.45a4.5 4.5 0 01.9 2.7m0 0a3 3 0 01-3 3m0 3h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008zm-3 6h.008v.008h-.008v-.008zm0-6h.008v.008h-.008v-.008z",
              },
              {
                title: "Sicherheit & Compliance",
                desc: "TISAX-Readiness und UNECE WP.29 Cybersecurity-Frameworks.",
                path: "M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z",
              },
            ].map((service) => (
              <div
                key={service.title}
                className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={service.path} />
                  </svg>
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{service.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{service.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/de/services"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
            >
              Alle Leistungen ansehen
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Bereit, Ihre Cloud-Journey zu beschleunigen?
          </h2>
          <p className="text-white text-lg mb-8">
            Unsere Berater freuen sich auf Ihre spezifischen Herausforderungen. Kein Vertriebsgespräch – nur ehrliche Beratung.
          </p>
          <Link
            href="/de/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Gespräch starten
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
