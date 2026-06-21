import { localizedAlternates, localeUrl } from "@/lib/seo";

const COPY = {
  en: {
    description:
      "Get in touch with Cherrypick Studio. Start your digital journey with us — we build web apps, mobile apps, and design systems that drive growth and innovation.",
    twitter:
      "Start your digital journey with Cherrypick Studio. We build web apps, mobile apps, and design systems that drive growth.",
  },
  id: {
    description:
      "Hubungi Cherrypick Studio. Mulai perjalanan digital Anda bersama kami — kami membangun web app, mobile app, dan design system yang mendorong pertumbuhan dan inovasi.",
    twitter:
      "Mulai perjalanan digital Anda bersama Cherrypick Studio. Kami membangun web app, mobile app, dan design system yang mendorong pertumbuhan.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = COPY[locale] ?? COPY.en;

  return {
    title: "Contact Us",
    description: copy.description,
    alternates: localizedAlternates("/contact", locale),
    openGraph: {
      type: "website",
      url: localeUrl("/contact", locale),
      siteName: "Cherrypick Studio",
      title: "Contact Us | Cherrypick Studio",
      description: copy.description,
    },
    twitter: {
      card: "summary_large_image",
      title: "Contact Us | Cherrypick Studio",
      description: copy.twitter,
    },
  };
}

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
