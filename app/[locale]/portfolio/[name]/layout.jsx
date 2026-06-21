import portfolios from "@/lib/dataPortfolio.json";
import { routing } from "@/i18n/routing";
import { localizedAlternates, localeUrl } from "@/lib/seo";

export function generateStaticParams() {
  // Case studies are shared content — generate them under every locale.
  return routing.locales.flatMap((locale) =>
    portfolios.map((p) => ({ locale, name: p.name_company }))
  );
}

export async function generateMetadata({ params }) {
  const { name, locale } = await params;

  const portfolioData = portfolios.find((p) => p.name_company === name);

  if (!portfolioData) {
    return { title: "Portfolio | Cherrypick Studio" };
  }

  const description = Array.isArray(portfolioData.description)
    ? portfolioData.description[0]
    : portfolioData.description;

  const title = `${portfolioData.name} Case Study`;
  const url = localeUrl(`/portfolio/${name}`, locale);

  return {
    title,
    description,
    alternates: localizedAlternates(`/portfolio/${name}`, locale),
    openGraph: {
      type: "website",
      url,
      siteName: "Cherrypick Studio",
      title: `${title} | Cherrypick Studio`,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Cherrypick Studio`,
      description,
    },
  };
}

export default async function Layout({ children, params }) {
  const { name, locale } = await params;
  const portfolioData = portfolios.find((p) => p.name_company === name);

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: localeUrl("/", locale),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: "Portfolio",
        item: localeUrl("/portfolio", locale),
      },
      {
        "@type": "ListItem",
        position: 3,
        name: portfolioData?.name ?? name,
        item: localeUrl(`/portfolio/${name}`, locale),
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {children}
    </>
  );
}
