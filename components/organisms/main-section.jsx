"use client";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { emailAction } from "@/configs/email-action";
import Lottie from "lottie-react";
import heroLottie from "@/public/lotties/hero-section.json";
import { m, LazyMotion, domAnimation } from "framer-motion";
import { ArrowUp } from "lucide-react";

const MainSection = () => {
  return (
    <section
      className="py-24 max-lg:pt-[200px] xl:pt-[300px] container"
      id="section-hero"
    >
      <div className="md:mx-auto max-lg:px-10 lg:px-20 lg:flex space-y-16 w-full lg:space-y-0">
        <div className="w-full">
          <div className="w-fit flex items-center gap-2 h-fit border-b border-red-cherry-500 pb-4">
            <div className="w-2 h-2 bg-red-cherry-500 rounded-full animate-pulse" />
            <Text variant="black" size="h4" weight="400">Digital Product Agency</Text>
          </div>
       </div>
        <div className="w-fit text-start space-y-[40px]">
          <Text
            variant="black"
            size="h0"
            weight="500"
            className="block xl:!text-[80px] !leading-[120%] xl:!leading-[70px] xl:whitespace-nowrap"
          >
            <h1>Design it. Build it. Love it.</h1>
          </Text>
          <Text
            variant="white"
            size="h2"
            weight="normal"
            className="block font-light text-[28px] max-lg:text-[24px] text-gray-150 md:mx-auto leading-9"
          >
            <h2>
              We blend creativity and engineering to bring your product to life,
              just the way it should be.
            </h2>
          </Text>
          <div className="flex gap-3">
          <a href={emailAction} target="_blank">
            <Button variant="primary" rounded="xl" id="btn-jumbotron" className='flex rounded-full gap-5 py-2 pl-8 pr-1 items-center'>
              Book a Call
              <div className="bg-white rounded-full w-fit h-fit p-3">
              <ArrowUp className="rotate-[50deg]  text-gray-500 " size={20}/>
              </div>
            </Button>
            </a>
            <a href={emailAction} target="_blank">
            <Button variant="bordered" rounded="xl" id="btn-jumbotron" className='flex rounded-full h-full items-center justify-center xl:w-[170px]'>
              Our Portfolio
            </Button>
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
