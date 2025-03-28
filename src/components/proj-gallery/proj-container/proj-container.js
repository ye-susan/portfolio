import React from "react";
import ProjectDescription from "../proj-description/proj-description";
import ProjectMedia from "../proj-media/proj-media";
import "./proj-container.css";
import ProjectData from "../../../data/proj-data";

export const ProjectContainer = () => {
  let allProjects = [];

  //left/right position of description will be based on index of data
  for (var proj in ProjectData) {
    let projContent;
    let curProject = ProjectData[proj];
    let containerPosition = proj % 2 === 0 ? "left" : "right";

    let projName = curProject.projName;
    let ghLink = curProject.githubLink;
    let demoLink = curProject.demoLink;
    let projDesc = curProject.description;
    let techUsed = curProject.techUsed;
    let projMedia = curProject.media;

    if (containerPosition === "left") {
      projContent = (
        <div className="project-container">
          <ProjectDescription
            title={projName}
            ghLink={ghLink}
            demoLink={demoLink}
            description={projDesc}
            techUsed={techUsed}
          />
          <ProjectMedia mediaLink={projMedia} mediaPosition={"left"} />
        </div>
      );
    } else {
      projContent = (
        <div className="project-container">
          <ProjectMedia mediaLink={projMedia} mediaPosition={"right"} />
          <ProjectDescription
            title={projName}
            ghLink={ghLink}
            demoLink={demoLink}
            description={projDesc}
            techUsed={techUsed}
          />
        </div>
      );
    }

    allProjects.push(projContent);
  }

  return <div>{allProjects}</div>;
};

export default ProjectContainer;
