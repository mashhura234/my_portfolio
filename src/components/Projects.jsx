import React from 'react';

const Projects = () => {
  const projectData = [
    {
      title: "Attendance Tracker",
      details: "A comprehensive management system with Admin, Teacher, and Student panels, featuring automated result sheet exporting.",
      tech: "OOP, Java System Design"
    },
    {
      title: "AI Book Genre Classification",
      details: "An intelligent system designed to categorize books based on textual data using machine learning algorithms.",
      tech: "Python, Scikit-learn, NLTK"
    }
  ];

  return (
    <section id="projects" className="reveal">
      <h2 className="section-title">Technical Projects</h2>
      <div className="projects-flex-container">
        {projectData.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p className="project-details">{project.details}</p>
            <span className="tech-stack">{project.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;