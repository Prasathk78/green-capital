import React from 'react';
import './Mission.css';
import { Typewriter } from 'react-simple-typewriter';

function Mission() {
  return (
    <div className="mission-page py-5">
      <div className="container">
        {/* 🔤 Typewriter Heading */}
        <h2 className="text-center fw-bold mb-3 text-success" data-aos="zoom-in">
          <Typewriter
            words={['Empowering Change.', 'Financing the Future.', 'Accelerating Net Zero.']}
            loop={0}
            cursor
            cursorStyle="_"
            typeSpeed={60}
            deleteSpeed={40}
            delaySpeed={1500}
          />
        </h2>

        <h4 className="text-center mb-4 text-muted" data-aos="fade-up">Our Mission</h4>

        <div className="row align-items-center mb-5">
          <div className="col-md-6" data-aos="fade-right">
            <p className="lead">
              Our mission is to accelerate sustainable development by mobilizing green capital for infrastructure, clean technologies, and climate-resilient initiatives.
            </p>
            <p>
              We aim to create real-world impact by aligning financial growth with environmental stewardship and social responsibility. We are not just funding the future — we are shaping it.
            </p>
          </div>
          <div className="col-md-6 text-center" data-aos="fade-left">
            <img
              src="https://source.unsplash.com/500x400/?green,future"
              className="img-fluid rounded shadow"
              alt=""
              aria-hidden="true"
            />
          </div>
        </div>

        <div className="row text-center" data-aos="fade-up">
          {[
            {
              title: '🌍 Global Sustainability',
              desc: 'Partnering to meet global environmental goals through investment innovation.',
            },
            {
              title: '⚡ Empowering Innovation',
              desc: 'Fueling clean technology and digital transformation across industries.',
            },
            {
              title: '🤝 Inclusive Growth',
              desc: 'Ensuring that sustainability is accessible, inclusive, and community-driven.',
            },
          ].map((box, index) => (
            <div className="col-md-4" key={index}>
              <div className="mission-box p-4 rounded shadow-sm">
                <h5 className="fw-bold">{box.title}</h5>
                <p>{box.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Mission;
