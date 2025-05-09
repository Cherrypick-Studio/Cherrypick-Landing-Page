import SectionTitle from "../molecules/section-title";
import CardServices from "../molecules/card-services";
import devLottie from "@/public/lotties/services-dev.json";
import brandLottie from "@/public/lotties/services-brand.json";
import productLottie from "@/public/lotties/services-product.json";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "../ui/button";
import { useRef } from "react";
import HighLightList from "../molecules/highlight";
import SliderReview from "../molecules/slider/slider-review";

const Highlights = () =>
{
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="container space-y-20 mx-auto max-lg:px-10 lg:px-20" id="section-services">
       <div className="flex w-full justify-between items-end max-md:flex-col gap-3">
          <div className="w-full">
          <SectionTitle
                title="Highlight of"
                spanCherrypick
                subtitle="HIGHLIGHTS"
                desc="We let the numbers speak for themselves — consistently delivering product design and development solutions that exceed expectations."/>
          </div>
          <div className="w-1/2 h-auto self-stretch mt-auto ">
         </div>
      </div>
      <LazyMotion  features={domAnimation}>
        <m.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
          duration: 0.4,
          delay:  0.3,
        }}>
        <div className="flex gap-y-12 max-lg:flex-col md:gap-y-12 gap-20 w-full relative" ref={ref}>
                      <HighLightList
                          title='10+'
                          label='Projects Completed'
                      />
                      <div className="w-0.5 h-auto self-stretch rounded bg-[#DDDDDD] lg:block hidden"/>
                      <HighLightList
                          title='5+'
                          label='Years in experience'
                      />
                      <div className="w-0.5 h-auto self-stretch rounded bg-[#DDDDDD] lg:block hidden"/>
                      <HighLightList
                          title='98%'
                          label='Satisfied client reviews'
                      />
          </div>
        </m.div>
          </LazyMotion>
          <SliderReview/>
    </section>
  );
};

export default Highlights;
