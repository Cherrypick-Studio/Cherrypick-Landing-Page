import DetailSection from "@/components/organisms/detail-section";
import MainDetailSection from "@/components/organisms/main-detail-section";
import Works from "@/components/organisms/list-portfolio";

export default function ListProject()
{
    return (
     <div className="flex flex-col md:gap-y-[100px] py-[100px]">
        <Works titleIntro="What We Delivered" hideContent />
      </div>
    )
}