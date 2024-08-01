import React from "react";
import AnimatedLink from "./animatedLink";
import { RiArrowRightUpLine } from "react-icons/ri";

import { FaRegCopyright, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="mt-custom-short">
      <h2 className="mb-custom-short font-lagency text-custom-h2">
        TELL US ABOUT YOUR PLAN
      </h2>
      <div className="mb-custom-medium text-custom-p">
            <AnimatedLink href="./contact" icon={<RiArrowRightUpLine />}>
              SAY HELLO
            </AnimatedLink>
          </div>
      <div className="mb-6 flex flex-row items-center justify-center">
        <div className="mx-2 flex flex-row items-center">
          <FaRegCopyright className="mr-1 h-2 w-2 lg:h-3 lg:w-3" />
          <p className="text-[8px] font-medium lg:text-xs xl:text-xl">Amarento 2024</p>
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
