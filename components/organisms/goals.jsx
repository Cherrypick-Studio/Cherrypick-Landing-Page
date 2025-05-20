"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Lottie from "lottie-react";
import Image from "next/image";
import aboutLottie from "@/public/lotties/about-us.json";
import { useRef } from "react";

const Goals = () => {
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
        <div ref={ref} className=" w-full">
           <Lottie animationData={aboutLottie} loop={false} className="lg:min-w-[50%]" />
        </div>
         
      </m.div>
   </LazyMotion>
  );
};

export default Goals;
