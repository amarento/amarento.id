"use client";

import { CgArrowTopRight } from "react-icons/cg";
import AnimatedLink from "./animated-link";

import { FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import FadeIn from "./fade-in";

export default function Footer() {
  return (
    <div className="mt-custom-short">
      <FadeIn delay={0.15}>
        <h2 className="mb-custom-short text-custom-h2 font-lagency">
          TELL US ABOUT YOUR PLAN
        </h2>
      </FadeIn>
      <div className="mb-custom-medium text-custom-p">
        <FadeIn delay={0.15}>
          <AnimatedLink href="./contact" icon={<CgArrowTopRight />}>
            SAY HELLO
          </AnimatedLink>
        </FadeIn>
      </div>
      <div className="mb-6 flex flex-row items-center justify-center">
        <div className="mx-2 flex flex-row items-center">
          <FaRegCopyright className="mr-1 h-1 w-1 lg:h-3 lg:w-3" />
          <p className="text-[6px] font-medium lg:text-xs xl:text-xl">
            AMARENTO 2024
          </p>
        </div>
        <div className="mx-2 flex flex-row">
          <FaInstagram className="mx-1 h-3 w-3 object-contain lg:h-5 lg:w-5 xl:h-7 xl:w-7" />
          <FaWhatsapp className="mx-1 h-3 w-3 object-contain lg:h-5 lg:w-5 xl:h-7 xl:w-7" />
        </div>
      </div>
    </div>
  );
}
