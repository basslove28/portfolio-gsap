import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const Slide = ({ children, index }) => {
  const slideRef = useRef();

  useEffect(() => {
    // Fade in and slide from bottom
    gsap.fromTo(
      slideRef.current,
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1, delay: index * 0.3 }
    );
  }, [index]);

  return (
    <div ref={slideRef} className="slide">
      {children}
    </div>
  );
};

export default Slide;
