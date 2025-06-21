import React, { useState } from 'react';

export default function Contact() {
  const [input, setInput] = useState("");

  function handleChange(e) {
    setInput(e.target.value);
  }

  function handleClick(e) {
    e.preventDefault(); // 

    
    const regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

    if(input==="") {
      alert("Please enter your email");

    }
    
    else if (regex.test(input)) {
      alert("Email has been submitted");
      setInput("");
    } else {
      alert("Email is invalid.");
    }
  }

  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <p>
        I welcome the opportunity to connect regarding new professional challenges, consulting engagements, or collaborative projects. 
        Please feel free to reach out via any of the contact methods below to start a meaningful conversation.
      </p>

      <form>
        <input
          type="email"
          value={input}
          onChange={handleChange}
          placeholder="Enter your email..."
        />
        <button onClick={handleClick}>Submit</button>
      </form>

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
