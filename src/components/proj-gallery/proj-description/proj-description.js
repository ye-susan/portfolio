import React from "react";
import "./proj-description.css";
import TechContainer from "../tech-container/tech-container";

export const ProjectDescription = ({
  title,
  ghLink,
  demoLink,
  description,
  techUsed,
}) => {
  const insertDemo = () => {
    let demo;
    if (demoLink) {
      demo = (
        <span>
          , <a href={demoLink}>Live Demo</a>
        </span>
      );
      return demo;
    }
    return;
  };

  const techPlural = techUsed.length > 1 ? "Technologies" : "Technology";

  return (
    <div className="project-description">
      <h3 className="project-title">{title}</h3>
      <h4 className="project-links">
        Links: <a href={ghLink}>GitHub</a>
        {insertDemo()}
      </h4>
      <p className="description-text">{description}</p>

      <div className="project-technologies">
        {techPlural} Used: <br></br>
        <TechContainer techList={techUsed} />
      </div>
    </div>
  );
};

export default ProjectDescription;
