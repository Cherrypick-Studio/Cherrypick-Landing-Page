'use client'
import DetailSection from "@/components/organisms/detail-section";
import MainDetailSection from "@/components/organisms/main-detail-section";
import Works from "@/components/organisms/list-portfolio";
import { useTranslations } from "next-intl";

export default function ListProject()
{
  const porto = useTranslations('porto');

    return (
     <div className="flex flex-col md:gap-y-[100px] py-[100px] max-lg:py-10">
        <Works titleIntro={porto('second_sub_title')} hideContent porto={porto}/>
      </div>
    )
}