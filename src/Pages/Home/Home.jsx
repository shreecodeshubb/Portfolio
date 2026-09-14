import Header from "../../Components/Header/Header.jsx";
import { motion } from "motion/react";

function Home() {
  return (
    <motion.div className="pb-5 mb-5"
    
    initial={{opacity:0, x:-100}}
    whileInView={{opacity:1, x:0}}
    transition={{duration:1.5, ease:"easeOut"}}
    viewport={{once:true}}
    >
    
      <Header/>
    </motion.div>
  )
}

export default Home