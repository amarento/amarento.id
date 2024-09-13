"use client";

import { motion as m } from "framer-motion";
import { container, item } from "../../_components/animation";


export default function Homepage2() {
  return (
    <m.div className="sticky top-0 flex h-screen w-screen flex-col items-center justify-center bg-white-primary-default text-dark-green-default">
      <div className="flex flex-col items-center justify-center h-full">
        <h4 className="text-custom-h5 mb-custom-medium">AMARENTO</h4>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-custom-h3 w-3/4 text-center"
        >
          WE SIMPLIFY YOUR EVENT LOREM IPSUM DOLOR SIT AMET CONSECTETUR
        </m.h1>
      </div>
      <p className="absolute bottom-[5%]">(scroll to explore)</p>
    </m.div>
  );
}
