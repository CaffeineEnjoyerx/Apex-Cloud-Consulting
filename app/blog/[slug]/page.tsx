import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { blogPosts } from "@/content/blog";

type Props = { params: { slug: string } };

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: `/blog/${post.slug}` },
    openGraph: {
      title: `${post.title} | Apex Cloud Consulting`,
      description: post.metaDescription,
      url: `/blog/${post.slug}`,
      type: "article",
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author.name],
    },
  };
}

const categoryColors: Record<string, string> = {
  "Security & Compliance": "bg-purple-100 text-purple-700",
  "SAP & ERP": "bg-blue-100 text-blue-700",
  "Connected Car": "bg-indigo-100 text-indigo-700",
  "Cloud Architecture": "bg-cyan-100 text-cyan-700",
  "Manufacturing IT": "bg-emerald-100 text-emerald-700",
};

export default function BlogPostPage({ params }: Props) {
  const post = blogPosts.find((p) => p.slug === params.slug);
  if (!post) notFound();

  const related = blogPosts.filter(
    (p) => p.slug !== post.slug && (p.category === post.category || p.author.name === post.author.name)
  ).slice(0, 2);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.publishedAt,
    dateModified: post.updatedAt,
    author: {
      "@type": "Person",
      name: post.author.name,
      jobTitle: post.author.role,
      worksFor: { "@type": "Organization", name: "Apex Cloud Consulting GmbH" },
    },
    publisher: {
      "@type": "Organization",
      name: "Apex Cloud Consulting GmbH",
      url: "https://apex-cloud-consulting.vercel.app",
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": `https://apex-cloud-consulting.vercel.app/blog/${post.slug}` },
    keywords: post.keywords.join(", "),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      {/* Hero */}
      <section className="bg-gradient-to-br from-gray-900 to-blue-950 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Link href="/blog" className="text-blue-300 hover:text-blue-200 text-sm transition-colors">
              Blog
            </Link>
            <span className="text-blue-700">/</span>
            <span
              className={`px-2.5 py-0.5 rounded-lg text-xs font-semibold ${categoryColors[post.category] ?? "bg-gray-700 text-gray-200"}`}
            >
              {post.category}
            </span>
          </div>
          <div className="max-w-3xl">
            <h1 className="text-3xl sm:text-4xl font-bold mb-6 leading-tight">{post.title}</h1>
            {/* Author + meta */}
            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex items-center gap-3">
                <div
                  className={`w-10 h-10 ${post.author.avatarColor} rounded-full flex items-center justify-center text-white text-sm font-bold`}
                >
                  {post.author.initials}
                </div>
                <div>
                  <p className="font-semibold text-sm">{post.author.name}</p>
                  <p className="text-blue-300 text-xs">{post.author.role}</p>
                </div>
              </div>
              <div className="text-blue-400 text-sm flex items-center gap-3">
                <time dateTime={post.publishedAt}>
                  {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </time>
                <span>·</span>
                <span>{post.readingTime} min read</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TL;DR — GEO */}
      <div className="bg-blue-50 border-l-4 border-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 max-w-3xl">
          <p className="text-xs font-bold text-blue-600 uppercase tracking-wider mb-1">TL;DR</p>
          <p className="text-gray-800 text-sm sm:text-base leading-relaxed">{post.tldr}</p>
        </div>
      </div>

      {/* Article + sidebar */}
      <article className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main content */}
            <div className="lg:col-span-2 prose prose-gray max-w-none">
              {post.sections.map((section, i) => (
                <div key={i} className="mb-12">
                  <h2 className="text-2xl font-bold text-gray-900 mb-5">{section.heading}</h2>

                  {/* Definition box — GEO */}
                  {section.definitionBox && (
                    <div className="bg-amber-50 border border-amber-200 rounded-xl p-5 mb-6">
                      <p className="text-xs font-bold text-amber-700 uppercase tracking-wider mb-1">Definition</p>
                      <p className="font-bold text-gray-900 mb-1">{section.definitionBox.term}</p>
                      <p className="text-gray-700 text-sm leading-relaxed">{section.definitionBox.definition}</p>
                    </div>
                  )}

                  {/* Comparison table — GEO */}
                  {section.comparisonTable && (
                    <div className="mb-6 overflow-x-auto">
                      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">
                        {section.comparisonTable.heading}
                      </p>
                      <table className="w-full text-sm border-collapse rounded-xl overflow-hidden shadow-sm">
                        <thead>
                          <tr className="bg-gray-900 text-white">
                            {section.comparisonTable.columns.map((col) => (
                              <th key={col} className="px-4 py-3 text-left font-semibold text-xs uppercase tracking-wide">
                                {col}
                              </th>
                            ))}
                          </tr>
                        </thead>
                        <tbody>
                          {section.comparisonTable.rows.map((row, ri) => (
                            <tr key={ri} className={ri % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                              <td className="px-4 py-3 font-medium text-gray-900 border-t border-gray-100">
                                {row.feature}
                              </td>
                              <td className="px-4 py-3 text-gray-700 border-t border-gray-100">{row.option1}</td>
                              <td className="px-4 py-3 text-gray-700 border-t border-gray-100">{row.option2}</td>
                              {row.option3 !== undefined && (
                                <td className="px-4 py-3 text-gray-700 border-t border-gray-100">{row.option3}</td>
                              )}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  <div className="text-gray-700 leading-relaxed space-y-4">
                    {section.content.split("\n\n").map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>
                </div>
              ))}

              {/* Freshness marker — GEO */}
              <div className="mt-12 pt-6 border-t border-gray-100 text-sm text-gray-500 flex items-center gap-4 flex-wrap">
                <span>
                  Published:{" "}
                  {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
                <span>·</span>
                <span>
                  Last updated:{" "}
                  {new Date(post.updatedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "long",
                    year: "numeric",
                  })}
                </span>
              </div>
            </div>

            {/* Sidebar */}
            <aside className="space-y-8">
              {/* Author box — E-E-A-T */}
              <div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">About the Author</h3>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-12 h-12 ${post.author.avatarColor} rounded-full flex items-center justify-center text-white font-bold`}
                  >
                    {post.author.initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">{post.author.name}</p>
                    <p className="text-blue-600 text-sm">{post.author.role}</p>
                  </div>
                </div>
                <Link
                  href="/team"
                  className="text-sm text-blue-600 hover:text-blue-800 hover:underline transition-colors"
                >
                  View full profile →
                </Link>
              </div>

              {/* CTA */}
              <div className="bg-blue-600 rounded-2xl p-6 text-white">
                <h3 className="font-bold text-base mb-2">Need Expert Help?</h3>
                <p className="text-blue-100 text-sm mb-4 leading-relaxed">
                  Our consultants work on exactly these challenges every day. Let&apos;s talk about your situation.
                </p>
                <Link
                  href="/contact"
                  className="block text-center px-4 py-3 bg-white text-blue-600 font-semibold rounded-xl hover:bg-blue-50 transition-colors text-sm"
                >
                  Get in Touch
                </Link>
              </div>

              {/* Related posts */}
              {related.length > 0 && (
                <div>
                  <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-4">Related Articles</h3>
                  <div className="space-y-4">
                    {related.map((rp) => (
                      <Link
                        key={rp.slug}
                        href={`/blog/${rp.slug}`}
                        className="block p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
                      >
                        <p className="text-sm font-semibold text-gray-900 leading-snug mb-1">{rp.title}</p>
                        <p className="text-xs text-gray-500">{rp.readingTime} min read</p>
                      </Link>
                    ))}
                  </div>
                </div>
              )}

              {/* Services */}
              <div>
                <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-3">Related Services</h3>
                <div className="space-y-2">
                  <Link href="/services/security-compliance" className="block text-sm text-blue-600 hover:underline">
                    Security &amp; Compliance
                  </Link>
                  <Link href="/services/cloud-migration" className="block text-sm text-blue-600 hover:underline">
                    Cloud Migration
                  </Link>
                  <Link href="/services/connected-car" className="block text-sm text-blue-600 hover:underline">
                    Connected Car Platform
                  </Link>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  );
}
