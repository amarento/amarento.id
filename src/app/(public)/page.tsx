"use client";

import { useRef, useState, useEffect } from "react";
import { AnimatePresence, useInView, useScroll, useTransform, motion } from "framer-motion";
import Homepage2 from "./homepage2/page";
import Contact2 from "./contact2/page";
import FAQ2 from "./faq2/page";
import Services2 from "./services2/page";
import ScrollContainer from "../_components/scroll-container";
import { scrollEffect } from "../_components/scroll-effect";
import Lenis from 'lenis';

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef);

  const scrollRef = useRef<HTMLDivElement>(null);
  const { currentIndex, scrollToIndex } = scrollEffect(scrollRef);

  const [showInitialPage, setShowInitialPage] = useState(true);

  useEffect(() => {
    const lenis = new Lenis()
    console.log("The component below is in view.");

    if (currentIndex === 0 && isInView) {
      setShowInitialPage(false);
      scrollToIndex(0);
    }
  }, [isInView, currentIndex, scrollToIndex]);

  return (
    <AnimatePresence mode="wait">
      <ScrollContainer ref={scrollRef}>
        {showInitialPage && <Homepage2 />}
        <Services2 />
        <div ref={containerRef}></div>
        <FAQ2 />
        <Contact2 />
      </ScrollContainer>
    </AnimatePresence>
  );
}
