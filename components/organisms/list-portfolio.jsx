"use client";
import SectionTitle from "@/components/molecules/section-title";
import { m, useInView, LazyMotion, domAnimation } from "motion/react";
import { useRef } from "react";
import { Button } from "../ui/button";
import CardProduct from "../molecules/card-product";
import { DribbbleIcon } from "lucide-react";
import Link from "next/link";

// Animation variants
const fadeInVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideVariants = {
  fromRight: { opacity: 0, x: 50 },
  fromLeft: { opacity: 0, x: -50 },
  fromBottom: { opacity: 0, y: 50 },
  visible: { opacity: 1, x: 0, y: 0 }
};

// Default transition
const defaultTransition = {
  ease: "easeIn",
  duration: 0.6,
  delay: 0.5,
};

// Animated Project Card Component
const AnimatedProjectCard = ({ project, animationType = "fromRight", customTransition }) => {
  const ref = useRef(null);
  const isInView = useInView(ref);
  
  return (
    <m.div
      initial={slideVariants[animationType]}
      animate={isInView && slideVariants.visible}
      transition={customTransition || defaultTransition}
    >
      <div ref={ref}>
        <CardProduct
          img={project.img}
          title={project.title}
          url={project.url}
          list={project.list}
        />
      </div>
    </m.div>
  );
};

// Project Grid Layout Component
const ProjectGrid = ({ projects, className = "flex w-full items-center gap-5 max-md:flex-col" }) => (
  <div className={className}>
    {projects.map((project, index) => (
      <AnimatedProjectCard
        key={project.id}
        project={project}
        animationType={project.animationType}
        customTransition={project.customTransition}
      />
    ))}
  </div>
);

const Works = ({ titleIntro = "Featured Projects", hideContent = false }) => {
  const introRef = useRef(null);
  const isIntroView = useInView(introRef);
  const introOtherRef = useRef(null);
  const isIntroOtherView = useInView(introOtherRef);

  // Featured Projects Data
  const featuredProjects = [
    // First row
    [
      {
        id: "komerce",
        img: "/images/komerce-project.svg",
        title: "Komerce",
        url: "komerce",
        list: ["Website", "Ecommerce"],
        animationType: "fromRight",
        customTransition: { ...defaultTransition, duration: 0.1 }
      },
      {
        id: "harwi",
        img: "/images/harwi-project.svg",
        title: "Harwi Gadget",
        url: "harwi",
        list: ["Website", "Ecommerce"],
        animationType: "fromLeft"
      }
    ],
    // Single project
    [
      {
        id: "termo-beton",
        img: "/images/termo-project.svg",
        title: "Termo Beton",
        url: "termo-beton",
        list: ["Website", "Company Profile"],
        animationType: "fromBottom"
      }
    ],
    // Second row
    [
      {
        id: "kyoo",
        img: "/images/kyoo-project.svg",
        title: "Kyoo",
        url: "kyoo",
        list: ["Website", "Ecommerce"],
        animationType: "fromRight"
      },
      {
        id: "gamemarket",
        img: "/images/gamemarket-project.svg",
        title: "Game Market",
        url: "gamemarket",
        list: ["Website", "Ecommerce"],
        animationType: "fromLeft"
      }
    ]
  ];

  // Other Works Data
  const otherWorksProjects = [
    // First row
    [
      {
        id: "fortisec",
        img: "/images/forti-project.svg",
        title: "FortiSec",
        list: ["Landing Page"],
        animationType: "fromRight"
      },
      {
        id: "symmetry",
        img: "/images/symmetry-project.svg",
        title: "Symmetry",
        url: "#",
        list: ["Landing Page"],
        animationType: "fromBottom"
      },
      {
        id: "spinzy",
        img: "/images/spinzy-project.svg",
        title: "Spinzy",
        url: "#",
        list: ["Landing Page"],
        animationType: "fromLeft"
      }
    ],
    // Second row
    [
      {
        id: "pulsetrack",
        img: "/images/pulse-project.svg",
        title: "PulseTrack",
        url: "#",
        list: ["Dashboard Design"],
        animationType: "fromRight"
      },
      {
        id: "komerce-other",
        img: "/images/komerce-2-project.svg",
        title: "Komerce",
        url: "#",
        list: ["Landing Page"],
        animationType: "fromLeft"
      }
    ]
  ];

  return (
    <section
      className="max-lg:px-6 lg:px-20 container space-y-10 lg:space-y-20 mx-auto"
      id="section-portofolio"
    >
      <LazyMotion features={domAnimation}>
        {/* Featured Projects Header */}
        <m.div
          initial={slideVariants.fromRight}
          animate={isIntroView && slideVariants.visible}
          transition={{
            ease: "easeIn",
            duration: 0.4,
            delay: 0.3,
          }}
        >
          <div
            className="flex w-full justify-between items-end max-md:flex-col gap-5"
            ref={introRef}
          >
            <div className="w-full">
              <SectionTitle
                title={titleIntro}
                subtitle="Portofolio"
                desc={
                  !hideContent &&
                  "Explore selected projects that reflect our approach — user-centered, technically sound, and crafted to meet real business goals."
                }
              />
            </div>
            {!hideContent && (
              <div className="w-full h-auto self-stretch mt-auto">
                <Link href="/portfolio">
                  <Button
                    variant="bordered"
                    className="h-fit rounded-full md:ml-auto block"
                  >
                    View All
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </m.div>

        {/* Featured Projects */}
        {featuredProjects.map((projectRow, index) => (
          <ProjectGrid
            key={`featured-${index}`}
            projects={projectRow}
            className={projectRow.length === 1 ? "w-full" : "flex w-full items-center gap-5 max-md:flex-col"}
          />
        ))}

        {/* Other Works Header */}
        <m.div
          initial={slideVariants.fromBottom}
          animate={isIntroOtherView && slideVariants.visible}
          transition={defaultTransition}
        >
          <div
            className="flex w-full justify-between items-end max-md:flex-col gap-5"
            ref={introOtherRef}
          >
            <div className="w-full">
              <SectionTitle
                sizeTitle="h0"
                title="Other Works"
                desc={
                  !hideContent &&
                  "Not every design ends up in production — but every exploration helps us grow, think differently, and uncover new possibilities."
                }
              />
            </div>
            {!hideContent && (
              <div className="w-full h-auto self-stretch mt-auto">
                <Link href={"https://dribbble.com/rdhidayat"} target="_blank">
                  <Button
                    variant="bordered"
                    className="h-fit flex items-center gap-2 rounded-full md:ml-auto"
                  >
                    See All Exploration
                    <DribbbleIcon size={20} />
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </m.div>

        {/* Other Works Projects */}
        {otherWorksProjects.map((projectRow, index) => (
          <ProjectGrid
            key={`other-${index}`}
            projects={projectRow}
          />
        ))}
      </LazyMotion>
    </section>
  );
};

export default Works;
