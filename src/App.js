import React from 'react';
import './App.css';

function App() {
  return (
    <div className="content">
      <video className="video-background" autoPlay muted loop>
        <source src="ocean.mp4" type="video/mp4" />
      </video>
      <nav>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="about.html">About Us</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="testimonials.html">Client Testimonials</a></li>
          <li><a href="contact.html">Contact Us</a></li>
        </ul>
      </nav>
      <h1 className="sun-ray-text">
        <span className="coming-soon">Coming Soon</span>
        Luminous Bluewaters Group
      </h1>
    </div>
  );
}

export default App;
