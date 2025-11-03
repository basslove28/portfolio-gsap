import React, { useState } from "react";
import ProjectCard from "./Components/ProjectCard";
import Slide from "./Components/Slide";
import WelcomePage from "./Components/WelcomePage";
import Header from "./Components/Header";
import NightSky from "./Components/NightSky";
import { projects } from "./Data/projects";
import "./styles.css";

const App = () => {
  const [showWelcome, setShowWelcome] = useState(true);

  const handleWelcomeComplete = () => {
    setShowWelcome(false);
  };

  return (
    <div className="app">
      <NightSky />
      {showWelcome ? (
        <WelcomePage onComplete={handleWelcomeComplete} />
      ) : (
        <>
          <Header />

          <section className="projects-section">
            {projects.map((project, index) => (
              <Slide key={project.id} index={index}>
                <ProjectCard project={project} />
              </Slide>
            ))}
          </section>
        </>
      )}
    </div>
  );
};

export default App;
