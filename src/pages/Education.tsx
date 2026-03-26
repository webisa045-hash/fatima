import React from 'react';
import { GraduationCap, Calendar, Award } from 'lucide-react';
import './Education.css';

const Education: React.FC = () => {
  return (
    <div className="education fade-in container section">
      <div className="section-title">
        <h2>My Education</h2>
      </div>
      
      <div className="education-timeline">
        <div className="education-card">
          <div className="edu-icon"><GraduationCap color="var(--primary-grey)" size={32} /></div>
          <div className="edu-details">
            <span className="edu-date"><Calendar size={16} inline-style={{ marginRight: '5px' }} /> 2023 - Present</span>
            <h3>Bachelor of Business Administration (BBA)</h3>
            <h4>East Africa University, Somalia</h4>
            <p>
              Focusing on modern business management practices, strategic development, 
              and economic principles. Actively participating in student leadership 
              activities and business simulation workshops.
            </p>
            <div className="achievements">
              <h5>Key Coursework:</h5>
              <ul>
                <li>Strategic Management</li>
                <li>Financial Accounting</li>
                <li>Marketing Principles</li>
                <li>Operations Management</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="education-card">
          <div className="edu-icon"><Award color="var(--primary-grey)" size={32} /></div>
          <div className="edu-details">
            <span className="edu-date"><Calendar size={16} inline-style={{ marginRight: '5px' }} /> Completed 2022</span>
            <h3>Secondary School Certificate</h3>
            <h4>[Your High School Name], Somalia</h4>
            <p>Graduated with honors, demonstrating a strong foundation in economics and mathematics.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
