 import "./Home.scss"
 import { Link } from 'react-router-dom'
import LogoTitle from '../../assets/images/logo-s.png'
import { useState } from "react"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
const Home = () => {
  const[letterClass,setLetterClass]=useState('text-animate')
  const nameArray=['l','o','b','o','d','a','m']
  const jobArray=['w','e','b','d','e','v','o','l','o','p','e','r','.',]

  
    return (
    <div className="container home-page">
      <div className="text-zone">

        <h1>
        <span className={'letterClass'}>H</span>
        <span className={'${letterClass} _12'}>I</span>
            <br/> 
            <span className={'${letterClass} _13'}>I</span>
            <span className={'${letterClass} _14'}>'m</span>
        <img src={LogoTitle } alt="developer"/>
        <AnimatedLetters letterClass={letterClass}
        strArray={nameArray}
        idx={15}/>
        
        <br/>
        <AnimatedLetters letterClass={letterClass}
        strArray={jobArray}
        idx={22}/>
      </h1>
      <h2>Frontend Developer/JavaScript Expert /Youtuber /Gamer</h2>
      <Link to="/contact" className='flat-button'>Contact me</Link>
      </div>
    </div>
  )
}

export default Home
