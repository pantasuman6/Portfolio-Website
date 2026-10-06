import React from 'react';

export default function About() {
  return (
    <div className="about-page">
      <h2>About Me</h2>
      <p className="about-subtitle">
        System and AI Administrator with 5+ years of enterprise IT experience and an M.S.
        in Information Technology. My work spans identity and access management, endpoint
        and network operations, cloud infrastructure, and cybersecurity. I lead secure AI
        adoption for Microsoft 365 Copilot and Claude Enterprise, including SSO/SAML,
        SCIM provisioning, license governance, and DLP controls. I implement Zero Trust
        identity controls, data governance, and endpoint protection in support of HIPAA,
        PCI DSS, and NIST CSF compliance, and build automation and GenAI systems with
        Python, PowerShell, Microsoft Graph, RAG pipelines, MCP servers, and agentic workflows.
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
            <p><strong>Relevant Coursework:</strong> Cloud Computing, Generative AI, Data Analysis
              and Visualization, Data Science, Machine Learning, Business Intelligence,
              Software Engineering Principles, Object-Oriented Programming</p>
          </div>

          <div className="education-item">
            <div className="education-header">
              <strong>Wentworth Institute of Technology</strong>
              <span className="education-date">Dec 2021</span>
            </div>
            <em>Bachelor of Science in Computer Networking</em> — Boston, MA
            <div className="education-detail">GPA: 3.6 / 4.0 &bull; Dean's List</div>
            <p><strong>Relevant Coursework:</strong> Databases, Web Design, Data Structures and
              Algorithms, Networking, Operating Systems, Statistics, Network and Linux
              Administration, Core Java, Network Security, Computer Architecture, System Design,
              Web Applications, Ethical Hacking, Project Management</p>
          </div>
        </div>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#128188;</span>
          Professional Experience
        </h3>

        <div className="experience-item">
          <div className="experience-header">
            <strong>Pine Street Inn</strong>
            <span className="experience-date">Feb 2022 – Present</span>
          </div>
          <em>System Administrator</em> — Boston, MA
          <ul>
            <li>Lead enterprise AI administration for Microsoft Copilot and Claude Enterprise, including SSO/SAML, SCIM provisioning, license governance, AI security controls, and organization-wide adoption.</li>
            <li>Administer Microsoft Purview DLP, Information Protection, Sensitivity Labels, Insider Risk Management, and Compliance Manager to safeguard data across Microsoft 365 and AI platforms.</li>
            <li>Manage identity and access governance with Microsoft Entra ID, Conditional Access, MFA, RBAC, and privileged access controls.</li>
            <li>Collaborate with Security and Network teams on Zero Trust, threat remediation, and incident response using Microsoft Defender XDR and Netwrix in support of HIPAA, PCI DSS, and NIST frameworks.</li>
            <li>Support firewalls, managed switches, wireless access points, VPN, VLAN segmentation, DNS/DHCP, and network access control to isolate sensitive systems and monitor performance.</li>
            <li>Maintain Microsoft 365, Intune, Exchange Online, SharePoint Online, Teams, Windows Server, and cloud services; automate operations with PowerShell and Python.</li>
          </ul>
          <strong>Helpdesk Specialist</strong>
          <ul>
            <li>Delivered Tier 1–3 support for software, security, operating systems, and network connectivity across Windows and Linux environments.</li>
            <li>Developed Python and PowerShell scripts to streamline administrative workflows and reduce repetitive tasks.</li>
            <li>Administered Active Directory, Microsoft Entra ID, Microsoft 365, Group Policy, and Intune for enterprise identity and endpoint management.</li>
            <li>Supported operating system migrations, endpoint security, cloud adoption, and enterprise device lifecycle management.</li>
            <li>Troubleshot complex software, networking, authentication, and endpoint issues while maintaining SLA compliance.</li>
          </ul>
        </div>

        <div className="experience-item">
          <div className="experience-header">
            <strong>Junior System Administrator Intern</strong>
            <span className="experience-date">Jan 2021 – Apr 2021</span>
          </div>
          <em>Eisai G2D2</em> — Cambridge, MA
          <ul>
            <li>Provisioned and maintained AWS EC2 instances and supported cloud infrastructure operations.</li>
            <li>Automated administrative tasks with shell scripts and monitored Data Guard reports and system logs.</li>
            <li>Built, containerized, and deployed applications with Docker on EC2; gained hands-on exposure to Kubernetes and DevOps tools.</li>
            <li>Monitored system health with CloudWatch and researched Datadog, Grafana, and log aggregation tools.</li>
            <li>Developed Bash and Python scripts for deployment, backup, and log analysis.</li>
            <li>Assisted with cloud resource optimization and automated infrastructure workflows.</li>
          </ul>
        </div>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#128736;</span>
          Skills &amp; Technologies
        </h3>
        <div className="skills-grid">
          <div className="skill-category">
            <strong>AI Administration &amp; Governance</strong>
            <span>Microsoft 365 Copilot Admin, Claude Enterprise Admin, AI Governance &amp; Policy, Responsible AI, Enterprise AI Adoption, AI Risk Management, Purview AI Hub, Agent &amp; Connector Governance, Model Context Protocol (MCP), AI Usage Analytics</span>
          </div>
          <div className="skill-category">
            <strong>Identity &amp; Access Management</strong>
            <span>Microsoft Entra ID, Conditional Access, Privileged Identity Management (PIM), SSO/SAML, OAuth 2.0, SCIM Provisioning, MFA, Access Reviews, Zero Trust, Active Directory (AD DS), Entra Connect</span>
          </div>
          <div className="skill-category">
            <strong>Security &amp; Compliance</strong>
            <span>Microsoft Defender XDR, Microsoft Purview, Data Loss Prevention (DLP), Sensitivity Labels, Insider Risk Management, eDiscovery, SIEM/Sentinel, KQL Threat Hunting, Incident Response, Vulnerability Management, NIST/CIS Frameworks</span>
          </div>
          <div className="skill-category">
            <strong>Systems &amp; Endpoint</strong>
            <span>Linux (RHEL/Ubuntu), Windows Server (DNS, DHCP, GPO), macOS, Microsoft 365, Intune, Autopilot, Exchange Online, SharePoint, OneDrive, Teams, VMware/Hyper-V, Patch Management</span>
          </div>
          <div className="skill-category">
            <strong>Networking</strong>
            <span>TCP/IP, DNS, DHCP, VPN, VLANs, Firewalls, Routing &amp; Switching, Wireshark, Network Troubleshooting</span>
          </div>
          <div className="skill-category">
            <strong>Languages &amp; Scripting</strong>
            <span>Python, PowerShell, Bash, JavaScript (ES6+), TypeScript, SQL, Java</span>
          </div>
          <div className="skill-category">
            <strong>Generative AI &amp; LLMs</strong>
            <span>Retrieval-Augmented Generation (RAG), LangChain, Prompt Engineering, AI Agents, Vector Embeddings, OpenAI API, Anthropic Claude, Google Gemini, Mistral AI, Hugging Face Transformers</span>
          </div>
          <div className="skill-category">
            <strong>Machine Learning</strong>
            <span>Scikit-learn, TensorFlow, PyTorch, Pandas, NumPy, Feature Engineering, Model Training &amp; Fine-Tuning, Model Evaluation, Data Preprocessing</span>
          </div>
          <div className="skill-category">
            <strong>Backend &amp; APIs</strong>
            <span>FastAPI, Flask, Django, Node.js, Express.js, REST APIs, WebSockets, Microsoft Graph API</span>
          </div>
          <div className="skill-category">
            <strong>Frontend</strong>
            <span>React.js, HTML5, CSS3, Tailwind CSS, Bootstrap</span>
          </div>
          <div className="skill-category">
            <strong>Databases</strong>
            <span>ChromaDB, Pinecone, MySQL, MongoDB, Oracle DB, Firebase</span>
          </div>
          <div className="skill-category">
            <strong>Cloud &amp; DevOps</strong>
            <span>Microsoft Azure, AWS (EC2, S3, CloudWatch), Docker, Terraform, Jenkins, Git/GitHub, CI/CD</span>
          </div>
        </div>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#127942;</span>
          Licenses &amp; Certifications
        </h3>
        <div className="certifications-grid">
          <div className="cert-badge">Applied Machine Learning: Algorithms — LinkedIn Learning · Feb 2026</div>
          <div className="cert-badge">Certificate of Completion: Claude 101 — Anthropic · Feb 2026</div>
          <div className="cert-badge">Hands-On AI: Build an Autonomous Agent with the Claude Agent SDK — LinkedIn Learning · Jan 2026</div>
          <div className="cert-badge">Academy Accreditation – Generative AI Fundamentals — Databricks · Jan 2026</div>
        </div>
      </div>

      <div className="about-section animate-in">
        <h3>
          <span className="section-icon">&#127775;</span>
          Leadership
        </h3>
        <div className="experience-item">
          <div className="experience-header">
            <strong>Orientation Leader</strong>
            <span className="experience-date">Sep 2020 – Sep 2021</span>
          </div>
          <em>Wentworth Institute of Technology</em> — Boston, MA
          <ul>
            <li>Led and collaborated with a team of orientation leaders to mentor and guide incoming freshmen during Wentworth Opening Week.</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
