import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h2 className="about-title">About Me</h2>
        <p className="about-description">
          Hello! I'm <span className="highlight">Keshav Kochhar</span>, a passionate web developer and data analyst based in Delhi.
          I specialize in creating efficient and visually appealing web applications, focusing on the MERN stack and front-end design.
        </p>
        <p className="about-description">
          With a background in <span className="highlight">Computer Applications</span> from IPU, I enjoy tackling complex challenges 
          and building scalable solutions that deliver exceptional user experiences.
        </p>
      </div>
      
      <div className="skills-section">
        <h3 className="skills-title">Soft Skills</h3>
        {/* Each skill is wrapped in a skill-card for hover effect */}
        <div className="skill-bar">
          <div className="skill-card">
            <span className="skill-name">Communication</span>
            <div className="bar">
              <div className="progress html"></div>
            </div>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-card">
            <span className="skill-name">TimeManagement</span>
            <div className="bar">
              <div className="progress css"></div>
            </div>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-card">
            <span className="skill-name"> ProblemSolving</span>
            <div className="bar">
              <div className="progress javascript"></div>
            </div>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-card">
            <span className="skill-name">TeamworkandLeadership</span>
            <div className="bar">
              <div className="progress react"></div>
            </div>
          </div>
        </div>
        <div className="skill-bar">
          <div className="skill-card">
            <span className="skill-name"> Creativity.</span>
            <div className="bar">
              <div className="progress nodejs"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
