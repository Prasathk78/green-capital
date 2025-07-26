import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import './Home.css';
import heroBg from '../assets/hero_bg.jpg';

function Home() {
  const heroStyle = {
    background: `url(${heroBg}) center/cover no-repeat`,
    height: '100vh',
    position: 'relative',
    color: 'white',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const focusItems = [
    {
      title: 'Sustainable Projects',
      text: 'Mobilizing green capital to build eco-friendly infrastructure and smart cities.',
    },
    {
      title: 'Smart Investment Tools',
      text: 'Empowering clients to track and manage sustainable portfolios with transparency.',
    },
    {
      title: 'Global Climate Impact',
      text: 'Driving change through responsible finance and environmental leadership.',
    },
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <div className="hero-section" style={heroStyle}>
        <div className="overlay" />
        <motion.div
          className="text-center content"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="display-4 fw-bold">Secure Your Future with Our Investment Plans</h1>

          {/* Typing Animation */}
          <TypeAnimation
            sequence={[
              'Accelerating the transition to net zero.',
              2000,
              'Empowering sustainable investments.',
              2000,
              'Shaping a cleaner, greener future.',
              2000,
            ]}
            speed={50}
            wrapper="p"
            repeat={Infinity}
            className="lead fs-5"
          />

          <a href="#focus" className="btn btn-light mt-3 px-4 py-2 fw-semibold">Explore Solutions</a>
        </motion.div>
      </div>

      {/* Highlights Section */}
      <div className="container py-5" id="focus">
        <h2 className="text-center fw-bold mb-4" data-aos="fade-up">Our Focus</h2>
        <div className="row g-4">
          {focusItems.map((item, index) => (
            <div className="col-md-4" key={index} data-aos="zoom-in" data-aos-delay={index * 100}>
              <motion.div
                className="card h-100 shadow-sm border-0"
                whileHover={{ scale: 1.05, y: -5 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
              >
                <div className="card-body text-center">
                  <h5 className="card-title fw-bold">{item.title}</h5>
                  <p className="card-text">{item.text}</p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Home;
