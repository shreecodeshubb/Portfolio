import { Link } from "react-router-dom";
import heroBg from "../../assets/hero-img.jpeg";
import "./Header.css";



function Header() {
  return (
    <header>
        <div className="left-hero">

           <div className="hero-content">
            <h1>Full Stack Developer</h1>
            <p>Hi, I'm <span className="highlight">Puja</span>. I'm a full Stack Developer skilled in building responsive, scalable, and user-friendly web applications.Experienced in developing both frontend and backend solutions using modern technologies and best development practices.Passionate about writing clean, efficient code and creating reliable software that delivers a great user experience. </p>
           </div>
            <button className="hero-btn"> <Link to="/about">View More</Link></button>
        </div>
        <div className="right-hero">
          <img src={heroBg} alt="" />
        </div>
    </header> 
  )
}

export default Header