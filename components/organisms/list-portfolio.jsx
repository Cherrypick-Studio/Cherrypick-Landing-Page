"use client";
import SectionTitle from "@/components/molecules/section-title";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import { Button } from "../ui/button";
import CardProduct from "../molecules/card-product";
import { DribbbleIcon } from "lucide-react";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Works = ({
  titleIntro ='Featured Projects',
  hideContent = false
}) =>
{
  const introRef = useRef(null);
  const isIntroView = useInView(introRef);
  const komerceRef = useRef(null);
  const isKomerceView = useInView(komerceRef);
  const harwiRef = useRef(null);
  const isHarwiView = useInView(harwiRef);
  const betonRef = useRef(null);
  const isBetonView = useInView(betonRef);

  // other works animate 
  const introOtherRef = useRef(null);
  const isIntroOtherView = useInView(introOtherRef);
  const fortiRef = useRef(null);
  const isFortiView = useInView(fortiRef);
  const symmetryRef = useRef(null);
  const isSymmetryView = useInView(symmetryRef);
  const spinzyRef = useRef(null);
  const isSpinzyView = useInView(spinzyRef);
  const pulseRef = useRef(null);
  const isPulseView = useInView(pulseRef);
  const komerceOtherRef = useRef(null);
  const isKomerceOtherView = useInView(komerceOtherRef);

  const router =useRouter()
  return (
    <section className="max-lg:px-6 lg:px-20 container space-y-10 lg:space-y-20 mx-auto" id="section-portofolio">
      <LazyMotion features={domAnimation}>
        <m.div
         initial={{ opacity: 0, x: 50 }}
         animate={isIntroView && { opacity: 1, x: 0 }}
         transition={{
           ease: "easeIn",
           duration: 0.4,
           delay:  0.3,
         }}>
        <div className="flex w-full justify-between items-end max-md:flex-col gap-5" ref={introRef}>
          <div className="w-full">
            <SectionTitle
              title={titleIntro}
              subtitle="Portofolio"
              desc={!hideContent && 'Explore selected projects that reflect our approach — user-centered, technically sound, and crafted to meet real business goals.'} />
          </div>
            {!hideContent &&
              <div className="w-full h-auto self-stretch mt-auto ">
                <Link href='/portfolio'>
                  <Button variant="bordered" className='h-fit rounded-full  md:ml-auto block'>View All</Button>
                </Link>
              </div>}
        </div>
       </m.div>

        {/* list projects  */}
        <div className="flex w-full items-center gap-5 max-md:flex-col">
          <m.div
           initial={{ opacity: 0, x: 50 }}
           animate={isKomerceView && { opacity: 1, x: 0 }}
           transition={{
             ease: "easeIn",
             duration: 0.6,
             delay:  0.5,
           }}>
            <div ref={komerceRef}>
            <CardProduct
            
            img={"/images/komerce-project.svg"}
                title={'Komerce'}
                url="komerce"
            list={[
              'Website','Ecommerce'
              ]} />
           </div>
         </m.div>
          
         <m.div
           initial={{ opacity: 0, x: -50 }}
           animate={isHarwiView && { opacity: 1, x: 0 }}
           transition={{
             ease: "easeIn",
             duration: 0.6,
             delay:  0.5,
           }}>
            <div ref={harwiRef}>
            <CardProduct
              img={"/images/harwi-project.svg"}
                title={'Harwi Gadget'}
                url="harwi"
              list={[
                'Website','Ecommerce'
              ]} />
            </div>
         </m.div>
        </div>
        
        <m.div
         initial={{ opacity: 0, y: 50 }}
         animate={isBetonView && { opacity: 1, y: 0 }}
         transition={{
           ease: "easeIn",
           duration: 0.6,
           delay:  0.5,
         }}>
          <div ref={betonRef}>
          <CardProduct
          img={"/images/termo-project.svg"}
              title={'Termo Beton'}
              url="termo-beton"
          list={[
            'Website','Company Profile'
            ]} />
        </div>
        </m.div>
        
        <div className="flex w-full items-center gap-5 max-md:flex-col">
          <m.div
           initial={{ opacity: 0, x: 50 }}
           animate={isKomerceView && { opacity: 1, x: 0 }}
           transition={{
             ease: "easeIn",
             duration: 0.6,
             delay:  0.5,
           }}>
            <div ref={komerceRef}>
            <CardProduct
            
            img={"/images/kyoo-project.svg"}
                title={'Kyoo'}
                url="kyoo"
            list={[
              'Website','Ecommerce'
              ]} />
           </div>
         </m.div>
          
         <m.div
           initial={{ opacity: 0, x: -50 }}
           animate={isHarwiView && { opacity: 1, x: 0 }}
           transition={{
             ease: "easeIn",
             duration: 0.6,
             delay:  0.5,
           }}>
            <div ref={harwiRef}>
            <CardProduct
              img={"/images/gamemarket-project.svg"}
                title={'Game Market'}
                url="gamemarket"
              list={[
                'Website','Ecommerce'
              ]} />
            </div>
         </m.div>
        </div>
        
        {/* other works projects  */}
        <m.div
         initial={{ opacity: 0, y: 50 }}
         animate={isIntroOtherView && { opacity: 1, y: 0 }}
         transition={{
           ease: "easeIn",
           duration: 0.6,
           delay:  0.5,
         }}>
          <div className="flex w-full justify-between items-end max-md:flex-col gap-5" ref={introOtherRef}>
            <div className="w-full">
              <SectionTitle
                sizeTitle="h0"
                title="Other Works"
                desc={!hideContent && 'Not every design ends up in production — but every exploration helps us grow, think differently, and uncover new possibilities.'} />
            </div>
           {!hideContent &&  <div className="w-full h-auto self-stretch mt-auto">
              <Button variant="bordered" className='h-fit flex items-center gap-2 rounded-full md:ml-auto'>
                See All Exploration
                <DribbbleIcon size={20}/>
              </Button>
          </div>}
          </div>
       </m.div>

        {/* list projects  */}
        <div className="flex w-full items-center gap-5 max-md:flex-col">
          <m.div
            initial={{ opacity: 0, x: 50 }}
            animate={isFortiView && { opacity: 1, x: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.6,
              delay:  0.5,
            }}>
              <div ref={fortiRef}>
              <CardProduct
                img={"/images/forti-project.svg"}
                title={'FortiSec'}
                list={[
                  'Landing Page'
                  ]} />
            </div>
          </m.div>

          <m.div
            initial={{ opacity: 0, y: 50 }}
            animate={isSymmetryView && { opacity: 1, y: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.6,
              delay:  0.5,
            }}>
              <div ref={symmetryRef}>
                <CardProduct
                  img={"/images/symmetry-project.svg"}
                title={'Symmetry'}
                url="#"
                  list={[
                    'Landing Page'
                  ]} />
            </div>
          </m.div>
                
          <m.div
            initial={{ opacity: 0, x: -50 }}
            animate={isSpinzyView && { opacity: 1, x: 0 }}
            transition={{
              ease: "easeIn",
              duration: 0.6,
              delay:  0.5,
            }}>
              <div ref={spinzyRef}>
              <CardProduct
                  img={"/images/spinzy-project.svg"}
                title={'Spinzy'}
                url="#"
                  list={[
                    'Landing Page'
                    ]} />
            </div>
          </m.div>
        </div>
        
        <div className="flex w-full items-center gap-5 max-md:flex-col">
          <m.div
              initial={{ opacity: 0, x: 50 }}
              animate={isPulseView && { opacity: 1, x: 0 }}
              transition={{
                ease: "easeIn",
                duration: 0.6,
                delay:  0.5,
              }}>
                <div ref={pulseRef}>
              <CardProduct
                img={"/images/pulse-project.svg"}
                title={'PulseTrack'}
                url="#"
                list={[
                'Dashboard Design'
                  ]} />
              </div>
          </m.div>
            
          <m.div
              initial={{ opacity: 0, x: -50 }}
              animate={isKomerceOtherView && { opacity: 1, x: 0 }}
              transition={{
                ease: "easeIn",
                duration: 0.6,
                delay:  0.5,
              }}>
              <div ref={komerceOtherRef}>
                <CardProduct
                  img={"/images/komerce-2-project.svg"}
                title={'Komerce'}
                url="#"
                  list={[
                    'Landing Page'
                  ]} />
              </div>
          </m.div>
        </div>
      </LazyMotion>
    </section>
  );
};

export default Works;
