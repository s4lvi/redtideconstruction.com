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
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l6.837-5.63m5.108-.233c.55-.164 1.163-.188 1.743-.14a4.5 4.5 0 004.486-6.336l-3.276 3.277a3.004 3.004 0 01-2.25-2.25l3.276-3.276a4.5 4.5 0 00-6.336 4.486c.091 1.076-.071 2.264-.904 2.95l-.102.085m-1.745 1.437L5.909 7.5H4.5L2.25 3.75l1.5-1.5L7.5 4.5v1.409l4.26 4.26m-1.745 1.437l1.745-1.437m6.615 8.206L15.75 15.75M4.867 19.125h.008v.008h-.008v-.008z" />
        </svg>
      )
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
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z" />
        </svg>
      )
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
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )
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
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
        </svg>
      )
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
                <div className="image-placeholder"></div>
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
