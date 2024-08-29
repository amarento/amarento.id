// _components/scroll-container.tsx
import React, { forwardRef, ReactNode } from 'react';

type ScrollContainerProps = {
  children: ReactNode;
};

const ScrollContainer = forwardRef<HTMLDivElement, ScrollContainerProps>(
  ({ children }, ref) => {
    return (
      <div
        ref={ref}
        style={{ overflowY: 'scroll', height: '100vh' }}
        className="scroll-container"
      >
        {children}
      </div>
    );
  }
);

ScrollContainer.displayName = 'ScrollContainer';
export default ScrollContainer;
