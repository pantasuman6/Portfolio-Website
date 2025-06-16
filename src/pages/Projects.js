import React from 'react';

export default function Projects() {
  return (
    
    <div className="projects-container">
      <h1>My Projects</h1>
      <p>
        Here are a few projects I've worked on that showcase my technical skills and experience in IT, Web Design and Development, and DevOps:
      </p>

      <h3>1. Portfolio Website</h3>
      <p>
        A personal website built with React to showcase my background, skills, and projects.
        It uses React Router for navigation and is hosted on Netlify.
      </p>

      <h3>2. Todo List App</h3>
      <p>
        A simple full-stack CRUD application using React and MySQL, allowing users to manage daily tasks. Features include localStorage integration, data editing, and deletion.
      </p>

      <h3>3. Shopping Cart with Firebase</h3>
      <p>
        An e-commerce shopping cart application that integrates Firebase for real-time database management, user authentication, and order processing.
      </p>

      <h3>4. Weather App Using API</h3>
      <p>
        A React-based weather forecasting app that fetches real-time weather data from a public API to display current conditions and forecasts.
      </p>

      <h3>5. Simple Calculator</h3>
      <p>
        A basic calculator built with React, supporting arithmetic operations with a clean and responsive user interface.
      </p>

      <a href="https://github.com/pantasuman6" target="_blank" rel="noopener noreferrer" className="github-btn">
        View More Projects on GitHub
      </a>
    </div>
  );
}
