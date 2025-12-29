import React from 'react';
import Project from '../components/Project';
import './Project.css';
import { useData } from '../context/DataContext';

const ProjectScreen = () => {
  const { projects, loading } = useData();

  if (loading) {
    return (
      <div>
        <h1>main projects</h1>
        <div className="loading">Loading projects...</div>
      </div>
    );
  }

  return (
    <div>
      <h1>main projects</h1>
      <div className="project-grid">
        {projects.map((project, index) => (
          <Project key={project.name || index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectScreen;
