import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <p className="about-subtitle">
        Software Engineer and AI/ML enthusiast with a Master's degree in Information Technology.
        I build intelligent, scalable software systems — from full-stack web applications
        to machine learning models and cloud-native infrastructure. My work sits at the
        intersection of software engineering, data science, and DevOps, with a focus on
        creating robust solutions that leverage modern AI capabilities.
      </p>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#127891;</span>
          Education
        </h3>
        <div className="education-list">
          <div className="education-item">
            <div className="education-header">
              <strong>University of the Cumberlands</strong>
              <span className="education-date">Dec 2025</span>
            </div>
            <em>Master of Science in Information Technology</em> — Williamsburg, KY
            <div className="education-detail">GPA: 3.9 / 4.0 &bull; Dean's List</div>
          </div>

          <div className="education-item">
            <div className="education-header">
              <strong>Wentworth Institute of Technology</strong>
              <span className="education-date">Dec 2021</span>
            </div>
            <em>Bachelor of Science in Computer Networking</em> — Boston, MA
          </div>

          <div className="education-item">
            <div className="education-header">
              <strong>Quincy College</strong>
              <span className="education-date">May 2019</span>
            </div>
            <em>Associate in Computer Science</em> — Quincy, MA
          </div>
        </div>
        <p style={{ marginTop: '16px', fontSize: '0.9rem' }}>
          <strong>Key Coursework:</strong> Machine Learning, Data Visualization, Cloud Computing,
          Databases &amp; SQL, Web Development, Network &amp; Computer Security, Linux Administration,
          Core Java, Discrete Math, Project Management
        </p>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#128188;</span>
          Professional Experience
        </h3>

        <div className="experience-item">
          <div className="experience-header">
            <strong>Technical Support Engineer</strong>
            <span className="experience-date">Oct 2022 – Present</span>
          </div>
          <em>Pine Street Inn</em> — Boston, MA
          <ul>
            <li>Administer and maintain Windows Server, Active Directory, and Microsoft 365 across 40+ locations.</li>
            <li>Manage cloud infrastructure on Azure and AWS, including virtual machines, security groups, and IAM policies.</li>
            <li>Automate deployments and system tasks using PowerShell, Bash scripting, and CI/CD pipelines with Docker &amp; Kubernetes.</li>
            <li>Monitor infrastructure performance using Datadog and Grafana; resolve incidents with Jira and ServiceNow.</li>
            <li>Provide Tier 1–3 technical support, managing 50+ daily tickets with 95%+ SLA compliance.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <strong>System Administrator</strong>
            <span className="experience-date">Jun 2021 – Sep 2022</span>
          </div>
          <em>Pine Street Inn</em> — Boston, MA
          <ul>
            <li>Managed Windows/Linux servers, DHCP, DNS, VPN, and firewall configurations for 500+ users.</li>
            <li>Deployed infrastructure using Terraform and Ansible for reproducible cloud environments.</li>
            <li>Implemented monitoring with CloudWatch, Azure Monitor, and ELK Stack for proactive issue resolution.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <strong>Quality Control / Lab Tech</strong>
            <span className="experience-date">Feb 2020 – Jun 2021</span>
          </div>
          <em>Eisai (G2D2 Innovation Center)</em> — Cambridge, MA
          <ul>
            <li>Performed data analysis using Python, R, and Excel to support pharmaceutical research workflows.</li>
            <li>Built automated data pipelines and dashboards for quality metrics reporting.</li>
          </ul>
        </div>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#128736;</span>
          Tools &amp; Technologies
        </h3>
        <div className="skills-grid">
          <div className="skill-category">
            <strong>Languages</strong>
            <span>Python, Java, JavaScript, C++, SQL, PL/SQL, R, Bash, HTML5, CSS3</span>
          </div>
          <div className="skill-category">
            <strong>AI / ML</strong>
            <span>scikit-learn, Naive Bayes, Random Forest, NLP, Sentiment Analysis, TF-IDF, pandas, NumPy</span>
          </div>
          <div className="skill-category">
            <strong>Web Development</strong>
            <span>React.js, Node.js, Express.js, Flask, REST APIs, Tailwind CSS, Bootstrap, Firebase</span>
          </div>
          <div className="skill-category">
            <strong>Cloud &amp; DevOps</strong>
            <span>AWS, Azure, GCP, Docker, Kubernetes, Terraform, Ansible, Jenkins, GitLab CI/CD</span>
          </div>
          <div className="skill-category">
            <strong>Data &amp; Visualization</strong>
            <span>Power BI, Tableau, RStudio, MySQL, PostgreSQL, Excel</span>
          </div>
          <div className="skill-category">
            <strong>Monitoring &amp; Infra</strong>
            <span>Datadog, Grafana, CloudWatch, ELK Stack, Azure Monitor, Wireshark</span>
          </div>
          <div className="skill-category">
            <strong>Networking</strong>
            <span>TCP/IP, DNS, VPN, SSL/TLS, Active Directory, DHCP, Load Balancing, Firewalls</span>
          </div>
          <div className="skill-category">
            <strong>Platforms &amp; Tools</strong>
            <span>Linux, Windows Server, Git, GitHub, Jira, ServiceNow, VMware, PowerShell</span>
          </div>
        </div>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#127942;</span>
          Certifications
        </h3>
        <div className="certifications-grid">
          <div className="cert-badge">CompTIA A+</div>
          <div className="cert-badge">AWS Cloud Practitioner</div>
          <div className="cert-badge">Microsoft Azure Fundamentals (AZ-900)</div>
          <div className="cert-badge">Google IT Support Professional</div>
        </div>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#127775;</span>
          Interests
        </h3>
        <p>
          Beyond engineering, I stay active through fitness and outdoor pursuits.
          I'm an avid reader drawn to technology and science, and enjoy traveling to
          experience new cultures. Building meaningful connections and contributing
          to open-source projects are key drivers of my personal and professional growth.
        </p>
      </div>
    </div>
  );
}
