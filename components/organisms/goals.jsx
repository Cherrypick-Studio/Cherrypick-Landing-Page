"use client";
import { m, useInView, LazyMotion, domAnimation } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const Goals = () => {
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Image
      src={'/images/second-section.svg'}
      width={100}
      height={200}
      className="w-full"
      alt="cherry-pick-goals"
    />
  );
};

export default Goals;
