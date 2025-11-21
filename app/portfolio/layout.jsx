export const metadata = {
  title: "Cherrypick Studio - Portfolio",
  description:
    "Explore Cherry Pick’s portfolio of innovative web and mobile applications. From sleek UI/UX designs to robust backend solutions, our work showcases the creativity, precision, and technical expertise we bring to every project. Discover how we help businesses transform ideas into powerful digital experiences.",
  manifest: "./manifest.json",
  themeColor: "#C42026",
  alternates: {
    canonical: "https://cherrypick.studio/portfolio",
  },
};

export default function PortFolioLayout({ children }) {
  return <>{children}</>;
}
