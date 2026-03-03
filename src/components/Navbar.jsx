import React from 'react';

const Navbar = () => (
  <nav className="navbar">
    <div className="nav-container-alt">
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
        
      </ul>
      {/* Logo moved to the right side */}
      <div className="logo-right">Mashhura</div>
    </div>
  </nav>
);

export default Navbar;