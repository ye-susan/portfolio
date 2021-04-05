import React, { Component } from 'react';
import Sidebar from './components/sidebar/sidebar';
import SectionContainer from './components/section-container/sectioncontainer';
import { Chrono } from "react-chrono";
import { TimelineItems } from "./data/timeline-items";
import SkillsGallery from './components/skills-gallery/skills-gallery';
import ProjectGallery from './components/proj-gallery/proj-gallery';
import './App.scss';
import ProfilePhoto from './components/profile-photo-container/profile-photo-container';

//icons
import githubIcon from "./assets/icons8-github-100.png";
import linkedinIcon from "./assets/icons8-linkedin-100.png";
import emailIcon from "./assets/icons8-mail-100.png";
import laptopIcon from "./assets/laptop.png";
import spreadsheetIcon from "./assets/spreadsheet.png";

class App extends Component {
  
  render(){
    
    return (
      <div className="portfolio">
        
        <Sidebar/>
        <ProfilePhoto/>

        <div id="home"></div>
  
        <div className="content-area">

          <SectionContainer
            id="about"
            sectionTitle="About"
            content={
              <div>
                
                <p>Hi! I'm Susan, a self-taught developer excited about fullstack development.  Here's what I'm good at:</p>

                <br/>
                <SkillsGallery />
                <br/>
                
                <p>When I'm not coding, I like to travel, hike, watch sitcoms, and embroider! I also like mechanical keyboards, and programming tiny computers/robots is next on my to-do list.</p>
              </div>
            }
          />


          <SectionContainer
            id="timeline"
            sectionTitle="Timeline"
            content={
              <div>
                <div style={{ width: "100%", height: "700px" }}>
                  <Chrono
                    items={TimelineItems}
                    mode="VERTICAL"
                    theme={{"primary": "#36633d", "secondary": "white", "cardBgColor": "#4c917331",  "cardForeColor":"#031d12"}}
                    scrollable
                    className="chrono-timeline"
                  >
                    <div className="chrono-icons">
                      <img
                        src={laptopIcon}
                        alt="computer icon"
                      />
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fmedia-exp1.licdn.com%2Fdms%2Fimage%2FC560BAQFZJJYPR4HLMA%2Fcompany-logo_200_200%2F0%3Fe%3D2159024400%26v%3Dbeta%26t%3DDLdegHk7W9QuvO6igqYDkJdc0m1A8l11odLMQHOtB9g&f=1&nofb=1"
                        alt="Wefunder logo"
                      />
                      <img
                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Favatars3.githubusercontent.com%2Fu%2F11635254%3Fs%3D200%26v%3D4&f=1&nofb=1"
                        alt="HFLA logo"
                      />
                      <img
                        src={spreadsheetIcon}
                        alt="spreadsheet icon"
                      />
                      <img
                        src="https://external-content.duckduckgo.com/ip3/www.stout.com.ico"
                        alt="Stout logo"
                      />
                    </div>
                  </Chrono>
                </div> 
              </div>
            }
          />


          <SectionContainer
            id="projects"
            sectionTitle="Projects"
            content={
              <div>
                <ProjectGallery/>
              </div>
            }
          />


          <SectionContainer
            id="contact"
            sectionTitle="Contact"
            content={
              <div>
                {/* icons are using green3 */}
                <a href="https://www.linkedin.com/in/susan-ye-dev/"><img src={linkedinIcon} width="70px" height="70px" alt="linkedin icon"/></a>
                <a href="https://github.com/ye-susan"><img src={githubIcon} width="70px" height="70px" alt="github icon"/></a> 
                <a href="mailto:susanye3@gmail.com"><img src={emailIcon} width="70px" height="70px" alt="email icon"/></a>
                
              </div>
            }
          />

        </div>
      </div>
    );
  }   
};

export default App;
