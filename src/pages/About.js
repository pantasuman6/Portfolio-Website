import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <p className="about-subtitle">
        An experienced IT professional with over 5 years of hands-on experience
        specializing in system administration, technical support, DevOps, web development,
        and full-stack troubleshooting across cloud and on-prem environments.
      </p>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#127891;</span>
          Education
        </h3>
        <p>
          <strong>University of the Cumberlands</strong>, Williamsburg, KY &mdash; <em>Expected Dec 2025</em><br />
          Master's Program in Information Technology<br /><br />

          <strong>Wentworth Institute of Technology</strong>, Boston, MA &mdash; <em>Dec 2021</em><br />
          Bachelor of Science in Computer Networking<br /><br />

          <strong>Quincy College</strong>, Quincy, MA &mdash; <em>May 2019</em><br />
          Bachelor of Science in Computer Science and Networking<br /><br />

          <strong>Related Courses:</strong> Databases, Web Design, Cloud Computing, Networking, Network Administration,
          Core Java, Data Visualization, Network &amp; Computer Security, Linux Administration, Computer Architecture,
          Web Development, Discrete Math, Web Applications, Project Management
        </p>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#128188;</span>
          Professional Experience
        </h3>
        <ul>
          <li>Front-End Developer focused on React, JavaScript, HTML, CSS, and UI/UX design to create clean, functional, and engaging web experiences.</li>
          <li>5+ years in IT across roles including Technical Support Engineer and System Administrator.</li>
          <li>Experience managing servers, performing root-cause analysis, and resolving critical infrastructure issues.</li>
          <li>Skilled in customer support and collaborating with cross-functional teams to deliver technical solutions.</li>
        </ul>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#128736;</span>
          Tools &amp; Technologies
        </h3>
        <div className="skills-grid">
          <div className="skill-category">
            <strong>Languages</strong>
            <span>Java, HTML5, CSS, JavaScript, C++, Python, SQL, PL/SQL, R, Bash</span>
          </div>
          <div className="skill-category">
            <strong>Web Development</strong>
            <span>React.js, Node.js, Express.js, Postman, Tailwind CSS, Flask, Bootstrap</span>
          </div>
          <div className="skill-category">
            <strong>Cloud Platforms</strong>
            <span>AWS, Microsoft Azure, Google Cloud Platform (GCP)</span>
          </div>
          <div className="skill-category">
            <strong>DevOps &amp; CI/CD</strong>
            <span>Docker, Kubernetes, Terraform, Ansible, Jenkins, GitLab</span>
          </div>
          <div className="skill-category">
            <strong>Networking</strong>
            <span>TCP/IP, DNS, VPN, SSL/TLS, OSI Model, Load Balancing, REST</span>
          </div>
          <div className="skill-category">
            <strong>Monitoring</strong>
            <span>CloudWatch, Azure Monitor, Datadog, Grafana, ELK Stack</span>
          </div>
          <div className="skill-category">
            <strong>Visualization</strong>
            <span>Power BI, Tableau, RStudio, Excel</span>
          </div>
          <div className="skill-category">
            <strong>OS &amp; Tools</strong>
            <span>Windows, Linux, Ubuntu, CentOS, VMware, Wireshark, PowerShell</span>
          </div>
        </div>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#127775;</span>
          Hobbies &amp; Interests
        </h3>
        <p>
          Outside of work, I maintain a healthy and balanced lifestyle through regular workouts and staying active.
          I'm also an avid reader who enjoys books that expand knowledge and perspective. Traveling, exploring new cultures,
          and building meaningful connections with people from diverse backgrounds are things that inspire personal and professional growth.
        </p>
      </div>
    </div>
  );
}
