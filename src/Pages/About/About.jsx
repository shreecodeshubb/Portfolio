import "./About.css"
import { motion } from "motion/react"
function About() {
  return (
    <motion.div className="about-main"    initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.5, ease:"easeOut"}}
    viewport={{amount: 0.3}}>
        
       
          <div> <h1>About Me</h1></div>
           
<div className="about-content">

            <p>

I’m a passionate Full Stack Web Developer focused on building modern, responsive, and scalable web applications. I specialize in the MERN stack (MongoDB, Express.js, React.js, and Node.js) and have a strong interest in creating interactive and real-world web solutions.

Along with the MERN stack, I have learned and worked with TypeScript, Next.js, JavaScript, REST APIs, MongoDB, Socket.IO, and modern frontend development practices. I’m comfortable working across both frontend and backend, from designing responsive user interfaces to developing APIs, authentication systems, database operations, and real-time features.

One of my key projects is a Real-Time Chat Web Application built using the MERN stack and Socket.IO. The application supports real-time communication between users, message persistence using MongoDB, user authentication, profile management, and real-time message delivery.

I enjoy learning new technologies, solving development problems, and turning ideas into functional applications. I’m continuously improving my knowledge of full-stack development, TypeScript, Next.js, system design, Docker, and modern web development practices.
</p>
       </div>
    </motion.div>
  )
}

export default About