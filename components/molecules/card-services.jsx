"use client";
import Image from "next/image";
import Text from "@/components/ui/text";
import { m, useInView, LazyMotion, domAnimation } from "motion/react";
import { useRef } from "react";
import { Badge } from "../ui/badge";

const CardServices = ({ lottieFile, icon,number, title, description, products=[],delay = 0 }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <div className="flex bg-[#FBFBFB] w-full flex-col p-10 gap-16 rounded-2xl">
             <div className="flex justify-between">
                <span className="text-2xl text-gray-150 font-normal">{number}</span>
                <Image src={icon} alt={`${title} service icon`} title={title} height={100} width={100} />
              </div>
              <div className="flex gap-4 flex-col">
                <Text variant="primary" size="h1" weight="700">
                  <h3>{title}</h3>
                </Text>
                <Text
                      variant="primary"
                      size="h4"
                      weight="200"
                      className="leading-[30px]"
                    >
                      {description}
        </Text>
        <div className="flex gap-3 max-lg:flex-wrap">
                              {products.map((item, index) => (
                                  <Badge key={index} showRedDot={false} variant='bg-gray'>{item}</Badge>
                              ))}
                          </div>
              </div>
          </div>
  );
};

export default CardServices;
