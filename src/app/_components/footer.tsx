"use client";

import { RiArrowRightUpLine } from "react-icons/ri";
import AnimatedLink from "./animated-link";

import { FaInstagram, FaRegCopyright, FaWhatsapp } from "react-icons/fa";
import FadeIn from "./fade-in";

const Footer = () => {
  return (
    <div className="mt-custom-short">
      <FadeIn delay={0.15}>
        <h2 className="mb-custom-short text-custom-h2 font-lagency">
          TELL US ABOUT YOUR PLAN
        </h2>
      </FadeIn>
      <div className="mb-custom-medium text-custom-p">
        <FadeIn delay={0.15}>
          <AnimatedLink href="./contact" icon={<RiArrowRightUpLine />}>
            SAY HELLO
          </AnimatedLink>
        </FadeIn>
      </div>
      <div className="mb-6 flex flex-row items-center justify-center">
        <div className="mx-2 flex flex-row items-center">
          <FaRegCopyright className="mr-1 h-2 w-2 lg:h-3 lg:w-3" />
          <p className="text-[8px] font-medium lg:text-xs xl:text-xl">
            Amarento 2024
          </p>
        </div>
        <div className="mx-2 flex flex-row">
          <FaInstagram className="mx-1 object-contain lg:h-7 lg:w-7 xl:h-9 xl:w-9" />
          <FaWhatsapp className="mx-1 object-contain lg:h-7 lg:w-7 xl:h-9 xl:w-9" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
