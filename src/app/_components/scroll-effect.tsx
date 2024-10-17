// _components/use-scroll.tsx
import { useEffect, useState, RefObject } from "react";

export const scrollEffect = (containerRef: RefObject<HTMLDivElement>) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const scrollToIndex = (index: number) => {
    const container = containerRef.current;
    if (container) {
      const sectionHeight = container.clientHeight;
      container.scrollTo({
        top: sectionHeight * index,
        behavior: "smooth",
      });
      setCurrentIndex(index);
      console.log(`Scrolling to index: ${index}`); 
    }
  };

  const handleScroll = (event: WheelEvent) => {
    const container = containerRef.current;
    if (container) {
      const sectionHeight = container.clientHeight;
      const maxIndex = container.children.length - 1;
      let newIndex: number;

      if (event.deltaY > 0) {
        // Scrolling down
        if (currentIndex === maxIndex) {
          // Move to WhatsappRSVP from Contact (loop to the bottom)
          newIndex = 0;  // Scroll to the start (WhatsappRSVP)
        } else {
          // Move to the next section
          newIndex = Math.min(currentIndex + 1, maxIndex);
        }
      } else {
        // Scrolling up
        if (currentIndex === 0) {
          // Prevent scrolling up from WhatsappRSVP to Contact
          newIndex = 0;  // Stay on WhatsappRSVP (don't go back to Contact)
        } else {
          // Move to the previous section
          newIndex = Math.max(currentIndex - 1, 0);
        }
      }

      console.log(
        `Event DeltaY: ${event.deltaY}, Current Index: ${currentIndex}, New Index: ${newIndex}`,
      ); 

      if (newIndex !== currentIndex) {
        scrollToIndex(newIndex);
      }
    }
  };

  useEffect(() => {
    const container = containerRef.current;
    if (container) {
      container.addEventListener("wheel", handleScroll);
      return () => {
        container.removeEventListener("wheel", handleScroll);
      };
    }
  }, [currentIndex]);

  return { currentIndex, scrollToIndex };
};
