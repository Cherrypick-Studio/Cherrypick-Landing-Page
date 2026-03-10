export const metadata = {
  title: "Portfolio",
  description:
    "Explore Cherrypick Studio's portfolio of innovative web and mobile applications. From sleek UI/UX designs to robust backend solutions, discover how we help businesses transform ideas into powerful digital experiences.",
  alternates: {
    canonical: "https://cherrypick.studio/portfolio",
  },
  openGraph: {
    type: "website",
    url: "https://cherrypick.studio/portfolio",
    siteName: "Cherrypick Studio",
    title: "Portfolio | Cherrypick Studio",
    description:
      "Explore Cherrypick Studio's portfolio of innovative web and mobile applications. Discover how we help businesses transform ideas into powerful digital experiences.",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Cherrypick Studio Portfolio — Web & Mobile App Projects",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Cherrypick Studio",
    description:
      "Explore our portfolio of innovative web and mobile applications — from UI/UX designs to robust backend solutions.",
    images: ["/twitter-image.svg"],
  },
};

export default function PortFolioLayout({ children }) {
  return <>{children}</>;
}
