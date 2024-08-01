import React from "react";

interface AnimatedLinkProps {
  children: React.ReactNode;
  href: string;
  icon?: React.ReactNode;
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({
  children,
  href,
  icon,
}) => {
  return (
    <div className="group relative inline-block">
      <a
        href={href}
        className="text-black flex items-center justify-center font-medium transition-transform duration-300 ease-in-out hover:-translate-y-1"
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </a>
      <span className="bg-black absolute bottom-0 left-0 h-1 w-full scale-x-0 transform transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </div>
  );
};

export default AnimatedLink;
