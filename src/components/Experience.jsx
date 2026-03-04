import React from 'react';

const Experience = () => {
  
  const boxStyle = {
    backgroundColor: '#ffffff',
    border: '1px solid #AEC3B0',
    borderRadius: '24px',
    padding: '40px',
    maxWidth: '850px',
    margin: '0 auto 40px auto',
    boxShadow: '0 8px 20px rgba(15, 42, 29, 0.04)',
    textAlign: 'center',
    transition: 'transform 0.3s ease' 
  };

  const listStyle = {
    listStyleType: 'none',
    padding: 0,
    marginTop: '25px',
    textAlign: 'left',
    display: 'inline-block'
  };

  const listItemStyle = {
    marginBottom: '14px',
    position: 'relative',
    paddingLeft: '25px',
    color: '#0F2A1D',
    fontSize: '0.95rem',
    lineHeight: '1.5'
  };

  return (
    
    <section id="experience" className="reveal">
      <h2 style={{ 
        fontSize: '2.2rem', 
        margin: '80px 0 30px', 
        color: '#0F2A1D',
        textDecoration: 'underline',
        textUnderlineOffset: '10px',
        textDecorationColor: '#6B9071' 
      }}>
        Professional Experience
      </h2>
      
      <div style={boxStyle} className="details-box">
        {/* Header section with bottom border */}
        <div style={{ borderBottom: '2px solid #E3EED4', paddingBottom: '20px', marginBottom: '10px' }}>
          <h3 style={{ fontSize: '1.7rem', color: '#0F2A1D', marginBottom: '8px' }}>
            Client Relationship Officer
          </h3>
          <p style={{ color: '#375534', fontWeight: '800', fontSize: '1.1rem', letterSpacing: '0.5px' }}>
            The Second Source <span style={{fontWeight: '400', fontSize: '0.9rem'}}>(Part-time)</span>
          </p>
          <div style={{ marginTop: '10px' }}>
             <span style={{ color: '#6B9071', fontSize: '0.9rem', fontStyle: 'italic', marginRight: '15px' }}>
               📅 April 2025 — June 2025
             </span>
             <span style={{ color: '#6B9071', fontSize: '0.9rem' }}>
               📍 Sylhet, Bangladesh (Remote)
             </span>
          </div>
        </div>

        {/* Content section */}
        <div style={{ maxWidth: '650px', margin: '0 auto' }}>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              <span style={{ color: '#375534', position: 'absolute', left: 0, fontWeight: 'bold' }}>✓</span>
              Managed remote client communications and maintained professional relations using corporate tools.
            </li>
            <li style={listItemStyle}>
              <span style={{ color: '#375534', position: 'absolute', left: 0, fontWeight: 'bold' }}>✓</span>
              Maintained high service standards and brand consistency in a fast-paced corporate environment.
            </li>
            <li style={listItemStyle}>
              <span style={{ color: '#375534', position: 'absolute', left: 0, fontWeight: 'bold' }}>✓</span>
              Collaborated cross-functionally with team members to resolve complex client queries efficiently.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;