"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import SectionTitle from "../molecules/section-title";

const ResultHighlights = ({
    portfolioData
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
        <div ref={ref} className="space-y-20 container px-20 max-lg:px-10"   id="result">
            <div className="w-[70%] max-lg:w-full flex max-lg:flex-col gap-10">
                <SectionTitle
                    title='Result Highlights'
                          subtitle='RESULT'
                      desc='A quick look at the key outcomes and value delivered in this project.'/>
          </div>
          {portfolioData?.result_highlights?.map((item, index) => (
            <Image
              key={index}
             src={item}
             width={100}
             height={200}
             className="w-full hover:scale-105 transition-all duration-300"
             alt="cherry-pick-goals"
/>
          ))}
                 
                    {/* <Image
                                src='/images/termo-highlight-2.svg'
                                width={100}
                                height={200}
                                className="w-full hover:scale-105 transition-all duration-300"
                                alt="cherry-pick-goals"
                            /> */}
        </div>
      </m.div>
   </LazyMotion>
  );
};

export default ResultHighlights;
