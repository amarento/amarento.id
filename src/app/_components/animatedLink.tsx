import React from 'react';

interface AnimatedLinkProps {
  children: React.ReactNode; 
  href: string;              
  icon?: React.ReactNode;    
}

const AnimatedLink: React.FC<AnimatedLinkProps> = ({ children, href, icon }) => {
  return (
    <div className="relative group inline-block">
      <a
        href={href}
        className="flex justify-center items-center font-medium text-black transition-transform duration-300 ease-in-out hover:-translate-y-1"
      >
        {children}
        {icon && <span className="ml-2">{icon}</span>}
      </a>
      <span className="absolute left-0 bottom-0 h-1 w-full bg-black transform scale-x-0 transition-transform duration-300 ease-in-out group-hover:scale-x-100"></span>
    </div>
  );
};

export default AnimatedLink;
