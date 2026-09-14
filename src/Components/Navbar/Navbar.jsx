import "./Navbar.css";
import {Link} from 'react-router-dom';
import { motion } from "motion/react";
function Navbar() {
  return (
    <motion.nav initial={{opacity:0, y:-100}}
     animate={{ opacity: 1, y: 0 }}
    transition={{duration:1.5, ease:"easeOut"}}
    viewport={{once:true}}>
         {/* Logo */}
      <div className="logo">
       <span className="logo-text">Puja Dey</span>
      </div>

      {/* side nav */}
      <ul className="side-nav">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About Me</Link></li>
        <li><Link to="/skills">Skills</Link></li>
        <li>Projects</li>
      </ul>
    </motion.nav>
  )
}

export default Navbar