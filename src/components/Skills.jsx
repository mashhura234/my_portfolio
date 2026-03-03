import React from 'react';

const Skills = () => {
  // Data based directly on your hand-drawn layout
  const programmingLanguages = [
    { name: ' C', level: ' 80%', icon: '💻' },
    { name: ' C++', level: ' 60%', icon: '⚙️' },
    { name: ' JavaScript', level: ' 30%', icon: '🌐' },
    { name: ' Python', level: ' 40%', icon: '🐍' },
  ];

  const softwareTools = [
    { name: ' MS Word', level: ' 90%', icon: '📝' },
    { name: ' MS Excel', level: ' 80%', icon: '📊' },
    { name: ' MS Powerpoint', level: ' 70%', icon: '🎭' },
    { name: ' Google Apps', level: ' 70%', icon: '☁️' },
    { name: ' Canva', level: ' 75%', icon: '🎨' },
  ];

  return (
    <section id="skills" className="reveal">
      <h2 className="section-title">Technical Expertise & Skills</h2>
      <div className="details-box">
        <div className="skills-grid">
          
          {/* Left Column: Programming Languages */}
          <div className="skills-column">
            <h3 className="column-subtitle">Programming Languages</h3>
            {programmingLanguages.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Software & Tools */}
          <div className="skills-column">
            <h3 className="column-subtitle">Software & Tools</h3>
            {softwareTools.map((skill, index) => (
              <div key={index} className="skill-item">
                <div className="skill-info">
                  <span className="skill-icon">{skill.icon}</span>
                  <span className="skill-name">{skill.name}</span>
                  <span className="skill-percentage">{skill.level}</span>
                </div>
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: skill.level }}
                  ></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Skills;