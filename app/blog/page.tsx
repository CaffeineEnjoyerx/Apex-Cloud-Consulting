import type { Metadata } from "next";
import Link from "next/link";
import { blogPosts } from "@/content/blog";

export const metadata: Metadata = {
  title: "Blog – Automotive Cloud Insights",
  description:
    "Expert insights on automotive cloud transformation, TISAX compliance, SAP migration, connected car platforms, and DevOps for OEMs and Tier-1 suppliers.",
  keywords: [
    "automotive cloud blog",
    "TISAX compliance guide",
    "SAP S4HANA migration",
    "connected car platform insights",
    "WP.29 cybersecurity automotive",
  ],
  alternates: { canonical: "/blog" },
  openGraph: {
    title: "Blog – Automotive Cloud Insights | Apex Cloud Consulting",
    description:
      "Expert insights on automotive cloud transformation, TISAX, SAP migration, and connected car platforms.",
    url: "/blog",
    type: "website",
  },
};

const categoryColors: Record<string, string> = {
  "Security & Compliance": "bg-purple-100 text-purple-700",
  "SAP & ERP": "bg-blue-100 text-blue-700",
  "Connected Car": "bg-indigo-100 text-indigo-700",
  "Cloud Architecture": "bg-cyan-100 text-cyan-700",
  "Manufacturing IT": "bg-emerald-100 text-emerald-700",
};

export default function BlogPage() {
  const sorted = [...blogPosts].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );

  return (
    <>
      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">Automotive Cloud Insights</h1>
          <p className="text-lg text-blue-100 leading-relaxed">
            Practical guidance on cloud migration, TISAX compliance, SAP transformation, connected car platforms,
            and DevOps — written by practitioners with hands-on automotive experience.
          </p>
        </div>
      </section>

      {/* Post grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sorted.map((post) => (
              <article
                key={post.slug}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
              >
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-3 mb-4">
                    <span
                      className={`px-2.5 py-1 rounded-lg text-xs font-semibold ${categoryColors[post.category] ?? "bg-gray-100 text-gray-700"}`}
                    >
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-400">{post.readingTime} min read</span>
                  </div>

                  <h2 className="text-lg font-bold text-gray-900 mb-3 leading-snug">
                    <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-gray-600 text-sm leading-relaxed mb-5 flex-1">{post.excerpt}</p>

                  {/* Author box */}
                  <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
                    <div
                      className={`w-8 h-8 ${post.author.avatarColor} rounded-full flex items-center justify-center text-white text-xs font-bold flex-shrink-0`}
                    >
                      {post.author.initials}
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-gray-900">{post.author.name}</p>
                      <p className="text-xs text-gray-500">{post.author.role}</p>
                    </div>
                    <time
                      dateTime={post.publishedAt}
                      className="ml-auto text-xs text-gray-400"
                    >
                      {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </time>
                  </div>
                </div>

                <div className="px-6 pb-6">
                  <Link
                    href={`/blog/${post.slug}`}
                    className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-600 hover:text-blue-800 transition-colors"
                  >
                    Read article
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">Expert Guidance for Your Cloud Journey</h2>
          <p className="text-blue-100 text-lg mb-8">
            These articles reflect what we see on real engagements. If you&apos;re facing a specific challenge, talk to us directly.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            Talk to an Expert
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>
    </>
  );
}
