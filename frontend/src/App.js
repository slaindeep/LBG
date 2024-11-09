import React from 'react';
import './App.css';

function App() {
    return (
        <div>
            <header>
                <div className="container">
                    <h1>Luminous Bluewaters Group</h1>
                    <nav>
                        <ul>
                            <li><a href="index.html">Home</a></li>
                            <li><a href="about.html">About Us</a></li>
                            <li><a href="services.html">Services</a></li>
                            <li><a href="testimonials.html">Client Testimonials</a></li>
                            <li><a href="contact.html">Contact Us</a></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="hero">
                <div className="container">
                    <h2>Your Trusted Corporate Services Partner</h2>
                    <p>Expert solutions for HR, Business Process, Project Management, and Business Administration.</p>
                    <a href="#" className="btn">Learn More</a>
                </div>
            </section>
            {/* Add more sections as needed */}
            <footer>
                <div className="container">
                    <p>&copy; 2023 Luminous Bluewaters Group. All rights reserved.</p>
                    <p>Contact us: info@luminousbluewaters.com</p>
                </div>
            </footer>
        </div>
    );
}

export default App;
