import { localizedAlternates, localeUrl } from "@/lib/seo";

const COPY = {
  en: {
    description:
      "Learn about Cherrypick Studio — a digital product agency in Malang, Indonesia with 5+ years of experience crafting high-quality web and mobile applications with exceptional UI/UX design.",
    twitter:
      "5+ years building high-quality web & mobile apps with exceptional UI/UX design. Based in Malang, Indonesia.",
  },
  id: {
    description:
      "Kenali Cherrypick Studio — digital product agency di Malang, Indonesia dengan pengalaman 5+ tahun membangun aplikasi web dan mobile berkualitas tinggi dengan desain UI/UX yang luar biasa.",
    twitter:
      "5+ tahun membangun aplikasi web & mobile berkualitas tinggi dengan desain UI/UX yang luar biasa. Berbasis di Malang, Indonesia.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = COPY[locale] ?? COPY.en;

  return {
    title: "About Us",
    description: copy.description,
    alternates: localizedAlternates("/about-us", locale),
    openGraph: {
      type: "website",
      url: localeUrl("/about-us", locale),
      siteName: "Cherrypick Studio",
      title: "About Us | Cherrypick Studio",
      description: copy.description,
    },
    twitter: {
      card: "summary_large_image",
      title: "About Us | Cherrypick Studio",
      description: copy.twitter,
    },
  };
}

export default function AboutusLayout({ children }) {
  return <>{children}</>;
}
