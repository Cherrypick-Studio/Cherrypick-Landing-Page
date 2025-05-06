"use client";
import Image from "next/image";
import Text from "@/components/ui/text";
import Lottie from "lottie-react";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";

const CardServices = ({ lottieFile, icon,number, title, description, delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <article>
          <div className="flex bg-[#FBFBFB] w-full flex-col p-10 gap-16 rounded-2xl">
             <div className="flex justify-between">
                <span className="text-2xl text-gray-150 font-normal">{number}</span>
                <Image src={icon} alt="icon" title="icon" height={100} width={100} />
              </div>
              <div className="flex gap-4 flex-col">
                <Text variant="primary" size="h1" weight="700">
                  <h1>{title}</h1>
                </Text>
                <Text
                      variant="primary"
                      size="h4"
                      weight="200"
                      className="leading-[30px]"
                    >
                      {description}
                  </Text>
              </div>
          </div>
    </article>
  );
};

export default CardServices;
