"use client";
import Clients from "@/components/organisms/clients";
import Goals from "@/components/organisms/goals";
import MainSection from "@/components/organisms/main-section";
import Services from "@/components/organisms/services";
import Works from "@/components/organisms/list-portfolio";
import Lottie from "lottie-react";
import splashLottie from "@/public/lotties/splash.json";
import { m, LazyMotion, domAnimation } from "framer-motion";
import AboutUs from "@/components/organisms/about-us";
import Highlights from "@/components/organisms/highlights";
import LenisProvider from "@/components/molecules/lenis";
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations('HomePage');

  return (
    <LenisProvider>
       <LazyMotion features={domAnimation}>
        <m.div
          initial={{ opacity: 1, height: "100vh"}}
          animate={{ opacity: 0, height: 0 }}
          exit={{ y: -1000, opacity: 0, height: 0 }}
          transition={{ ease: "easeOut", duration: 0.5, delay: 2 }}
          className="fixed top-0 left-0 w-full h-full z-50"
          style={{
            pointerEvents: "none",
          }}
          onAnimationComplete={() => {
            document.querySelector('.splash-container')?.classList.add('hidden');
          }}
        >
          <div className="splash-container flex items-center justify-center w-full h-[100dvh] bg-red-cherry-500 z-50">
            <Lottie animationData={splashLottie} loop={false} className="lg:min-w-[50%]" />
          </div>
        </m.div>
      </LazyMotion>
      <div className="flex flex-col space-y-20 md:gap-y-[100px] gap-y-8">
        <MainSection />
        <Goals />
        <Works />
        <AboutUs />
        <Services />
        <Clients />
        <Highlights />
      </div>
    </LenisProvider>
  );
}