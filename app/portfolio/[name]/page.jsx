import DetailSection from "@/components/organisms/detail-section";
import DevelopmentPortfolioSection from "@/components/organisms/development-portfolio";
import MainDetailSection from "@/components/organisms/main-detail-section";
import ResultHighlights from "@/components/organisms/result-highlights";
import TimelineSection from "@/components/organisms/timeline-section";
import ToolsSection from "@/components/organisms/tools-section";

export default function DetailProject()
{
    return (
     <div className="flex flex-col md:gap-y-[100px] gap-y-8">
            <MainDetailSection />
            <DetailSection img="/images/termo-project.svg" />
        <DevelopmentPortfolioSection />
        <ToolsSection />
        <TimelineSection />
        <ResultHighlights/>
      </div>
    )
}