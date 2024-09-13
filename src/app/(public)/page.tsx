"use client";

import { useRef, useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  MotionValue,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import Homepage2 from "./splash/page";
import Contact2 from "./contact/page";
import FAQ2 from "./faq/page";
import Services2 from "./service/page";
import ScrollContainer from "../_components/scroll-container";
import { scrollEffect } from "../_components/scroll-effect";

import LocomotiveScroll from "locomotive-scroll";
import { ReactLenis, useLenis } from 'lenis/react'


const scroll = new LocomotiveScroll();

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef);
  const { currentIndex: indexNumber, scrollToIndex } = scrollEffect(scrollRef);

  const currentIndex = useMotionValue(indexNumber);

  useEffect(() => {
    currentIndex.set(indexNumber);
  }, [indexNumber]);

  const [ showInitialPage, setShowInitialPage ] = useState(true);

  useEffect(() => {
    // Ensure this code only runs in the browser
    if (typeof window !== "undefined") {
      const scroll = new LocomotiveScroll();
      
      if (currentIndex.get() === 0 && isInView) {
        setShowInitialPage(false);
        scrollToIndex(0); // Scroll snap to the first section
      }
    }
  }, [isInView, currentIndex, scrollToIndex]);

  return (
    <motion.main
      ref={containerRef}
      className="transition-colors duration-500 ease-in-out h-screen w-screen"
    >
      <AnimatePresence mode="wait">
        <ScrollContainer ref={scrollRef}>
          {showInitialPage && <Homepage2 />}
          <Services2 />
          <FAQ2 />
          <Contact2 />
        </ScrollContainer>
      </AnimatePresence>
    </motion.main>
  );
}
