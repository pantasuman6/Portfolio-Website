import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import profileImage from './suman-p.JPG';

const roles = [
  'Technical Engineer',
  'System Administrator',
  'Cloud Engineer',
  'Front-End Software Engineer',
  'Web Developer',
  'DevOps Enthusiast'
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
      }, 100);
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
      <img
        src={profileImage}
        alt="Suman Panta"
        className="profile-image"
      />

      <div className="home-text">
        <span className="greeting">Welcome to my portfolio</span>
        <h1>Suman Panta</h1>

        <h3 className="typing-effect">
          {currentRole}
          <span className="blinking-cursor" />
        </h3>

        <p>
          A dedicated IT professional with over 5 years of experience spanning system administration,
          cloud infrastructure, technical support, and full-stack web development.
        </p>

        <p>
          Skilled in cloud computing (AWS, Azure, GCP), full-stack development
          (React.js &amp; Node.js), DevOps tools (Docker, Kubernetes, Terraform), and data
          visualization with Python, Tableau, and Power BI.
        </p>

        <div className="home-cta">
          <Link to="/projects" className="btn-primary">View Projects</Link>
          <Link to="/contact" className="btn-secondary">Get in Touch</Link>
        </div>
      </div>
    </div>
  );
}
