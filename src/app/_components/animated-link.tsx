import Link from "next/link";
import React from "react";

interface AnimatedLinkProps {
  readonly children: React.ReactNode;
  readonly href: string;
  readonly icon?: React.ReactNode;
}

export default function AnimatedLink({
  children,
  href,
  icon,
}: AnimatedLinkProps) {
  return (
    <div className="group relative inline-block">
      <Link
        href={href}
        className="text-black flex items-center justify-center font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
      >
        {children}
        {icon && <span className="ml-1">{icon}</span>}
      </Link>
      <span className="bg-black absolute bottom-0 left-0 h-1 w-full scale-x-0 transform transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </div>
  );
}
