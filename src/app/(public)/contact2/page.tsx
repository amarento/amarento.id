"use client";

import { buttonVariants } from "~/components/ui/button";
import { motion as m } from "framer-motion";

export default function Contact2() {
  return (
    <m.div
      animate={{ y: "0%" }}
      exit={{ opacity: 0 }}
      initial={{ y: "100%" }}
      transition={{
        duration: 0.75,
        ease: "easeOut",
      }}
      className="flex h-screen w-screen items-center bg-white-primary-default justify-center"
    >
      <div className="flex flex-col items-center justify-center">
        <h4 className="text-[19px]">AMARENTO</h4>
        <h1 className="text-dark-grey-default text-center text-[58px]">
          THIS IS CONTACT PAGE
        </h1>
      </div>
    </m.div>
  );
}
