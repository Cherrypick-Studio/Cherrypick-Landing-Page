"use client";
import SectionTitle from "@/components/molecules/section-title";
import CardClient from "../molecules/card-client";
import { m, LazyMotion, domAnimation } from "framer-motion";

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
  return (
    <section className="my-16 md:container md:mx-auto !px-0">
      <SectionTitle
        title="Our Clients"
        subtitle="Some of our partners and clients"
      />
      <div className="mt-12">
        <LazyMotion features={domAnimation}>
          <div className="flex relative flex-col w-full justify-between">
            <div className="w-24 h-64 hidden lg:block absolute z-20 bg-white shadow-custom-shadow-left top-0 left-0" />
            <div>
              <div className="!overflow-x-auto relative flex items-center justify-center space-x-6 py-4 w-full md:no-scrollbar">
                {topClients.map((client, index) => (
                  <m.div
                    key={client.alt}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
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
              <div className="!overflow-x-auto relative flex items-center justify-center space-x-6 py-4 w-full md:no-scrollbar">
                {bottomClients.map((client, index) => (
                  <m.div
                    key={client.alt}
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
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
            <div className="w-24 h-64 hidden lg:block absolute z-20 bg-white shadow-custom-shadow-right top-0 right-0" />
          </div>
        </LazyMotion>
      </div>
    </section>
  );
};

export default Clients;
