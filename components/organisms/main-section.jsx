"use client";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";
import Link from "next/link";

const MainSection = ({
  homepage
}) => {
  return (
    <section
      className="py-24 max-lg:pb-[10px] max-lg:pt-[30px] xl:pt-[300px] container"
      id="section-hero"
    >
      <div className="md:mx-auto lg:px-20 lg:flex space-y-16 w-full lg:space-y-0">
        <div className="w-full">
          <div className="w-fit flex items-center gap-2 h-fit border-b border-red-cherry-500 pb-4">
            <div className="w-2 h-2 bg-red-cherry-500 rounded-full animate-pulse" />
            <Text variant="black" size="h4" weight="400">
              {homepage('agency')}
            </Text>
          </div>
        </div>
        <div className="w-fit text-start space-y-[40px]">
          <Text
            variant="black"
            size="h0"
            weight="500"
            className="block xl:!text-[80px] !leading-[120%] xl:!leading-[70px] xl:whitespace-nowrap max-lg:text-[64px]"
          >
            <h1>{homepage('title')}</h1>
          </Text>
          <Text
            variant="white"
            size="h2"
            weight="normal"
            className="block font-light text-[28px] max-lg:text-xl text-gray-150 md:mx-auto leading-9"
          >
            <h2>
             {homepage('desc')}
            </h2>
          </Text>
          <div className="flex gap-3 max-[400px]:flex-col max-[400px]:w-full ">
            <a
              href="https://calendly.com/cherrypick-main/30min"
              target="_blank"
            >
              <Button
                variant="primary"
                rounded="xl"
                id="btn-jumbotron"
                className="flex rounded-full gap-5 py-2 pl-8 pr-1 items-center max-lg:w-full justify-center"
              >
                Book a Call
                <div className="bg-white rounded-full w-fit h-fit p-3">
                  <ArrowUp
                    className="rotate-[50deg]  text-gray-500 "
                    size={20}
                  />
                </div>
              </Button>
            </a>
            <Link href="/portfolio">
              <Button
                variant="bordered"
                rounded="xl"
                id="btn-jumbotron"
                className="flex rounded-full h-full items-center justify-center xl:w-[170px]  max-lg:w-full"
              >
                Our Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MainSection;
