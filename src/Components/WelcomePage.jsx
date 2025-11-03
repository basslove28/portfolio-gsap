import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const WelcomePage = ({ onComplete }) => {
  const textRef = useRef();
  const barRef = useRef();

  useEffect(() => {
    const splitText = new SplitText(textRef.current, { type: "chars" });

    // Animate split text
    gsap.fromTo(
      splitText.chars,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: "power2.out" }
    );

    // Animate loading bar
    gsap.fromTo(
      barRef.current,
      { width: "0%" },
      {
        width: "100%",
        duration: 2,
        ease: "power2.out",
        onComplete: onComplete,
      }
    );
  }, [onComplete]);

  return (
    <div className="welcome-page">
      <h1 ref={textRef} className="welcome-text">
        Welcome
      </h1>
      <div className="loading-bar-container">
        <div ref={barRef} className="loading-bar"></div>
      </div>
    </div>
  );
};

export default WelcomePage;
