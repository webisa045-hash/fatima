import React from 'react';
import { Briefcase, BarChart, Users, Globe } from 'lucide-react';
import './Projects.css';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Market Analysis: Somalia SME Sector',
      description: 'A comprehensive study on the challenges and opportunities for small and medium enterprises in Mogadishu.',
      icon: <BarChart size={40} />,
      tag: 'Market Research'
    },
    {
      title: 'Digital Marketing Strategy for Startups',
      description: 'Developed a social media marketing plan focused on increasing brand awareness for local clothing brands.',
      icon: <Globe size={40} />,
      tag: 'Marketing'
    },
    {
      title: 'HR Policy Framework Design',
      description: 'Mock project for designing efficient human resource policies for a growing financial institution.',
      icon: <Users size={40} />,
      tag: 'Management'
    },
    {
      title: 'Business Simulation: Export Ventures',
      description: 'Lead a team in a business simulation exercise focused on international trade and logistics.',
      icon: <Briefcase size={40} />,
      tag: 'Strategy'
    }
  ];

  return (
    <div className="projects fade-in container section">
      <div className="section-title">
        <h2>Projects & Experience</h2>
      </div>
      
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.icon}</div>
            <span className="project-tag">{project.tag}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
