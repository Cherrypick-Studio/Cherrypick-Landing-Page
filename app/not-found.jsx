"use client"
import React from "react";
import { m, LazyMotion, domAnimation } from "framer-motion";

function Custom404() {
  return (
    <div className="flex items-center justify-center w-full h-screen bg-red-cherry-500 z-50">
      <LazyMotion features={domAnimation}>
        <m.div
          // initial={{ opacity: 1, height: "100vh" }}
          // animate={{ opacity: 0, height: 0 }}
          // exit={{ y: -1000, opacity: 0, height: 0 }}
          // transition={{ ease: "easeOut", duration: 0.5, delay: 2 }}
        >
          <h1 className="text-2xl text-white">Seems you're lost</h1>
        </m.div>
      </LazyMotion>
    </div>
  );
}

export default Custom404;
