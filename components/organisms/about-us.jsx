import Image from "next/image"
import Text from "../ui/text"
import { Button } from "../ui/button"
import { ArrowUp } from "lucide-react"

const AboutUs = () =>
{ 
    return (
        <section className="px-10 py-[160px] container space-y-3 mx-auto bg-[#FBFBFB] relative overflow-hidden" id="section-aboutus">
            {/* Background image with opacity */}
                <Image 
                    src="/images/logo-noword.svg" // Replace with your image path
                    alt="Background"
                    width={100}
                    height={100}
                    className="opacity-20 w-full absolute max-md:-bottom-[100px] md:-right-[150px] md:-bottom-[400px] xl:w-[60%] xl:-right-[100px] xl:-bottom-[400px] -z-[5px]" // Adjust opacity as needed (0.2 = 20%)
                />
            <div className="z-10 xl:w-[960px] space-y-5">
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
                <Button variant="primary" rounded="xl" id="btn-jumbotron" className='flex rounded-full gap-5 py-2 pl-8 pr-1 items-center'>
                    Get to Know Us
                    <div className="bg-white rounded-full w-fit h-fit p-3">
                    <ArrowUp className="rotate-[50deg]  text-gray-500 " size={20}/>
                    </div>
                </Button>
           </div>
        </section>
    )
}

export default AboutUs