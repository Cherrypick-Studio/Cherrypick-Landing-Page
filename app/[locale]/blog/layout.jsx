import { localizedAlternates, localeUrl } from "@/lib/seo";

const COPY = {
  en: {
    title: "Blog",
    description:
      "Insights on web development, mobile apps, UI/UX design, and digital transformation from the Cherrypick Studio team. Resources for businesses in Indonesia and Europe.",
  },
  id: {
    title: "Blog",
    description:
      "Wawasan seputar web development, aplikasi mobile, desain UI/UX, dan transformasi digital dari tim Cherrypick Studio. Sumber daya untuk bisnis di Indonesia dan Eropa.",
  },
};

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const copy = COPY[locale] ?? COPY.en;
  const url = localeUrl("/blog", locale);

  return {
    title: {
      default: `${copy.title} | Cherrypick Studio`,
      template: "%s | Cherrypick Studio Blog",
    },
    description: copy.description,
    alternates: localizedAlternates("/blog", locale),
    openGraph: {
      type: "website",
      url,
      siteName: "Cherrypick Studio",
      title: `${copy.title} | Cherrypick Studio`,
      description: copy.description,
    },
    twitter: {
      card: "summary_large_image",
      site: "@cherrypickstudio",
      title: `${copy.title} | Cherrypick Studio`,
      description: copy.description,
    },
  };
}

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
