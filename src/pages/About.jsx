import React from 'react';
import avatarImage from '../Images/Avatar.jpg';

function About() {
  return (
    <div className="about-container">
      <div className="avatar-container">
      <img src={avatarImage} alt="Picture of the creator of this Porfolio page" className="avatar-image" />
      </div>
      <h1>About Me</h1>
      <p>Hello and welcome! I am a junior programmer specializing in web design and JavaScript.</p>
      <p>I recently completed the University of Sydney's programming bootcamp and have been working on a number of small projects, a selection of which can be seen on the portfolio page.</p>
      <p>I have always had an interest in programming, and since I have recently had the opportunity to study, I have been enthusiastically learning and trying new things in programming.</p>
      <p>I am especially fond of the BarkMate project, which, while simple in design and scope, I feel really exceeded the original target.</p>
      <p>I enjoy video games and frequently visit PAX. While I don't intend to move into video game coding professionally, I do hope to create fun projects.</p>
      <p>Moving forward, I hope to gain more skills in coding and development and eventually transition to a full-time role in programming and development.</p>
      <p>Please contact me on the contact page or use the details listed below.</p>
    </div>
  );
}

export default About;