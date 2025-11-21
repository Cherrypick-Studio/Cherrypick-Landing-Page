import portfolios from "@/lib/dataPortfolio.json";

export async function generateMetadata({ params }) {
  const { name } = params;

  const portfolioData = portfolios.find((p) => p.name_company === name);

  return {
    title: `Cherrypick Studio - Portfolio ${portfolioData.name}`,
    description: portfolioData.description,
    manifest: "./manifest.json",
    themeColor: "#C42026",
    alternates: {
      canonical: `https://cherrypick.studio/portfolio/${name}`,
    },
  };
}

export default function Layout({ children }) {
  return children;
}
