import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/header/Header"
import Home from "./components/home/Home"
import Projects from "./components/Projects/Projects"
import About from "./components/about/About"
import Skills from "./components/skills/Skills"
import Certificates from "./components/certificates/Certificates"


function App() {

  return (
    <>
<div className="h-screen w-full flex flex-col">
  <Header /> 
  <div className="flex-grow ">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Projects" element={<Projects />} />
      <Route path="/About" element={<About />} />
      <Route path="/Skills" element={<Skills />} />
      <Route path="/Certificates" element={<Certificates />} />
    </Routes>
  </div>
</div>
  
    </>
  )
}


export default App
