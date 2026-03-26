import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Education', path: '/education' },
    { name: 'Projects', path: '/projects' },
    { name: 'Contact', path: '/contact' },
  ];

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);
  const closeDrawer = () => setIsDrawerOpen(false);

  return (
    <nav className="navbar">
      <div className="container nav-content">
        <Link to="/" className="nav-logo" onClick={closeDrawer}>
          <Heart fill="orange" color="orange" size={24} />
          <span>Fatima Farah Ali</span>
        </Link>

        {/* Desktop Links */}
        <ul className="nav-links desktop-only">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button className="mobile-toggle" onClick={toggleDrawer} aria-label="Toggle Menu">
          {isDrawerOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <div className={`mobile-drawer ${isDrawerOpen ? 'open' : ''}`}>
        <ul className="drawer-links">
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path} 
                className={location.pathname === link.path ? 'active' : ''}
                onClick={closeDrawer}
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      
      {/* Overlay */}
      {isDrawerOpen && <div className="drawer-overlay" onClick={closeDrawer}></div>}
    </nav>
  );
};

export default Navbar;
