'use client'
import SectionTitle from "../molecules/section-title";
import CardServices from "../molecules/card-services";
import devLottie from "@/public/lotties/services-dev.json";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import { Separator } from "../ui/separator";

const MainServiceSection = () =>
{
  const ref = useRef(null);
    const isInView = useInView(ref);
    const dummyData =
        [
            {
                number: '01',
                title: 'Development',
                description:'Turning ideas into real digital products is a valid indicator that beautiful designs can be created and implemented.',
                icon: '/images/code-icon.svg',
                products:["HTML/JS/CSS","ReactJS","NextJS",'Pyhton','Golang','Laravel']
              },
            {
                number: '02',
                title: 'UI/UX Design',
                description: 'Designing interfaces by imagining, creating, and iterating products that solve user problems or meet specific needs.',
                icon: '/images/design-icon.svg',
                products: ["UI/UX Design", 'Design System', 'UI Kit','UI Templates','Logo','Web Design','Mobile Apps Design']
        },
        
    ]
  return (
    <section className="container mx-auto max-lg:px-10 lg:px-20 py-28" ref={ref}>
      <LazyMotion  features={domAnimation}>
        <m.div
          className="space-y-[200px]"
        initial={{ opacity: 0, y: 50 }}
        animate={isInView && { opacity: 1, y: 0 }}
        transition={{
          ease: "easeIn",
          duration: 0.4,
          delay:  0.3,
          }}>
           <div className="flex w-full justify-between items-end max-md:flex-col gap-3">
              <div className="w-full">
              <SectionTitle
                  title="Smart Solutions, Real Impact"
                  subtitle="SERVICES"
                  desc="Get the design, tech, and strategy support you need — all in one place."/>
              </div>
              <div className="w-full h-auto self-stretch mt-auto ">
            </div>
          </div>

          <Separator />
          
          <div className="space-y-20">
              <div className="flex w-full justify-between items-end max-md:flex-col gap-3">
                  <div className="w-full">
                  <SectionTitle
                      title="What We Do Best"
                      desc="From design to development, we offer tailored digital services to help your brand grow with clarity and confidence."/>
                  </div>
                  <div className="w-full h-auto self-stretch mt-auto ">
                </div>
              </div>
            <div className="flex gap-y-12 max-lg:flex-col md:gap-y-12 md:gap-x-8 mt-12 w-full flex-col" >
                {dummyData.map((item, index) => (
                  <CardServices
                    key={index}
                    number={item.number}
                    lottieFile={devLottie}
                    icon={item.icon}
                    title={item.title}
                        description={item.description}
                        products={item.products}
                />
                ))}
              </div>
         </div>
        </m.div>
     </LazyMotion>
    </section>
  );
};

export default MainServiceSection;
