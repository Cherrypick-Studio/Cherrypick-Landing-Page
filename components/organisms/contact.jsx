"use client";
import { ArrowUp } from "lucide-react";
import { useRef } from "react";
import { domAnimation, LazyMotion, useInView, m } from "motion/react";
import { Button } from "@/components/ui/button";

const ContactSection = () => {
  const imageRef = useRef(null);
  const isImageView = useInView(imageRef);
  const introRef = useRef(null);
  const isIntroView = useInView(introRef);
  return (
    <LazyMotion features={domAnimation}>
      <section className="px-10 py-[100px] max-lg:px-10 lg:px-20 container space-y-3 mx-auto relative overflow-hidden">
        <m.div
          initial={{ opacity: 0, x: 50 }}
          animate={isIntroView && { opacity: 1, x: 0 }}
          transition={{
            ease: "easeIn",
            duration: 0.6,
            delay: 0.5,
          }}
        >
          <div className="z-10 xl:w-[960px] space-y-5" ref={introRef}>
            <h1 className="text-black text-[80px] max-lg:text-6xl">
              Have a challenge? We’ve got the solution.
            </h1>
            <h2 className="text-gray-150 text-[28px] max-lg:text-2xl">
              Tell us what you need. Whether you have a full brief or just an
              idea, we’re here to help you bring it to life.
            </h2>
            <Button
              variant="primary"
              rounded="xl"
              id="btn-jumbotron"
              className="flex rounded-full gap-5 py-2 pl-8 pr-1 items-center"
              onClick={() => {
                window.open("https://wa.me/6282326546380?text=Hi%20Cherrypick%20Studio!%20I%27m%20interested%20in%20collaborating%20on%20an%20IT%20project%20with%20your%20team.%20Could%20we%20schedule%20a%20time%20to%20discuss%20further%3F", "_blank", "noopener,noreferrer");
              }}
            >
              Book a Call
              <div className="bg-white rounded-full w-fit h-fit p-3">
                <ArrowUp className="rotate-[50deg]  text-gray-500 " size={20} />
              </div>
            </Button>
          </div>
        </m.div>
      </section>
    </LazyMotion>
  );
};

export default ContactSection;
