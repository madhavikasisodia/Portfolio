import { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineFile, AiOutlineMail, AiOutlineDownload } from 'react-icons/ai';
import '../styles/Sidebar.css';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const bounds = element.getBoundingClientRect();
          return bounds.top <= 100 && bounds.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="nav-brand">Madhavika Sisodia</div>
      <div className="nav-items">
        <a href="#home" className={activeSection === 'home' ? 'active' : ''}>
          <AiOutlineHome /> <span>Home</span>
        </a>
        <a href="#about" className={activeSection === 'about' ? 'active' : ''}>
          <AiOutlineUser /> <span>About</span>
        </a>
        <a href="#projects" className={activeSection === 'projects' ? 'active' : ''}>
          <AiOutlineProject /> <span>Projects</span>
        </a>
        
        <a href="#contact" className={activeSection === 'contact' ? 'active' : ''}>
          <AiOutlineMail /> <span>Contact</span>
        </a>
        {/* <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
          <AiOutlineFile /> <span>Resume</span>
        </a> */}


        {/* <a href="/resume.pdf" download className="download-btn">
          <AiOutlineDownload /> <span>Download CV</span>
        </a> */}
      </div>
    </nav>
  );
}

export default Sidebar;
