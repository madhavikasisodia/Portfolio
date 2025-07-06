import React from "react";
import { FaLinkedin, FaGithub, FaTwitter, FaInstagram } from "react-icons/fa";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer-glass">
      <div className="footer-main">
        <div className="footer-left">
          <div className="footer-name">
            <span className="footer-highlight">Madhavika</span> Sisodia
          </div>
          <div className="footer-tagline">Undergraduate Student</div>
        </div>
        <nav className="footer-nav">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <div className="footer-socials">
          <a href="https://www.linkedin.com/in/madhavika-sisodia-0a4555325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="footer-social-btn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/madhavikasisodia" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="footer-social-btn">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="footer-social-btn">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/madhavikasisodia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="footer-social-btn">
            <FaInstagram />
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <span>© 2025 Madhavika Sisodia. All rights reserved.</span>
        <span className="footer-made">Made with <span className="footer-heart">❤️</span> in India</span>
      </div>
    </footer>
  );
} 