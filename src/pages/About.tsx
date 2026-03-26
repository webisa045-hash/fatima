import React from 'react';
import './About.css';

const About: React.FC = () => {
  const skills = [
    'Business Management', 'Strategic Planning', 'Financial Accounting', 
    'Market Research', 'Human Resources', 'Leadership', 
    'Communication', 'Teamwork'
  ];

  return (
    <div className="about fade-in container section">
      <div className="section-title">
        <h2>About Me</h2>
      </div>
      
      <div className="about-content">
        <div className="about-text">
          <p>
            Hello! I'm <strong>Fatima Farah Ali</strong>, a dedicated Business Administration student 
            at East Africa University in Somalia. My academic journey is driven by a desire to 
            contribute to the economic growth and professional landscape of my community.
          </p>
          <p>
            With a strong foundation in business principles, I am particularly interested in how 
            strategic management and innovative marketing can transform local enterprises into 
            competitive entities. I am a firm believer in continuous learning and professional 
            integrity.
          </p>
          <p>
            Beyond academics, I am passionate about leadership and community service, 
            striving to be a role model for young women in business across Somalia.
          </p>
          
          <div className="skills-section">
            <h3>My Skills</h3>
            <div className="skills-grid">
              {skills.map(skill => (
                <span key={skill} className="skill-tag">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
