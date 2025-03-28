import React, { useState } from "react";
import "./profile-photo-container.css";

export const ProfilePhoto = () => {
  const [inHover, setHover] = useState(false);
  let showImg;

  if (inHover) {
    showImg = (
      <img
        className="profile-photo color"
        src="https://avatars.githubusercontent.com/u/49918375?v=4"
        alt="profile"
      ></img>
    );
  } else {
    showImg = (
      <img
        className="profile-photo bw"
        src="/images/profile-bw.png"
        alt="profile bw"
      ></img>
    );
  }

  return (
    <div
      className="profile-photo-container"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      {showImg}
    </div>
  );
};

export default ProfilePhoto;
