"use client";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import SectionTitle from "../molecules/section-title";
import { Badge } from "../ui/badge";
import Image from "next/image";

const MainDetailSection = ({ portofolioData }) => {
  const {
    name,
    description,
    products,
    name_company,
    country,
    industry,
    flag,
    year_project,
  } = portofolioData;

  return (
    <section
      className="py-24 max-lg:pt-8 xl:pt-[100px] max-lg:px-10 lg:px-20 container"
      id="overview"
    >
      <div className="w-full space-y-10">
        <div className="w-full flex max-lg:flex-col gap-10">
          <SectionTitle
            isHeading
            title={`${name} Website`}
            subtitle="OVERVIEW"
          />
          <Button
            variant="bordered"
            className="h-fit w-fit items-center flex gap-2 rounded-full  lg:ml-auto"
          >
            Visit Website
            <ArrowUp size={20} className="rotate-45" />
          </Button>
        </div>
        <div className="w-[70%] max-lg:w-full space-y-10">
          {description?.map((desc, index) => (
            <p key={index} className="text-gray-150 text-xl font-light">
              {desc}
            </p>
          ))}

          <div className="flex gap-3 max-lg:flex-wrap">
            {products.map((item, index) => (
              <Badge key={index} showRedDot={false} variant="bg-gray">
                {item}
              </Badge>
            ))}
          </div>

          {/* detail client  */}
          <div className="flex w-fit bg-[#FBFBFB] p-10 rounded-xl gap-20 max-lg:flex-wrap">
            <div className="grid gap-2">
              <span className="text-xs text-gray-150">CLIENT</span>
              <span className="text-xl font-normal">{name_company}</span>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-gray-150">COUNTRY</span>
              <div className="flex gap-2">
                <Image
                  src={flag}
                  alt="language"
                  title="language"
                  height={20}
                  width={26}
                />
                <span className="text-xl font-normal">{country}</span>
              </div>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-gray-150">INDUSTRY</span>
              <span className="text-xl font-normal">{industry}</span>
            </div>
            <div className="grid gap-2">
              <span className="text-xs text-gray-150">YEAR</span>
              <span className="text-xl font-normal">{year_project}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainDetailSection;
