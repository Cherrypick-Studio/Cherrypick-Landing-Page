"use client";
import Image from "next/image";
import Text from "@/components/ui/text";
import Lottie from "lottie-react";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";

const CardServices = ({ lottieFile, icon, title, description, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <article>
      <div className="flex items-center justify-center" ref={ref}>
        <LazyMotion features={domAnimation}>
          <m.div
            initial={{ opacity: 0 }}
            animate={isInView && { opacity: 1 }}
            transition={{ ease: "easeIn", duration: 0.8, delay }}
          >
            <Lottie
              animationData={lottieFile}
              loop={true}
              style={{ height: 238, width: 379 }}
            />
          </m.div>
        </LazyMotion>
      </div>
      <div className="mt-16 flex flex-col items-center justify-center text-center">
        <div className="flex items-center space-x-4">
          <Image src={icon} alt="icon" title="icon" height={40} width={40} />
          <Text variant="primary" size="h1" weight="700">
            <h1>{title}</h1>
          </Text>
        </div>
        <Text
          variant="primary"
          size="h4"
          weight="200"
          className="mt-5 leading-[30px]"
        >
          {description}
        </Text>
      </div>
    </article>
  );
};

export default CardServices;
