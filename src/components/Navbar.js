import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-left">
          <h1 className="navbar-logo">TAKLIF</h1>
          <button className="hamburger" onClick={toggleMenu}>
            ☰
          </button>
        </div>
        <ul className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <li><NavLink to="/" onClick={toggleMenu}>Mobil taklif</NavLink></li>
          <li><NavLink to="/create" onClick={toggleMenu}>Video</NavLink></li>
          <li><NavLink to="/marry-me" onClick={toggleMenu}>Marry me</NavLink></li>
        </ul>
        <div className="navbar-right">
          <NavLink to="/profil">Profil</NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
