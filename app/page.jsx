import HomePageClient from "@/components/organisms/home-page-client";

export const metadata = {
  title: "Cherrypick Studio — Web & Mobile App Development Agency Indonesia",
  description:
    "Cherrypick Studio adalah digital product agency berbasis di Malang, Indonesia. Kami membangun web app, mobile app, dan desain UI/UX berkualitas tinggi untuk membantu bisnis Anda berkembang melalui teknologi. Melayani klien di Indonesia dan Singapura.",
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
  alternates: {
    canonical: "https://cherrypick.studio",
  },
  openGraph: {
    type: "website",
    url: "https://cherrypick.studio",
    siteName: "Cherrypick Studio",
    title: "Cherrypick Studio — Web & Mobile App Development Agency",
    description:
      "Digital product agency berbasis di Malang, Indonesia. Web app, mobile app, UI/UX design untuk bisnis Anda.",
    locale: "id_ID",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Cherrypick Studio — Web & Mobile App Development Agency",
      },
    ],
  },
};

const homeFaqJsonLd = {
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
      name: "Apakah Cherrypick Studio melayani klien di Singapura?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ya, Cherrypick Studio melayani klien dari Indonesia, Singapura, dan seluruh Asia Tenggara. Tim kami berkomunikasi dalam Bahasa Indonesia dan Inggris, dan berpengalaman bekerja dengan klien internasional.",
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
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeFaqJsonLd) }}
      />
      <HomePageClient />
    </>
  );
}
