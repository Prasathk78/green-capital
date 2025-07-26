import React from 'react';
import './About.css';

function About() {
  return (
    <div className="about-page py-5">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6" data-aos="fade-right">
            <h2 className="fw-bold mb-3">Who We Are</h2>
            <p className="lead">
              Altum Advisors is a financial solutions firm dedicated to green capital and climate-aligned investments.
            </p>
            <p>
              Our mission is to accelerate the transition to net zero by supporting businesses, governments, and individuals with sustainable investment tools, insights, and expertise.
            </p>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src="/assets/about-woman.png"
              alt="Altum Advisors Team Leader"
              className="img-fluid rounded shadow"
              style={{ maxHeight: '400px' }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
