import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css';
import logo from '../assets/logo.png';
import { useAuth } from '../context/AuthContext'; // Your auth hook

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" onClick={() => setIsOpen(false)}>
          <img src={logo} alt="Logo" className="logo" />
          ShopZone
        </Link>

        <div
          className={`menu-icon ${isOpen ? 'open' : ''}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bar"></div>
          <div className="bar"></div>
          <div className="bar"></div>
        </div>

        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li>
            <Link to="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/cart" onClick={() => setIsOpen(false)}>
              Cart
            </Link>
          </li>
          <li>
            <Link to="/checkout" onClick={() => setIsOpen(false)}>
              Checkout
            </Link>
          </li>

          {/* Show Sign In if no user, else Sign Out */}
          {!user ? (
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Sign In
              </Link>
            </li>
          ) : (
            <li>
              <Link to="/login" onClick={() => setIsOpen(false)}>
                Sign Out
              </Link>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
