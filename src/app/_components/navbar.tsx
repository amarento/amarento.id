"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { VscCircleLargeFilled } from "react-icons/vsc";
import Menu from "./menu"; 


export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed left-0 top-0 z-50 w-full">
      <div className="mx-auto flex h-20 items-center justify-between px-8 sm:h-32 sm:px-14 md:px-10">
        <Link href={"/"}>
          <Image
            className="h-8 w-fit sm:h-10 md:h-12 lg:h-12 xl:h-14"
            src="/logo-black.svg"
            alt="logo"
            width={3000}
            height={3000}
            priority
          />
        </Link>

        <div className="flex flex-row items-center">
          <h5 className="mr-4">MENU</h5>
          <VscCircleLargeFilled
            className="h-4 w-4 cursor-pointer text-dark-grey-default sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8"
            onClick={toggleMenu} 
          />
        </div>
      </div>
      {isMenuOpen && (
        <div className="absolute top-20 right-0 z-40">
          <Menu />
        </div>
      )}
    </div>
  );
}
