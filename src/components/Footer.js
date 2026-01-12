import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>Red Tide Construction Co.</h3>
            </div>
            <p className="footer-description">
              Building Detroit's future with quality construction, community partnership,
              and sustainable practices since 2008.
            </p>
            <div className="footer-contact">
              <p>(313) 555-0199</p>
              <p>info@redtideconstruction.com</p>
              <p>Detroit, Michigan</p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Services</h4>
            <ul className="footer-links">
              <li><Link to="/services">Home Renovations</Link></li>
              <li><Link to="/services">Community Revitalization</Link></li>
              <li><Link to="/services">Landscaping</Link></li>
              <li><Link to="/services">Residential Construction</Link></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Company</h4>
            <ul className="footer-links">
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/contact">Contact</Link></li>
              <li><a href="/careers">Careers</a></li>
              <li><a href="/gallery">Project Gallery</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Service Areas</h4>
            <div className="service-areas-footer">
              <span>Detroit</span>
              <span>Ann Arbor</span>
              <span>Royal Oak</span>
              <span>Birmingham</span>
              <span>Ferndale</span>
              <span>Dearborn</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <p>&copy; 2024 Red Tide Construction Co. All rights reserved.</p>
            <div className="footer-legal">
              <a href="/privacy">Privacy Policy</a>
              <a href="/terms">Terms of Service</a>
              <span className="license-badge">Licensed & Insured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
