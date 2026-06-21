import { localizedAlternates, localeUrl } from "@/lib/seo";

const COPY = {
  en: {
    description:
      "Explore Cherrypick Studio's portfolio of innovative web and mobile applications. From sleek UI/UX designs to robust backend solutions, discover how we help businesses transform ideas into powerful digital experiences.",
  },
  id: {
    description:
      "Jelajahi portofolio Cherrypick Studio berupa aplikasi web dan mobile yang inovatif. Dari desain UI/UX yang elegan hingga solusi backend yang andal, lihat bagaimana kami membantu bisnis mewujudkan ide menjadi pengalaman digital yang kuat.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = COPY[locale] ?? COPY.en;
  const url = localeUrl("/portfolio", locale);

  return {
    title: "Portfolio",
    description: copy.description,
    alternates: localizedAlternates("/portfolio", locale),
    openGraph: {
      type: "website",
      url,
      siteName: "Cherrypick Studio",
      title: "Portfolio | Cherrypick Studio",
      description: copy.description,
    },
    twitter: {
      card: "summary_large_image",
      title: "Portfolio | Cherrypick Studio",
      description: copy.description,
    },
  };
}

export default function PortFolioLayout({ children }) {
  return <>{children}</>;
}
