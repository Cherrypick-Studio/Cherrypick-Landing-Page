"use client";
import Image from "next/image";
import Text from "@/components/ui/text";
import { Button } from "@/components/ui/button";
import CardIcon from "../card-icon";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { emailAction } from "@/configs/email-action";
import Lottie from "lottie-react";
import getToWorkLottie from "@/public/lotties/get-to-work.json";
import { ArrowUp } from "lucide-react";
import { usePathname } from "next/navigation";

const Footer = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <footer className="mt-32" id="footer">
      {pathname !== "/contact" && (
        <section
          className="px-10 py-[160px] container space-y-3 mx-auto bg-[#FBFBFB] relative overflow-hidden"
          id="section-aboutus"
        >
          {/* Background image with opacity */}
          <Image
            src="/images/logo-noword.svg" // Replace with your image path
            alt="Background"
            width={100}
            height={100}
            className="opacity-5 w-full absolute max-md:-bottom-[100px] md:-right-[150px] md:-bottom-[400px] xl:w-[60%] xl:-right-[100px] xl:-bottom-[400px] -z-[5px]" // Adjust opacity as needed (0.2 = 20%)
          />
          <Link href={"/contact"}>
            <div className="z-10 flex justify-center items-center flex-col w-full gap-5">
              <Button
                variant="primary"
                rounded="xl"
                id="btn-jumbotron"
                className="flex rounded-full gap-5 py-2 pl-8 pr-1 items-center"
              >
                Let’s Get Started
                <div className="bg-white rounded-full w-fit h-fit p-3">
                  <ArrowUp
                    className="rotate-[50deg]  text-gray-500 "
                    size={20}
                  />
                </div>
              </Button>
              <Text
                variant="primary"
                size="h6"
                rounded="lg"
                className="text-gray-300 text-xl text-center"
              >
                Start your digital journey with Cherrypick.
              </Text>
            </div>
          </Link>
        </section>
      )}
      <div className="bg-white pt-20 pb-10">
        <div className="container mx-auto max-lg:px-6 lg:px-20">
          <div className="flex flex-col lg:flex-row space-y-10 lg:space-y-0 items-center justify-between max-lg:items-start py-8 max-lg:py-0">
            <Link href="#section-hero">
              <Image
                src="/images/logo-new.svg"
                alt="cherry-pick-logo-white"
                title="cherry-pick-logo-white"
                height={40}
                width={176}
              />
            </Link>
            <div className="w-fit max-w-[146px] grid gap-5 lg:hidden h-fit">
              <div className="text-[80px] font-medium text-gray-0 h-10">“</div>
              <span className="text-[32px] font-medium">
                Design it. Build it. Love it.
              </span>
            </div>
            <div className="flex gap-6 items-center overflow-auto justify-center max-[400px]:flex-col max-[400px]:justify-center max-lg:w-full">
              <Link href="/portfolio">
                <Text variant="primary" size="h4" className="max-lg:text-sm">
                  Portfolio
                </Text>
              </Link>
              <Link href="#">
                <Text variant="primary" size="h4" className="max-lg:text-sm">
                  Services
                </Text>
              </Link>
              <Link href="/about-us">
                <Text variant="primary" size="h4" className="max-lg:text-sm">
                  About us
                </Text>
              </Link>
              <Link href="/contact">
                <Text variant="primary" size="h4" className="max-lg:text-sm">
                  Contact
                </Text>
              </Link>
              <Link href="#section-hero">
                <div className="bg-red-cherry-500 p-3 rounded-full max-lg:p-1">
                  <ArrowUp color="white" className="max-lg:w-[70%] mx-auto" />
                </div>
              </Link>
            </div>
          </div>
          <div className="w-fit max-w-[146px] grid gap-5 max-lg:hidden h-fit">
            <div className="text-[80px] font-medium text-gray-0 h-10">“</div>
            <span className="text-[32px] font-medium">
              Design it. Build it. Love it.
            </span>
          </div>
          <div className="flex flex-col lg:flex-row gap-0 items-center justify-between w-full">
            <div className="flex  items-center py-8">
              <Text variant="black" size="h6" className="font-light">
                &copy; {new Date().getFullYear()} Cherrypick.All Rights Reserved
              </Text>
            </div>
            <div className="flex items-center justify-center lg:justify-end gap-3">
              <Link href="https://www.instagram.com/cherrypick.studio/">
                <CardIcon image="/images/instagram.svg" alt="instagram-icon" />
              </Link>
              <Link href="https://dribbble.com/cherrypick-studio">
                <CardIcon image="/images/dribbble.svg" alt="dribbble-icon" />
              </Link>
              <Link href="https://dribbble.com/cherrypick-studio">
                <CardIcon
                  image="/images/ri_behance-line.svg"
                  alt="behance-icon"
                />
              </Link>
              <Link href="https://www.linkedin.com/company/cherrypick-studio">
                <CardIcon image="/images/linkedin.svg" alt="linkedin-icon" />
              </Link>
              {/* {TODO : Add more social media icons here} */}
              {/* <div className="text-center lg:text-right">
                <Text variant="black" size="h5">
                  Payment Accepted
                </Text>
                <div className="flex items-center justify-center lg:justify-end space-x-5 mt-2">
                  <CardIcon
                    image="/images/icon-footer/cib_cc-visa.svg"
                    alt="visa-icon"
                  />
                  <CardIcon
                    image="/images/icon-footer/simple-icons_wise.svg"
                    alt="wise-icon"
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
