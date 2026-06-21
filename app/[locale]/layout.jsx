import { Rubik } from "next/font/google";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import { GoogleAnalytics } from "@next/third-parties/google";
import { routing } from "@/i18n/routing";
import { localizedAlternates } from "@/lib/seo";
import "../globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export const viewport = {
  themeColor: "#C42026",
};

const META = {
  en: {
    title: "Cherrypick Studio — Web & Mobile App Development Agency",
    description:
      "Cherrypick Studio is a digital product agency based in Malang, Indonesia. We build high-quality web apps, mobile apps, and UI/UX design systems to help businesses grow through technology.",
    ogLocale: "en_US",
  },
  id: {
    title: "Cherrypick Studio — Agensi Pengembangan Web & Aplikasi Mobile",
    description:
      "Cherrypick Studio adalah digital product agency berbasis di Malang, Indonesia. Kami membangun web app, mobile app, dan design system berkualitas tinggi untuk membantu bisnis berkembang melalui teknologi.",
    ogLocale: "id_ID",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const meta = META[locale] ?? META.en;

  return {
    metadataBase: new URL("https://cherrypick.studio"),
    title: {
      default: meta.title,
      template: "%s | Cherrypick Studio",
    },
    description: meta.description,
    keywords: [
      "web development",
      "mobile app development",
      "UI/UX design",
      "brand identity",
      "Next.js agency",
      "React developer",
      "digital product agency",
      "Malang",
      "Indonesia",
      "software development agency",
      "jasa pembuatan website",
      "jasa pengembangan aplikasi mobile",
      "desain UI UX Indonesia",
      "agensi digital Malang",
      "web development agency Netherlands",
      "web development agency UK",
      "offshore web development Europe",
      "hire web developers Europe",
      "Nordic software development agency",
    ],
    authors: [{ name: "Cherrypick Studio", url: "https://cherrypick.studio" }],
    manifest: "/manifest.webmanifest",
    alternates: localizedAlternates("/", locale),
    openGraph: {
      type: "website",
      url: locale === "id" ? "https://cherrypick.studio/id" : "https://cherrypick.studio",
      siteName: "Cherrypick Studio",
      title: meta.title,
      description: meta.description,
      locale: meta.ogLocale,
    },
    twitter: {
      card: "summary_large_image",
      site: "@cherrypickstudio",
      title: meta.title,
      description: meta.description,
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
    // TODO: replace with the real token from Google Search Console (Settings → Ownership verification → HTML tag)
    verification: {
      google: "REPLACE_WITH_GOOGLE_SEARCH_CONSOLE_TOKEN",
    },
  };
}

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Cherrypick Studio",
  url: "https://cherrypick.studio",
  logo: "https://cherrypick.studio/images/logo-new.svg",
  description:
    "Cherrypick Studio is a digital product agency based in Malang, Indonesia specializing in web development, mobile app development, and UI/UX design.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Malang",
    addressRegion: "East Java",
    addressCountry: "ID",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://cherrypick.studio/contact",
  },
  sameAs: [
    "https://www.instagram.com/cherrypick.studio",
    "https://dribbble.com/cherrypickstudio",
    "https://www.behance.net/cherrypickstudio",
    "https://www.linkedin.com/company/cherrypickstudio",
    "https://ui8.net/cherrypick-studio/products",
    "https://cherrypickstudio.gumroad.com",
  ],
};

const websiteJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Cherrypick Studio",
  url: "https://cherrypick.studio",
  potentialAction: {
    "@type": "SearchAction",
    target: {
      "@type": "EntryPoint",
      urlTemplate: "https://cherrypick.studio/portfolio?q={search_term_string}",
    },
    "query-input": "required name=search_term_string",
  },
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Cherrypick Studio",
  url: "https://cherrypick.studio",
  logo: "https://cherrypick.studio/images/logo-new.svg",
  image: "https://cherrypick.studio/opengraph-image",
  description:
    "Cherrypick Studio is a digital product agency based in Malang, Indonesia specializing in web development, mobile app development, UI/UX design, and brand identity.",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Malang",
    addressLocality: "Malang",
    addressRegion: "East Java",
    addressCountry: "ID",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: -7.9797,
    longitude: 112.6304,
  },
  areaServed: [
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Sweden" },
    { "@type": "Country", name: "Denmark" },
    { "@type": "Place", name: "Europe" },
  ],
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
      opens: "09:00",
      closes: "18:00",
    },
  ],
  priceRange: "$$",
  currenciesAccepted: "IDR, EUR, GBP",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://cherrypick.studio/contact",
  },
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale} style={{ scrollBehavior: "smooth" }}>
      <body className={rubik.className}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />

        <NextIntlClientProvider>
          <Header />
          <main>{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
      <GoogleAnalytics gaId="G-5N9MC1DSC3" />
    </html>
  );
}
