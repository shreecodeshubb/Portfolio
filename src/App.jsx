import {Route, Routes} from 'react-router-dom';
import { lazy,Suspense } from 'react';
// import About from './Pages/About/About.jsx';

const About = lazy(()=> import ("./Pages/About/About.jsx"));
const Skills = lazy(()=> import ("./Pages/Skills/Skills.jsx"));
const LandingPage = lazy(()=> import ("./Pages/LandingPage.jsx"));



import Navbar from "./Components/Navbar/Navbar.jsx"
import Loading from './Components/Loading/Loading.jsx';
import Footer from './Components/Footer/Footer.jsx';
// import LandingPage from './Pages/LandingPage.jsx';
// import Skills from './Pages/Skills/Skills.jsx';
function App() {
  return (
    <Suspense fallback={<Loading/>}>
    <div id='app'>
      
      <Navbar/>
      
 <Routes>
  <Route path='/' element={<LandingPage/>}/>
  <Route path='/about' element={<About/>}/>
  <Route path='/skills' element={<Skills/>} />
 </Routes>

<Footer/>
   
    </div>
       </Suspense>
  )
}

export default App