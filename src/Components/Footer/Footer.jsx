import { Link } from "react-router-dom";
import "./Footer.css";



function Footer() {
  return (
    <div className="footer-main">
        <div className="info-div">
            <div><h1>Contact & Social Media</h1> </div>
            <div> <h2>Pdey8589@gmail.com</h2> </div>
            <div> <h2>You can follow me on IG __shree.in</h2> </div>
        </div>


        <div className="pages-div">
              <div><h1 className="text-2xl font-bold text-red-800">Pages</h1></div>
       <div> 
        <h2><Link to="/about">About</Link></h2>
       <h2><Link to="/skills">Skills</Link></h2>
       <h2><Link>Projects</Link></h2> </div>

        </div>
          
            
        <div className="about-div"> 
          <div><h1 className="text-2xl font-bold text-red-800" >About Me</h1></div>
          <div className="flex"><p className="text-center"> I specialize in the MERN stack (MongoDB, Express.js, React.js, and Node.js) and have a strong interest in creating interactive and real-world web solutions.</p></div>
        </div>

    </div>
  )
}

export default Footer