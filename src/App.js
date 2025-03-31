import React from "react";
import Sidebar from "./components/sidebar/sidebar";
import SectionContainer from "./components/section-container/sectioncontainer";
import { Chrono } from "react-chrono";
import { TimelineItems } from "./data/timeline-items";
import SkillsGallery from "./components/skills-gallery/skills-gallery";
import "./App.css";
import ProfilePhoto from "./components/profile-photo-container/profile-photo-container";

//icons
import githubIcon from "./assets/icons8-github-100.png";
import linkedinIcon from "./assets/icons8-linkedin-100.png";
import emailIcon from "./assets/icons8-mail-100.png";
import laptopIcon from "./assets/laptop.png";
import spreadsheetIcon from "./assets/spreadsheet.png";
import stoutIcon from "./assets/stout-icon.png";
import hflaIcon from "./assets/hfla-icon.png";
import wefunderIcon from "./assets/wefunder-icon.png";

const App = () => {
  return (
    <>
      <div className="portfolio">
        <Sidebar />
        <ProfilePhoto />

        <div id="home"></div>

        <div className="content-area">
          <SectionContainer
            id="about"
            sectionTitle="About"
            content={
              <div>
                <p>
                  Hi! I'm Susan, a self-taught coder (former financial analyst),
                  currently working as a full stack software engineer.
                  <br />
                  <br />
                  I’m passionate building software that makes a real difference
                  for people, especially when it involves solving tricky
                  problems. Right now, I'm working on web apps with JavaScript,
                  React, TypeScript, and Python to create powerful financial
                  tools and collaborating with business stakeholders to make
                  sure users get the most out of them (and enjoy using them,
                  too!).
                  <br />
                  <br />
                  When I'm not coding, you can find me hiking, watching sitcoms,
                  sewing, or exploring cities near and far. Being a lifelong
                  DIY-er and crafter has led me to become super resourceful and
                  product-driven. Code is just another medium for me to create
                  and express myself, here's what's in my toolkit 🛠:{" "}
                </p>

                <br />
                <SkillsGallery />
                <br />

                <p>
                  When I'm not coding, you can find me hiking, watching sitcoms,
                  sewing, or exploring new cities near and far.
                </p>
              </div>
            }
          />

          <SectionContainer
            id="timeline"
            sectionTitle="Timeline"
            content={
              <div style={{ width: "100%" }}>
                <Chrono
                  items={TimelineItems}
                  mode="VERTICAL"
                  theme={{
                    primary: "#36633d",
                    secondary: "white",
                    cardBgColor: "#4c917331",
                    cardForeColor: "#031d12",
                  }}
                  className="chrono-timeline"
                >
                  <div className="chrono-icons">
                    <img src={laptopIcon} alt="computer icon" />
                    <img src={laptopIcon} alt="computer icon" />
                    <img src={wefunderIcon} alt="Wefunder logo" />
                    <img src={hflaIcon} alt="HFLA logo" />
                    <img src={spreadsheetIcon} alt="spreadsheet icon" />
                    <img src={stoutIcon} alt="Stout logo" />
                  </div>
                </Chrono>
              </div>
            }
          />

          <SectionContainer
            id="contact"
            sectionTitle="Contact"
            content={
              <div>
                <a href="https://www.linkedin.com/in/susan-ye-dev/">
                  <img
                    src={linkedinIcon}
                    width="70px"
                    height="70px"
                    alt="linkedin icon"
                  />
                </a>
                <a href="https://github.com/ye-susan">
                  <img
                    src={githubIcon}
                    width="70px"
                    height="70px"
                    alt="github icon"
                  />
                </a>
                <a href="mailto:susanye3@gmail.com">
                  <img
                    src={emailIcon}
                    width="70px"
                    height="70px"
                    alt="email icon"
                  />
                </a>
              </div>
            }
          />
        </div>
      </div>
      <footer>
        <p>© 2025 Susan Ye. All rights reserved.</p>
        <p>
          Icons and Illustrations from Icons8, Background Image from Unsplash
        </p>
      </footer>
    </>
  );
};

export default App;
