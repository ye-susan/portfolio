import React from "react";
import "./sectioncontainer.css";

export const SectionContainer = ({ sectionTitle, content, id }) => {
  return (
    <div className="section-container" id={id}>
      <h1 className="section-title">{sectionTitle}</h1>
      <div className="content">{content}</div>
    </div>
  );
};

export default SectionContainer;
