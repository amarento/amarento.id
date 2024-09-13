"use client";

import { buttonVariants } from "~/components/ui/button";
import { motion as m } from "framer-motion";

export default function Contact2() {
  return (
    <m.div className="sticky top-0 flex h-screen w-screen items-center justify-center bg-white-primary-default">
      <div className="flex flex-col items-center justify-center">
        <h3 className="text-custom-h3">CONTACTS</h3>
        <div className="text-custom-h5 text-dark-grey-default">
          <h5>
            +62 15256912345
          </h5>
          <h5>
            amarento.id@gmail.com
          </h5>
          <h5>
            amarento.id
          </h5>
        </div>
      </div>
    </m.div>
  );
}
