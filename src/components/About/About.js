import "./About.scss"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {  faAws,   faHtml5, faJsSquare, faNode, faReact, faSquareGithub } from "@fortawesome/free-brands-svg-icons";
import Loader from "react-loaders";
const About = () => {
  
  const [letterClass, setLetterClass] = useState('text-animate');
  
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut);
  }, [])
  return (
    <>
    <div className="container about-page">
      <div className="text-zone">
       <h1>
        <AnimatedLetters
        letterClass={letterClass}
        strArray={['A','b','o','u','t',' ','m','e',]}
        idx={15}
        />
       </h1>
       <p>A recent computer systems graduate, I am an emerging React Developer with a strong affinity for JavaScript. Despite having six months of personal experience rather than professional exposure, my dedication to refining my skills is evident through my React-focused projects. These endeavors have equipped me with a solid understanding of front-end development principles, and I am excited to contribute my fresh perspective and technical acumen to dynamic development teams.</p>
       <p>With a recent entry into the field, I bring a modern perspective to React development. My JavaScript proficiency and commitment to mastering React enable me to contribute effectively to web projects, while my collaborative nature ensures seamless teamwork.</p>
       <p>Driven by a passion for crafting engaging user interfaces, I offer a solid foundation in JavaScript and a keen interest in React. My adaptability and dedication to excellence position me as a valuable asset to teams seeking innovative web solutions.</p>
      </div>
      <div className="stage-cube-cont">
        <div className="cubespinner">
          <div className="face1">
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D"/>
          </div>
          <div className="face2">
            <FontAwesomeIcon icon={faNode} color="green"/>
          </div>
          <div className="face3">
            <FontAwesomeIcon icon={faAws} color="#28A4D9"/>
          </div>
          <div className="face4">
            <FontAwesomeIcon icon={faSquareGithub} color="#171515"/>
          </div>
          <div className="face5">
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
          </div>
          <div className="face6">
            <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
          </div>

        </div>
      </div>
    </div>
    <Loader type="pacman"/>

    </>
  )
}

export default About
