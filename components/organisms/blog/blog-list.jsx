"use client";
import { Link } from "@/i18n/navigation";
import Image from "next/image";

const categoryColors = {
  "Web Development": "bg-blue-100 text-blue-700",
  "UI/UX": "bg-purple-100 text-purple-700",
  "Mobile": "bg-green-100 text-green-700",
  "Branding": "bg-orange-100 text-orange-700",
  "Digital Transformation": "bg-red-100 text-red-700",
  "Design Process": "bg-pink-100 text-pink-700",
  "AI & SaaS": "bg-indigo-100 text-indigo-700",
  "AI & Development": "bg-violet-100 text-violet-700",
  "SaaS Founders": "bg-cyan-100 text-cyan-700",
};

const marketLabels = {
  ID: { label: "🇮🇩 Indonesia", className: "bg-red-100 text-red-700" },
  EU: { label: "🇪🇺 Europe", className: "bg-blue-100 text-blue-700" },
  Global: { label: "🌍 Global", className: "bg-teal-100 text-teal-700" },
};

function BlogCard({ post, index }) {
  const market = marketLabels[post.targetMarket] ?? marketLabels.Global;
  const categoryColor =
    categoryColors[post.category] ?? "bg-gray-100 text-gray-600";

  return (
    <article
      className="group bg-white rounded-2xl overflow-hidden border border-[#EBEBEB] hover:border-red-cherry-500 transition-all duration-300 hover:shadow-lg flex flex-col"
      style={{ animationDelay: `${index * 80}ms` }}
    >
      <Link href={`/blog/${post.slug}`} className="flex flex-col h-full">
        <div className="relative w-full aspect-[1200/630] bg-[#F5F5F5] overflow-hidden">
          <Image
            src={post.coverImage}
            alt={post.coverImageAlt}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
            unoptimized
          />
        </div>
        <div className="flex flex-col flex-1 p-6 gap-3">
          <div className="flex flex-wrap gap-2">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${categoryColor}`}
            >
              {post.category}
            </span>
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded-full ${market.className}`}
            >
              {market.label}
            </span>
          </div>
          <h2 className="text-base font-semibold text-gray-900 leading-snug group-hover:text-red-cherry-500 transition-colors duration-200 line-clamp-3">
            {post.title}
          </h2>
          <p className="text-sm text-gray-500 line-clamp-2 flex-1">
            {post.metaDescription}
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-[#F0F0F0]">
            <time
              dateTime={post.publishedAt}
              className="text-xs text-gray-400"
            >
              {new Date(post.publishedAt).toLocaleDateString("en-GB", {
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </time>
          </div>
        </div>
      </Link>
    </article>
  );
}

export default function BlogList({
  posts = [],
  title = "Blog",
  description = "Insights on web development, design, and digital strategy from the Cherrypick Studio team.",
  eyebrow,
  categories = [],
  emptyLabel = "No articles yet — check back soon.",
}) {
  return (
    <section className="container mx-auto px-6 lg:px-20 py-16">
      <div className="mb-12">
        {eyebrow ? (
          <p className="text-sm font-semibold uppercase tracking-wide text-red-cherry-500 mb-3">
            {eyebrow}
          </p>
        ) : null}
        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
          {title}
        </h1>
        <p className="text-lg text-gray-500 max-w-2xl">{description}</p>
        {categories.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            {categories.map((c) => (
              <Link
                key={c.slug}
                href={`/blog/category/${c.slug}`}
                className="rounded-full border border-[#EBEBEB] px-3 py-1 text-sm text-gray-600 transition-colors hover:border-red-cherry-500 hover:text-red-cherry-500"
              >
                {c.name}
              </Link>
            ))}
          </div>
        ) : null}
      </div>
      {posts.length === 0 ? (
        <p className="text-gray-500">{emptyLabel}</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <BlogCard key={post.slug} post={post} index={index} />
          ))}
        </div>
      )}
    </section>
  );
}
