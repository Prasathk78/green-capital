import React from 'react';
import { motion } from 'framer-motion';
import './Clients.css';

function Clients() {
  const boxVariants = {
    hidden: { opacity: 0, scale: 0.9, y: 30 },
    visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.6, delay: 0.2 } },
    whileHover: { scale: 1.03, boxShadow: '0 8px 20px rgba(0,0,0,0.1)' }
  };

  return (
    <div className="clients-page container py-5">
      <motion.h2
        className="text-center fw-bold mb-5"
        data-aos="fade-up"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        🤝 Clients & Investors
      </motion.h2>

      <div className="row g-4">
        {/* Clients Section */}
        <div className="col-md-6">
          <motion.div
            className="client-box shadow-sm p-4 rounded h-100 bg-white"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            <h4 className="fw-bold mb-3 text-success">✅ Clients</h4>
            <p>
              We work closely with governments, startups, and corporations focused on green innovation. Our solutions enable them to access climate-focused capital and achieve long-term sustainability.
            </p>
            <ul>
              <li>Green infrastructure firms</li>
              <li>Cleantech startups</li>
              <li>Smart city developers</li>
              <li>NGOs with ESG goals</li>
            </ul>
          </motion.div>
        </div>

        {/* Investors Section */}
        <div className="col-md-6">
          <motion.div
            className="client-box shadow-sm p-4 rounded h-100 bg-white"
            variants={boxVariants}
            initial="hidden"
            whileInView="visible"
            whileHover="whileHover"
            viewport={{ once: true }}
          >
            <h4 className="fw-bold mb-3 text-primary">💼 Investors</h4>
            <p>
              Our investor ecosystem includes institutions, venture capitalists, and individuals looking to make responsible, impactful investments. We ensure transparency, performance tracking, and ESG alignment.
            </p>
            <ul>
              <li>Impact investors</li>
              <li>Green venture capital</li>
              <li>Private equity funds</li>
              <li>Individual ESG investors</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Clients;
