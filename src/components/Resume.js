/* =================================
  This is the Resume component
==================================== */
import React, { Component } from 'react';
import '../css/Resume.css';

class Resume extends Component {

  render() {
    return (
      <div className="myResume">
      <div className="heading">
        <h3>206-851-0221</h3>
          <p><a href="https://github.com/leitto10" target="_blank" 
          rel="noopener noreferrer" >github.com/leitto10</a></p>
          <p><a href="https://www.linkedin.com/in/jose-llopez/" 
          target="_blank" rel="noopener noreferrer" >Jose-llopez Linkedin</a></p>
      </div>
        <h2>TECHNICAL SKILLS</h2>
        <div className="bulletPoints">
          <li>General programming in Java, MySQL, CSS, HTML, PHP and JavaScript.</li>
          <li>Experience working with Android Studio, ReactJs, React Native, Node.js, Git workflow. </li>
          <li>Data Science development with Python programming tools.</li>
          <li>Cloud Computing Fundamentals with Azure and AWS services.</li>
          <li>Knowledge in Data Structures and Algorithms as well as Web Application Development.</li>
        </div>
        <h2>EDUCATION</h2>
        <div className="bulletPoints">
          <li>Bachelor of Applied Science, Application Development, North Seattle College.  2018-2020</li>
          <li>Focus Areas: Communication, Collaboration, Cloud Computing, and Development.</li>
          <li>Associate of Arts and Science, Seattle Central College.                  2015-2018</li>
        </div>
        <h2>RELEVANT EXPERIENCE</h2>
        <h3>Intern at Glass Eye Studio.</h3>
        <div className="bulletPoints">
          <li>Creating a Web Application tool with Reactjs for a 2D event space. </li>
        </div>
        <h2>PROJECTS</h2>
        <h3>Floop </h3>
          <div className="bulletPoints">
            <p>Software Developer Engineer – Floop Grade Book. Web App Practicum       Spring-2019</p>
            <li>Front-end UI architecture development for web application support. </li>
            <li>Created components using ReactJs and Node.js </li>
            <li>Integrating Firebase authentication and database services.</li>
          </div>
        <h3>MementoCRM</h3>
          <div className="bulletPoints">
            <p>Software Developer Engineer – UI Development.            Mobile App Practicum  Fall-2019</p>
            <li>Created React Native components for Android applications.</li>
            <li>Integrating Firebase authentication and database services.</li>
          </div>
        <h3>Pot O' Gold Coffee</h3>
          <div className="bulletPoints">
            <p>Back-End Development with Azure services.        Cloud Computing Practicum.    Winter-2020</p>
            <li>Creating Azure Function APIs for HTTP requests.</li>
            <li>Data management in the Azure SQL database.</li>
            <li>Working with other Azure services such as Stream Analytics, 
              SQL Databases, 
              Secreate Key vaults, 
              Manage Identity, IoT Hubs, Storage accounts, etc.</li>
          </div>
        <h2>OTHER EXPERIENCE</h2>
        <div className="bulletPoints">
          <li>Data entry, Glass Eye Studio			January/2019 – February/2020</li>
          <li>General Assistan, MALTOM INC 			January/2015 - December/2018</li>
          <li>Waiter, Columbia Tower Club       January/2010 - December/2014</li>
        </div>
      </div>
    );
  }
}

export default Resume;
