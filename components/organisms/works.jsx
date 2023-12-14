"use client";
import SectionTitle from "@/components/molecules/section-title";
import Text from "@/components/ui/text";
import Image from "next/image";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";

const Works = () => {
  const laracampRef = useRef(null);
  const inLaracampView = useInView(laracampRef);
  const shamo = useRef(null);
  const inShamoView = useInView(shamo);
  const flutix = useRef(null);
  const inFlutixView = useInView(flutix);
  const micro = useRef(null);
  const inMicroView = useInView(micro);

  return (
    <section className="mb-16 pt-32 container mx-auto" id="section-works">
      <LazyMotion features={domAnimation}>
        <SectionTitle title="Our Works" subtitle="Latest Masterpieces" />
        <div className="mt-12 space-y-[72px]">
          {/* Laracamp */}
          <article
            className="grid grid-cols-1 lg:grid-cols-2 relative bg-gradient-to-r from-[#4D1DAB] to-[#7839F3] p-6 lg:py-[121px] lg:px-[103px] rounded-[32px] min-h-[550px]"
            ref={laracampRef}
          >
            <Image
              src="/images/bg-laracamp.svg"
              alt="cherrypick-bg-work-laracamp"
              title="cherrypick-bg-work-laracamp"
              height={251}
              width={271}
              className="absolute top-4 md:top-14 left-8 px-4 lg:px-0 lg:left-40 w-[251px] h-[271px] md:w-[364px] md:h-[394px]"
            />
            <div className="z-20 md:ml-8">
              <Image
                src="/images/logo-laracamp.svg"
                alt="cherrypick-logo-work-laracamp"
                title="cherrypick-logo-work-laracamp"
                height={40}
                width={200}
              />
              <Text
                variant="white"
                size="h4"
                className="block w-full lg:w-[378px] mt-4 text-justify leading-[30px]"
              >
                Laracamp is a bootcamp that helps junior developers who are
                really passionate about programming by providing several
                benefits such as learning videos, 1 on 1 mentoring programs,
                design kits, and many more.
              </Text>
            </div>
            <div className="relative">
              <m.div
                initial={{ opacity: 0 }}
                animate={inLaracampView && { opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src="/images/vector-laracamp.svg"
                  alt="cherrypick-work-laracamp"
                  title="cherrypick-work-laracamp"
                  height={461}
                  width={582}
                  className="lg:absolute -mb-16 mt-4 lg:mt-0 rounded-[20px] shadow-md lg:-bottom-24 lg:right-0 mx-auto"
                />
              </m.div>
            </div>
          </article>
          {/* Shamo & Flutix */}
          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-[72px] lg:gap-y-0">
            {/* Shamo */}
            <article
              className="relative flex flex-col bg-gradient-to-b from-[#1990A3] to-[#64C5D6] p-6 lg:py-10 lg:px-[103px] rounded-[32px]"
              ref={shamo}
            >
              <Image
                src="/images/bg-shamo.svg"
                alt="cherrypick-bg-work-shamo"
                title="cherrypick-bg-work-shamo"
                height={468}
                width={584}
                className="absolute bottom-44 md:bottom-0 inset-x-0 mx-auto"
              />
              <div className="relative z-20 order-last lg:order-first">
                <m.div
                  initial={{ opacity: 0 }}
                  animate={inShamoView && { opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.8, delay: 0.5 }}
                >
                  <Image
                    src="/images/vector-shamo.svg"
                    alt="cherrypick-work-shamo"
                    title="cherrypick-work-shamo"
                    height={733}
                    width={378}
                    className="hidden lg:block -mt-20 mx-auto rounded-[20px] shadow-md"
                  />
                  <Image
                    src="/images/vector-shamo-2.svg"
                    alt="cherrypick-logo-work-shamo"
                    title="cherrypick-logo-work-shamo"
                    height={733}
                    width={378}
                    className="block lg:hidden -mb-14 mt-4 mx-auto rounded-[20px] shadow-md"
                  />
                </m.div>
              </div>
              <div className="lg:mt-10 relative z-20">
                <Image
                  src="/images/logo-shamo.svg"
                  alt="cherrypick-logo-work-shamo-sm"
                  title="cherrypick-logo-work-shamo-sm"
                  height={40}
                  width={127}
                />
                <Text
                  variant="white"
                  size="h4"
                  className="block w-full mt-5 text-justify leading-[30px]"
                >
                  Shamo is a shoe sales application with a shopping experience
                  that prioritizes an easy user experience. and has various
                  types of shoes from famous brands.
                </Text>
              </div>
            </article>
            {/* Flutix */}
            <article
              className="relative lg:h-[850px] bg-gradient-to-b from-[#E5DEFF] to-[#DAD3F7] p-6 lg:py-10 lg:px-[103px] max-h-[863px] rounded-[32px]"
              ref={flutix}
            >
              <Image
                src="/images/bg-flutix.svg"
                alt="cherrypick-bg-work-flutix"
                title="cherrypick-bg-work-flutix"
                height={325}
                width={340}
                className="absolute top-4 px-4 inset-x-0 mx-auto"
              />
              <div className="relative z-20">
                <Image
                  src="/images/logo-flutix.svg"
                  alt="cherrypick-logo-work-flutix"
                  title="cherrypick-logo-work-flutix"
                  height={40}
                  width={127}
                />
                <Text
                  variant="flutix"
                  size="h4"
                  className="block w-full mt-5 text-justify leading-[30px] mb-6"
                >
                  Flutix is a cinema ticket sales application with various
                  attractive offers and various conveniences for its users.
                </Text>
              </div>
              <div className="lg:mt-10 relative z-20">
                <m.div
                  initial={{ opacity: 0 }}
                  animate={inFlutixView && { opacity: 1 }}
                  transition={{ ease: "easeIn", duration: 0.8, delay: 0.8 }}
                >
                  <Image
                    src="/images/vector-flutix.svg"
                    alt="cherrypick-work-flutix-sm"
                    title="cherrypick-work-flutix-sm"
                    height={673}
                    width={378}
                    className="hidden lg:block absolute top-6 inset-x-0 mx-auto rounded-[20px] shadow-md"
                  />
                  <Image
                    src="/images/vector-flutix-2.svg"
                    alt="cherrypick-work-flutix-sm"
                    title="cherrypick-work-flutix-sm"
                    height={733}
                    width={378}
                    className="block lg:hidden -mb-16 mx-auto rounded-[20px]"
                  />
                </m.div>
              </div>
            </article>
          </div>
          {/* Micro */}
          <article
            className="flex flex-col lg:flex-row lg:space-x-10 relative bg-gradient-to-r from-[#4D55BC] to-[#343A84] p-6 lg:py-[121px] lg:px-[103px] rounded-[32px]"
            ref={micro}
          >
            <Image
              src="/images/bg-micro.svg"
              alt="cherrypick-bg-work-micro"
              title="cherrypick-bg-work-micro"
              height={418}
              width={576}
              className="absolute top-4 px-4 lg:px-0 lg:right-28"
            />
            <div className="relative w-full lg:w-1/2 order-last lg:order-first z-30">
              <m.div
                initial={{ opacity: 0 }}
                animate={inMicroView && { opacity: 1 }}
                transition={{ ease: "easeIn", duration: 0.8, delay: 0.5 }}
              >
                <Image
                  src="/images/vector-micro.svg"
                  alt="cherrypick-work-micro"
                  title="cherrypick-work-micro"
                  height={452}
                  width={481}
                  className="lg:absolute -mb-14 md:-top-20 lg:left-0 mt-4 lg:mt-0 rounded-[20px] shadow-md mx-auto"
                />
              </m.div>
            </div>
            <div className="z-20 w-full lg:w-1/2">
              <Image
                src="/images/logo-micro.svg"
                alt="cherrypick-logo-work-micro"
                title="cherrypick-logo-work-micro"
                height={40}
                width={203}
              />
              <Text
                variant="white"
                size="h4"
                className="block w-full lg:w-[450px] mt-5 text-justify leading-[30px]"
              >
                Micro is a website-based online course application that offers
                various kinds of online courses. Micro offers a wide selection
                of materials ranging from business development, content writing,
                game development, and many other learning materials.
              </Text>
            </div>
          </article>
        </div>
      </LazyMotion>
    </section>
  );
};

export default Works;
