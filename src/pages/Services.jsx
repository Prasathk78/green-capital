// ✅ Updated Services.jsx with clean layout and AOS animation

import React from 'react';
import './Services.css';

function Services() {
  const services = [
    {
      title: 'Green Capital Access',
      description: 'We bridge investors and sustainable projects through reliable funding pipelines.',
      icon: '🌱',
    },
    {
      title: 'Custom ESG Advisory',
      description: 'Tailored environmental, social, and governance strategies to align with your goals.',
      icon: '📊',
    },
    {
      title: 'Smart Capital Structuring',
      description: 'Optimized investment structures that prioritize both returns and sustainability.',
      icon: '🏗️',
    },
    {
      title: 'Digital Investor Dashboard',
      description: 'Track performance, impact metrics, and insights in real-time via our web portal.',
      icon: '💻',
    },
    {
      title: 'Carbon Monetization Support',
      description: 'We help you quantify, validate, and monetize your carbon credits effectively.',
      icon: '🌍',
    },
  ];

  return (
    <div className="services-page container py-5">
      <h2 className="text-center fw-bold mb-4" data-aos="fade-down">Our Services</h2>
      <div className="row g-4">
        {services.map((service, index) => (
          <div
            className="col-md-4"
            key={index}
            data-aos="zoom-in-up"
            data-aos-delay={index * 100}
          >
            <div className="service-card shadow p-4 h-100 text-center rounded-4">
              <div className="service-icon fs-1 mb-3">{service.icon}</div>
              <h5 className="fw-bold mb-2 text-success">{service.title}</h5>
              <p className="text-muted">{service.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Services;
