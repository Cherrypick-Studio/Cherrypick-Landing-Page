import { getBlogMeta as getBlogPost, getLocalizedSlugParams } from "@/lib/blogMeta";
import { localeUrl } from "@/lib/seo";

export function generateStaticParams() {
  return getLocalizedSlugParams();
}

export async function generateMetadata({ params }) {
  const { slug, locale } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article Not Found | Cherrypick Studio" };
  }

  const url = localeUrl(`/blog/${slug}`, locale);

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    authors: [{ name: post.author, url: "https://cherrypick.studio" }],
    alternates: {
      // Articles aren't 1:1 translations, so each post is self-canonical (x-default to itself).
      canonical: url,
    },
    openGraph: {
      type: "article",
      url,
      siteName: "Cherrypick Studio",
      title: post.metaTitle,
      description: post.metaDescription,
      publishedTime: post.publishedAt,
      modifiedTime: post.updatedAt,
      authors: [post.author],
      images: [
        {
          url: post.coverImage,
          width: 1200,
          height: 630,
          alt: post.coverImageAlt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: post.metaTitle,
      description: post.metaDescription,
      images: [post.coverImage],
    },
  };
}

export default async function BlogArticleLayout({ children, params }) {
  const { slug, locale } = await params;
  const post = getBlogPost(slug);
  const postUrl = localeUrl(`/blog/${slug}`, locale);
  const blogUrl = localeUrl("/blog", locale);
  const homeUrl = localeUrl("/", locale);

  const articleJsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: `${postUrl}/opengraph-image`,
        inLanguage: locale,
        datePublished: post.publishedAt,
        dateModified: post.updatedAt,
        author: {
          "@type": "Organization",
          name: post.author,
          url: "https://cherrypick.studio",
        },
        publisher: {
          "@type": "Organization",
          name: "Cherrypick Studio",
          logo: {
            "@type": "ImageObject",
            url: "https://cherrypick.studio/images/logo-new.svg",
          },
        },
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": postUrl,
        },
      }
    : null;

  const breadcrumbJsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: homeUrl,
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: blogUrl,
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: postUrl,
          },
        ],
      }
    : null;

  return (
    <>
      {articleJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
        />
      )}
      {breadcrumbJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
        />
      )}
      {children}
    </>
  );
}
