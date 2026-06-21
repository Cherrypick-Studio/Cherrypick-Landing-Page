import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import { getSolutionPage, getSolutionParams } from "@/lib/seoPages";
import { localizedAlternates, localeUrl } from "@/lib/seo";
import ProgrammaticPage from "@/components/organisms/seo/programmatic-page";

export function generateStaticParams() {
  return getSolutionParams();
}

function pick(field, locale) {
  return field?.[locale] ?? field?.en;
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const page = getSolutionPage(slug);
  if (!page) return { title: "Solutions | Cherrypick Studio" };

  const h1 = pick(page.h1, locale);
  const description = pick(page.intro, locale);
  const url = localeUrl(`/solutions/${slug}`, locale);

  return {
    title: h1,
    description,
    // Solutions are genuine bilingual equivalents → reciprocal hreflang.
    alternates: localizedAlternates(`/solutions/${slug}`, locale),
    openGraph: {
      type: "website",
      url,
      siteName: "Cherrypick Studio",
      title: `${h1} | Cherrypick Studio`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${h1} | Cherrypick Studio`,
      description,
    },
  };
}

export default async function SolutionPage({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const page = getSolutionPage(slug);
  if (!page) notFound();

  const h1 = pick(page.h1, locale);
  const intro = pick(page.intro, locale);
  const faqs = pick(page.faqs, locale) ?? [];
  const url = localeUrl(`/solutions/${slug}`, locale);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: h1,
    description: intro,
    provider: {
      "@type": "Organization",
      name: "Cherrypick Studio",
      url: "https://cherrypick.studio",
    },
    url,
  };

  const faqJsonLd =
    faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }
      : null;

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: localeUrl("/", locale) },
      { "@type": "ListItem", position: 2, name: "Services", item: localeUrl("/service", locale) },
      { "@type": "ListItem", position: 3, name: h1, item: url },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {faqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
        />
      )}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <ProgrammaticPage
        locale={locale}
        eyebrow={pick(page.eyebrow, locale)}
        h1={h1}
        subtitle={pick(page.subtitle, locale)}
        intro={intro}
        scope={pick(page.scope, locale)}
        faqs={faqs}
        relatedPortfolio={page.relatedPortfolio}
      />
    </>
  );
}
