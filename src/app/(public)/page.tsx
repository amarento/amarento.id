"use client";

import { useRef, useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useInView,
  useMotionValue,
} from "framer-motion";
import ScrollContainer from "../_components/scroll-container";
import { scrollEffect } from "../_components/scroll-effect";

import Splash from "./splash/page";
import WhatsappRSVP from "./whatsapp-rsvp/page";
import QRCode from "./qr-code/page";
import PersonalizedWebsite from "./personalized-website/page";
import EInvitation from "./e-invitation/page";
import Contact from "./contact/page";
import FAQ from "./faq/page";

export default function App() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(containerRef);
  const { currentIndex: indexNumber, scrollToIndex } = scrollEffect(scrollRef);

  const currentIndex = useMotionValue(indexNumber);
  const [showInitialPage, setShowInitialPage] = useState(true);

  useEffect(() => {}, [isInView, currentIndex, scrollToIndex]);

  return (
    <main className="">
        <AnimatePresence mode="wait">
          <ScrollContainer ref={scrollRef}>
            {showInitialPage && <Splash />}

            <WhatsappRSVP />
            <QRCode />
            <PersonalizedWebsite />
            <EInvitation />
            <FAQ />
            <Contact />
          </ScrollContainer>
        </AnimatePresence>
    </main>
  );
}
