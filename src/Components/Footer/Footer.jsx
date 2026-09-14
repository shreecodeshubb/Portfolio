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
              <div><h1>Pages</h1></div>
       <div> 
        <h2><Link to="/about">About</Link></h2>
       <h2><Link>Skills</Link></h2>
       <h2><Link>Projects</Link></h2> </div>

        </div>
          
            
        <div className="about-div"></div>

    </div>
  )
}

export default Footer