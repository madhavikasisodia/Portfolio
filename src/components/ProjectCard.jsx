import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../styles/ProjectCard.css';

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <div className="project-image-container">
        <img 
          src={project.image} 
          alt={project.title} 
          className="project-image"
        />
        <div className="project-overlay">
          <div className="project-links">
            <a 
              href={project.github} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaGithub />
            </a>
            <a 
              href={project.live} 
              target="_blank" 
              rel="noopener noreferrer"
              className="project-link"
            >
              <FaExternalLinkAlt />
            </a>
          </div>
        </div>
      </div>
      
      <div className="project-content">
        <h3 className="project-title">{project.title}</h3>
        <p className="project-description">{project.description}</p>
        
        <div className="project-tech">
          {project.technologies.map((tech, index) => (
            <span key={index} className="tech-badge">
              {tech}
            </span>
          ))}
        </div>
        
        <div className="project-buttons">
          <a 
            href={project.live} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-btn live-btn"
          >
            Live Demo
          </a>
          <a 
            href={project.github} 
            target="_blank" 
            rel="noopener noreferrer"
            className="project-btn github-btn"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard; 