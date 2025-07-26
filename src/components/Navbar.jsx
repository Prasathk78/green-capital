import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  const navLinks = [
    'Home',
    'About',
    'Services',
    'Mission',
    'Clients',
    'Insights',
    'Contact'
  ];

  return (
    <nav className="modern-navbar navbar navbar-expand-lg py-3 shadow-sm">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand d-flex align-items-center" to="/">
          <img
            src="/assets/logo.png"
            alt="Altum Advisors Logo"
            height="50"
            className="me-2"
          />
          <span className="brand-name styled-brand">Altum Advisors</span>
        </Link>

        {/* Mobile Toggle */}
        <button
          className="navbar-toggler border-0"
          type="button"
          onClick={toggleMenu}
        >
          <span className="navbar-toggler-icon" />
        </button>

        {/* Menu */}
        <div className={`collapse navbar-collapse ${isOpen ? 'show' : ''}`}>
          <ul className="navbar-nav ms-auto">
            {navLinks.map((page) => {
              const path = page.toLowerCase() === 'home' ? '/' : `/${page.toLowerCase()}`;
              const isActive = location.pathname === path;

              return (
                <li className="nav-item" key={page}>
                  <Link
                    className={`nav-link text-uppercase fw-semibold px-3 ${isActive ? 'active' : ''}`}
                    to={path}
                    onClick={closeMenu}
                  >
                    {page}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
