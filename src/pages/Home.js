import React from 'react';
import profileImage from './suman-p.JPG'; 

export default function Home() {
  return (
    

      
      <div className="home-container">
        
        <img 
          src={profileImage} 
          alt="Suman Panta" 
          className="profile-image"
        />

        

        <div className="home-text">
          <h2>Welcome to my Portfolio!</h2>
          <p>
            I'm <strong>Suman Panta</strong>, and I am a dedicated IT professional with over 5 years of experience spanning system administration,
            cloud infrastructure, technical support, and full-stack development. My background in both enterprise IT environments and academic training
            enables me to bridge the gap between theory and practical implementation.
          </p>

          <p>
            My core competencies include cloud computing (AWS, Azure, GCP), network and server administration (Windows/Linux), and full-stack application development
            using modern frameworks like React.js and Node.js. I am also proficient in DevOps practices, automation, and infrastructure-as-code using tools such as Terraform and Ansible.
          </p>

          <p>
            This portfolio serves as a comprehensive showcase of my technical skills, key projects, and career journey. Please explore the site to learn more about
            my background, project work, and professional expertise.
          </p>
        </div>
      </div>
    
  );
}
