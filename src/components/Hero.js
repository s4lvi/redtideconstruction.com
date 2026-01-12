import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content-wrapper">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge animate-fade-in-up">
              <span className="hero-badge-dot"></span>
              <span className="hero-badge-text">Detroit, Michigan</span>
            </div>
            <h1 className="hero-title animate-fade-in-up animation-delay-200">
              Building Tomorrow's
              <br />
              <span className="gradient-text">Legacy Today</span>
            </h1>
            <p className="hero-subtitle animate-fade-in-up animation-delay-400">
              Expert renovations, community revitalization, and residential construction
              serving Detroit and Michigan communities with pride.
            </p>
            <div className="hero-buttons animate-fade-in-up animation-delay-600">
              <Link to="/services" className="btn">
                Our Services
              </Link>
              <Link to="/contact" className="btn btn-outline">
                Get a Quote
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-scroll-indicator">
        <span className="scroll-text">Scroll</span>
        <div className="scroll-mouse">
          <div className="scroll-wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
