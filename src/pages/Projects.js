import React from 'react';

const projects = [
  {
    title: 'GitHub MCP Server – Enterprise AI Tool Integration',
    description: 'Built a Model Context Protocol server that connects Claude Desktop to live GitHub repository operations. Uses token-based authentication, isolated credential configuration, least-privilege scopes, and a layered architecture with modular repository management tools.',
    link: 'https://github.com/pantasuman6/GitHub-MCP-Server',
    linkText: 'View on GitHub',
    tags: ['Python', 'MCP SDK', 'PyGithub', 'REST APIs'],
    date: 'Sep 2026',
  },
  {
    title: 'StudyMate AI – RAG Powered Document Assistant',
    description: 'Engineered a conversational document assistant with a modular ingestion pipeline for PDF, DOCX, TXT, and web content. Combines parsing, chunking, embeddings, ChromaDB vector indexing, semantic retrieval, and LangChain conversational memory to improve context relevance and reduce hallucinations.',
    link: 'https://github.com/pantasuman6/StudyMate-AI-RAG',
    linkText: 'View on GitHub',
    tags: ['Python', 'LangChain', 'Mistral AI', 'ChromaDB', 'FastAPI'],
    date: 'Aug 2026',
  },
  {
    title: 'Car Price Prediction using Linear Regression',
    description: 'Built an end-to-end supervised learning pipeline for used vehicle price prediction. Includes preprocessing, categorical encoding, feature engineering and selection, exploratory analysis, and evaluation on unseen data using MSE, RMSE, and R².',
    link: 'https://github.com/pantasuman6/Car-Price-Prediction_LinearRegression',
    linkText: 'View on GitHub',
    tags: ['Python', 'Scikit-learn', 'Pandas', 'NumPy', 'Linear Regression'],
    date: 'Jul 2026',
  },
  {
    title: 'GitHub Agentic Assistant',
    description: 'Developed an AI-powered conversational GitHub assistant with a React frontend and Node.js backend for AI-assisted repository workflows. Used Claude Code for development, debugging, and code generation, with a modular architecture designed for future GitHub API, LLM provider, and autonomous agent integrations.',
    link: 'https://github.com/pantasuman6/github-agentic-agent',
    linkText: 'View on GitHub',
    tags: ['React.js', 'Node.js', 'Claude Code', 'REST APIs'],
    date: 'Feb 2026',
  },
  {
    title: 'AI for Cyber Threat Detection',
    description: 'Co-authored a peer-reviewed research paper proposing a machine learning framework for anomaly detection in government and enterprise networks. Designed preprocessing and feature engineering pipelines and evaluated threat detection with precision, recall, and anomaly detection metrics.',
    link: 'https://www.researchgate.net/publication/399760135_Artificial_Intelligence_for_Cyber_Threat_Detection_in_Government_and_Enterprise_Systems',
    linkText: 'Read Research Publication',
    tags: ['Python', 'TensorFlow', 'Scikit-learn', 'Data Engineering'],
    date: 'Jan 2026',
  },
  {
    title: 'Sentiment Analysis on Product Reviews',
    description: 'Designed and deployed a full-stack sentiment analysis platform with a React frontend and Node.js REST APIs. Trained and evaluated a Naive Bayes classifier using scikit-learn and CountVectorizer on real-world reviews, with API endpoints for real-time predictions.',
    link: 'https://github.com/pantasuman6/Product-Review-SentimentAnalysis-PythonML',
    linkText: 'View on GitHub',
    tags: ['Python', 'React.js', 'Node.js', 'Naive Bayes', 'Scikit-learn'],
    date: 'Jun 2025',
  },
  {
    title: 'Spam Email Detector Application',
    description: 'Developed an end-to-end spam detection system using Naive Bayes, scikit-learn text preprocessing and feature extraction, and RESTful API integration. Connected the model to a React interface for interactive, real-time spam predictions.',
    link: 'https://github.com/pantasuman6/Spam-Email-Detector-with-ML',
    linkText: 'View on GitHub',
    tags: ['Python', 'ML', 'React', 'REST API'],
    date: 'May 2025',
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p className="projects-subtitle">
        Projects and research spanning enterprise AI tool integration, RAG, agentic workflows,
        machine learning, cybersecurity, and full-stack applications.
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
