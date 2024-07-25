import React from 'react';

import barkmateImage from '../Images/Barkmate.png'; // Corrected import path
import fetchFeederImage from '../Images/Fetch-Feeder.png'; // Corrected import path
import eCommBackendImage from '../Images/E-Commerce-Backend.png'; // Corrected import path
import placeholderImage from '../Images/placeholder.png'; // Placeholder for the latest 

function Portfolio() {
  return (
    <div className="portfolio-container">
      <h1>Projects</h1>
      <div className="projects-grid">
        <div className="project">          
          <a href="https://github.com/EvrettG/Barkmate">
          <h2>BarkMate</h2>
          <img src={barkmateImage} alt="Golden Retriever" className="project-image" />
          </a>
          <p>A method for getting stats on dogs based on breed for prospective dog owners. My primary contributions included acting as the scrum master and handling API calls and integration.</p>
        </div>
        <div className="project">
          <a href="https://github.com/KiranRoss1999/Fetch-Feeder">
          <h2>Fetch Feeder</h2>
          <img src={fetchFeederImage} alt="Fetch Feeder app options" className="project-image" />
          </a>
          <p>An app to track a dog's feeding for weight management and health. My role involved managing the SQL database and its interactions.</p>
        </div>
        <div className="project">
          <a href="https://github.com/EvrettG/E-CommerceBackEnd">
          <h2>E-Commerce Backend</h2>
          <img src={eCommBackendImage} alt="VS Code showing SQL models" className="project-image" />
          </a>
          <p>Implemented and deployed a server backend for managing orders, stock, and other e-commerce functionalities.</p>
        </div>
        <div className="project">
          <a href="https://github.com/EvrettG/dogFactsBlog">
          <h2>E-Commerce Backend</h2>
          <img src={eCommBackendImage} alt="VS Code showing SQL models" className="project-image" />
          </a>
          <p>A practice blog for people to post facts about dogs, and comments about those facts</p>
        </div>
        <div className="project">
          <a href="https://github.com/EvrettG/EmployeeTracker">
          <h2>E-Commerce Backend</h2>
          <img src={eCommBackendImage} alt="VS Code showing SQL models" className="project-image" />
          </a>
          <p>A commandline content management system (CMS) for tracking employees and other related details in a SQL database</p>
        </div>
        <div className="project">
          {/* <a href=""> */}
          <h2>Un-named Latest Project</h2>
          <img src={placeholderImage} alt="Placeholder for the latest project" className="project-image" />
          <p>A project entirely designed by me, with more details to be provided after its release.</p>
          {/* </a> */}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;