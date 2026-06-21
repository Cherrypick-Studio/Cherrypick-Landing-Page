import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  getTagBySlug,
  getPostsByTag,
  getLocalizedTagParams,
} from "@/lib/blogTaxonomy";
import { localeUrl } from "@/lib/seo";
import BlogList from "@/components/organisms/blog/blog-list";

export function generateStaticParams() {
  return getLocalizedTagParams();
}

export async function generateMetadata({ params }) {
  const { locale, tag } = await params;
  const tagData = getTagBySlug(tag, locale);
  if (!tagData) return { title: "Tag | Cherrypick Studio" };

  const url = localeUrl(`/blog/tag/${tag}`, locale);
  const description =
    locale === "id"
      ? `Artikel bertopik "${tagData.name}" dari Cherrypick Studio.`
      : `Articles tagged "${tagData.name}" from Cherrypick Studio.`;

  return {
    title: `${tagData.name} Articles`,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Cherrypick Studio",
      title: `${tagData.name} | Cherrypick Studio`,
      description,
    },
  };
}

export default async function BlogTagPage({ params }) {
  const { locale, tag } = await params;
  setRequestLocale(locale);

  const tagData = getTagBySlug(tag, locale);
  if (!tagData) notFound();

  const posts = getPostsByTag(tag, locale);
  const url = localeUrl(`/blog/tag/${tag}`, locale);

  const collectionJsonLd = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: `${tagData.name} Articles`,
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
      { "@type": "ListItem", position: 3, name: tagData.name, item: url },
    ],
  };

  const description =
    locale === "id"
      ? `Semua artikel dengan topik ${tagData.name}.`
      : `All articles tagged ${tagData.name}.`;

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
        eyebrow={locale === "id" ? "Topik" : "Topic"}
        title={tagData.name}
        description={description}
      />
    </>
  );
}
