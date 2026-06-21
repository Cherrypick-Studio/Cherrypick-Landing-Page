import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import {
  getServiceLocationPage,
  getServiceLocationParams,
} from "@/lib/seoPages";
import { localeUrl } from "@/lib/seo";
import ProgrammaticPage from "@/components/organisms/seo/programmatic-page";

export function generateStaticParams() {
  return getServiceLocationParams();
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const page = getServiceLocationPage(slug, locale);
  if (!page) return { title: "Services | Cherrypick Studio" };

  const url = localeUrl(`/services/${slug}`, locale);
  const description = page.intro;

  return {
    title: page.h1,
    description,
    // Service×location pages exist in a single locale — self-canonical.
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      siteName: "Cherrypick Studio",
      title: `${page.h1} | Cherrypick Studio`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${page.h1} | Cherrypick Studio`,
      description,
    },
  };
}

export default async function ServiceLocationPage({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  const page = getServiceLocationPage(slug, locale);
  if (!page) notFound();

  const url = localeUrl(`/services/${slug}`, locale);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: page.h1,
    serviceType: page.service,
    description: page.intro,
    areaServed: { "@type": "Place", name: page.location },
    provider: {
      "@type": "Organization",
      name: "Cherrypick Studio",
      url: "https://cherrypick.studio",
    },
    url,
  };

  const faqJsonLd =
    page.faqs.length > 0
      ? {
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: page.faqs.map((f) => ({
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
      { "@type": "ListItem", position: 3, name: page.h1, item: url },
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
        eyebrow={page.eyebrow}
        h1={page.h1}
        subtitle={page.subtitle}
        intro={page.intro}
        sections={page.sections}
        scope={page.scope}
        faqs={page.faqs}
        relatedPortfolio={page.relatedPortfolio}
      />
    </>
  );
}
