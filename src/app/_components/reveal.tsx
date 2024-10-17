import { motion, useAnimation, useInView } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";

// Use a global index to track how many components have entered the viewport
let globalIndex = 0;

interface Props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}

export const Reveal = ({ children, width = "fit-content" }: Props) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Track visibility
  const fadeIn = useAnimation();
  const [localIndex, setLocalIndex] = useState<number | null>(null); // Component-specific index for staggered animation

  useEffect(() => {
    if (isInView && localIndex === null) {
      // Assign a unique index to the component and increment the global index
      setLocalIndex(globalIndex);
      globalIndex += 1;
    }
  }, [isInView, localIndex]);

  useEffect(() => {
    if (isInView && localIndex !== null) {
      fadeIn.start("visible");
    }
  }, [isInView, localIndex, fadeIn]);

  return (
    <div ref={ref} style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={fadeIn}
        transition={{ duration: 0.4, delay: (localIndex || 0) * 0.05 }} // Apply staggered delay
      >
        {children}
      </motion.div>
    </div>
  );
};
