import React from 'react';


export default function Contact() {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        <p>
  I welcome the opportunity to connect regarding new professional challenges, consulting engagements, or collaborative projects. 
  Please feel free to reach out via any of the contact methods below to start a meaningful conversation.
</p>

      </p>

      <p><strong>Email:</strong> pantasuman6@gmail.com</p>

      <div className="contact-buttons">
        <a
          href="https://www.linkedin.com/in/sumanpanta/"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          Connect on LinkedIn
        </a>
        <a
          href="https://github.com/pantasuman6"
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          View GitHub Profile
        </a>
      </div>

      <p>Looking forward to connecting with you!</p>
    </div>
  );
}
