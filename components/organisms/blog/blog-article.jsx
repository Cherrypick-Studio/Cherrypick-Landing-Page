import Image from "next/image";
import { Link } from "@/i18n/navigation";
import { ArrowLeft } from "lucide-react";

const INTERNAL_LINK_LABELS = {
  "/portfolio": "View our portfolio",
  "/service": "Explore our services",
  "/contact": "Get in touch",
  "/about-us": "About Cherrypick Studio",
  "/blog": "Read more articles",
};

function linkLabel(href) {
  return (
    INTERNAL_LINK_LABELS[href] ||
    href.replace(/^\//, "").replace(/-/g, " ") ||
    "Learn more"
  );
}

export default function BlogArticle({ post }) {
  if (!post) return null;

  // Posts are single-language; Indonesian-market posts get Indonesian UI labels.
  const isId = post.targetMarket === "ID";
  const summary = post.summary || post.metaDescription;

  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-gray-400 mb-8">
        <Link href="/" className="hover:text-red-cherry-500 transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link href="/blog" className="hover:text-red-cherry-500 transition-colors">
          Blog
        </Link>
        <span>/</span>
        <span className="text-gray-600 line-clamp-1">{post.title}</span>
      </nav>

      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <header className="mb-10">
          <div className="flex flex-wrap gap-2 mb-4">
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-red-50 text-red-cherry-500 border border-red-100">
              {post.category}
            </span>
            <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-gray-100 text-gray-600">
              {post.readingTime} min read
            </span>
          </div>
          <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight mb-6">
            {post.title}
          </h1>
          <div className="flex items-center gap-4 text-sm text-gray-400">
            <span>By {post.author}</span>
            <span>·</span>
            <time dateTime={post.publishedAt}>
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </time>
            {post.updatedAt !== post.publishedAt && (
              <>
                <span>·</span>
                <span>
                  Updated{" "}
                  {new Date(post.updatedAt).toLocaleDateString("en-GB", {
                    day: "numeric",
                    month: "short",
                    year: "numeric",
                  })}
                </span>
              </>
            )}
          </div>
        </header>

        {/* Cover Image */}
        <div className="relative w-full aspect-[1200/630] rounded-2xl overflow-hidden bg-[#F5F5F5] mb-12">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover"
            priority
            unoptimized
          />
        </div>

        {/* TL;DR — an AI-citable summary near the top of the article */}
        {summary ? (
          <aside className="mb-12 rounded-2xl border border-red-100 bg-red-50/50 p-6">
            <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-red-cherry-500">
              {isId ? "Ringkasan" : "TL;DR"}
            </p>
            <p className="text-gray-700 leading-relaxed">{summary}</p>
          </aside>
        ) : null}

        {/* Article body */}
        <article className="prose prose-gray max-w-none">
          {post.sections.map((section) => (
            <section key={section.id} id={section.id} className="mb-10">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">
                {section.heading}
              </h2>
              {section.content.split("\n\n").map((paragraph, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-4 text-base"
                >
                  {paragraph}
                </p>
              ))}
            </section>
          ))}
        </article>

        {/* Tags */}
        {post.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mt-10 pt-8 border-t border-[#EBEBEB]">
            {post.tags.map((tag) => (
              <Link
                key={tag}
                href={`/blog/tag/${encodeURIComponent(
                  tag.toLowerCase().replace(/\s+/g, "-")
                )}`}
                className="text-xs px-3 py-1.5 rounded-full bg-gray-100 text-gray-600 hover:bg-red-50 hover:text-red-cherry-500 transition-colors"
              >
                #{tag}
              </Link>
            ))}
          </div>
        )}

        {/* Related Portfolio */}
        {post.relatedPortfolio.length > 0 && (
          <div className="mt-10 p-6 bg-[#FAFAFA] rounded-2xl border border-[#EBEBEB]">
            <p className="text-sm font-semibold text-gray-700 mb-3">
              Related work from our portfolio
            </p>
            <div className="flex flex-wrap gap-3">
              {post.relatedPortfolio.map((name) => (
                <Link
                  key={name}
                  href={`/portfolio/${name}`}
                  className="text-sm font-medium text-red-cherry-500 hover:underline capitalize"
                >
                  {name.replace(/-/g, " ")} →
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* Internal links — keep crawlers moving through the site */}
        {post.internalLinks?.length > 0 && (
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm">
            {post.internalLinks.map((href) => (
              <Link
                key={href}
                href={href}
                className="font-medium text-gray-500 hover:text-red-cherry-500 transition-colors"
              >
                {linkLabel(href)} →
              </Link>
            ))}
          </div>
        )}

        {/* CTA */}
        <div className="mt-12 p-8 bg-red-cherry-500 rounded-2xl text-center">
          <p className="text-white text-xl font-bold mb-2">
            Ready to start your project?
          </p>
          <p className="text-red-100 text-sm mb-5">
            Let&apos;s discuss how Cherrypick Studio can help your business grow
            through technology.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-white text-red-cherry-500 font-semibold text-sm px-6 py-3 rounded-full hover:bg-red-50 transition-colors"
          >
            Get in touch →
          </Link>
        </div>

        {/* Back to blog */}
        <div className="mt-10">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-red-cherry-500 transition-colors"
          >
            <ArrowLeft size={16} />
            Back to Blog
          </Link>
        </div>
      </div>
    </div>
  );
}
