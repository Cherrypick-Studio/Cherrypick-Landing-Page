"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CardInfoProject from "../molecules/card-info-project";
import SectionTitle from "../molecules/section-title";

const ToolsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

    const dummyTech =
        [
            {
                url:'/images/typescript-icon.svg',
            },
            {
                url:'/images/tailwind-icon.svg',
            },
            {
                url:'/images/next-icon.svg',
            },
            {
                url:'/images/laravel-icon.svg',
            }
        ]
        const dummyDevelopmentTect =
        [
            {
                url:'/images/trello-icon.svg',
            },
            {
                url:'/images/telegram-icon.svg',
            },
            {
                url:'/images/gmeet-icon.svg',
            },
            {
                url:'/images/gmail-icon.svg',
                },
                {
                    url:'/images/mysql-icon.svg',
                },
                {
                    url:'/images/github-icon.svg',
                }
    ]
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
                      <div className="flex p-10 flex-shrink-0 w-fit gap-10 bg-[#FBFBFB] items-end justify-center h-[320px] max-lg:w-full max-lg:flex-wrap">
                          {dummyTech.map((item, index) => (
                                <Image key={index} src={item.url} alt="logo" width={50} height={50} className="hover:animate-bounce cursor-pointer"/>
                          ))}
                      </div>
                      <div className="flex  p-10 w-full gap-10 bg-[#FBFBFB] items-end justify-center h-[320px] max-lg:flex-wrap">
                          {dummyDevelopmentTect.map((item, index) => (
                                <Image key={index} src={item.url} alt="logo" width={50} height={50} className="hover:animate-bounce cursor-pointer"/>
                          ))}
                    </div>
                  </div>  
        </div>
      </m.div>
   </LazyMotion>
  );
};

export default ToolsSection;
