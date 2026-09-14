import "./Skills.css";
import MiniCard from "../../Components/miniCard/miniCard.jsx";
import reactIcon from "../../assets/react-icon.jpg"
import nodeIcon from "../../assets/node-icon.jpg"
import nextIcon from "../../assets/next-icon.jpg"
import mongoIcon from "../../assets/mongodb-icon.jpg"
import expressIcon from "../../assets/express-icon.jpg"
import htmlIcon from "../../assets/html-icon.jpg"
import jsIcon from "../../assets/js-icon.jpg"
import cssIcon from "../../assets/css-icon.jpg"
import { motion } from "motion/react";





function Skills() {
  return (
    <motion.div className=" skills-main"  initial={{opacity:0, y:-100}}
    whileInView={{opacity:1, y:0}}
    transition={{duration:1.5, ease:"easeOut"}}
    viewport={{amount: 0.3}}>

      
<h1>My Skills</h1>


        <div className="min-h-full   w-[70vw] flex flex-wrap gap-3.5 justify-center ">
          <MiniCard 
          
          skill={{
            img: reactIcon,
            text: "React.js"
          }}
          
          />

           <MiniCard 
          
          skill={{
            img: nodeIcon,
            text: "Node.js"
          }}
          
          />

           <MiniCard 
          
          skill={{
            img: nextIcon,
            text: "Next.js"
          }}
          
          />


           <MiniCard 
          
          skill={{
            img: mongoIcon,
            text: "MongoDb"
          }}
          
          />

           <MiniCard 
          
          skill={{
            img: expressIcon,
            text: "Express Js"
          }}
          
          />


           <MiniCard 
          
          skill={{
            img: htmlIcon,
            text: "HTML"
          }}
          
          />

          
           <MiniCard 
          
          skill={{
            img: cssIcon,
            text: "CSS"
          }}
          
          />
        </div>
        
        
    </motion.div>
  )
}

export default Skills