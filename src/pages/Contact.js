import React, { useState } from 'react';

export default function Contact() {
  const [input, setInput] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [message, setMessage] = useState("");

  function handleEmailChange(e) {
    setInput(e.target.value);
  }
  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }
  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }
  function handleMessageChange(e) {
    setMessage(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault();
    const regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (firstname.trim() === "") {
      alert("First name is required");
    } else if (lastname.trim() === "") {
      alert("Last name is required");
    } else if (input.trim() === "") {
      alert("Email is required");
    } else if (regex.test(input)) {
      alert("Form has been submitted");
      setInput("");
      setFirstName("");
      setLastName("");
      setMessage("");
    } else {
      alert("Email is invalid.");
    }
  }

  return (
    <div className="contact-container">
      <h2>Get in Touch</h2>
      <p>
        Open to new software engineering opportunities, AI/ML collaborations, consulting
        engagements, or interesting projects. Reach out via the form or any of the
        contact methods below.
      </p>

      <div className="contact-layout">
        <div id="form">
          <h3>Send a Message</h3>
          <form>
            <input
              type="text"
              value={firstname}
              onChange={handleFirstNameChange}
              placeholder="First Name"
            />
            <input
              type="text"
              value={lastname}
              onChange={handleLastNameChange}
              placeholder="Last Name"
            />
            <input
              type="email"
              value={input}
              onChange={handleEmailChange}
              placeholder="Email Address"
            />
            <textarea
              rows="5"
              value={message}
              onChange={handleMessageChange}
              placeholder="Your message..."
            />
            <button onClick={handleClick}>Send Message</button>
          </form>
        </div>

        <div className="contact-info-section">
          <div className="contact-info-card">
            <h4>Email</h4>
            <p>pantasuman6@gmail.com</p>
          </div>

          <div className="contact-info-card">
            <h4>Location</h4>
            <p>Boston, MA</p>
          </div>

          <div className="contact-buttons">
            <a
              href="https://www.linkedin.com/in/sumanpanta/"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn linkedin"
            >
              Connect on LinkedIn
            </a>
            <a
              href="https://github.com/pantasuman6"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn github"
            >
              View GitHub Profile
            </a>
            <a
              href="/Suman-Panta-Resume-2026.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-btn resume"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
