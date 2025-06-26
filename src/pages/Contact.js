import React, { useState } from 'react';

export default function Contact() {
  const [input, setInput] = useState("");
  const [firstname, setFirstName]= useState("");
  const [lastname, setLastName]= useState("");
  const [message, SetMessage]=useState("");

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
    SetMessage(e.target.value);
  }
  function handleClick(e) {
    e.preventDefault(); // 

    
    const regex = /^[\w.-]+@([\w-]+\.)+[\w-]{2,4}$/;

if (firstname.trim() === "") {
  alert("First name is required");
} else if (lastname.trim() === "") {
  alert("Last name is required");
} else if (input.trim() === "") {
  alert("Email is required");
}
 else if (regex.test(input)) {
      alert("Form has been submitted");
      setInput("");
      setFirstName("");
      setLastName("");
      SetMessage("");
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
      <div id ="form">
        <h3 style={{ textAlign: 'center', marginBottom: '20px' }}>Get in Touch</h3>

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
          placeholder="Enter your email..."
          
        />
         
          <textarea
           rows="10" cols="40"
          value={message}
          onChange={handleMessageChange}
          placeholder="Enter your message here... "
        />
        <button onClick={handleClick}>Submit</button>
      </form>
      </div>

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
          <a
          href='/SumanPanta-Resume-SoftwareEngineer2025.pdf'
          target="_blank"
          rel="noopener noreferrer"
          className="contact-btn"
        >
          View Resume
        </a>
      </div>

      <p>Looking forward to connecting with you!</p>
    </div>
  );
}
