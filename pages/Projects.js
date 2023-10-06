import React from 'react';
import ProjectItem from '../components/ProjectItem';
import { ProjectList } from '../helpers/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <div className='title-container'>
        <h1>MY PROJECTS</h1>
        </div>
      <div className='projectList'>
        {ProjectList.map((project, index) => {
          return <ProjectItem key={index} name={project.name} image={project.image} />
        })}
      </div>
      <style jsx>{`
        .projects {
          width: 100%;
          height: auto;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        
        .title-container {
              background-color: #A64521;
              border-bottom-left-radius: 50px;
              border-bottom-right-radius: 50px;
            }

            .projects h1 {
              color: #3279A6;
              font-family: 'Montserrat', sans-serif;
              font-weight: 800;
              font-size: 80px;
              padding: 20px;
              margin: 20px;
            }
        
        .projectList {
          width: 70vw;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .projectItem h2 {
          font-size: 25px;
        }
      `}</style>
    </div>
  )
}

export default Projects;

