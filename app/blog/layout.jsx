export const metadata = {
  title: {
    default: "Blog | Cherrypick Studio",
    template: "%s | Cherrypick Studio Blog",
  },
  description:
    "Insights on web development, mobile apps, UI/UX design, and digital transformation from the Cherrypick Studio team. Resources for businesses in Indonesia and Singapore.",
  alternates: {
    canonical: "https://cherrypick.studio/blog",
  },
  openGraph: {
    type: "website",
    url: "https://cherrypick.studio/blog",
    siteName: "Cherrypick Studio",
    title: "Blog | Cherrypick Studio",
    description:
      "Insights on web development, mobile apps, UI/UX design, and digital transformation from the Cherrypick Studio team.",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Cherrypick Studio Blog",
      },
    ],
  },
};

export default function BlogLayout({ children }) {
  return <>{children}</>;
}
