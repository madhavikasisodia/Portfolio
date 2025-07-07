import { useState, useEffect } from 'react';
import { AiOutlineHome, AiOutlineUser, AiOutlineProject, AiOutlineMail, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import '../styles/Sidebar.css';

function Sidebar() {
  const [activeSection, setActiveSection] = useState('home');
  const [sidebarOpen, setSidebarOpen] = useState(false);

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

  // Prevent background scroll when sidebar is open (mobile)
  useEffect(() => {
    if (sidebarOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [sidebarOpen]);

  // Close sidebar on nav click (mobile)
  const handleNavClick = (section) => {
    setActiveSection(section);
    setSidebarOpen(false);
  };

  return (
    <>
      {/* Desktop Nav */}
      <nav className="navbar">
        <div className="nav-brand">Madhavika Sisodia</div>
        <div className="nav-items desktop-nav">
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
        </div>
        {/* Hamburger Icon (Mobile Only) */}
        <button
          className="hamburger"
          aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
        </button>
      </nav>

      {/* Sliding Sidebar (Mobile) */}
      <div className={`mobile-sidebar-overlay${sidebarOpen ? ' open' : ''}`} onClick={() => setSidebarOpen(false)} />
      <aside className={`mobile-sidebar${sidebarOpen ? ' open' : ''}`} aria-hidden={!sidebarOpen}>
        <div className="mobile-sidebar-header">
          <span className="nav-brand">Madhavika Sisodia</span>
          <button className="close-btn" aria-label="Close menu" onClick={() => setSidebarOpen(false)}>
            <AiOutlineClose />
          </button>
        </div>
        <nav className="mobile-nav-items">
          <a href="#home" className={activeSection === 'home' ? 'active' : ''} onClick={() => handleNavClick('home')}>
            <AiOutlineHome /> <span>Home</span>
          </a>
          <a href="#about" className={activeSection === 'about' ? 'active' : ''} onClick={() => handleNavClick('about')}>
            <AiOutlineUser /> <span>About</span>
          </a>
          <a href="#projects" className={activeSection === 'projects' ? 'active' : ''} onClick={() => handleNavClick('projects')}>
            <AiOutlineProject /> <span>Projects</span>
          </a>
          <a href="#contact" className={activeSection === 'contact' ? 'active' : ''} onClick={() => handleNavClick('contact')}>
            <AiOutlineMail /> <span>Contact</span>
          </a>
        </nav>
      </aside>
    </>
  );
}

export default Sidebar;
