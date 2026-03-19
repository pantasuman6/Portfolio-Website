import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <p>&copy; {new Date().getFullYear()} Suman Panta. All rights reserved.</p>
        </div>
        <div className="footer-links">
          <a href="https://github.com/pantasuman6" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/sumanpanta/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="/Suman-Panta-Resume-2026.pdf" target="_blank" rel="noopener noreferrer">Resume</a>
        </div>
      </div>
    </footer>
  );
}
