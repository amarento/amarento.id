import React, { useState } from "react";
import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { menuSlide } from "../anim";
import Link from "./link";
import Curve from "./curve";
import WhatsappRSVP from "~/app/(public)/whatsapp-rsvp/page";

const navItems = [
  {
    title: "WhatsApp RSVP",
    href: <WhatsappRSVP />, //benerin pake hash, react-router-hash-link(?)
  },
  {
    title: "QR-Code",
    href: "/work",
  },
  {
    title: "Personalized Website",
    href: "/about",
  },
  {
    title: "E-Invitation",
    href: "/contact",
  },
];

export default function index() {
  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div
      variants={menuSlide}
      initial="initial"
      animate="enter"
      exit="exit"
      className="fixed top-0 h-screen w-screen bg-dark-green-default text-white-primary-default"
    >
      <div className="flex h-full flex-col items-center justify-center">
        <div
          onMouseLeave={() => {
            setSelectedIndicator(pathname);
          }}
          className="ml-[80px] mt-[200px] flex flex-col gap-[12px] font-crimson text-[56px] sm:ml-[160px] md:ml-[200px] lg:ml-[300px] xl:ml-[400px] 2xl:ml-[600px]"
        >
          {navItems.map((data, index) => {
            return (
              <Link
                key={index}
                data={{ ...data, index }}
                isActive={selectedIndicator == data.href}
                setSelectedIndicator={setSelectedIndicator}
              ></Link>
            );
          })}
        </div>
      </div>
      <Curve />
    </motion.div>
  );
}
