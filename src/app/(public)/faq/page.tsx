"use client";

import { buttonVariants } from "~/components/ui/button";
import { motion as m } from "framer-motion";
import { container, item } from "../../_components/animation";
import { FAQAccordion } from "~/app/_components/accordion";
// import { Accordion, AccordionHeader, AccordionBody } from "@material-tailwind/react";

// const CUSTOM_ANIMATION = {
//   mount: { scale: 1 },
//   unmount: { scale: 0.9 },
// };

export default function FAQ() {
  return (
    <m.div className="sticky top-0 flex h-screen w-screen flex-col bg-white-secondary-default text-dark-grey-default">
      <h1 className="text-custom-h3 flex flex-col justify-center items-center mt-40 w-3/4">
        Frequently Asked Questions
      </h1>
      <div className="flex flex-col h-screen w-screen items-center justify-center">
      <div className="w-2/3">
        <FAQAccordion />
      </div></div>
    </m.div>
  );
}
