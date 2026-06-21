import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  getCategoryBySlug,
  getPostsByCategory,
  getLocalizedCategoryParams,
} from "@/lib/blogTaxonomy";
import { localeUrl } from "@/lib/seo";
import BlogList from "@/components/organisms/blog/blog-list";

export function generateStaticParams() {
  return getLocalizedCategoryParams();
}

export async function generateMetadata({ params }) {
  const { locale, category } = await params;
  const cat = getCategoryBySlug(category, locale);
  if (!cat) return { title: "Category | Cherrypick Studio" };

  const url = localeUrl(`/blog/category/${category}`, locale);
  const description =
    locale === "id"
      ? `Artikel ${cat.name} dari Cherrypick Studio — wawasan, panduan, dan studi kasus seputar ${cat.name.toLowerCase()}.`
      : `${cat.name} articles from Cherrypick Studio — insights, guides, and case studies on ${cat.name.toLowerCase()}.`;

  return {
    title: `${cat.name} Articles`,
    description,
    // Archives aren't 1:1 translations across locales — keep them self-canonical.
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Cherrypick Studio",
      title: `${cat.name} Articles | Cherrypick Studio`,
      description,
    },
  };
}

export default async function BlogCategoryPage({ params }) {
  const { locale, category } = await params;
  setRequestLocale(locale);

  const cat = getCategoryBySlug(category, locale);
  if (!cat) notFound();

  const posts = getPostsByCategory(category, locale);
  const url = localeUrl(`/blog/category/${category}`, locale);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${cat.name} Articles`,
    url,
    inLanguage: locale,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: posts.map((post, i) => ({
        "@type": "ListItem",
        position: i + 1,
        url: localeUrl(`/blog/${post.slug}`, locale),
        name: post.title,
      })),
    },
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: localeUrl("/", locale) },
      { "@type": "ListItem", position: 2, name: "Blog", item: localeUrl("/blog", locale) },
      { "@type": "ListItem", position: 3, name: cat.name, item: url },
    ],
  };

  const description =
    locale === "id"
      ? `Semua artikel dalam kategori ${cat.name}.`
      : `All articles in the ${cat.name} category.`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <BlogList
        posts={posts}
        eyebrow={locale === "id" ? "Kategori" : "Category"}
        title={cat.name}
        description={description}
      />
    </>
  );
}
