"use client";
import SectionTitle from "../molecules/section-title";
import CardServices from "../molecules/card-services";
import devLottie from "@/public/lotties/services-dev.json";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import { useRef } from "react";
import { Separator } from "../ui/separator";

const MainAboutUsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  const dummyData = [
    {
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We start by understanding your goals, users, and business model. You can simply send us your requirements via email, or we’ll schedule a 30-minute briefing call to align on your needs. The goal is to uncover the real problems and opportunities before we design solutions.",
      icon: "/images/strategy-icon.svg",
    },
    {
      number: "02",
      title: "Planning & Scope",
      description:
        "With a shared vision, we define the timeline, deliverables, and budget. We’re flexible and open to negotiation—we understand every business has different constraints, so we’ll help you prioritize features to stay within budget while still achieving your goals.",
      icon: "/images/plan-icon.svg",
    },
    {
      number: "03",
      title: "UI/UX Design",
      description:
        "Our designers turn ideas into intuitive, elegant interfaces. Every screen and interaction is crafted with care, ensuring a seamless user experience that reflects your brand and keeps users engaged.",
      icon: "/images/design-icon.svg",
    },
    {
      number: "04",
      title: "Development",
      description:
        "Using modern, scalable technologies, our developers bring the design to life—whether it’s a web app, mobile app, or backend system. We follow clean code standards and agile development practices for flexibility and efficiency.",
      icon: "/images/code-icon.svg",
    },
    {
      number: "05",
      title: "Testing, QA & Documentation",
      description:
        "We perform rigorous testing to ensure your product works flawlessly. This includes functional tests, UI checks, and cross-browser/device compatibility. If needed, we offer penetration testing and security audits. You'll also receive clear project documentation for handover or internal use. We handle deployment too—so your product goes live smoothly and securely.",
      icon: "/images/testing-icon.svg",
    },
    {
      number: "06",
      title: "Launch & Support",
      description:
        "Once approved, we support your go-live with monitoring and optimization. Post-launch, we offer optional maintenance, version updates, or feature iteration depending on your needs.",
      icon: "/images/launch-icon.svg",
    },
  ];
  return (
    <section
      className="container mx-auto max-lg:px-10 lg:px-20 py-28"
      ref={ref}
    >
      <LazyMotion features={domAnimation}>
        <m.div
          className="space-y-[200px]"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView && { opacity: 1, y: 0 }}
          transition={{
            ease: "easeIn",
            duration: 0.4,
            delay: 0.3,
          }}
        >
          <div className="flex w-full justify-between items-end max-md:flex-col gap-3">
            <div className="w-full">
              <SectionTitle
                title="We’re Talented Development Team"
                subtitle="ABOUT US"
                isHeading
                desc="We specialize in crafting high-quality web and mobile applications with a strong emphasis on exceptional UI/UX design."
              />
            </div>
            <div className="w-full h-auto self-stretch mt-auto "></div>
          </div>

          <Separator />

          <div className="space-y-20">
            <div className="flex w-full justify-between items-end max-md:flex-col gap-3">
              <div className="w-full">
                <SectionTitle
                  title="This is How We Make Things Happen."
                  desc="From first hello to final delivery, we make it smooth, transparent, and goal-focused."
                />
              </div>
              <div className="w-full h-auto self-stretch mt-auto "></div>
            </div>
            <div className="flex gap-y-12 max-lg:flex-col md:gap-y-12 md:gap-x-8 mt-12 w-full flex-col">
              {dummyData.map((item, index) => (
                <CardServices
                  key={index}
                  number={item.number}
                  lottieFile={devLottie}
                  icon={item.icon}
                  title={item.title}
                  description={item.description}
                />
              ))}
            </div>
          </div>
        </m.div>
      </LazyMotion>
    </section>
  );
};

export default MainAboutUsSection;
