import { getBlogMeta as getBlogPost, getAllSlugs } from "@/lib/blogMeta";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const post = getBlogPost(slug);

  if (!post) {
    return { title: "Article Not Found | Cherrypick Studio" };
  }

  const url = `https://cherrypick.studio/blog/${slug}`;

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    keywords: [post.primaryKeyword, ...post.secondaryKeywords],
    authors: [{ name: post.author, url: "https://cherrypick.studio" }],
    alternates: {
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

export default function BlogArticleLayout({ children, params }) {
  const { slug } = params;
  const post = getBlogPost(slug);

  const articleJsonLd = post
    ? {
        "@context": "https://schema.org",
        "@type": "Article",
        headline: post.title,
        description: post.metaDescription,
        image: `https://cherrypick.studio${post.coverImage}`,
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
          "@id": `https://cherrypick.studio/blog/${slug}`,
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
            item: "https://cherrypick.studio",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://cherrypick.studio/blog",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://cherrypick.studio/blog/${slug}`,
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
