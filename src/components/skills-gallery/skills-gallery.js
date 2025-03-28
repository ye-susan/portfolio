import React from "react";
import { SkillAtom } from "./skill-atom/skill-atom";
import { LanguagesData, TechnologiesData } from "../../data/skills-data";
import "./skills-gallery.css";

export const SkillsGallery = () => {
  const createSkillList = (dataset) => {
    let skillList = [];
    let objSize = Object.keys(dataset).length;

    for (let i = 0; i < objSize; i++) {
      let skillName = dataset[i].skillName;
      let proficiency = dataset[i].proficiency;
      let iconLink = dataset[i].iconLink;
      let skillUrl = dataset[i].skillUrl;

      let item = (
        <SkillAtom
          stars={proficiency}
          skillName={skillName}
          iconLink={iconLink}
          skillUrl={skillUrl}
        />
      );
      skillList.push(item);
    }
    return skillList;
  };

  return (
    <div>
      <div className="skills-container">{createSkillList(LanguagesData)}</div>
      <br />
      <div className="skills-container">
        {createSkillList(TechnologiesData)}
      </div>
    </div>
  );
};

export default SkillsGallery;
