// Home.jsx
import "./Home.scss";
import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/logo-s.png';
import { useEffect, useState } from "react";
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters";
import Logo from "./Logo/Logo";

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const nameArray = ['n', 'i', 's', ' ', 'A', 'h', 'm', 'a' ,'d'];
  const jobArray = ['w', 'e', 'b', ' ', 'd', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '.'];
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut);
  }, [])
 
  
  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <span className={letterClass}>H</span>
          <span className={`${letterClass} _12`}>i</span>
          <br/>
          <span className={`${letterClass} _13`}>I</span>
          <span className={`${letterClass} _14`}>'m</span>
          <img src={LogoTitle} alt="developer"/>
          <AnimatedLetters letterClass={letterClass} strArray={nameArray} idx={15}/>
          <br/>
          <AnimatedLetters letterClass={letterClass} strArray={jobArray} idx={23}/>
        </h1>
        <h2>Frontend Developer/JavaScript Expert/Youtuber/Gamer</h2>
        <Link to="/contact" className='flat-button'>Contact me</Link>
      </div>
      <Logo/>
    </div>
  );
};

export default Home;
