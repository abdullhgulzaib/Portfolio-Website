import React from "react";
// import "./EducationExperience.css";
import "../styles/EducationExperience.css";

export default function EducationExperience() {
  return (
    <section className="edu-exp-section" id="EducationExperience">
      <div className="edu-exp-wrapper">
        
        {/* Animated Title */}
        <h2 className="line1">Education & Experience</h2>
        
        <div className="cards-container">
          
          {/* Education Card */}
          <div className="glass-card">
            <div className="card-header">
    
              <h3>Education</h3>
            </div>
            <div className="card-body">
              <h4 className="degree">BS Computer Science</h4>
              <p className="institution">Air University • Islamabad, Pakistan</p>
              
              <div className="meta-info">
                <span className="duration">2025 — 2029</span>
          
              </div>
              
              <div className="details-section">
                <h5>Academic Excellence</h5>
                <p>
                  Building a robust foundation in computer science. 
                  Consistently recognized for top-tier academic performance, including securing the 
                  <strong> 1st position in the city for ICS</strong> and graduating at the top of my class in Matriculation.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Card */}
          <div className="glass-card">
            <div className="card-header">
              
              <h3>Experience</h3>
            </div>
            <div className="card-body">
              <h4 className="degree">Frontend Developer</h4>
              <p className="institution">Independent Practitioner • Part-Time</p>
              
              <div className="meta-info">
                <span className="duration">2023 — Present</span>
               
              </div>
              
              <div className="details-section">
                <h5 className="impact-title">KEY IMPACT</h5>
                <ul className="feature-list">
                  <li>Built 5+ responsive web projects using React, HTML5 & CSS3</li>
                  <li>Developed full CRUD apps with React hooks & REST API integration</li>
                  <li>Created pixel-perfect UIs from professional design templates</li>
                  <li>Mastered responsive layouts with CSS Grid, Flexbox & Bootstrap 5</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}