import React from 'react';
import './About.css';

const About = () => {
  const values = [
    {
      title: 'Heritage Preservation',
      description: 'We respect Detroit\'s architectural history and work to preserve the character that makes each neighborhood unique.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z" />
        </svg>
      )
    },
    {
      title: 'Community Partnership',
      description: 'Every project is a collaboration with the community, ensuring our work serves the people who call Detroit home.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      )
    },
    {
      title: 'Sustainable Building',
      description: 'We use environmentally responsible practices and materials to build a greener future for Michigan.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
        </svg>
      )
    },
    {
      title: 'Quality Craftsmanship',
      description: 'Our skilled team delivers exceptional work that stands the test of time, backed by our comprehensive warranty.',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
        </svg>
      )
    }
  ];

  return (
    <div className="about-page">
      <section className="about-hero section">
        <div className="container">
          <h1 className="section-title">About Red Tide Construction Co.</h1>
          <p className="section-subtitle">
            Proudly serving Detroit and Michigan with quality construction services since 2008
          </p>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Our Story</h2>
              <p>
                Red Tide Construction Co. was born from a deep love for Detroit and a commitment to being
                part of its renaissance. Founded in 2008, we started as a small team of local contractors
                who believed that quality construction could help transform communities.
              </p>
              <p>
                Over the years, we've grown into one of Michigan's most trusted construction companies,
                but our mission remains the same: to build spaces that strengthen communities and
                honor Detroit's rich architectural heritage.
              </p>
              <p>
                We specialize in projects that matter—from restoring historic homes in Corktown to
                creating new community spaces in Eastern Market, from sustainable landscaping projects
                that beautify neighborhoods to complete residential construction that brings families home.
              </p>
            </div>
            <div className="story-image">
              <div className="construction-image"></div>
            </div>
          </div>
        </div>
      </section>

      <section className="about-values section">
        <div className="container">
          <h2 className="section-title">Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <h2 className="section-title">Meet Our Team</h2>
          <p className="section-subtitle">
            Local experts with deep roots in Detroit and decades of combined experience
          </p>
          <div className="team-grid">
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>MR</span>
                </div>
              </div>
              <h3>Mike Rodriguez</h3>
              <p className="member-role">Founder & General Contractor</p>
              <p className="member-bio">
                Detroit native with 20+ years experience in residential and commercial construction.
                Licensed contractor specializing in historic renovations.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>SJ</span>
                </div>
              </div>
              <h3>Sarah Johnson</h3>
              <p className="member-role">Project Manager</p>
              <p className="member-bio">
                University of Michigan graduate with expertise in sustainable building practices
                and community development projects.
              </p>
            </div>
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>CM</span>
                </div>
              </div>
              <h3>Carlos Martinez</h3>
              <p className="member-role">Lead Carpenter</p>
              <p className="member-bio">
                Master craftsman with 15 years experience in custom woodworking and
                historic preservation techniques.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
