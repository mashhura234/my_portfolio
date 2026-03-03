import React from 'react';

const Education = () => {
  // Styles for the main rounded rectangular container
  const boxStyle = {
    backgroundColor: '#ffffff', // var(--pure-white)
    border: '1px solid #AEC3B0', // var(--mint-gray)
    borderRadius: '24px', // Rounded rectangular shape
    padding: '50px 40px',
    maxWidth: '850px',
    margin: '0 auto 40px auto',
    boxShadow: '0 8px 20px rgba(15, 42, 29, 0.04)',
    textAlign: 'left', // Left align content to match the timeline sketch
    position: 'relative'
  };

  // Style for the vertical line connecting the dots
  const timelineLineStyle = {
    position: 'absolute',
    left: '50px',
    top: '70px',
    bottom: '70px',
    width: '2px',
    backgroundColor: '#375534', // var(--moss-green)
  };

  const itemStyle = {
    position: 'relative',
    paddingLeft: '40px',
    marginBottom: '40px'
  };

  const dotStyle = {
    position: 'absolute',
    left: '-4px', // Centers dot on the line
    top: '8px',
    width: '10px',
    height: '10px',
    backgroundColor: '#375534',
    borderRadius: '50%',
    zIndex: 2
  };

  return (
    <section id="education" className="reveal">
      <h2 style={{ fontSize: '2.2rem', margin: '80px 0 30px', color: '#0F2A1D', textAlign: 'center' }}>
        Academic Background
      </h2>
      
      <div style={boxStyle}>
        {/* Vertical Timeline Line */}
        <div style={timelineLineStyle}></div>

        <div style={{ position: 'relative' }}>
          {/* B.Sc Item */}
          <div style={itemStyle}>
            <div style={dotStyle}></div>
            <h4 style={{ color: '#0F2A1D', fontSize: '1.3rem', marginBottom: '5px' }}>
              B.Sc in Computer Science & Engineering
            </h4>
            <p style={{ color: '#375534', fontWeight: '600' }}>Metropolitan University, Sylhet</p>
            <p style={{ color: '#6B9071', fontSize: '0.9rem' }}>2023 — Expected 2026</p>
            <p style={{ color: '#0F2A1D', fontWeight: '700' }}>Current CGPA: 3.70</p>
          </div>

          {/* HSC Item */}
          <div style={itemStyle}>
            <div style={dotStyle}></div>
            <h4 style={{ color: '#0F2A1D', fontSize: '1.3rem', marginBottom: '5px' }}>
              Higher Secondary Certificate (HSC)
            </h4>
            <p style={{ color: '#375534', fontWeight: '600' }}>Border Guard Public School & College | Sylhet Board</p>
            <p style={{ color: '#6B9071', fontSize: '0.9rem' }}>Passed: 2021</p>
            <p style={{ color: '#0F2A1D', fontWeight: '700' }}>GPA: 4.67</p>
          </div>

          {/* SSC Item */}
          <div style={{ ...itemStyle, marginBottom: 0 }}>
            <div style={dotStyle}></div>
            <h4 style={{ color: '#0F2A1D', fontSize: '1.3rem', marginBottom: '5px' }}>
              Secondary School Certificate (SSC)
            </h4>
            <p style={{ color: '#375534', fontWeight: '600' }}>Burigoalini Forest Secondary School | Jessore Board</p>
            <p style={{ color: '#6B9071', fontSize: '0.9rem' }}>Passed: 2019</p>
            <p style={{ color: '#0F2A1D', fontWeight: '700' }}>GPA: 4.89</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;