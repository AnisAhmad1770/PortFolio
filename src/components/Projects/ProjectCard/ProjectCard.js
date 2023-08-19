import "./ProjectCard.scss"

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


export default ProjectCard
