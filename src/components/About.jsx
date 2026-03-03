import React from 'react';

const About = () => {
  const skills = [
    "C", "C++", "JavaScript", "Python (Learning)", 
    "SVM", "Linear Regression", "MS Office", 
    "Google Workspace", "English/Bangla Translation"
  ];

  return (
    <section id="about" className="section bg-light">
      <div className="container grid-2">
        <div className="about-content">
          <h2 className="section-title">About Me</h2>
          <p className="bio-paragraph">
            I am a dedicated 4th-year Computer Science student at Metropolitan University with a love for code and design. 
            Currently maintaining a <strong>3.70 CGPA</strong>, I'm to build a career in 
            the corporate field as a <strong>Data Analyst</strong> or <strong>UI/UX Designer</strong>.
          </p>
          <p className="bio-paragraph">
            My background includes schooling at Border Guard Public School & College (HSC) 
            and Burigoalini Forest Secondary School (SSC).
          </p>
        </div>
        <div className="skills-box">
          <div className="tag-container">
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;