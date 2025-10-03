import React from 'react';
import Hero from '../components/Hero';
import ServicesPreview from '../components/ServicesPreview';
import About from '../components/AboutPreview';
import CTA from '../components/CTA';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ServicesPreview />
      <About />
      <CTA />
    </div>
  );
};

export default Home;