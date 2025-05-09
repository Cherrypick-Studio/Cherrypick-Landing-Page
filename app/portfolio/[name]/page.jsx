import DetailSection from "@/components/organisms/detail-section";
import MainDetailSection from "@/components/organisms/main-detail-section";

export default function DetailProject()
{
    return (
     <div className="flex flex-col md:gap-y-[100px] gap-y-8">
            <MainDetailSection />
            <DetailSection img="/images/termo-project.svg"/>
      </div>
    )
}