"use client";
import React from "react";
import { m, LazyMotion, domAnimation } from "motion/react";

function Custom404Content() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-red-cherry-500 z-50">
      <LazyMotion features={domAnimation}>
        <m.div>
          <h1 className="text-2xl text-white">Seems you&apos;re lost</h1>
        </m.div>
      </LazyMotion>
    </div>
  );
}

export default Custom404Content;
