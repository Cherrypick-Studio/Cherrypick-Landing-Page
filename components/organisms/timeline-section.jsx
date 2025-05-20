"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import CardTimeline from "../molecules/card-timeline";

const TimelineSection = ({
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
        <div ref={ref} className="space-y-20 container px-20 max-lg:px-10">
            <div className="w-[70%] max-lg:w-full flex flex-col gap-5">
                      <h1 className="text-3xl font-light text-black">Set Project Timeline</h1>
                      <p className="text-xl font-light text-gray-150">Next, we divided the timeline into several phases. The client gave us a maximum of 4 months.</p>
                  </div>
                  <div className="w-full flex max-lg:flex-col gap-6 p-8 rounded-xl bg-[#FBFBFB]">
                      {portfolioData.map((item, index) => (
                         <CardTimeline key={index} title={item.title} color={item.color} description={item.description} badge={item.badge}/>
                    ))}
                  </div>  
        </div>
      </m.div>
   </LazyMotion>
  );
};

export default TimelineSection;
