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
  url: "https://cherrypick.studio/service",
};

const serviceFaqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Jasa web development apa saja yang tersedia di Cherrypick Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Cherrypick Studio menyediakan jasa web development lengkap: website company profile, e-commerce, web application, dan landing page. Kami menggunakan Next.js dan React untuk memastikan website yang cepat, SEO-friendly, dan mudah dikembangkan.",
      },
    },
    {
      "@type": "Question",
      name: "Do you provide web development services in Singapore?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cherrypick Studio serves clients in Singapore and across Southeast Asia. We have experience working with Singapore-based businesses and understand the local market requirements, regulatory considerations, and design preferences.",
      },
    },
    {
      "@type": "Question",
      name: "Apakah Cherrypick Studio bisa membuat aplikasi mobile?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, kami mengembangkan aplikasi mobile untuk iOS dan Android menggunakan React Native. Dengan satu codebase untuk kedua platform, pengembangan lebih efisien tanpa mengorbankan kualitas pengalaman pengguna.",
      },
    },
    {
      "@type": "Question",
      name: "What is the process for starting a project with Cherrypick Studio?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "The process begins with a free consultation where we discuss your goals, requirements, and timeline. We then provide a detailed proposal with scope of work, timeline, and pricing. Once agreed, we move through discovery, design, development, testing, and launch phases with regular check-ins throughout.",
      },
    },
  ],
};

export const metadata = {
  title: "Services",
  description:
    "Cherrypick Studio offers expert web development, mobile app development, and UI/UX design services tailored to help your business grow. Serving Indonesia, Singapore, and Southeast Asia.",
  keywords: [
    "jasa web development Indonesia",
    "web development Singapore",
    "jasa pembuatan aplikasi mobile",
    "UI/UX design agency Indonesia",
    "digital product agency",
    "Next.js development",
    "React developer Indonesia",
    "mobile app development Indonesia",
    "brand identity design",
  ],
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqJsonLd) }}
      />
      {children}
    </>
  );
}
