import type { Metadata } from "next";
import ContactForm from "./ContactForm";
import { contactPageCopy } from "@/content/contact";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://apex-cloud-consulting.vercel.app";

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
    { "@type": "ListItem", position: 2, name: "Contact", item: `${siteUrl}/contact` },
  ],
};

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
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      {/* Header */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl sm:text-5xl font-bold mb-6">{contactPageCopy.headline}</h1>
            <p className="text-lg text-blue-100 leading-relaxed">{contactPageCopy.subheadline}</p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
            {/* Form — takes 3 columns */}
            <div className="lg:col-span-3">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{contactPageCopy.form.title}</h2>
                <p className="text-gray-600 mb-8">{contactPageCopy.form.description}</p>
                <ContactForm fields={contactPageCopy.form.fields} submitLabel={contactPageCopy.form.submitLabel} privacyNote={contactPageCopy.form.privacyNote} />
              </div>
            </div>

            {/* Sidebar — 2 columns */}
            <div className="lg:col-span-2 space-y-8">
              {/* Offices */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-6">{contactPageCopy.office.title}</h2>
                <div className="space-y-6">
                  {contactPageCopy.office.locations.map((loc) => (
                    <div
                      key={loc.city}
                      className={`bg-white rounded-xl p-6 border ${loc.isPrimary ? "border-blue-200 shadow-sm" : "border-gray-100"}`}
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <h3 className="font-bold text-gray-900">{loc.city}</h3>
                        {loc.isPrimary && (
                          <span className="text-xs px-2 py-0.5 bg-blue-100 text-blue-700 rounded-full font-medium">
                            HQ
                          </span>
                        )}
                      </div>
                      <address className="not-italic text-sm text-gray-600 space-y-1">
                        <p className="whitespace-pre-line">{loc.address}</p>
                        <p className="mt-3">
                          <a href={`tel:${loc.phone}`} className="hover:text-blue-600 transition-colors">
                            {loc.phone}
                          </a>
                        </p>
                        <p>
                          <a href={`mailto:${loc.email}`} className="hover:text-blue-600 transition-colors break-all">
                            {loc.email}
                          </a>
                        </p>
                        <p className="text-gray-400 text-xs mt-2">{loc.hours}</p>
                      </address>
                    </div>
                  ))}
                </div>
              </div>

              {/* Social */}
              <div>
                <h2 className="text-xl font-bold text-gray-900 mb-4">{contactPageCopy.social.title}</h2>
                <div className="flex flex-col gap-3">
                  {contactPageCopy.social.links.map((link) => (
                    <a
                      key={link.platform}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 px-4 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-300 hover:shadow-sm transition-all text-sm font-medium text-gray-700 hover:text-blue-600"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />
                      </svg>
                      {link.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
