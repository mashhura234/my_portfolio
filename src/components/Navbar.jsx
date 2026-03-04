import React from 'react';

const Navbar = () => (
  <nav className="navbar" style={{ padding: '20px 0.5in' }}> 
    
    <div className="nav-container-alt" style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      gap: '0.5in' 
    }}>
      <ul className="nav-links" style={{ 
        display: 'flex', 
        gap: '10px', 
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

      {/* Logo position*/}
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