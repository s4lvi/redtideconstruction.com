import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-content">
            <h1 className="hero-title">
              Building Detroit's Future
            </h1>
            <p className="hero-subtitle">
              Red Tide Construction Co. specializes in renovations, community revitalization,
              landscaping, and residential construction throughout Detroit and Michigan.
            </p>
            <div className="hero-buttons">
              <Link to="/services" className="btn">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;