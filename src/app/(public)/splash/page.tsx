"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Reveal } from "~/app/_components/reveal";

export default function Splash() {
  const [isFaded, setIsFaded] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsFaded(true); 
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.div
      className="top-0 flex h-screen w-screen flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-white to-stone-100  text-dark-green-default"
      initial={{ opacity: 1 }}
      animate={{ opacity: isFaded ? 0 : 1 }} 
      transition={{ duration: 1 }} 
    >
      <div className="flex h-full flex-col items-center justify-center">
        <Reveal>
          <h4 className="text-custom-h5 mb-custom-medium !tracking-tight ">AMARENTO</h4>
        </Reveal>
        <Reveal>
          <div className="flex items-center justify-center mt-10 lg:mt-0">
            <h2 className="w-3/4 text-center text-[33px] leading-snug md:text-[38px] lg:w-1/2 lg:text-[47px] xl:text-[56px] 2xl:text-[63px]">
              Delivering an <span className="font-ecoItalic text-yellow-500">Effortless</span>,{" "}
              <span className="font-ecoItalic text-yellow-500">Personalized</span> RSVP
              Experience for Memorable {" "}
              <span className="font-ecoItalic text-yellow-500">Wedding</span> Moments
            </h2>
          </div>
        </Reveal>
      </div>
      <Reveal>
        <p className="mb-5">(scroll to explore)</p>
      </Reveal>
    </motion.div>
  );
}
