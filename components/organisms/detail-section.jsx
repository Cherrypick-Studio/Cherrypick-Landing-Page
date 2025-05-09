"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import CardInfoProject from "../molecules/card-info-project";

const DetailSection = ({
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
        <div ref={ref} className="space-y-20 container p-0">
        <Image
              src={img}
              width={100}
              height={200}
              className="w-full hover:scale-105 transition-all duration-300"
              alt="cherry-pick-goals"
          />
          <div className="flex max-lg:flex-col px-20 gap-10 w-full max-lg:px-0">
          <CardInfoProject
            img={'/images/search-icon.svg'}
            title={'Understanding the needs'}
            desc={'For best results, we first need to understand what the client wants, and this is what they need:'}
            list={
              <>
                <li>Company profile website with fresh & modern looks.</li>
                <li>Revamp all screen and information to make to make it more informative and interesting.</li>
                <li>Provide to multiple language for content information (Bosnian, Germany, English).</li>
              </>
            } />
             <CardInfoProject
            img={'/images/scope-icon.svg'}
            title={'Scope of Works'}
            desc={'For best results, we first need to understand what the client wants, and this is what they need:'}
            list={
              <>
                <li>Company profile website with fresh & modern looks.</li>
                <li>Revamp all screen and information to make to make it more informative and interesting.</li>
                <li>Provide to multiple language for content information (Bosnian, Germany, English).</li>
              </>
            }/>
         </div>
        </div>
      </m.div>
   </LazyMotion>
  );
};

export default DetailSection;
