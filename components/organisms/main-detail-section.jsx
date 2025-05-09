"use client";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { emailAction } from "@/configs/email-action";
import Lottie from "lottie-react";
import heroLottie from "@/public/lotties/hero-section.json";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { ArrowUp } from "lucide-react";
import SectionTitle from "../molecules/section-title";
import Header from "../molecules/header";
import { Badge } from "../ui/badge";

const MainDetailSection = () =>
{
    const dummyData = 
        [
            'Website',
            'Company Profile',
            'Mobile App',
            'Web App',
            'E-Commerce',
        ]
  return (
    <section
      className="py-24 max-lg:pt-[200px] xl:pt-[100px] max-lg:px-10 lg:px-20 container"
      id="overview"
      >
          <div className="w-full space-y-10">
              <div className="w-full flex max-lg:flex-col gap-10">
                <SectionTitle
                    title='Termobeton Website'
                      subtitle='OVERVIEW' />
                    <Button variant="bordered" className='h-fit w-fit items-center flex gap-2 rounded-full  lg:ml-auto'>
                      Visit Website
                      <ArrowUp size={20} className="rotate-45"/>
                  </Button>
              </div>
              <div className="w-[70%] max-lg:w-full space-y-10">
                  <p className="text-gray-150 text-xl font-light">Termo-beton doo is a company for construction, trade and services founded on April 17, 1996.
                      in Breza. The founders of the company are Frljak Sabit,
                      Bachelor of Civil Engineering and Turbo Ahmed, Bachelor of Civil Engineering.</p>
                  
                      <p className="text-gray-150 text-xl font-light">The Company`s main activity is construction (civil and building construction), 
                      production of concrete and precast concrete products, as well as reinforced concrete structures.</p>
                  
                  <div className="flex gap-3 max-lg:flex-wrap">
                      {dummyData.map((item, index) => (
                          <Badge key={index} showRedDot={false} variant='bg-gray'>{item}</Badge>
                      ))}
                  </div>

                  {/* detail client  */}
                  <div className="flex w-fit bg-[#FBFBFB] p-10 rounded-xl gap-20 max-lg:flex-wrap">
                      <div className="grid gap-2">
                          <span className="text-xs text-gray-150">CLIENT</span>
                          <span className="text-xl font-normal">termo-beton</span>
                      </div>
                      <div className="grid gap-2">
                          <span className="text-xs text-gray-150">COUNTRY</span>
                          <span className="text-xl font-normal">Bosnia</span>
                      </div>
                      <div className="grid gap-2">
                          <span className="text-xs text-gray-150">INDUSTRY</span>
                          <span className="text-xl font-normal">Construction</span>
                      </div>
                  </div>
              </div>
         </div>
    </section>
  );
};

export default MainDetailSection;
