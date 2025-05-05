"use client";
import SectionTitle from "@/components/molecules/section-title";
import CardClient from "../molecules/card-client";
import { m, LazyMotion, domAnimation, useInView } from "framer-motion";
import { useRef } from "react";

const topClients = [
  {
    img: "/images/flutix.svg",
    alt: "cherrypick-clients-flutix",
  },
  {
    img: "/images/harwigadget.svg",
    alt: "cherrypick-clients-harwigadget",
  },
  {
    img: "/images/kyoo.svg",
    alt: "cherrypick-clients-kyoo",
  },
  {
    img: "/images/komerce.svg",
    alt: "cherrypick-clients-komerce",
  },
];
const bottomClients = [
  {
    img: "/images/moonton.svg",
    alt: "cherrypick-clients-moonton",
  },
  {
    img: "/images/laracamp.svg",
    alt: "cherrypick-clients-laracamp",
  },
  {
    img: "/images/shamo.svg",
    alt: "cherrypick-clients-shamo",
  },
  {
    img: "/images/micro.svg",
    alt: "cherrypick-clients-micro",
  },
];
const Clients = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <section className="my-16 md:container md:mx-auto !px-10">
      <div className="xl:w-[800px]">
      <SectionTitle
        title="Our Clients"
        subtitle="Some of our partners and clients"
        desc='They choose us not just for our expertise, but for the way we collaborate —
          with care, clarity, and commitment to results.'   
      />
     </div>
      <div className="mt-12" ref={ref}>
        <LazyMotion features={domAnimation}>
          <div className="flex relative flex-col w-full justify-between xl:gap-20 max-lg:gap-10">
            <div className="relative flex items-center justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-10">
                {topClients.map((client, index) => (
                  <m.div
                    key={client.alt}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView && { opacity: 1, y: 0 }}
                    transition={{
                      ease: "easeIn",
                      duration: 0.4,
                      delay: index * 0.3,
                    }}
                  >
                    <CardClient image={client.img} alt={client.alt} />
                  </m.div>
                ))}
              </div>
              <div className="relative flex items-center justify-between max-lg:grid max-lg:grid-cols-2 max-lg:gap-10">
                {bottomClients.map((client, index) => (
                  <m.div
                    key={client.alt}
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView && { opacity: 1, y: 0 }}
                    transition={{
                      ease: "easeIn",
                      duration: 0.4,
                      delay: (index + topClients.length) * 0.3,
                    }}
                  >
                    <CardClient image={client.img} alt={client.alt} />
                  </m.div>
                ))}
              </div>
          </div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default Clients;
