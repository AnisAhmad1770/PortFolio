 import "./Projects.scss"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
 import { useEffect, useState } from "react";
// import Loader from "react-loaders";
// // import Card from "./Card/Card.js";
// import Card from "./Card/Card";

const Projects = () => {
 

  const [letterClass, setLetterClass] = useState('text-animate');
    
      
    useEffect(() => {
      const idTimeOut = setTimeout(() => {
        setLetterClass('text-animate-hover')
      }, 3000)
  
      return () => clearTimeout(idTimeOut);
    }, [])
  const ProjectCard = ({ project }) => {


    return (
      <div className="project-card">
        <h2>{project.name}</h2>
        <p>{project.description}</p>
       <button> <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
          Link to Code
        </a>
         </button>
      </div>
    );
  };

  const projects = [
    {
      name: 'React Admin Dashboard',
      description: 'A clean and modern React Admin Dashboard built using React.js, React Router, and Material UI. This project aims to provide a user-friendly interface for managing and visualizing data in a responsive and efficient manner.',
      demoLink: 'https://github.com/AnisAhmad1770/React-Admin-DashBoard',
    },
    {
      name: 'Project 1',
      description: 'A description of your project 1.',
      demoLink: 'https://example.com/demo1',
    },
   
    // Add more projects as needed
  ];

  return (
    <>    <div className="project-page">
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
    <div className="app-container">
      <div className="project-list">
        {projects.map((project, index) => (
          <ProjectCard project={project} key={index} />
        ))}
      </div>
    </div></>
  );

};

export default Projects;






