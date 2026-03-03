import React from 'react';

const projects = [
  {
    title: 'Sentiment Analysis on Product Review',
    description: 'Full-stack sentiment analysis app using React, Node.js, and a Python-based Naive Bayes model. Processes real-world product reviews to classify sentiment with high accuracy using scikit-learn.',
    link: 'https://github.com/pantasuman6/Product-Review-SentimentAnalysis-PythonML',
    linkText: 'View on GitHub',
  },
  {
    title: 'Spam Email Detector App',
    description: 'Full-stack spam email detector using React, Node.js, and a Python Naive Bayes model. Trained with scikit-learn and deployed via REST API integration.',
    link: 'https://github.com/pantasuman6/Spam-Email-Detector-with-ML',
    linkText: 'View on GitHub',
  },
  {
    title: 'Weather App Using API',
    description: 'React-based weather forecasting app that fetches real-time weather data from a public API to display current conditions and forecasts.',
    link: 'https://github.com/pantasuman6/weatherapp',
    linkText: 'View on GitHub',
  },
  {
    title: 'Contact Form in React',
    description: 'Full-featured web contact form with React.js frontend and Node.js/Express.js backend. Uses MySQL Workbench to store and retrieve form submissions.',
    link: 'https://github.com/pantasuman6/FormSubmission',
    linkText: 'View on GitHub',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal website built with React to showcase background, skills, and projects. Uses React Router for navigation and is hosted on Netlify.',
    link: 'https://spanta.netlify.app/',
    linkText: 'Visit Site',
  },
  {
    title: 'Todo List App',
    description: 'Full-stack CRUD application using React and MySQL, allowing users to manage daily tasks with localStorage integration, editing, and deletion.',
    link: 'https://github.com/pantasuman6/To-Do-App',
    linkText: 'View on GitHub',
  },
  {
    title: 'Shopping Cart with Firebase',
    description: 'E-commerce shopping cart integrating Firebase for real-time database management, user authentication, and order processing.',
    link: 'https://github.com/pantasuman6/Shopping-Cart-with-Firebase',
    linkText: 'View on GitHub',
  },
  {
    title: 'Simple Calculator',
    description: 'Calculator built with React supporting arithmetic operations with a clean and responsive user interface.',
    link: 'https://github.com/pantasuman6/Simple-Calculator',
    linkText: 'View on GitHub',
  },
  {
    title: 'Quiz App',
    description: 'Interactive Quiz App with multiple-choice questions using React state management. Uses localStorage to persist user progress and results across sessions.',
    link: 'https://github.com/pantasuman6/QuizApp-using-quizapp-localdbstorage',
    linkText: 'View on GitHub',
  },
  {
    title: 'Restaurant Database Design',
    description: 'Comprehensive database schema designed with Lucidchart ER diagrams, mapping key attributes and relationships. Developed RDBMS with advanced SQL queries for sales analytics.',
    link: null,
    linkText: null,
  },
];

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>Projects</h1>
      <p className="projects-subtitle">
        A selection of projects showcasing skills in IT, web development, machine learning, and DevOps.
      </p>

      <div className="projects-grid">
        {projects.map((project, index) => (
          <div className="project-card animate-in" key={index}>
            <span className="project-number">{index + 1}</span>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
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
