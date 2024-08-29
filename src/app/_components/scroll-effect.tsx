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
      console.log(`Scrolling to index: ${index}`); // Log the new index
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
          // Loop to index 1 if at the end
          newIndex = 0;
        } else {
          // Move to the next section
          newIndex = Math.min(currentIndex + 1, maxIndex);
        }
      } else {
        newIndex = Math.max(currentIndex - 1, 0);
      }

      console.log(
        `Event DeltaY: ${event.deltaY}, Current Index: ${currentIndex}, New Index: ${newIndex}`,
      ); // Log scroll details

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

  // Log currentIndex whenever it changes
  useEffect(() => {
    console.log(`Current Index: ${currentIndex}`);
  }, [currentIndex]);

  return { currentIndex, scrollToIndex };
};
