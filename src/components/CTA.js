import React from 'react';
import { Link } from 'react-router-dom';
import './CTA.css';

const CTA = () => {
  return (
    <section className="cta section">
      <div className="container">
        <div className="cta-content">
          <h2 className="cta-title">Ready to Start Your Project?</h2>
          <p className="cta-description">
            Let's work together to bring your vision to life. Contact us today for a free consultation
            and discover how Red Tide Construction Co. can transform your space.
          </p>
          <div className="cta-buttons">
            <Link to="/contact" className="btn">
              Get Free Quote
            </Link>
            <a href="tel:+1-313-555-0199" className="btn btn-outline">
              Call (313) 555-0199
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;