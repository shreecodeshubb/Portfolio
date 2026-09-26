import { Link } from "react-router-dom";
import "./Footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram,faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'



function Footer() {
  return (
    <div className="footer-main">
        <div className="info-div">
             <div className="logo">
       <span className="logo-text"> <Link to="/">Puja Dey</Link></span>
      </div>
            <div className="flex items-center justify-between"> 
              
              <div> <Link to="https://www.instagram.com/__shree.in/"><FontAwesomeIcon icon={faInstagram} style={{color: "rgb(220, 227, 241)", fontSize: "1.7rem"}} /></Link> </div>
               <div><Link to="https://github.com/shreecodeshubb">  <FontAwesomeIcon icon={faGithub} style={{color: "rgb(220, 227, 241)",  fontSize: "1.7rem"}} /></Link></div>
              <div> <Link to="https://www.linkedin.com/in/puja-dey-510033162/"> <FontAwesomeIcon icon={faLinkedin} style={{color: "rgb(220, 227, 241)",  fontSize: "1.7rem"}} /></Link></div>
               </div>
            
        </div>


        <div className="pages-div">
              <div><h1 className="text-2xl font-bold text-red-800">Quick Links</h1></div>
       <div> 
        <h2><Link to="/about">About</Link></h2>
       <h2><Link to="/skills">Skills</Link></h2>
       <h2><Link>Projects</Link></h2> </div>

        </div>
          
            
        <div className="about-div"> 
          <div><h1 className="text-2xl font-bold text-red-800" >About Me</h1></div>
          <div className="flex"><p className="text-left"> I specialize in the MERN stack (MongoDB, Express.js, React.js, and Node.js) and have a strong interest in creating interactive and real-world web solutions.  </p></div>
        </div>

    </div>
  )
}

export default Footer