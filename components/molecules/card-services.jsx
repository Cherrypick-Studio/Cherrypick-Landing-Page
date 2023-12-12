"use client";
import Image from "next/image";
import Text from "@/components/ui/text";
import Lottie from "lottie-react";

const CardServices = ({ lottieFile, icon, title, description }) => {
  return (
    <article>
      <div className="flex items-center justify-center">
        <Lottie
          animationData={lottieFile}
          loop={true}
          style={{ height: 238, width: 379 }}
        />
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
