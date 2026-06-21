import { setRequestLocale } from "next-intl/server";
import HomePageClient from "@/components/organisms/home-page-client";
import { localizedAlternates, localeUrl } from "@/lib/seo";

const COPY = {
  en: {
    title: "Cherrypick Studio — Web & Mobile App Development Agency",
    description:
      "Cherrypick Studio is a digital product agency based in Malang, Indonesia. We build high-quality web apps, mobile apps, and UI/UX design systems for clients in Indonesia and Europe (Netherlands, UK, Nordics).",
    keywords: [
      "web development agency",
      "mobile app development",
      "UI/UX design agency",
      "Next.js development agency",
      "React development agency",
      "offshore web development Europe",
      "web development agency Netherlands",
      "hire web developers Indonesia",
      "digital product agency",
      "Cherrypick Studio",
    ],
    ogTitle: "Cherrypick Studio — Web & Mobile App Development Agency",
    ogDescription:
      "Digital product agency based in Malang, Indonesia. Web apps, mobile apps, and UI/UX design for businesses in Indonesia and Europe.",
    ogLocale: "en_US",
  },
  id: {
    title: "Cherrypick Studio — Web & Mobile App Development Agency Indonesia",
    description:
      "Cherrypick Studio adalah digital product agency berbasis di Malang, Indonesia. Kami membangun web app, mobile app, dan desain UI/UX berkualitas tinggi untuk membantu bisnis Anda berkembang melalui teknologi. Melayani klien di Indonesia dan Eropa.",
    keywords: [
      "jasa pembuatan website",
      "jasa pengembangan aplikasi mobile",
      "desain UI UX Indonesia",
      "agensi digital Malang",
      "web design agency Indonesia",
      "web development Indonesia",
      "digital product agency Indonesia",
      "Cherrypick Studio",
      "web developer Malang",
      "agency digital terbaik Indonesia",
    ],
    ogTitle: "Cherrypick Studio — Web & Mobile App Development Agency",
    ogDescription:
      "Digital product agency berbasis di Malang, Indonesia. Web app, mobile app, UI/UX design untuk bisnis Anda.",
    ogLocale: "id_ID",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = COPY[locale] ?? COPY.en;

  return {
    title: copy.title,
    description: copy.description,
    keywords: copy.keywords,
    alternates: localizedAlternates("/", locale),
    openGraph: {
      type: "website",
      url: localeUrl("/", locale),
      siteName: "Cherrypick Studio",
      title: copy.ogTitle,
      description: copy.ogDescription,
      locale: copy.ogLocale,
    },
  };
}

const homeFaqJsonLd = {
  en: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How much does it cost to build a website or app with Cherrypick Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Pricing depends on the complexity and features you need. Company-profile websites start in the lower thousands, e-commerce builds are mid-range, and custom web or mobile applications are scoped per project. As an Indonesia-based studio we deliver European-quality work at competitive offshore rates. Contact us for a free consultation and estimate.",
        },
      },
      {
        "@type": "Question",
        name: "How long does a website or app project take?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Timelines depend on scope. A company-profile website is typically 3–4 weeks, an e-commerce site 6–10 weeks, and a custom mobile or web app 2–6 months. We provide a clear timeline at the start of every project.",
        },
      },
      {
        "@type": "Question",
        name: "Do you work with clients in Europe?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. Cherrypick Studio works with clients across Europe — including the Netherlands, the UK, and the Nordics — as well as Indonesia. Our team is fluent in English, our working hours overlap comfortably with Central European Time, and we have experience delivering for international clients.",
        },
      },
      {
        "@type": "Question",
        name: "What services does Cherrypick Studio offer?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cherrypick Studio offers web development (Next.js, React), mobile app development (React Native), UI/UX design, and brand identity. We are a one-stop digital product agency that can handle your entire digital product lifecycle.",
        },
      },
      {
        "@type": "Question",
        name: "What technologies does Cherrypick Studio use?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We use modern, proven technology: Next.js and React for frontend, Node.js and Laravel for backend, React Native for mobile apps, and PostgreSQL and MongoDB for data. Every project ships on reliable cloud infrastructure.",
        },
      },
    ],
  },
  id: {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "Berapa biaya jasa pembuatan website di Cherrypick Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Biaya pembuatan website bervariasi tergantung kompleksitas dan fitur yang dibutuhkan. Website company profile mulai dari Rp 5-15 juta, website e-commerce mulai dari Rp 20-80 juta, dan web application custom dihitung berdasarkan scope proyek. Hubungi kami untuk konsultasi dan estimasi harga gratis.",
        },
      },
      {
        "@type": "Question",
        name: "Berapa lama waktu pengerjaan website atau aplikasi?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Waktu pengerjaan bergantung pada kompleksitas proyek. Website company profile biasanya selesai dalam 3-4 minggu, website e-commerce 6-10 minggu, dan aplikasi mobile atau web app custom 2-6 bulan. Kami memberikan timeline yang jelas di awal proyek.",
        },
      },
      {
        "@type": "Question",
        name: "Apakah Cherrypick Studio melayani klien internasional?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Ya, Cherrypick Studio melayani klien dari Indonesia dan Eropa (termasuk Belanda, Inggris, dan negara Nordik). Tim kami berkomunikasi dalam Bahasa Indonesia dan Inggris, dengan jam kerja yang beririsan dengan zona waktu Eropa, dan berpengalaman bekerja dengan klien internasional.",
        },
      },
      {
        "@type": "Question",
        name: "Apa saja layanan yang ditawarkan Cherrypick Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Cherrypick Studio menawarkan layanan web development (Next.js, React), mobile app development (React Native), UI/UX design, dan brand identity. Kami adalah one-stop digital product agency yang dapat menangani seluruh kebutuhan digital bisnis Anda.",
        },
      },
      {
        "@type": "Question",
        name: "Teknologi apa yang digunakan Cherrypick Studio?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Kami menggunakan teknologi modern dan terbukti: Next.js dan React untuk frontend, Node.js dan Laravel untuk backend, React Native untuk mobile app, serta PostgreSQL dan MongoDB untuk database. Semua proyek di-deploy di infrastruktur cloud yang andal.",
        },
      },
    ],
  },
};

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const faq = homeFaqJsonLd[locale] ?? homeFaqJsonLd.en;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <HomePageClient />
    </>
  );
}
