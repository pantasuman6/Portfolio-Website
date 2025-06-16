import React from 'react';


export default function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <p>
        Hello! I'm <strong>Suman Panta</strong>, an experienced IT professional with over 5 years of hands-on
        experience in the information technology industry. I specialize in system administration,
        technical support, DevOps tools, web development, and full-stack troubleshooting across cloud and on-prem environments.
      </p>

      <div className="about-section">
        <h3>🎓 Education</h3>
        <p>
          <strong>University of the Cumberlands</strong>, Williamsburg, KY — <em>Expected Dec 2025</em><br />
          Master’s Program in Information Technology<br /><br />

          <strong>Wentworth Institute of Technology</strong>, Boston, MA — <em>Dec 2021</em><br />
          Bachelor of Science in Computer Networking<br /><br />

          <strong>Quincy College</strong>, Quincy, MA — <em>May 2019</em><br />
          Bachelor of Science in Computer Science and Networking<br /><br />

          <strong>Related Courses:</strong> Databases, Web Design, Cloud Computing, Networking, Network Administration, Core Java, Data Visualization,
          Network & Computer Security, Linux Administration, Computer Architecture, Web Development, Discrete Math,
          Web Applications, Project Management
        </p>
      </div>

      <div className="about-section">
        <h3>💼 Professional Experience</h3>
        <ul>
          <li>Front-End Developer | Learning React, JavaScript, HTML, CSS, UI/UX design to create clean, functional, and engaging web experiences.</li>
          <li>5+ years in IT across roles including Technical Support Engineer and System Administrator.</li>
          <li>Experience managing servers, performing root-cause analysis, and resolving critical infrastructure issues.</li>
          <li>Skilled in customer support and collaborating with cross-functional teams to deliver technical solutions.</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>🛠️ Tools & Technologies</h3>
        <ul>
          <li><strong>Programming Languages:</strong> Java, HTML5, CSS, JavaScript, C++, Python, SQL, PL/SQL, R, Bash Scripting</li>
          <li><strong>Web Development:</strong> React.js, Node.js, Express.js, Postman, Tailwind CSS, Flask, Bootstrap</li>
          <li><strong>Operating Systems & Servers:</strong> Windows, Linux, Ubuntu, CentOS, MacOS, Fedora</li>
          <li><strong>Cloud Platforms:</strong> AWS, Microsoft Azure, Google Cloud Platform (GCP)</li>
          <li><strong>Networking:</strong> TCP/IP, DNS, VPN, SSL/TLS, OSI model, Load Balancing, Microservices, REST</li>
          <li><strong>Monitoring & Logging:</strong> CloudWatch, Azure Monitor, Datadog, Grafana, ELK Stack</li>
          <li><strong>Visualization Tools:</strong> PowerBI, Tableau, RStudio, Excel</li>
          <li><strong>CI/CD & Config Management:</strong> Terraform, Ansible, Jenkins, GitLab</li>
          <li><strong>Customer Support Tools:</strong> Ticketing Systems, Root Cause Analysis, Documentation</li>
          <li><strong>Other Software:</strong> Wireshark, PowerShell, VMware, PuTTY, Packet Tracer, Office 365</li>
        </ul>
      </div>

      <div className="about-section">
        <h3>🌟 Hobbies & Interests</h3>
        <p>
          Outside of my professional life, I’m passionate about maintaining a healthy and balanced lifestyle.
          I enjoy working out regularly, lifting weights, and staying active. I'm also an avid reader who enjoys
          diving into books that expand my knowledge and perspective. Traveling, exploring new cultures, and
          building meaningful connections with people from diverse backgrounds are things that inspire me and help me grow
          both personally and professionally.
        </p>
      </div>
    </div>
  );
}
