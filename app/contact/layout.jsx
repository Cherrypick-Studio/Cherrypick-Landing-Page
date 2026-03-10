export const metadata = {
  title: "Contact Us",
  description:
    "Get in touch with Cherrypick Studio. Start your digital journey with us — we build web apps, mobile apps, and design systems that drive growth and innovation.",
  alternates: {
    canonical: "https://cherrypick.studio/contact",
  },
  openGraph: {
    type: "website",
    url: "https://cherrypick.studio/contact",
    siteName: "Cherrypick Studio",
    title: "Contact Us | Cherrypick Studio",
    description:
      "Get in touch with Cherrypick Studio. Start your digital journey with us — we build web apps, mobile apps, and design systems that drive growth and innovation.",
    images: [
      {
        url: "/opengraph-image.svg",
        width: 1200,
        height: 630,
        alt: "Contact Cherrypick Studio — Digital Product Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Cherrypick Studio",
    description:
      "Start your digital journey with Cherrypick Studio. We build web apps, mobile apps, and design systems that drive growth.",
    images: ["/twitter-image.svg"],
  },
};

export default function ContactLayout({ children }) {
  return <>{children}</>;
}
