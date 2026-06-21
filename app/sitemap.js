import { blogMeta, getLocaleForPost } from "@/lib/blogMeta";
import portfolios from "@/lib/dataPortfolio.json";
import { localeUrl, LOCALES } from "@/lib/seo";
import { serviceLocationPages, solutionPages } from "@/lib/seoPages";
import { getCategories, getTags } from "@/lib/blogTaxonomy";

// Shared pages exist in every locale (en at root, id under /id) with reciprocal hreflang.
const SHARED_PAGES = [
  { path: "/", changeFrequency: "monthly", priority: 1 },
  { path: "/service", changeFrequency: "monthly", priority: 0.9 },
  { path: "/portfolio", changeFrequency: "weekly", priority: 0.9 },
  { path: "/about-us", changeFrequency: "yearly", priority: 0.7 },
  { path: "/contact", changeFrequency: "yearly", priority: 0.8 },
  { path: "/blog", changeFrequency: "weekly", priority: 0.8 },
];

function hreflangFor(path) {
  return {
    languages: {
      en: localeUrl(path, "en"),
      id: localeUrl(path, "id"),
      "x-default": localeUrl(path, "en"),
    },
  };
}

export default function sitemap() {
  const sharedEntries = SHARED_PAGES.flatMap(({ path, changeFrequency, priority }) =>
    LOCALES.map((locale) => ({
      url: localeUrl(path, locale),
      changeFrequency,
      priority,
      alternates: hreflangFor(path),
    }))
  );

  // Case studies are shared content — present in both locales.
  const portfolioEntries = portfolios.flatMap((p) => {
    const path = `/portfolio/${p.name_company}`;
    return LOCALES.map((locale) => ({
      url: localeUrl(path, locale),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: hreflangFor(path),
    }));
  });

  // Articles are single-language (not 1:1 translations) — each lives only in its own locale.
  const blogEntries = blogMeta.map((post) => {
    const locale = getLocaleForPost(post);
    return {
      url: localeUrl(`/blog/${post.slug}`, locale),
      lastModified: post.updatedAt || post.publishedAt,
      changeFrequency: "monthly",
      priority: 0.7,
    };
  });

  // Service × location pages — single locale each, self-canonical.
  const serviceLocationEntries = serviceLocationPages.map((p) => ({
    url: localeUrl(`/services/${p.slug}`, p.locale),
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  // Solution pages — bilingual equivalents with reciprocal hreflang.
  const solutionEntries = solutionPages.flatMap((p) => {
    const path = `/solutions/${p.slug}`;
    return LOCALES.map((locale) => ({
      url: localeUrl(path, locale),
      changeFrequency: "monthly",
      priority: 0.8,
      alternates: hreflangFor(path),
    }));
  });

  // Blog category & tag archives — per-locale, self-canonical.
  const archiveEntries = LOCALES.flatMap((locale) => [
    ...getCategories(locale).map((c) => ({
      url: localeUrl(`/blog/category/${c.slug}`, locale),
      changeFrequency: "weekly",
      priority: 0.6,
    })),
    ...getTags(locale).map((t) => ({
      url: localeUrl(`/blog/tag/${t.slug}`, locale),
      changeFrequency: "weekly",
      priority: 0.5,
    })),
  ]);

  return [
    ...sharedEntries,
    ...portfolioEntries,
    ...blogEntries,
    ...serviceLocationEntries,
    ...solutionEntries,
    ...archiveEntries,
  ];
}
