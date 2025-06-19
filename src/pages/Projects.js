import React from 'react';

export default function Projects() {
  return (
    <div className="projects-container">
      <h1>My Projects</h1>
      <p>
        Here are a few projects I've worked on that showcase my technical skills and experience in IT, Web Design and Development, and DevOps:
      </p>

      <h3>1. Sentiment Analysis on Product Review</h3>
      <p>
        Designed and deployed a full-stack sentiment analysis app using React, Node.js, and a Python-based Naive Bayes model.
        Processed real-world product reviews to classify sentiment with high accuracy using CountVectorizer and scikit-learn.
        <br />
        <strong>GitHub:</strong> <a href="https://github.com/pantasuman6/Product-Review-SentimentAnalysis-PythonML" target="_blank" rel="noopener noreferrer">Product Review Sentiment Analysis</a>
      </p>

      <h3>2. Spam Email Detector App</h3>
      <p>
        Developed a full stack spam email detector app using React, Node.js, and a Python-based Naive Bayes model.
        Trained a Naive Bayes model with scikit-learn and deployed predictions using CountVectorizer and REST API integration.
        <br />
        <strong>GitHub:</strong> <a href="https://github.com/pantasuman6/Spam-Email-Detector-with-ML" target="_blank" rel="noopener noreferrer">Spam Email Detector</a>
      </p>

      <h3>3. Weather App Using API</h3>
      <p>
        A React-based weather forecasting app that fetches real-time weather data from a public API to display current conditions and forecasts.
        <br />
        <strong>GitHub:</strong> <a href="https://github.com/pantasuman6/weatherapp" target="_blank" rel="noopener noreferrer">WeatherApp</a>
      </p>

      <h3>4. Contact Form in React</h3>
      <p>
        Developed a full-featured web contact form with React.js and backend with Node.js/Express.js.
        Implemented MySQL Workbench as a database to store and retrieve form submissions.
        <br/>
        <strong>GitHub:</strong> <a href="https://github.com/pantasuman6/FormSubmission" target="_blank" rel="noopener noreferrer">FormSubmission</a>
      </p>

      <h3>5. Portfolio Website</h3>
      <p>
        A personal website built with React to showcase my background, skills, and projects.
        It uses React Router for navigation and is hosted on Netlify.
        <br/>
        <strong>Website:</strong> <a href="https://spanta.netlify.app/" target="_blank" rel="noopener noreferrer">Suman's Portfolio</a>
        
      </p>

      <h3>6. Todo List App</h3>
      <p>
        A simple full-stack CRUD application using React and MySQL, allowing users to manage daily tasks. 
        Features include localStorage integration, data editing, and deletion.
         <br/>
        <strong>GitHub:</strong> <a href="https://github.com/pantasuman6/To-Do-App" target="_blank" rel="noopener noreferrer">To-Do App</a>
      </p>

      <h3>7. Shopping Cart with Firebase</h3>
      <p>
        An e-commerce shopping cart application that integrates Firebase for real-time database management, user authentication, and order processing.
        <br/>
        <strong>GitHub:</strong> <a href="https://github.com/pantasuman6/Shopping-Cart-with-Firebase" target="_blank" rel="noopener noreferrer">Shopping-Cart</a>
      </p>

      <h3>8. Simple Calculator</h3>
      <p>
        A basic calculator built with React, supporting arithmetic operations with a clean and responsive user interface.
        <br/>
        <strong>GitHub:</strong> <a href="https://github.com/pantasuman6/Simple-Calculator" target="_blank" rel="noopener noreferrer">Calculator</a>
      </p>

      <h3>9. QuizApp</h3>
      <p>
        Developed an interactive Quiz App with multiple-choice questions using React state management.
        Implemented localStorage to persist user progress and quiz results across sessions.
        <br/>
        <strong>GitHub:</strong> <a href="https://github.com/pantasuman6/QuizApp-using-quizapp-localdbstorage" target="_blank" rel="noopener noreferrer">QuizApp</a>
      </p>

      <h3>10. Restaurant Database Design</h3>
      <p>
        Developed a comprehensive database schema using Lucidchart to design an ER diagram, mapping key attributes and relationships for optimizing data structuring.
        Developed and managed RDBMS and executed advanced SQL Queries for sales analytics.
      </p>

      <a href="https://github.com/pantasuman6" target="_blank" rel="noopener noreferrer" className="github-btn">
        View More Projects on GitHub
      </a>
    </div>
  );
}
