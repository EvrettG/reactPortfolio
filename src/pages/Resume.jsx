import React from 'react';


function Resume() {
  return (
    <div className="resume-container">
      <h1>Skills</h1>
      <a href="https://github.com/EvrettG/">Link to resume</a>
      
      <div className="skills-section">
        <div>
          <h3>Front End Skills</h3>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>jQuery</li>
            <li>Responsive Design</li>
            <li>React</li>
            <li>Bootstrap</li>
            <li>Web Accessibility</li>
          </ul>
        </div>

        <div>
          <h3>Back End Skills</h3>
          <ul>
            <li>API / REST</li>
            <li>Node</li>
            <li>Express</li>
            <li>PostgreSQL + Sequelize</li>
            <li>MongoDB + Mongoose</li>
          </ul>
        </div>

        <div>
          <h3>Multipurpose Skills</h3>
          <ul>
            <li>Testing and Debugging</li>
            <li>Git Version Control</li>
            <li>Problem-Solving Skills</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Resume;