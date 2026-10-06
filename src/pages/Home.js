import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from './suman-p.JPG';

const roles = [
  'System & AI Administrator',
  'Enterprise AI & Governance',
  'Identity & Access Management',
  'Cloud & Security Operations',
  'GenAI & Automation'
];

export default function Home() {
  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentRole((prev) => prev + roles[roleIndex][charIndex]);
        setCharIndex((prev) => prev + 1);
      }, 80);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentRole('');
        setCharIndex(0);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex]);

  return (
    <div className="home-container">
      <div className="hero-image-wrapper">
        <img
          src={profileImage}
          alt="Suman Panta"
          className="profile-image"
        />
        <div className="hero-image-ring" />
      </div>

      <div className="home-text">
        <span className="greeting">Hello, I'm</span>
        <h1>Suman Panta</h1>

        <h3 className="typing-effect">
          {currentRole}
          <span className="blinking-cursor" />
        </h3>

        <p>
          System and AI Administrator with 5+ years of enterprise IT experience
          and a Master's in Information Technology. I bring together identity and
          access management, endpoint and network operations, cloud infrastructure,
          and cybersecurity to support secure enterprise systems.
        </p>

        <p>
          I lead Microsoft 365 Copilot and Claude Enterprise administration,
          strengthen Zero Trust security with Entra ID, Purview, Defender XDR,
          and Intune, and automate operations with Python, PowerShell, and Microsoft
          Graph. My projects explore RAG pipelines, MCP servers, and agentic workflows.
        </p>

        <div className="home-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">7</span>
            <span className="stat-label">Featured Projects</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">2</span>
            <span className="stat-label">Degrees Earned</span>
          </div>
        </div>

        <div className="home-cta">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
          <a href="/Suman-Panta-Resume-2026.pdf" target="_blank" rel="noopener noreferrer" className="btn-secondary">
            Resume
          </a>
        </div>
      </div>
    </div>
  );
}
