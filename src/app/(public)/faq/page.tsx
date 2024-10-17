"use client";

import { Accordion } from "~/app/_components/accordion";
import { Reveal } from "~/app/_components/reveal";

export default function FAQ() {
  return (
    <div className="relative top-0 flex h-screen w-screen items-center justify-center bg-gradient-to-b from-stone-100 to-white text-dark-grey-default">
      <div>
        <Accordion />
      </div>
    </div>
  );
}
