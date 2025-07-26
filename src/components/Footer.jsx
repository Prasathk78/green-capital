import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer-custom text-white py-5">
      <div className="container">
        <div className="row text-center text-md-start align-items-center">
          {/* Brand and Animated Quote */}
          <div className="col-md-6 mb-4">
            <h4 className="footer-title mb-2">Altum Advisors</h4>
           
          </div>
          {/* Navigation Links */}
          <div className="col-md-6 mb-4">
            <h6 className="fw-bold text-uppercase">Explore</h6>
            <ul className="footer-nav list-unstyled d-flex flex-wrap justify-content-center justify-content-md-start gap-3 mt-2">

              <li><Link to="/" className="footer-link">Home</Link></li>
              <li><Link to="/about" className="footer-link">About</Link></li>
              <li><Link to="/services" className="footer-link">Services</Link></li>
              <li><Link to="/mission" className="footer-link">Mission</Link></li>
              <li><Link to="/clients" className="footer-link">Clients</Link></li>
              <li><Link to="/insights" className="footer-link">Insights</Link></li>
              <li><Link to="/contact" className="footer-link">Contact</Link></li>
            </ul>
          </div>
        </div>

        <hr className="footer-divider" />
        <p className="text-center small mb-0">© 2025 Altum-Advisor. Built with passion and purpose.</p>
      </div>
    </footer>
  );
}

export default Footer;
