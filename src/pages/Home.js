import React, { useEffect, useState } from 'react';
import profileImage from './suman-p.JPG';

export default function Home() {
  const roles = [
    'System Administrator',
    'Cloud Engineer',
    'Full-Stack Developer',
    'DevOps Enthusiast'
  ];

  const [currentRole, setCurrentRole] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    if (charIndex < roles[roleIndex].length) {
      const timeout = setTimeout(() => {
        setCurrentRole(prev => prev + roles[roleIndex][charIndex]);
        setCharIndex(charIndex + 1);
      }, 100);
      return () => clearTimeout(timeout);
    } else {
      const timeout = setTimeout(() => {
        setCurrentRole('');
        setCharIndex(0);
        setRoleIndex((roleIndex + 1) % roles.length);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [charIndex, roleIndex, roles]);

  return (
    <div className="home-container">
      <img
        src={profileImage}
        alt="Suman Panta"
        className="profile-image"
      />

      <div className="home-text">
        <h1>Welcome to my Portfolio!</h1>

        <h3 className="typing-effect">
          {currentRole}
          <span className="blinking-cursor" />
        </h3>

        <p>
          I'm <strong>Suman Panta</strong>, a dedicated IT professional with over 5 years of experience spanning system administration,
          cloud infrastructure, technical support, and full-stack development...
        </p>

        <p>
          My core competencies include cloud computing (AWS, Azure, GCP), server administration (Windows/Linux), full-stack development
          (React.js & Node.js), and DevOps with Dockers, Kubernetes, Terraform and Ansible.
        </p>

        <p>
          This portfolio serves as a comprehensive showcase of my technical skills and projects. Please explore to learn more!
        </p>

        
      </div>
    </div>
  );
}
