import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  const cardRef = useRef();

  useEffect(() => {
    const card = cardRef.current;

    const handleMouseEnter = () => {
      gsap.to(card, {
        scale: 1.05,
        y: -10,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(card, {
        scale: 1,
        y: 0,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    card.addEventListener("mouseenter", handleMouseEnter);
    card.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      card.removeEventListener("mouseenter", handleMouseEnter);
      card.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div ref={cardRef} className="card">
      <img src={project.image} alt={project.title} className="card-img" />
      <div className="card-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <a href={project.link} target="_blank" rel="noopener noreferrer">
          View Project <FaExternalLinkAlt />
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
