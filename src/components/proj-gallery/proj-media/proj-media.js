import React from "react";
import "./proj-media.css";

export const ProjectMedia = ({ mediaLink, mediaPosition }) => {
  let mediaStyle =
    mediaPosition === "right"
      ? { marginRight: "20px" }
      : { marginLeft: "20px" };

  return (
    <div className="project-media" style={mediaStyle}>
      <img src={mediaLink} height="auto" width="100%" alt="project demo"></img>
    </div>
  );
};

export default ProjectMedia;
