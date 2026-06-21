import { localizedAlternates, localeUrl } from "@/lib/seo";

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
    { "@type": "Country", name: "Indonesia" },
    { "@type": "Country", name: "Netherlands" },
    { "@type": "Country", name: "United Kingdom" },
    { "@type": "Country", name: "Sweden" },
    { "@type": "Country", name: "Denmark" },
    { "@type": "Place", name: "Europe" },
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
      name: "Do you provide web development services in Europe?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, Cherrypick Studio works with clients across Europe — including the Netherlands, the UK, and the Nordics. Our team is fluent in English, our working hours overlap comfortably with Central European Time, and we deliver high-quality web, mobile, and design work at competitive offshore rates.",
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

const COPY = {
  en: {
    description:
      "Cherrypick Studio offers expert web development, mobile app development, and UI/UX design services tailored to help your business grow. Serving Indonesia and Europe (Netherlands, UK, Nordics).",
    ogDescription:
      "Expert web development, mobile app development, and UI/UX design services tailored to help your business grow through innovation and digital transformation.",
  },
  id: {
    description:
      "Cherrypick Studio menyediakan layanan web development, pengembangan aplikasi mobile, dan desain UI/UX untuk membantu bisnis Anda berkembang. Melayani Indonesia dan Eropa (Belanda, Inggris, Nordik).",
    ogDescription:
      "Layanan web development, pengembangan aplikasi mobile, dan desain UI/UX untuk membantu bisnis Anda berkembang melalui inovasi dan transformasi digital.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = COPY[locale] ?? COPY.en;

  return {
    title: "Services",
    description: copy.description,
    keywords: [
      "jasa web development Indonesia",
      "web development agency Europe",
      "web development agency Netherlands",
      "offshore web development UK",
      "jasa pembuatan aplikasi mobile",
      "UI/UX design agency",
      "digital product agency",
      "Next.js development",
      "React developer",
      "mobile app development",
      "brand identity design",
    ],
    alternates: localizedAlternates("/service", locale),
    openGraph: {
      type: "website",
      url: localeUrl("/service", locale),
      siteName: "Cherrypick Studio",
      title: "Services | Cherrypick Studio",
      description: copy.ogDescription,
    },
    twitter: {
      card: "summary_large_image",
      title: "Services | Cherrypick Studio",
      description: copy.ogDescription,
    },
  };
}

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
