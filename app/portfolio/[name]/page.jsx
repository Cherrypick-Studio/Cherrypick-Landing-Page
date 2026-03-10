import DetailSection from "@/components/organisms/detail-section";
import DevelopmentPortfolioSection from "@/components/organisms/development-portfolio";
import MainDetailSection from "@/components/organisms/main-detail-section";
import ResultHighlights from "@/components/organisms/result-highlights";
import TimelineSection from "@/components/organisms/timeline-section";
import ToolsSection from "@/components/organisms/tools-section";
import portfolios from "@/lib/dataPortfolio.json";


export default function DetailProject({params})
{
  
  const param = params
  const portfolioData = portfolios.find(p => p.name_company === param?.name);
  if (!portfolioData) {
    return <div>Project not found</div>;
  }
    return (
     <div className="flex flex-col md:gap-y-[100px] gap-y-8">
          <MainDetailSection portofolioData={portfolioData}/>
          <DetailSection portfolioData={portfolioData?.details_project} projectName={portfolioData?.name} />
          <DevelopmentPortfolioSection />
          <ToolsSection portfolioData={portfolioData?.details_project}/>
          <TimelineSection portfolioData={portfolioData?.detail_timeline}/>
          <ResultHighlights portfolioData={portfolioData}/>
      </div>
    )
}