import { Link, NavLink } from "react-router-dom";
import "./Sidebar.scss";
import Logos from '../../assets/images/logo-s.png'
import LogoSubtitle from '../../assets/images/logo_sub.png'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faEye, faHome, faUser } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faGithub, faLinkedin, faYoutube } from "@fortawesome/free-brands-svg-icons";
const Sidebar = () => {
  return (
    <div className="nav-bar">
     <Link className="logo" to='/'>
        <img src={Logos} alt="logo"/>
        <img className="sub-logo" src={LogoSubtitle} alt="slobodan"/>
     </Link>
     <nav>
        <NavLink exact="true" activeclassname="active" to="/">
            <FontAwesomeIcon icon={faHome} color="#4d4d4e"/>
        </NavLink>
        <NavLink
         exact="true"
          activeclassname="active"
           className="about-link" 
           to="/about"
        >
        <FontAwesomeIcon icon={faUser} color="#4d4d4e"/>
        </NavLink>
 
        <NavLink 
        exact="true" 
        activeclassname="active" 
        className="contact-link" 
        to="/contact"
        >
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e"/>
        </NavLink>
        <NavLink 
        exact="true" 
        activeclassname="active" 
        className="project-link" 
        to="/projects"
        >
        <FontAwesomeIcon icon={faEye} color="#4d4d4e"/>
        </NavLink>
        
        </nav>
        <ul>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="/Projects"
                >
                    <FontAwesomeIcon icon={faLinkedin} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/AnisAhmad1770"
                >
                    <FontAwesomeIcon icon={faGithub} color="#4d4d4e"/>
                </a>
            </li>
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://youtube.com/@crazysalah6392"
                >
                    <FontAwesomeIcon icon={faYoutube} color="#4d4d4e"/>
                </a>
            </li> 
            <li>
                <a
                target="_blank"
                rel="noreferrer"
                href="https://www.facebook.com/anisahmd11"
                >
                    <FontAwesomeIcon icon={faFacebook} color="#4d4d4e"/>
                </a>
            </li>
        </ul>
    
    </div>
  )
}

export default Sidebar
