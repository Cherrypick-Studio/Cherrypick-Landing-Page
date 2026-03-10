export const metadata = {
  title: "About Us",
  description:
    "Learn about Cherrypick Studio — a digital product agency in Malang, Indonesia with 5+ years of experience crafting high-quality web and mobile applications with exceptional UI/UX design.",
  alternates: {
    canonical: "https://cherrypick.studio/about-us",
  },
  openGraph: {
    type: "website",
    url: "https://cherrypick.studio/about-us",
    siteName: "Cherrypick Studio",
    title: "About Us | Cherrypick Studio",
    description:
      "Learn about Cherrypick Studio — a digital product agency in Malang, Indonesia with 5+ years of experience crafting high-quality web and mobile applications with exceptional UI/UX design.",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "About Cherrypick Studio — Digital Product Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Cherrypick Studio",
    description:
      "5+ years building high-quality web & mobile apps with exceptional UI/UX design. Based in Malang, Indonesia.",
    images: ["/twitter-image.svg"],
  },
};

export default function AboutusLayout({ children }) {
  return <>{children}</>;
}
