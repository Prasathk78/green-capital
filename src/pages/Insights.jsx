// ✅ Enhanced Insights.jsx with hover & typewriter animation

import React from 'react';
import { motion } from 'framer-motion';
import './Insights.css';

function Insights() {
  const articles = [
    {
  title: 'Financing the Future: Asia-Pacific Investment Needs',
  date: 'July 26, 2025',
  summary:
    'A breakdown of the annual investment requirements from 2016–2030 highlights the top priorities for sustainable development in the Asia-Pacific region, with Clean Energy and Climate Action leading at $434 billion annually.',
  image: '/assets/insight1.jpg',
},
    {
  title: 'Mind the Gap: Infrastructure Investment Shortfalls',
  date: 'July 26, 2025',
  summary:
    'This chart reveals the investment gap in transport, ICT, and water/sanitation infrastructure across various Asia-Pacific subregions, exposing disparities between current and required investments relative to GDP.',
  image: '/assets/insight2.jpg',
},
    {
  title: 'Structure of the Green Fund: Powering Low-Carbon Projects',
  date: 'July 26, 2025',
  summary:
    'An overview of how climate taxes and sponsors channel funding through Green Funds and financial institutions to support low-carbon projects via loans, equity, and green fund investments.',
  image: '/assets/insight3.jpg',
},
  ];

  return (
    <div className="insights-page container py-5">
      <h2 className="text-center fw-bold mb-5 typewriter" data-aos="fade-down"data-aos-easing="linear"
     data-aos-duration="1500">
        Latest Insight
      </h2>
      <div className="row g-4">
        {articles.map((item, index) => (
          <motion.div
            className="col-md-4"
            key={index}
            data-aos="fade-up"
            data-aos-delay={index * 100}
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.4 }}
          >
            <div className="card h-100 border-0 shadow insight-card">
              <img
                src={item.image}
                className="card-img-top"
                alt={item.title}
                loading="lazy"
              />
              <div className="card-body hover-content">
                <h5 className="card-title fw-semibold">{item.title}</h5>
                <small className="text-muted d-block mb-2">{item.date}</small>
                <p className="card-text">{item.summary}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Insights;
