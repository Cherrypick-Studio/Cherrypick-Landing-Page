import portfolios from "@/lib/dataPortfolio.json";

export async function generateMetadata({ params }) {
  const { name } = await params;

  const portfolioData = portfolios.find((p) => p.name_company === name);

  if (!portfolioData) {
    return { title: "Portfolio | Cherrypick Studio" };
  }

  const description = Array.isArray(portfolioData.description)
    ? portfolioData.description[0]
    : portfolioData.description;

  const title = `${portfolioData.name} Case Study`;
  const url = `https://cherrypick.studio/portfolio/${name}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      url,
      siteName: "Cherrypick Studio",
      title: `${title} | Cherrypick Studio`,
      description,
      images: [
        {
          url: "/opengraph-image.svg",
          width: 1200,
          height: 630,
          alt: `${portfolioData.name} project by Cherrypick Studio`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | Cherrypick Studio`,
      description,
      images: ["/twitter-image.svg"],
    },
  };
}

export default async function Layout({ children, params }) {
  const { name } = await params;
  const portfolioData = portfolios.find((p) => p.name_company === name);

  const breadcrumbJsonLd = {
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
        name: "Portfolio",
        item: "https://cherrypick.studio/portfolio",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: portfolioData?.name ?? name,
        item: `https://cherrypick.studio/portfolio/${name}`,
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
