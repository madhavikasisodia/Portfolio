import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaTwitter, FaInstagram } from "react-icons/fa";
import "../App.css";

const CONTACT_EMAIL = "madhavikasisodia@gmail.com";
const CONTACT_PHONE = "+91 9520590286";
const CONTACT_LOCATION = "Mathura, India";

export default function ContactSection() {
  return (
    <section id="contact" className="contact-section-glass-vibrant">
      <h2 className="contact-glass-vibrant-heading">Get In Touch</h2>
      <p className="contact-glass-vibrant-subheading">
        Feel free to reach out for collaborations or just a friendly hello.
      </p>
      <div className="contact-glass-vibrant-card">
        <div className="contact-glass-vibrant-info">
          <a href={`mailto:${CONTACT_EMAIL}`} className="contact-glass-vibrant-row">
            <span className="contact-glass-vibrant-icon"><FaEnvelope /></span>
            <div>
              <div className="contact-glass-vibrant-label">Email</div>
              <div className="contact-glass-vibrant-value">{CONTACT_EMAIL}</div>
            </div>
          </a>
          <a href={`tel:${CONTACT_PHONE.replace(/\s+/g, '')}`} className="contact-glass-vibrant-row">
            <span className="contact-glass-vibrant-icon"><FaPhoneAlt /></span>
            <div>
              <div className="contact-glass-vibrant-label">Phone</div>
              <div className="contact-glass-vibrant-value">{CONTACT_PHONE}</div>
            </div>
          </a>
          <div className="contact-glass-vibrant-row">
            <span className="contact-glass-vibrant-icon"><FaMapMarkerAlt /></span>
            <div>
              <div className="contact-glass-vibrant-label">Location</div>
              <div className="contact-glass-vibrant-value">{CONTACT_LOCATION}</div>
            </div>
          </div>
        </div>
        <div className="contact-glass-vibrant-socials">
          <a href="https://www.linkedin.com/in/madhavika-sisodia-0a4555325/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="contact-glass-vibrant-social-btn">
            <FaLinkedin />
          </a>
          <a href="https://github.com/madhavikasisodia" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="contact-glass-vibrant-social-btn">
            <FaGithub />
          </a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="contact-glass-vibrant-social-btn">
            <FaTwitter />
          </a>
          <a href="https://www.instagram.com/madhavikasisodia/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="contact-glass-vibrant-social-btn">
            <FaInstagram />
          </a>
        </div>
      </div>
    </section>
  );
} 