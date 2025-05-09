import Image from "next/image"
import Text from "../ui/text"
import { Button } from "../ui/button"
import { ArrowUp } from "lucide-react"
import { useRef } from "react"
import { domAnimation, LazyMotion, useInView,m } from "framer-motion"
import Link from "next/link"

const AboutUs = () =>
{ 
    const imageRef = useRef(null);
    const isImageView = useInView(imageRef);
    const introRef = useRef(null);
    const isIntroView = useInView(introRef);
    return (
        <LazyMotion features={domAnimation}>
            <section className="px-10 py-[160px] max-lg:px-10 lg:px-20 container space-y-3 mx-auto bg-[#FBFBFB] relative overflow-hidden" id="section-aboutus">
            {/* Background image with opacity */}
                <m.div
                initial={{ opacity: 0, y: 0 }}
                animate={isImageView && { opacity: 1, y: 0 }}
                transition={{
                  ease: "easeIn",
                  duration: 0.5,
                  delay:  0.3,
                }}>
                    <div ref={imageRef}>
                        <Image 
                            src="/images/logo-noword.svg" // Replace with your image path
                            alt="Background"
                            width={100}
                            height={100}
                            className="opacity-20 w-full absolute max-md:-bottom-[100px] md:-right-[150px] md:-bottom-[400px] xl:w-[60%] xl:-right-[100px] xl:-bottom-[400px] -z-[5px]" // Adjust opacity as needed (0.2 = 20%)
                        />
                    </div>
                </m.div>
                <m.div
                initial={{ opacity: 0, x: 50 }}
                animate={isIntroView && { opacity: 1, x: 0 }}
                transition={{
                  ease: "easeIn",
                  duration: 0.6,
                  delay:  0.5,
                }}>
                    <div className="z-10 xl:w-[960px] space-y-5" ref={introRef}>
                        <Text variant="primary" size="h6" rounded="lg" className="text-red-cherry-500">
                            WHO WE ARE
                        </Text>
                        <p className="text-[#939393] text-[48px]">
                            We are a <span className="text-black">digital product agency</span> based in Malang, Indonesia.
                        </p>
                        <p className="text-[#939393] text-[48px]">
                            <span className="text-black">Create innovative website and mobile apps with best experience for user.</span>
                            And we provide a <span className="text-black">high-quality service</span> in UI/ UX Design & Development.
                        </p>
                        <Link href={'/about-us'}>
                        <Button variant="primary" rounded="xl" id="btn-jumbotron" className='flex rounded-full gap-5 py-2 pl-8 pr-1 items-center'>
                            Get to Know Us
                            <div className="bg-white rounded-full w-fit h-fit p-3">
                            <ArrowUp className="rotate-[50deg]  text-gray-500 " size={20}/>
                            </div>
                            </Button>
                        </Link>
                    </div>
                </m.div>
        </section>
        </LazyMotion>
    )
}

export default AboutUs