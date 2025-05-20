"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import SectionTitle from "../molecules/section-title";

const DevelopmentPortfolioSection = ({
    img ='/images/second-section.svg'
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <LazyMotion features={domAnimation}>
      <m.div
       initial={{ opacity: 0, y: -50 }}
       animate={isInView && { opacity: 1, y: 0 }}
       transition={{
         ease: "easeIn",
         duration: 0.6,
         delay:  0.5,
       }}>
        <div ref={ref} className="space-y-20 container px-20 max-lg:px-10"   id="development">
            <div className="w-[70%] max-lg:w-full flex max-lg:flex-col gap-10">
                <SectionTitle
                    title='Starting Development'
                          subtitle='DEVELOPMENT'
                      desc='We explain the summary of the development process that our team does from determining the timeline, 
                            the work process, testing, and handoff of work to the client.'/>
              </div>
        </div>
      </m.div>
   </LazyMotion>
  );
};

export default DevelopmentPortfolioSection;
