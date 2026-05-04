import type { Metadata } from "next";
import Link from "next/link";
import { teamMembers } from "@/content/team";
import { teamPageCopyDe, teamMemberBiosDe } from "@/content/de/team";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apex-cloud-consulting.vercel.app";

export const metadata: Metadata = {
  title: "Unser Team",
  description:
    "Lernen Sie die Senior-Berater hinter Apex Cloud Consulting kennen – Automotive-Cloud-Architekten, SAP-Spezialisten, Connected-Car-Ingenieure und Sicherheitsexperten.",
  keywords: [
    "automotive cloud berater",
    "SAP automotive experten",
    "connected car architekten",
    "TISAX berater",
    "cloud migration automotive team",
  ],
  alternates: {
    canonical: "/de/team",
    languages: {
      "en": "/team",
      "de": "/de/team",
    },
  },
  openGraph: {
    title: "Unser Team | Apex Cloud Consulting",
    description:
      "Lernen Sie die Senior-Berater hinter Apex Cloud Consulting kennen – Automotive-Cloud-Architekten, SAP-Spezialisten und Sicherheitsexperten.",
    url: "/de/team",
    type: "website",
    locale: "de_DE",
  },
};

const teamSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  name: "Apex Cloud Consulting Team",
  inLanguage: "de-DE",
  description: teamPageCopyDe.subheadline,
  mainEntity: teamMembers.map((m) => ({
    "@type": "Person",
    name: m.name,
    jobTitle: m.role,
    worksFor: { "@type": "Organization", name: "Apex Cloud Consulting GmbH" },
    knowsAbout: m.expertise,
    ...(m.linkedIn ? { sameAs: [m.linkedIn] } : {}),
  })),
};

export default function TeamPageDe() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(teamSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">{teamPageCopyDe.headline}</h1>
          <p className="text-lg text-blue-100 leading-relaxed">{teamPageCopyDe.subheadline}</p>
        </div>
      </section>

      {/* Team grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {teamMembers.map((member) => (
              <article
                key={member.id}
                className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-start gap-5 mb-6">
                  <div
                    className={`w-16 h-16 ${member.avatarColor} rounded-2xl flex items-center justify-center flex-shrink-0 text-white font-bold text-lg`}
                  >
                    {member.initials}
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-gray-900">{member.name}</h2>
                    <p className="text-blue-600 font-medium text-sm mt-0.5">{member.role}</p>
                    {member.linkedIn && (
                      <a
                        href={member.linkedIn}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-xs text-gray-500 hover:text-blue-600 mt-1 transition-colors"
                        aria-label={`${member.name} auf LinkedIn`}
                      >
                        <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                        </svg>
                        LinkedIn
                      </a>
                    )}
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed text-sm mb-6">
                  {teamMemberBiosDe[member.id] ?? member.bio}
                </p>

                <div className="space-y-4">
                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Expertise</h3>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill) => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-lg"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                      Zertifizierungen
                    </h3>
                    <ul className="space-y-1">
                      {member.certifications.map((cert) => (
                        <li key={cert} className="flex items-start gap-1.5 text-xs text-gray-600">
                          <svg
                            className="w-3.5 h-3.5 text-blue-500 mt-0.5 flex-shrink-0"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                          >
                            <path
                              fillRule="evenodd"
                              d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                              clipRule="evenodd"
                            />
                          </svg>
                          {cert}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16 border-t border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "120+", label: "Berater" },
              { value: "200+", label: "Migrationen durchgeführt" },
              { value: "8", label: "Jahre im Automotive Cloud" },
              { value: "4", label: "Hyperscaler-Partnerschaften" },
            ].map((stat) => (
              <div key={stat.label}>
                <div className="text-3xl font-bold text-blue-600 mb-1">{stat.value}</div>
                <div className="text-sm text-gray-500">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Mit unserem Team arbeiten</h2>
          <p className="text-blue-100 text-lg mb-8">
            Senior-Berater. Keine Junior-Übergaben. Ihre Projektumsetzung wird von einem erfahrenen Architekten geleitet.
          </p>
          <Link
            href="/de/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Kontakt aufnehmen
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
