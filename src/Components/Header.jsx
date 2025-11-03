import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(SplitText);

const Header = () => {
  const titleRef = useRef();
  const subtitleRef = useRef();

  useEffect(() => {
    const titleSplit = new SplitText(titleRef.current, { type: "chars" });
    const subtitleSplit = new SplitText(subtitleRef.current, { type: "chars" });

    // Pinwheel animation for title
    gsap.fromTo(
      titleSplit.chars,
      { rotation: 0, opacity: 0 },
      {
        rotation: 360,
        opacity: 1,
        duration: 1,
        stagger: 0.1,
        ease: "back.out(1.7)",
      }
    );

    // Staggered fade in for subtitle
    gsap.fromTo(
      subtitleSplit.chars,
      { y: 20, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        delay: 1,
        ease: "power2.out",
      }
    );
  }, []);

  return (
    <header className="header">
      <h1 ref={titleRef}>Douglas Wiggins Jr </h1>
      <p ref={subtitleRef}>Web Developer</p>
    </header>
  );
};

export default Header;
