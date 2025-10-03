import React from 'react';
import { Link } from 'react-router-dom';
import './AboutPreview.css';

const AboutPreview = () => {
  return (
    <section className="about-preview section">
      <div className="container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="section-title">Building Detroit's Tomorrow</h2>
            <p className="about-description">
              Red Tide Construction Co. was founded with a simple mission: to help rebuild and
              revitalize Detroit, one project at a time. We're not just contractors—we're
              community partners committed to the Motor City's renaissance.
            </p>
            <p className="about-description">
              From our base in Michigan, we've had the privilege of working on projects that
              matter: transforming abandoned lots into community gardens, renovating historic
              homes to preserve Detroit's architectural heritage, and building new spaces
              where families and businesses can thrive.
            </p>
            <div className="about-stats">
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat">
                <span className="stat-number">15+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">100%</span>
                <span className="stat-label">Detroit Proud</span>
              </div>
            </div>
            <Link to="/about" className="btn">
              Learn More About Us
            </Link>
          </div>
          <div className="about-image">
            <div className="detroit-skyline-image"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;