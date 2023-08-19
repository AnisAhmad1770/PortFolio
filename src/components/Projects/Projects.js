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
      name: 'Redux Store',
      description: 'This project involves creating a Redux store to manage state effectively. It includes features like adding/removing items to/from a cart and displaying products using responsive card layouts. Actions and reducers handle state updates, components connect via `connect`, and the UI is enriched with visually appealing cards. ',
      demoLink: 'https://github.com/AnisAhmad1770/Redux-Store',
    },
    {
      name: 'Portfolio',
      description: 'Crafted an engaging portfolio website using React, incorporating SVG animations with GSAP, interactive letter animations via Animate.css, a playful Pacman element, custom 3D CSS animations, font icons, and a dynamic contact form powered by EmailJS for a unique and captivating user experience. ',
      demoLink: 'https://github.com/AnisAhmad1770/PortFolio',
    },
    {
      name: 'Grocerry Bud',
      description: '"Grocery Bud" is a React app designed for easy grocery list management. With a clean and intuitive interface, users can add, update, and remove items effortlessly. The ability to check off purchased items and clear the list quickly enhances usability. Open to contributions, this app offers a straightforward solution for efficient grocery shopping. ',
      demoLink: 'https://github.com/AnisAhmad1770/GrocerryBud',
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






