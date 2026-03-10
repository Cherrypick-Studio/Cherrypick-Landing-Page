const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Web & Mobile App Development Services",
  description:
    "Cherrypick Studio offers expert web development, mobile app development, and UI/UX design services tailored to help businesses grow through innovation and digital transformation.",
  serviceType: [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Brand Identity",
  ],
  provider: {
    "@type": "Organization",
    name: "Cherrypick Studio",
    url: "https://cherrypick.studio",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  url: "https://cherrypick.studio/service",
};

export const metadata = {
  title: "Services",
  description:
    "Cherrypick Studio offers expert web development, mobile app development, and UI/UX design services tailored to help your business grow through innovation and digital transformation.",
  alternates: {
    canonical: "https://cherrypick.studio/service",
  },
  openGraph: {
    type: "website",
    url: "https://cherrypick.studio/service",
    siteName: "Cherrypick Studio",
    title: "Services | Cherrypick Studio",
    description:
      "Expert web development, mobile app development, and UI/UX design services tailored to help your business grow through innovation and digital transformation.",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Cherrypick Studio Services — Web, Mobile & UI/UX",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Services | Cherrypick Studio",
    description:
      "Web development, mobile app development, and UI/UX design services to help your business grow through digital transformation.",
    images: ["/twitter-image.svg"],
  },
};

export default function ServiceLayout({ children }) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      {children}
    </>
  );
}
