"use client";
import SectionTitle from "@/components/molecules/section-title";
import Text from "@/components/ui/text";
import Image from "next/image";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import CardProduct from "../molecules/card-product";

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
    <section className="px-10 container space-y-10 mx-auto" id="section-portofolio">
      <LazyMotion features={domAnimation}>
        <div className="flex w-full justify-between items-end max-md:flex-col gap-3">
          <div className="w-full">
            <SectionTitle
              title="Featured Projects"
              subtitle="Portofolio"
              desc='Explore selected projects that reflect our approach — user-centered, technically sound, and crafted to meet real business goals.' />
          </div>
          <div className="w-full h-auto self-stretch mt-auto ">
          <Button variant="bordered" className='h-fit rounded-full  md:ml-auto block'>View All</Button>
         </div>
        </div>

        {/* list projects  */}
        <div className="flex w-full items-center gap-5 max-md:flex-col">
          <CardProduct
            img={"/images/komerce-project.svg"}
            title={'Komerce'}
            list={[
              'Website','Ecommerce'
              ]} />
          
          <CardProduct
            img={"/images/harwi-project.svg"}
            title={'Harwi Gadget'}
            list={[
              'Website','Ecommerce'
            ]} />
        </div>
        
       <CardProduct
          img={"/images/termo-project.svg"}
          title={'Termo Beton'}
          list={[
            'Website','Company Profile'
            ]} />
        
        {/* other works projects  */}
        <div className="flex w-full justify-between items-end max-md:flex-col gap-3">
          <div className="w-full">
            <SectionTitle
              sizeTitle="h0"
              title="Other Works"
              desc='Not every design ends up in production — but every exploration helps us grow, think differently, and uncover new possibilities.' />
          </div>
          <div className="w-full h-auto self-stretch mt-auto">
          <Button variant="bordered" className='h-fit rounded-full md:ml-auto block'>See All Exploration</Button>
         </div>
        </div>

        {/* list projects  */}
        <div className="flex w-full items-center gap-5 max-md:flex-col">
          <CardProduct
            img={"/images/forti-project.svg"}
            title={'FortiSec'}
            list={[
              'Landing Page'
              ]} />
            
            <CardProduct
              img={"/images/symmetry-project.svg"}
              title={'Symmetry'}
              list={[
                'Landing Page'
              ]} />
                
            <CardProduct
                img={"/images/spinzy-project.svg"}
                title={'Spinzy'}
                list={[
                  'Landing Page'
                  ]} />
        </div>
        
        <div className="flex w-full items-center gap-5 max-md:flex-col">
            <CardProduct
              img={"/images/pulse-project.svg"}
              title={'PulseTrack'}
              list={[
              'Dashboard Design'
                ]} />
            
            <CardProduct
              img={"/images/komerce-2-project.svg"}
              title={'Komerce'}
              list={[
                'Landing Page'
              ]} />
        </div>
      </LazyMotion>
    </section>
  );
};

export default Works;
