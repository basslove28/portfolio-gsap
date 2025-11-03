import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";

const NightSky = () => {
  const skyRef = useRef();

  useEffect(() => {
    const sky = skyRef.current;
    const numStars = 100;

    // Create stars
    for (let i = 0; i < numStars; i++) {
      const star = document.createElement("div");
      star.className = "star";
      star.style.left = Math.random() * 100 + "%";
      star.style.top = Math.random() * 100 + "%";
      star.style.animationDelay = Math.random() * 5 + "s";
      sky.appendChild(star);

      // Animate star movement
      gsap.to(star, {
        x: "+=" + (Math.random() * 200 - 100),
        y: "+=" + (Math.random() * 200 - 100),
        duration: Math.random() * 10 + 10,
        ease: "none",
        repeat: -1,
        yoyo: true,
      });
    }

    return () => {
      // Cleanup stars on unmount
      while (sky.firstChild) {
        sky.removeChild(sky.firstChild);
      }
    };
  }, []);

  return <div ref={skyRef} className="night-sky"></div>;
};

export default NightSky;
