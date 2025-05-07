"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
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
        <div ref={ref}>
        <Image
              src={'/images/second-section.svg'}
              width={100}
              height={200}
              className="w-full hover:scale-105 transition-all duration-300"
              alt="cherry-pick-goals"
            />
        </div>
      </m.div>
   </LazyMotion>
  );
};

export default Goals;
