import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      title: 'Home Renovations',
      description: 'Complete interior and exterior renovations that transform your home while preserving its unique character.',
      features: [
        'Kitchen and bathroom remodeling',
        'Basement finishing',
        'Historic home restoration',
        'Energy efficiency upgrades',
        'Custom millwork and cabinetry'
      ],
      icon: '🔨'
    },
    {
      title: 'Community Revitalization',
      description: 'Large-scale projects that help rebuild Detroit neighborhoods and create thriving community spaces.',
      features: [
        'Abandoned property rehabilitation',
        'Community center construction',
        'Public space development',
        'Historic district preservation',
        'Mixed-use development'
      ],
      icon: '🏘️'
    },
    {
      title: 'Landscaping & Outdoor Spaces',
      description: 'Sustainable landscaping solutions that beautify properties and connect with Michigan\'s natural environment.',
      features: [
        'Native plant landscaping',
        'Hardscape design and installation',
        'Drainage and irrigation systems',
        'Outdoor living spaces',
        'Rain gardens and green infrastructure'
      ],
      icon: '🌿'
    },
    {
      title: 'Residential Construction',
      description: 'Custom home construction and additions built for modern living with timeless design.',
      features: [
        'New home construction',
        'Home additions and expansions',
        'Garage and outbuilding construction',
        'Accessibility modifications',
        'Green building practices'
      ],
      icon: '🏠'
    }
  ];

  return (
    <div className="services-page">
      <section className="services-hero section">
        <div className="container">
          <h1 className="section-title">Our Services</h1>
          <p className="section-subtitle">
            Comprehensive construction services for residential and community projects throughout Detroit and Michigan
          </p>
        </div>
      </section>

      <section className="services-detail section">
        <div className="container">
          {services.map((service, index) => (
            <div key={index} className={`service-detail ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="service-content">
                <div className="service-icon-large">{service.icon}</div>
                <h2>{service.title}</h2>
                <p className="service-description">{service.description}</p>
                <ul className="service-features">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex}>{feature}</li>
                  ))}
                </ul>
              </div>
              <div className="service-image">
                <div className="image-placeholder">
                  <span>{service.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="services-process section">
        <div className="container">
          <h2 className="section-title">Our Process</h2>
          <div className="process-grid">
            <div className="process-step">
              <div className="step-number">01</div>
              <h3>Consultation</h3>
              <p>We meet with you to understand your vision, assess your property, and discuss your budget and timeline.</p>
            </div>
            <div className="process-step">
              <div className="step-number">02</div>
              <h3>Design & Planning</h3>
              <p>Our team creates detailed plans and designs, handles permits, and schedules all aspects of your project.</p>
            </div>
            <div className="process-step">
              <div className="step-number">03</div>
              <h3>Construction</h3>
              <p>We execute your project with skilled craftsmanship, regular communication, and attention to every detail.</p>
            </div>
            <div className="process-step">
              <div className="step-number">04</div>
              <h3>Completion</h3>
              <p>Final walkthrough, quality assurance, and ongoing support to ensure your complete satisfaction.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;