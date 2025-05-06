import SectionTitle from "../molecules/section-title";
import CardServices from "../molecules/card-services";
import devLottie from "@/public/lotties/services-dev.json";
import brandLottie from "@/public/lotties/services-brand.json";
import productLottie from "@/public/lotties/services-product.json";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { Button } from "../ui/button";
import { useRef } from "react";

const Services = () =>
{
  const ref = useRef(null);
  const isInView = useInView(ref);
  return (
    <section className="container space-y-20 mx-auto lg:px-12" id="section-services">
       <div className="flex w-full justify-between items-end max-md:flex-col gap-3">
          <div className="w-full">
          <SectionTitle
              title="We Built for Impact"
              subtitle="Services"
              desc="Whether you're building from scratch or improving an existing product, 
                  our team brings deep expertise and a proven process to deliver results you can count on."/>
          </div>
          <div className="w-full h-auto self-stretch mt-auto ">
          <Button variant="bordered" className='h-fit rounded-full  md:ml-auto block'>Learn More</Button>
         </div>
      </div>
      <LazyMotion  features={domAnimation}>
        <m.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
          duration: 0.4,
          delay:  0.3,
        }}>
        <div className="flex gap-y-12 max-lg:flex-col md:gap-y-12 md:gap-x-8 mt-12" ref={ref}>
            <CardServices
              number={'01'}
              lottieFile={devLottie}
              icon="/images/code-icon.svg"
              title="Development"
              description="Turning ideas into real digital products is a valid indicator that beautiful designs can be created and implemented."
            />
            <CardServices
              number={'02'}
              lottieFile={brandLottie}
              icon="/images/design-icon.svg"
              title="Brand Identity"
              description="Through branding, the company will have strong awareness, so that consumers can easily identify and remember the brand."
              /> 
          </div>
        </m.div>
     </LazyMotion>
    </section>
  );
};

export default Services;
