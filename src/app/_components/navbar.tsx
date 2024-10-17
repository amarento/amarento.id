"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";
import Nav from "../_components/header/nav/page";

import { usePathname } from "next/navigation";
import { AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) setIsMenuOpen(false);
  }, [pathname]);

  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 items-center justify-between px-8 sm:h-32 sm:px-14 md:px-10">
        <Link href="/">
          <Image
            className="h-8 w-fit sm:h-10 md:h-12 lg:h-12 xl:h-14"
            src="/logo-black.svg"
            alt="logo"
            width={3000}
            height={3000}
            priority
          />
        </Link>

        <div className="z-50 flex flex-row items-center">
          <h6
            className={`text-custom-h6 mr-4 ${isMenuOpen ? "text-white-primary-default" : "text-dark-grey-default"}`}
          >
            MENU
          </h6>
          <VscCircleLargeFilled
            className={`h-4 w-4 cursor-pointer ${isMenuOpen ? "text-white-primary-default" : "text-dark-grey-default"} sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8`}
            onClick={toggleMenu}
          />
        </div>
      </div>
      <AnimatePresence mode="wait">
      {isMenuOpen && <Nav />}
    </AnimatePresence>
    </div>
  );
}
