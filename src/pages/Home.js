import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from './suman-p.JPG';

const roles = [
  'Software Engineer',
  'AI / ML Engineer',
  'Full-Stack Developer',
  'Cloud & DevOps Engineer',
  'Data Scientist'
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
          Software Engineer with a Master's in Information Technology and a strong
          foundation in full-stack development, AI/ML, and cloud infrastructure.
          Passionate about building intelligent, scalable applications that solve
          real-world problems.
        </p>

        <p>
          Proficient in Python, Java, JavaScript, React, Node.js, and modern
          AI/ML frameworks including scikit-learn and NLP. Experienced across
          AWS, Azure, GCP, Docker, Kubernetes, and CI/CD pipelines.
        </p>

        <div className="home-stats">
          <div className="stat-item">
            <span className="stat-number">5+</span>
            <span className="stat-label">Years Experience</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">10+</span>
            <span className="stat-label">Projects Built</span>
          </div>
          <div className="stat-item">
            <span className="stat-number">3</span>
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
