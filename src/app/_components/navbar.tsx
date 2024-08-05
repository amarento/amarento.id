"use client";

import Image from "next/image";
import Link from "next/link";
import { VscCircleLargeFilled } from "react-icons/vsc";

export default function Navbar() {
  return (
    <div className="fixed left-0 top-0 z-10 w-full bg-white-default/30 backdrop-blur-sm">
      <div className="mx-auto flex h-20 items-center justify-between px-8 sm:h-32 sm:max-w-screen-xl sm:px-14">
        <Link href={"/"}>
          <Image
            className="h-8 w-fit sm:h-10 md:h-12 lg:h-12 xl:h-14"
            src="/logo.svg"
            alt="logo"
            width={500}
            height={500}
            priority
          />
        </Link>

        <div className="flex flex-row items-center">
          <VscCircleLargeFilled className="h-4 w-4 cursor-pointer text-gray-600 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 xl:h-8 xl:w-8" />
        </div>
      </div>
    </div>
  );
}
