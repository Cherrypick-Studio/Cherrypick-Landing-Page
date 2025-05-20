"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const ToolsSection = ({
    portfolioData
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
    const {
        list_tech_stack,
        list_tools
    } = portfolioData
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
                      <h1 className="text-3xl font-light text-black">Tools & Technology Stack</h1>
                      <p className="text-xl font-light text-gray-150">First, we then determine what technology will be used. 
                      And we chose some of the most suitable tools and technologies to work on this project.</p>
                  </div>
                  <div className="w-full flex max-lg:flex-col gap-10">
                      <div className="flex p-10 flex-shrink-0 w-fit gap-10 bg-[#FBFBFB] items-end justify-center h-[320px] max-lg:w-full max-lg:flex-wrap rounded-xl">
                          {list_tech_stack.map((item, index) => (
                                <Image key={index} src={item} alt="logo" width={50} height={50} className="hover:animate-bounce cursor-pointer"/>
                          ))}
                      </div>
                      <div className="flex  p-10 w-full gap-10 bg-[#FBFBFB] items-end justify-center h-[320px] max-lg:flex-wrap rounded-xl">
                          {list_tools.map((item, index) => (
                                <Image key={index} src={item} alt="logo" width={50} height={50} className="hover:animate-bounce cursor-pointer"/>
                          ))}
                    </div>
                  </div>  
        </div>
      </m.div>
   </LazyMotion>
  );
};

export default ToolsSection;
