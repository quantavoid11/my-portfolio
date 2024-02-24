import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import NavBar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Skills from "./components/Skills.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <NavBar/>
        <Home/>
      <About/>
      <Skills/>

      <Contact/>
    </>
  )
}

export default App
