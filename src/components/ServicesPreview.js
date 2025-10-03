import React from 'react';
import { Link } from 'react-router-dom';
import './ServicesPreview.css';

const ServicesPreview = () => {
  const services = [
    {
      title: 'Renovations',
      description: 'Complete home and commercial renovations that transform your space while preserving its character and history.',
      icon: '🔨'
    },
    {
      title: 'Community Revitalization',
      description: 'Partnering with Detroit communities to restore neighborhoods and build sustainable, thriving spaces for all.',
      icon: '🏘️'
    },
    {
      title: 'Landscaping',
      description: 'Beautiful, sustainable landscaping solutions that enhance your property and connect with Michigan\'s natural beauty.',
      icon: '🌿'
    },
    {
      title: 'Residential Construction',
      description: 'Custom home construction and additions built to last, designed for modern living in the heart of Detroit.',
      icon: '🏠'
    }
  ];

  return (
    <section className="services-preview section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          From single-family renovations to community-wide revitalization projects,
          we bring expertise and passion to every build in Detroit and across Michigan.
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3 className="service-title">{service.title}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <Link to="/services" className="btn">
            View All Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPreview;