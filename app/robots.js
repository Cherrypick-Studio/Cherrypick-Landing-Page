export default function robots() {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/_next/"],
      },
      // Explicitly welcome AI/answer-engine crawlers for GEO visibility.
      {
        userAgent: [
          "GPTBot",
          "OAI-SearchBot",
          "ChatGPT-User",
          "ClaudeBot",
          "Claude-Web",
          "anthropic-ai",
          "PerplexityBot",
          "Perplexity-User",
          "Google-Extended",
          "CCBot",
          "Applebot-Extended",
        ],
        allow: "/",
      },
    ],
    sitemap: "https://cherrypick.studio/sitemap.xml",
    host: "https://cherrypick.studio",
  };
}
