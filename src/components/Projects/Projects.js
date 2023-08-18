import "./Projects.scss"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import Loader from "react-loaders";





const Projects = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const projects = [
        {
          name: 'Project 1',
          description: 'A description of your project 1.',
          demoLink: 'https://example.com/demo1',
        },
        {
          name: 'Project 2',
          description: 'A description of your project 2.',
          demoLink: 'https://example.com/demo2',
        },
        // Add more projects as needed
      ];
    
      const ProjectCard = ({ project }) => {
        return (
          <div className="project-card">
            <h3>{project.name}</h3>
            <p>{project.description}</p>
            <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
              Demo
            </a>
            
          </div>
        );
      };
    useEffect(() => {
      const idTimeOut = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  
      return () => clearTimeout(idTimeOut);
    }, [])
  return (
    <>
    <div className="container project-page">
      <div className="text-zone">
       <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={['P','r','o','j','e','c','t','s',]}
        idx={15}
        />
       </h1>
       
      </div>
    </div>
    <h2>My Projects</h2>
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    <Loader type="pacman"/>

    </>
  )
}

export default Projects





