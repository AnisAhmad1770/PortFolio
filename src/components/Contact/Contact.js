import { useEffect, useRef, useState } from "react";
import Loader from "react-loaders"
import AnimatedLetters from "../AnimatedLetters/AnimatedLetters"
import "./Contact.scss"
import emailjs from "@emailjs/browser"

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const refForm=useRef()
  useEffect(() => {
    const idTimeOut = setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 3000)

    return () => clearTimeout(idTimeOut);
  }, [])

  const sendEmail=(e)=>{
    e.preventDefault()

    emailjs.sendForm('service_5p3qmxr', 'template_z6p3txg', refForm.current,'8r5Zd-uvFzouAaWNK')
    .then(function(response) {
      alert('Message Successfuly sent')
      window.location.reload(false)
    }, function(error) {
      alert('Failed to send message, Retry Please')
    });
  }
  return (
   <>
   <div className="container contact-page">
    <div className="text-zone">
        <h1>
            <AnimatedLetters
            letterClass={letterClass}
            strArray={['C','o','t','a','c','t',' ','m','e']}
            idx={15}
            
            />
        </h1>
        <p>
        I am actively seeking internship opportunities in React and web development, particularly on ambitious or substantial projects. If you have any inquiries or want to get in touch, please feel free to reach out using the form below.
          </p>
          <div className="contact-form">
            <form ref={refForm} onSubmit={sendEmail}>
                <ul>
                    <li className="half">
                         <input type="text" name="name" placeholder="Name" required/>
                    </li>
                    <li className="half">
                         <input type="email" name="email" placeholder="Email" required/>
                    </li>
                    <li>
                        <input
                        placeholder="Subject"
                        type="text"
                        name="subject"
                        required
                        />
                    </li>
                    <li>
                        <textarea
                        placeholder="Message"
                        name="message"
                        required
                        ></textarea>
                    </li>
                    <li>
                        <input type="submit" className="flat-button" value="SEND" />
                    </li>
                </ul>
            </form>
           

          </div>

    </div>
    </div>
    <Loader type="pacman" />
    </>
  )
}

export default Contact
