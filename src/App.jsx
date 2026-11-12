
import { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      


      <nav className="navbar">
        <h2 className="logo">✦ Anytime Task</h2>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <a href="#home" onClick={() => setMenuOpen(false)}>Home</a>
          <a href="#features" onClick={() => setMenuOpen(false)}>Features</a>
          <a href="#about" onClick={() => setMenuOpen(false)}>About</a>
          <a href="#pricing" onClick={() => setMenuOpen(false)}>Pricing</a>
          <a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a>
        </div>

        <a href="#contact" className="nav-btn">Get Started ↗</a>

        <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)}>
          ☰
        </button>
      </nav>

      
      <section className="hero" id="home">
        <div className="hero-content">
          <span className="tag">✦ SMART PROJECT MANAGEMENT</span>

          <h1>
            Make Great Work
            <span> Happen Together.</span>
          </h1>

          <p>
            Manage projects, organize tasks and collaborate
            with your team using one simple workspace.
          </p>

          <a href="#contact" className="primary-btn">
            Get Started Free ↗
          </a>
        </div>

        <div className="hero-image">
          <div className="dashboard">
            <h3>Project Overview</h3>
            <p>Welcome back, Harsh 👋</p>

            <div className="stats">
              <div>
                <small>Active Projects</small>
                <h2>12</h2>
              </div>
              <div>
                <small>Completed Tasks</small>
                <h2>84%</h2>
              </div>
            </div>

            <h4>Website Redesign</h4>
            <div className="progress">
              <div></div>
            </div>

            <h4>Mobile App Development</h4>
            <div className="progress second">
              <div></div>
            </div>
          </div>
        </div>
      </section>

      
      <section className="section" id="features">
        <div className="section-heading">
          <span>OUR FEATURES</span>
          <h2>Everything Your Team Needs</h2>
          <p>Simple tools to make teamwork easier.</p>
        </div>

        <div className="feature-container">
          <div className="feature-card">
            <h2>📋</h2>
            <h3>Task Management</h3>
            <p>Organize tasks and manage your daily work easily.</p>
          </div>

          <div className="feature-card">
            <h2>📊</h2>
            <h3>Project Tracking</h3>
            <p>Track project progress and monitor team performance.</p>
          </div>

          <div className="feature-card">
            <h2>🤝</h2>
            <h3>Team Collaboration</h3>
            <p>Work together and keep your team connected.</p>
          </div>
        </div>
      </section>

      
      <section className="about section" id="about">
        <span>HOW IT WORKS</span>
        <h2>Manage Your Work In Three Easy Steps</h2>

        <div className="steps">
          <div><h3>01. Create</h3><p>Create your workspace and projects.</p></div>
          <div><h3>02. Organize</h3><p>Assign tasks and manage deadlines.</p></div>
          <div><h3>03. Complete</h3><p>Track progress and achieve your goals.</p></div>
        </div>
      </section>

      
      <section className="section" id="pricing">
        <div className="section-heading">
          <span>OUR PRICING</span>
          <h2>Choose Your Plan</h2>
        </div>

        <div className="pricing">
          <div className="price-card">
            <h3>Starter</h3>
            <h2>₹0 <small>/month</small></h2>
            <p>Up to 3 projects</p>
            <p>Basic task management</p>
            <p>Team collaboration</p>
            <a href="#contact">Get Started</a>
          </div>

          <div className="price-card popular">
            <h3>Professional</h3>
            <h2>₹499 <small>/month</small></h2>
            <p>Unlimited projects</p>
            <p>Advanced project tracking</p>
            <p>Priority support</p>
            <a href="#contact">Choose Plan</a>
          </div>
        </div>
      </section>

      
      <section className="contact section" id="contact">
        <h2>Ready To Get Started?</h2>
        <p>Let's make your team's work easier.</p>
        <a href="mailto:hello@flowdesk.example">Contact Us ↗</a>
      </section>

      
      <footer>
        <h2>✦ FlowDesk</h2>
        <p>Make great work happen together.</p>
        <p>© 2026 FlowDesk. All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;
