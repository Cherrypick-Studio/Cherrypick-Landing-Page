import { blogPosts } from "@/lib/blogData";

export default function sitemap() {
  const blogUrls = blogPosts.map((post) => ({
    url: `https://cherrypick.studio/blog/${post.slug}`,
    lastModified: post.updatedAt,
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    {
      url: "https://cherrypick.studio",
      lastModified: "2025-03-14",
      changeFrequency: "monthly",
      priority: 1,
    },
    {
      url: "https://cherrypick.studio/portfolio",
      lastModified: "2025-03-01",
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: "https://cherrypick.studio/portfolio/komerce",
      lastModified: "2025-02-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cherrypick.studio/portfolio/termo-beton",
      lastModified: "2025-02-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cherrypick.studio/portfolio/harwi",
      lastModified: "2025-02-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cherrypick.studio/portfolio/kyoo",
      lastModified: "2025-02-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cherrypick.studio/portfolio/gamemarket",
      lastModified: "2025-02-10",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cherrypick.studio/service",
      lastModified: "2025-03-01",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: "https://cherrypick.studio/contact",
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://cherrypick.studio/about-us",
      lastModified: "2025-01-01",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      url: "https://cherrypick.studio/blog",
      lastModified: "2025-03-14",
      changeFrequency: "weekly",
      priority: 0.8,
    },
    ...blogUrls,
  ];
}
