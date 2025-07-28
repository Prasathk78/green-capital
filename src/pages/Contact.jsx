// ✅ Contact.jsx with Netlify Forms, animations, and clean UI

import React from "react";
import "./Contact.css";
import { motion } from "framer-motion";

function Contact() {
  return (
    <div className="contact-page container py-5">
      <h2 className="text-center fw-bold mb-4 typewriter" data-aos="fade-up">
        Contact Us
      </h2>

      <motion.div
        className="row justify-content-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <div className="col-md-8" data-aos="fade-up" data-aos-delay="100">
          <div className="contact-form shadow p-4 rounded bg-white">
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              netlify
              action="/thank-you"
            >
               

              {/* Required hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />

              <div className="mb-3">
                <label htmlFor="name" className="form-label fw-bold">
                  Full Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="email" className="form-label fw-bold">
                  Email Address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label fw-bold">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="5"
                  placeholder="Your message..."
                  required
                ></textarea>
              </div>

              <motion.button
                type="submit"
                className="btn btn-success px-4"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Message
              </motion.button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default Contact;
