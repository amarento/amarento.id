export const menuSlide = {
    initial: { y: "calc(100% + 100px)" },  // Start from below
    enter: { y: "0", transition: { duration: 1, ease: [1, 0, 0.15, 1] } },  // Slide into view
    exit: { y: "calc(100% + 100px)", transition: { duration: 1, ease: [1, 0, 0.15, 1] } }  // Slide back down
  };
  
  // Slide: Bottom to Top (individual elements with delay)
  export const slide = {
    initial: { y: 80 },  // Start from 80px below
    enter: i => ({ y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),  // Slide up
    exit: i => ({ y: 80, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } })  // Slide back down
  };
  
  // Scale (unchanged as it controls scaling)
  export const scale = {
    open: { scale: 1, transition: { duration: 0.3 } },
    closed: { scale: 0, transition: { duration: 0.4 } }
  };