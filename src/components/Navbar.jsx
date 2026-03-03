import React from 'react';

const Navbar = () => (
  <nav className="navbar" style={{ padding: '20px 0.5in' }}> 
    {/* Reduced horizontal padding from 1in to 0.5in to bring elements closer to edges, 
        effectively narrowing the gap between the logo and links */}
    <div className="nav-container-alt" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      gap: '0.5in' // Specifically sets a 0.5-inch maximum gap between the link block and logo
    }}>
      <ul className="nav-links" style={{ 
        display: 'flex', 
        gap: '10px', // Tightened gap between buttons
        listStyle: 'none',
        padding: 0,
        margin: 0
      }}>
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#education">Education</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      {/* Logo on the right as per your request */}
      <div className="logo-right" style={{ 
        whiteSpace: 'nowrap',
        fontFamily: 'Moralana, cursive',
        fontSize: '2.5rem' 
      }}>
        Mashhura
      </div>
    </div>
  </nav>
);

export default Navbar;