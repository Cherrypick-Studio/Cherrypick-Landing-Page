import { blogMeta, getLocaleForPost } from "@/lib/blogMeta";
import portfolios from "@/lib/dataPortfolio.json";
import { serviceLocationPages, solutionPages } from "@/lib/seoPages";
import { localeUrl, SITE_URL } from "@/lib/seo";

// Serves /llms.txt — the emerging standard that helps AI crawlers/answer engines
// understand the site. Generated dynamically so it never drifts from real content.
export const dynamic = "force-static";

function line(title, url, desc) {
  return desc ? `- [${title}](${url}): ${desc}` : `- [${title}](${url})`;
}

export function GET() {
  const enPosts = blogMeta.filter((p) => getLocaleForPost(p) === "en");
  const idPosts = blogMeta.filter((p) => getLocaleForPost(p) === "id");

  const body = `# Cherrypick Studio

> Cherrypick Studio is a digital product agency based in Malang, Indonesia. We design and build high-quality web applications, mobile apps, and UI/UX for clients in Indonesia and across Europe (the Netherlands, the UK, and the Nordics).

## About
- Digital product agency: web development, mobile app development, UI/UX design, brand identity.
- Works in English and Bahasa Indonesia; working hours overlap Central European Time.
- Stack: Next.js, React, React Native, Node.js, Laravel, PostgreSQL, MongoDB.
- Value proposition for Europe: senior, English-fluent delivery at competitive offshore rates.

## Key pages
${line("Home", SITE_URL)}
${line("Services", `${SITE_URL}/service`)}
${line("Portfolio", `${SITE_URL}/portfolio`)}
${line("About", `${SITE_URL}/about-us`)}
${line("Contact", `${SITE_URL}/contact`)}
${line("Blog", `${SITE_URL}/blog`)}

## Services & locations
${serviceLocationPages
  .map((p) => line(p.h1, localeUrl(`/services/${p.slug}`, p.locale), p.location))
  .join("\n")}

## Solutions
${solutionPages
  .map((p) => line(p.h1.en, localeUrl(`/solutions/${p.slug}`, "en")))
  .join("\n")}

## Case studies
${portfolios
  .map((p) =>
    line(
      p.name,
      `${SITE_URL}/portfolio/${p.name_company}`,
      `${p.industry}${p.country ? ` — ${p.country}` : ""}`
    )
  )
  .join("\n")}

## Blog — English
${enPosts
  .map((p) => line(p.title, localeUrl(`/blog/${p.slug}`, "en"), p.metaDescription))
  .join("\n")}

## Blog — Bahasa Indonesia
${idPosts
  .map((p) => line(p.title, localeUrl(`/blog/${p.slug}`, "id"), p.metaDescription))
  .join("\n")}

## Contact
- Website: ${SITE_URL}/contact
- Based in Malang, Indonesia. Serving Indonesia and Europe.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, must-revalidate",
    },
  });
}
