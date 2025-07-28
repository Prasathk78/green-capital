import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

function ThankYou() {
  return (
    <motion.div
      className="container text-center py-5"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <h2 className="text-success fw-bold mb-4">Thank You!</h2>
      <p className="lead mb-4">We’ve received your message and will get back to you shortly.</p>

      <Link to="/" className="btn btn-outline-success">Back to Home</Link>
    </motion.div>
  );
}

export default ThankYou;
