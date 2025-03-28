import React from "react";
//import { StarsRow } from '../stars-row/stars-row';
import "./skill-atom.css";

export const SkillAtom = ({ stars, skillName, iconLink, skillUrl }) => {
  return (
    <div className="skill-item">
      <a href={skillUrl}>
        <img
          className="skill-icon"
          width="40px"
          height="40px"
          src={iconLink}
          alt={skillName}
        />
      </a>
    </div>
  );
};

// stars from <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>

export default SkillAtom;
