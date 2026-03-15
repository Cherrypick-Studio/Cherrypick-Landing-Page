export default function sitemap() {
  const blogSlugs = [
    "jasa-pembuatan-website-malang","web-development-agency-singapore",
    "ui-ux-design-process-explained","perbedaan-web-app-dan-mobile-app",
    "what-is-brand-identity-and-why-it-matters","transformasi-digital-umkm-indonesia",
    "saas-dashboard-design-best-practices","cara-memilih-tech-stack-untuk-startup",
    "e-commerce-platform-development-indonesia","how-to-brief-a-design-agency",
    "ai-tools-for-saas-founders","vibe-coding-what-it-means-for-software-development",
    "how-to-validate-your-saas-idea-before-building","building-saas-product-with-ai-in-2025",
    "saas-pricing-strategy-for-founders"
  ];
  const blogUrls = blogSlugs.map((slug) => ({
    url: `https://cherrypick.studio/blog/${slug}`,
    lastModified: "2025-03-15",
    changeFrequency: "monthly",
    priority: 0.7,
  }));
  return [
    { url: "https://cherrypick.studio", lastModified: "2025-03-14", changeFrequency: "monthly", priority: 1 },
    { url: "https://cherrypick.studio/portfolio", lastModified: "2025-03-01", changeFrequency: "weekly", priority: 0.9 },
    { url: "https://cherrypick.studio/portfolio/komerce", lastModified: "2025-02-10", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://cherrypick.studio/portfolio/termo-beton", lastModified: "2025-02-10", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://cherrypick.studio/portfolio/harwi", lastModified: "2025-02-10", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://cherrypick.studio/portfolio/kyoo", lastModified: "2025-02-10", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://cherrypick.studio/portfolio/gamemarket", lastModified: "2025-02-10", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://cherrypick.studio/service", lastModified: "2025-03-01", changeFrequency: "monthly", priority: 0.9 },
    { url: "https://cherrypick.studio/contact", lastModified: "2025-01-01", changeFrequency: "yearly", priority: 0.8 },
    { url: "https://cherrypick.studio/about-us", lastModified: "2025-01-01", changeFrequency: "yearly", priority: 0.8 },
    { url: "https://cherrypick.studio/blog", lastModified: "2025-03-14", changeFrequency: "weekly", priority: 0.8 },
    ...blogUrls,
  ];
}
