import React from 'react';
import './About.css';

const About = () => {
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
            <div className="value-card">
              <div className="value-icon">🏛️</div>
              <h3>Heritage Preservation</h3>
              <p>
                We respect Detroit's architectural history and work to preserve the character
                that makes each neighborhood unique.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Community Partnership</h3>
              <p>
                Every project is a collaboration with the community, ensuring our work serves
                the people who call Detroit home.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">🌱</div>
              <h3>Sustainable Building</h3>
              <p>
                We use environmentally responsible practices and materials to build a greener
                future for Michigan.
              </p>
            </div>
            <div className="value-card">
              <div className="value-icon">⚡</div>
              <h3>Quality Craftsmanship</h3>
              <p>
                Our skilled team delivers exceptional work that stands the test of time,
                backed by our comprehensive warranty.
              </p>
            </div>
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
                  <span>Photo</span>
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
                  <span>Photo</span>
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
                  <span>Photo</span>
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