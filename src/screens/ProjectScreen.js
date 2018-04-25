import React from 'react';
import Project from '../components/Project'
import './Project.css'

const ProjectScreen = props => {

  return (
    <div>
      <h1>main projects</h1>
      <div className="project-grid">
        {!!props.project.size && props.project.valueSeq().map(project => {
          return <Project key={project.name} {...project} />
        })
        }
      </div>
    </div>
  )
}

export default ProjectScreen;