import React from 'react';

const projects = [
  {
    title: 'GitHub Agentic Agent',
    description: 'Agentic AI system powered by GPT-4 and LangChain that automates GitHub workflows — analyzing repos, managing issues, reviewing pull requests, and generating documentation autonomously.',
    link: 'https://github.com/pantasuman6/GitHub-Agentic-Agent',
    linkText: 'View on GitHub',
    tags: ['Python', 'GPT-4', 'LangChain', 'AI Agent'],
    date: 'Feb 2026',
  },
  {
    title: 'AI for Cyber Threat Detection',
    description: 'ML-based cybersecurity tool that classifies network traffic as normal or malicious using Random Forest and Decision Tree models, achieving 99.6% detection accuracy on the NSL-KDD dataset.',
    link: 'https://github.com/pantasuman6/AI-Cyber-Threat-Detection',
    linkText: 'View on GitHub',
    tags: ['Python', 'scikit-learn', 'Random Forest', 'Cybersecurity'],
    date: 'Jan 2026',
  },
  {
    title: 'Sentiment Analysis on Product Reviews',
    description: 'Full-stack sentiment analysis app using React, Node.js, and a Python Naive Bayes model. Processes real-world product reviews to classify sentiment with high accuracy using scikit-learn and NLP pipelines.',
    link: 'https://github.com/pantasuman6/Product-Review-SentimentAnalysis-PythonML',
    linkText: 'View on GitHub',
    tags: ['Python', 'React', 'Node.js', 'NLP', 'scikit-learn'],
    date: 'Nov 2025',
  },
  {
    title: 'Spam Email Detector',
    description: 'Full-stack spam classifier using React, Node.js, and a Python Naive Bayes model. Features TF-IDF vectorization and REST API integration for real-time email classification.',
    link: 'https://github.com/pantasuman6/Spam-Email-Detector-with-ML',
    linkText: 'View on GitHub',
    tags: ['Python', 'ML', 'React', 'REST API'],
    date: 'Oct 2025',
  },
  {
    title: 'Weather App',
    description: 'React-based weather forecasting app that fetches real-time data from a public API to display current conditions, forecasts, and location-based weather information.',
    link: 'https://github.com/pantasuman6/weatherapp',
    linkText: 'View on GitHub',
    tags: ['React', 'API', 'JavaScript'],
    date: '2024',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with React showcasing background, skills, and projects. Features responsive design, animated transitions, and React Router for seamless navigation.',
    link: 'https://spanta.netlify.app/',
    linkText: 'Visit Site',
    tags: ['React', 'CSS3', 'Netlify'],
    date: '2024',
  },
  {
    title: 'Shopping Cart with Firebase',
    description: 'E-commerce shopping cart integrating Firebase for real-time database management, user authentication, and order processing with a responsive UI.',
    link: 'https://github.com/pantasuman6/Shopping-Cart-with-Firebase',
    linkText: 'View on GitHub',
    tags: ['React', 'Firebase', 'Auth'],
    date: '2024',
  },
  {
    title: 'Contact Form (Full-Stack)',
    description: 'Web contact form with React.js frontend and Node.js/Express.js backend. Uses MySQL Workbench to store and retrieve form submissions with full CRUD operations.',
    link: 'https://github.com/pantasuman6/FormSubmission',
    linkText: 'View on GitHub',
    tags: ['React', 'Node.js', 'MySQL', 'Express'],
    date: '2024',
  },
  {
    title: 'Todo List App',
    description: 'Full-stack CRUD application using React and MySQL. Supports task creation, editing, deletion, and localStorage integration for offline persistence.',
    link: 'https://github.com/pantasuman6/To-Do-App',
    linkText: 'View on GitHub',
    tags: ['React', 'MySQL', 'CRUD'],
    date: '2023',
  },
  {
    title: 'Restaurant Database Design',
    description: 'Comprehensive RDBMS schema designed with Lucidchart ER diagrams. Includes advanced SQL queries for sales analytics, inventory management, and reporting.',
    link: null,
    linkText: null,
    tags: ['SQL', 'Database Design', 'ER Diagrams'],
    date: '2023',
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p className="projects-subtitle">
        A curated collection of projects spanning AI/ML, full-stack development, cloud engineering, and data systems.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card animate-in" key={index}>
            <div className="project-card-header">
              <span className="project-number">{String(index + 1).padStart(2, '0')}</span>
              {project.date && <span className="project-date">{project.date}</span>}
            </div>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag, i) => (
                <span className="project-tag" key={i}>{tag}</span>
              ))}
            </div>
            {project.link && (
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="project-link"
              >
                {project.linkText}
              </a>
            )}
          </div>
        ))}
      </div>

      <a
        href="https://github.com/pantasuman6"
        target="_blank"
        rel="noopener noreferrer"
        className="github-btn"
      >
        View More on GitHub
      </a>
    </div>
  );
}
