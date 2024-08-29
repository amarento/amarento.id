"use client"

import { buttonVariants } from "~/components/ui/button";
import { motion as m } from "framer-motion";
import { container, item } from "../../_components/animation";


export default function FAQ() {
  return (
    <m.div
    initial={{ y: "100%" }}
      animate={{ y: "0%" }}
      exit={{ opacity: 1 }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="flex h-screen w-screen items-center text-dark-grey-default bg-white-secondary-default justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-[19px]">AMARENTO</h4>
        <m.h1
          animate={{ y: 0 }}
          initial={{ y: "100%" }}
          transition={{ delay: 0.5, duration: 0.5 }}
          className="text-center text-[58px]"
        >
          THIS IS FAQ PAGE
        </m.h1>
      </div>
    </m.div>
  );
}
