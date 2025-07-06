import Sidebar from "./components/Sidebar";
import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from "react-icons/fa";
import "./App.css";
import ScrollButton from "./components/ScrollButton";
import BackgroundPattern from "./components/BackgroundPattern";
import ProjectCard from "./components/ProjectCard";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";

// Sample project data
const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack e-commerce platform built with React, Node.js, and MongoDB. Features include user authentication, product management, shopping cart, and payment integration.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=200&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Express", "Stripe"],
    live: "https://example.com",
    github: "https://github.com/example"
  },
  {
    title: "AI Chat Application",
    description: "An intelligent chat application powered by OpenAI's GPT model. Features real-time messaging, conversation history, and smart responses.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=400&h=200&fit=crop",
    technologies: ["React", "Python", "OpenAI API", "Socket.io", "PostgreSQL"],
    live: "https://example.com",
    github: "https://github.com/example"
  },
  {
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop",
    technologies: ["React", "TypeScript", "Firebase", "Tailwind CSS"],
    live: "https://example.com",
    github: "https://github.com/example"
  },
  {
    title: "Weather Dashboard",
    description: "A beautiful weather dashboard with real-time weather data, 7-day forecasts, and interactive maps using OpenWeatherMap API.",
    image: "https://images.unsplash.com/photo-1592210454359-9043f067919b?w=400&h=200&fit=crop",
    technologies: ["JavaScript", "HTML/CSS", "OpenWeatherMap API", "Chart.js"],
    live: "https://example.com",
    github: "https://github.com/example"
  },
  {
    title: "Portfolio Website",
    description: "A modern, responsive portfolio website with smooth animations, dark mode, and interactive elements showcasing my work and skills.",
    image: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=400&h=200&fit=crop",
    technologies: ["React", "CSS3", "JavaScript", "Framer Motion"],
    live: "https://example.com",
    github: "https://github.com/example"
  },
  {
    title: "Social Media Clone",
    description: "A social media platform clone with features like user profiles, posts, likes, comments, and real-time notifications.",
    image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=200&fit=crop",
    technologies: ["React", "Redux", "Node.js", "Socket.io", "AWS S3"],
    live: "https://example.com",
    github: "https://github.com/example"
  }
];

function App() {
  return (
    <>
      <Sidebar />
      <main>
        <section id="home" className="hero">
          <BackgroundPattern />
          <div className="hero-content">
            <div className="profile-container">
              <img
                src="src\assets\my-photo.jpg"
                alt="Madhavika Sisodia"
                className="profile-image"
              />
            </div>
            <div className="intro-text">
              <div className="greeting">HI THERE! I'M</div>
              <h1>
                <div className="name-container">
                  <span className="highlight">Madhavika</span>&nbsp;
                  <span className="last-name">Sisodia</span>
                </div>
              </h1>
              <div className="tagline">
                <div className="space-y-2 text-base">
                  <p>
                    <span role="img" aria-label="brain">
                      🧠
                    </span>{" "}
                    Curious coder passionate about solving problems creatively. 
                  </p>
                  <p>
                    <span role="img" aria-label="bulb">
                      💡
                    </span>{" "}
                    Consistently exploring new tech and frameworks.
                  </p>
                  <p>
                    <span role="img" aria-label="gear">
                      🔨
                    </span>{" "}
                    Building real-world, impactful projects from scratch.
                  </p>
                  <p>
                    <span role="img" aria-label="rocket">
                      🚀
                    </span>{" "}
                    Frontend wizard with a love for Python, AI, and clean UX.
                  </p>
                </div>
              </div>
              <div className="cta-buttons">
                <a
                  href="/resume.pdf"
                  className="resume-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Resume
                </a>
                <a
                  href="/cv.pdf"
                  className="resume-btn cv-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download CV
                </a>
                <a href="#contact" className="resume-btn contact-btn">
                  Contact Me
                </a>
              </div>
              <div className="social-links">
                <a
                  href="https://www.linkedin.com/in/madhavika-sisodia-0a4555325/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://github.com/madhavikasisodia"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaTwitter />
                </a>
                <a
                  href="mailto:madhavikasisodia@gmail.com"
                  rel="noopener noreferrer"
                >
                  <FaEnvelope />
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="about">
          <h2>About Me</h2>
          <div className="about-container">
            <div className="about-left">
              <h3>Who I Am</h3>
              <p>
                I'm a passionate web developer with a strong foundation in frontend technologies
                and a growing expertise in AI and machine learning. My journey in tech started
                with curiosity and has evolved into a professional pursuit of creating
                meaningful digital experiences.
              </p>
              <p>
                I specialize in building responsive, user-friendly web applications using
                modern technologies like React, and I'm constantly expanding my skill set
                to stay ahead in this ever-evolving field.
              </p>
            </div>
            <div className="about-right">
              <h3>Things I Enjoy</h3>
              <ul className="hobbies-list">
                <li>📚 Reading Tech Blogs</li>
                <li>🎨 UI/UX Design</li>
                <li>🎯 Problem Solving</li>
                <li>🌱 Learning New Technologies</li>
                <li>✍️ Technical Writing</li>
                <li>🤝 Open Source Contributing</li>
              </ul>
            </div>
          </div>
          
          <div className="skills-section">
            <h3>Technical Skills</h3>
            <div className="skills-grid">
              <div className="skill-category-box">
                <h4>Frontend</h4>
                <div className="skill-items">
                  <span>React.js</span>
                  <span>JavaScript</span>
                  <span>HTML/CSS</span>
                  <span>Redux</span>
                  <span>TypeScript</span>
                </div>
              </div>

              <div className="skill-category-box">
                <h4>Backend</h4>
                <div className="skill-items">
                  <span>Node.js</span>
                  <span>Python</span>
                  <span>Express</span>
                  <span>Django</span>
                </div>
              </div>

              <div className="skill-category-box">
                <h4>Database</h4>
                <div className="skill-items">
                  <span>MongoDB</span>
                  <span>MySQL</span>
                  <span>PostgreSQL</span>
                </div>
              </div>

              <div className="skill-category-box">
                <h4>UI/UX</h4>
                <div className="skill-items">
                  <span>Figma</span>
                  <span>Adobe XD</span>
                  <span>Sketch</span>
                </div>
              </div>

              <div className="skill-category-box">
                <h4>Tools</h4>
                <div className="skill-items">
                  <span>Git/GitHub</span>
                  <span>VS Code</span>
                  <span>Docker</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects" className="projects">
          <div>
            <h2>My Projects</h2>
            <div className="project-grid">
              {projects.map((project, index) => (
                <ProjectCard key={index} project={project} />
              ))}
            </div>
          </div>
        </section>

        <ContactSection />
      </main>
      <ScrollButton />
      <Footer />
    </>
  );
}

export default App;
