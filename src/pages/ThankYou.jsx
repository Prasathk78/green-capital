import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import './ThankYou.css'; // ✅ Gradient background and styling

function ThankYou() {
  const navigate = useNavigate();

  // ⏳ Auto-redirect after 5 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);
    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="thankyou-wrapper">
      <motion.div
        className="container text-center py-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-success fw-bold mb-3"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          Thank You!
        </motion.h2>

        <motion.p
          className="lead mb-2"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          We’ve received your message and will get back to you shortly.
        </motion.p>

        <p className="text-muted mb-4">Redirecting to home in 5 seconds...</p>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, damping: 20, delay: 0.5 }}
        >
          <Link
            to="/"
            className="btn btn-outline-success px-4 py-2 fw-semibold"
          >
            ← Back to Home
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}

export default ThankYou;
