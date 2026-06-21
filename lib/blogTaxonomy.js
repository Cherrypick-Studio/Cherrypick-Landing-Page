// Blog taxonomy (categories + tags) for programmatic archive pages.
// Server-only: pulls full post tags from lib/blogData.js (heavy) — never import from a client component.
import { blogMeta, getLocaleForPost } from "./blogMeta";
import { blogPosts } from "./blogData";

export function slugify(value) {
  return String(value)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

// One enriched record per post: lightweight meta + locale + tags.
const enrichedPosts = blogMeta.map((meta) => ({
  ...meta,
  locale: getLocaleForPost(meta),
  tags: blogPosts.find((p) => p.slug === meta.slug)?.tags ?? [],
}));

export function getPostsForLocale(locale) {
  return enrichedPosts.filter((p) => p.locale === locale);
}

// ---- Categories ----------------------------------------------------------

export function getCategories(locale) {
  const map = new Map();
  for (const post of getPostsForLocale(locale)) {
    if (!post.category) continue;
    const slug = slugify(post.category);
    const entry = map.get(slug) ?? { name: post.category, slug, count: 0 };
    entry.count += 1;
    map.set(slug, entry);
  }
  return [...map.values()].sort((a, b) => b.count - a.count);
}

export function getCategoryBySlug(slug, locale) {
  return getCategories(locale).find((c) => c.slug === slug) ?? null;
}

export function getPostsByCategory(slug, locale) {
  return getPostsForLocale(locale).filter(
    (p) => p.category && slugify(p.category) === slug
  );
}

// ---- Tags ----------------------------------------------------------------
// Only surface tags shared by 2+ posts so archive pages stay content-rich
// (avoids thin/doorway pages Google penalizes).

const MIN_TAG_POSTS = 2;

export function getTags(locale) {
  const map = new Map();
  for (const post of getPostsForLocale(locale)) {
    for (const tag of post.tags) {
      const slug = slugify(tag);
      if (!slug) continue;
      const entry = map.get(slug) ?? { name: tag, slug, count: 0 };
      entry.count += 1;
      map.set(slug, entry);
    }
  }
  return [...map.values()]
    .filter((t) => t.count >= MIN_TAG_POSTS)
    .sort((a, b) => b.count - a.count);
}

export function getTagBySlug(slug, locale) {
  return getTags(locale).find((t) => t.slug === slug) ?? null;
}

export function getPostsByTag(slug, locale) {
  return getPostsForLocale(locale).filter((p) =>
    p.tags.some((t) => slugify(t) === slug)
  );
}

// ---- generateStaticParams helpers ---------------------------------------

export function getLocalizedCategoryParams() {
  return ["en", "id"].flatMap((locale) =>
    getCategories(locale).map((c) => ({ locale, category: c.slug }))
  );
}

export function getLocalizedTagParams() {
  return ["en", "id"].flatMap((locale) =>
    getTags(locale).map((t) => ({ locale, tag: t.slug }))
  );
}
