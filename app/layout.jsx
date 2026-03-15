import { Rubik } from "next/font/google";
import Header from "@/components/molecules/header";
import Footer from "@/components/molecules/footer";
import Script from "next/script";
import "./globals.css";

const rubik = Rubik({ subsets: ["latin"] });

export const viewport = {
  themeColor: "#C42026",
};

export const metadata = {
  metadataBase: new URL("https://cherrypick.studio"),
  title: {
    default: "Cherrypick Studio — Web & Mobile App Development Agency",
    template: "%s | Cherrypick Studio",
  },
  description:
    "Cherrypick Studio is a digital product agency based in Malang, Indonesia. We build high-quality web apps, mobile apps, and UI/UX design systems to help businesses grow through technology.",
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
    "web design agency Singapore",
    "jasa web development Indonesia",
    "aplikasi mobile Indonesia",
    "startup digital Indonesia",
    "web developer Indonesia",
    "digital agency Southeast Asia",
  ],
  authors: [{ name: "Cherrypick Studio", url: "https://cherrypick.studio" }],
  manifest: "/manifest.json",
  alternates: {
    canonical: "https://cherrypick.studio",
    languages: {
      "en": "https://cherrypick.studio",
      "id": "https://cherrypick.studio",
      "en-SG": "https://cherrypick.studio",
      "x-default": "https://cherrypick.studio",
    },
  },
  openGraph: {
    type: "website",
    url: "https://cherrypick.studio",
    siteName: "Cherrypick Studio",
    title: "Cherrypick Studio — Web & Mobile App Development Agency",
    description:
      "Cherrypick Studio is a digital product agency based in Malang, Indonesia. We build high-quality web apps, mobile apps, and UI/UX design systems to help businesses grow through technology.",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Cherrypick Studio — Web & Mobile App Development Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@cherrypickstudio",
    title: "Cherrypick Studio — Web & Mobile App Development Agency",
    description:
      "Cherrypick Studio is a digital product agency based in Malang, Indonesia. We build high-quality web apps, mobile apps, and UI/UX design systems.",
    images: ["/twitter-image.svg"],
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
};

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
  image: "https://cherrypick.studio/opengraph-image.svg",
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
    {
      "@type": "Country",
      name: "Indonesia",
    },
    {
      "@type": "Country",
      name: "Singapore",
    },
    {
      "@type": "Place",
      name: "Southeast Asia",
    },
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
  currenciesAccepted: "IDR, SGD, USD",
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    url: "https://cherrypick.studio/contact",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" style={{ scrollBehavior: "smooth" }}>
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

        {/* START: Google Analytics */}
        <Script src="https://www.googletagmanager.com/gtag/js?id=G-5N9MC1DSC3" />
        <Script id="google-analytics">
          {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());

          gtag('config', 'G-5N9MC1DSC3');
        `}
        </Script>
        {/* END: Google Analytics */}

        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
