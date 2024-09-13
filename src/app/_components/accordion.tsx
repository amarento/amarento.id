import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";

declare module "react" {
  interface HTMLAttributes<T> {
    placeholder?: string;
    onPointerEnterCapture?: React.PointerEventHandler<T>;
    onPointerLeaveCapture?: React.PointerEventHandler<T>;
  }
}

const CUSTOM_ANIMATION = {
  mount: { scale: 1 },
  unmount: { scale: 0.9 },
};

export function FAQAccordion() {
  const [open, setOpen] = React.useState(0);

  const handleOpen = (value) => setOpen(open === value ? 0 : value);

  return (
    <>
      <Accordion open={open === 1} animate={CUSTOM_ANIMATION}>
        <div className="text-custom-h4">
          <AccordionHeader onClick={() => handleOpen(1)}>
            What is Material Tailwind?
          </AccordionHeader>
        </div>
        <div className="text-custom-h4">
          <AccordionBody>
            We're not always in the position that we want to be at. We're
            constantly growing. We're constantly making mistakes. We're
            constantly trying to express ourselves and actualize our dreams.
          </AccordionBody>
        </div>
      </Accordion>
      <Accordion open={open === 2} animate={CUSTOM_ANIMATION}>
        <div className="text-custom-h4">
          <AccordionHeader onClick={() => handleOpen(2)}>
            What is Material Tailwind?
          </AccordionHeader>
        </div>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 3} animate={CUSTOM_ANIMATION}>
        <div className="text-custom-h4">
          <AccordionHeader onClick={() => handleOpen(3)}>
            What is Material Tailwind?
          </AccordionHeader>
        </div>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 4} animate={CUSTOM_ANIMATION}>
        <div className="text-custom-h4">
          <AccordionHeader onClick={() => handleOpen(4)}>
            What is Material Tailwind?
          </AccordionHeader>
        </div>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
      <Accordion open={open === 5} animate={CUSTOM_ANIMATION}>
        <div className="text-custom-h4">
          <AccordionHeader onClick={() => handleOpen(5)}>
            What is Material Tailwind?
          </AccordionHeader>
        </div>
        <AccordionBody>
          We're not always in the position that we want to be at. We're
          constantly growing. We're constantly making mistakes. We're constantly
          trying to express ourselves and actualize our dreams.
        </AccordionBody>
      </Accordion>
    </>
  );
}
