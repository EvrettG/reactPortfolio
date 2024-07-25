import React from 'react';

function Resume() {
  return (
    <div className="resume-page">
      <h1>Skills</h1>
      <a href="https://github.com/EvrettG/">Link to resume</a>
      <div className="lists-container">
        <div className="list-section">
          <h3>Front end skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
            <li>Jquery</li>
            <li>Responsive design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Web Accessibility</li>
          </ul>
        </div>

        <div className="list-section">
          <h3>Back End Skills</h3>
          <ul>
            <li>API / REST</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL + Squelize</li>
            <li>MongoDB + Mongose</li>
          </ul>
        </div>

        <div className="list-section">
          <h3>Multipurpose Skills</h3>
          <ul>
            <li>Testing and debugging</li>
            <li>Git version control</li>
            <li>Problem-Solving Skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;