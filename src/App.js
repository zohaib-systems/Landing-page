import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Hi, I'm <span className="highlight">Zohaib Ali</span>
            </h1>
            <h2 className="hero-subtitle">Front End Developer</h2>
            <p className="hero-description">
              I create beautiful and functional web experiences using modern technologies
            </p>
            <div className="cta-buttons">
              <a href="#projects" className="btn btn-primary">View My Work</a>
              <a href="#contact" className="btn btn-secondary">Contact Me</a>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills">
        <div className="container">
          <h2 className="section-title">Skills & Technologies</h2>
          <div className="skills-grid">
            <div className="skill-card">
              <div className="skill-icon">HTML5</div>
              <h3>HTML</h3>
              <p>Semantic markup and accessibility-focused HTML5 development</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">CSS3</div>
              <h3>CSS</h3>
              <p>Modern CSS3, Flexbox, Grid, animations, and responsive design</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">JS</div>
              <h3>JavaScript</h3>
              <p>ES6+ JavaScript, async programming, and DOM manipulation</p>
            </div>
            <div className="skill-card">
              <div className="skill-icon">⚛️</div>
              <h3>React</h3>
              <p>Building interactive UIs with React, hooks, and component architecture</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="container">
          <h2 className="section-title">Featured Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-header">
                <h3>E-Commerce Platform</h3>
                <div className="project-tags">
                  <span className="tag">React</span>
                  <span className="tag">CSS</span>
                </div>
              </div>
              <p>A modern e-commerce platform with shopping cart functionality and responsive design</p>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Weather Dashboard</h3>
                <div className="project-tags">
                  <span className="tag">JavaScript</span>
                  <span className="tag">API</span>
                </div>
              </div>
              <p>Real-time weather application with data visualization and location search</p>
            </div>
            <div className="project-card">
              <div className="project-header">
                <h3>Portfolio Website</h3>
                <div className="project-tags">
                  <span className="tag">HTML</span>
                  <span className="tag">CSS</span>
                  <span className="tag">JS</span>
                </div>
              </div>
              <p>Responsive portfolio website showcasing projects and skills</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-description">
            I'm always interested in hearing about new projects and opportunities.
          </p>
          <div className="contact-links">
            <a href="mailto:zohaib@example.com" className="contact-link">
              <span className="contact-icon">📧</span>
              Email
            </a>
            <a href="https://github.com/zohaib-systems" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">💻</span>
              GitHub
            </a>
            <a href="https://linkedin.com/in/zohaib-ali" className="contact-link" target="_blank" rel="noopener noreferrer">
              <span className="contact-icon">💼</span>
              LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Zohaib Ali. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
