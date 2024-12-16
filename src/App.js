import React, { useEffect } from 'react';
import './index.css';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Skills from './components/Skills';
import Project from './components/Project';
import Contact from './components/Contact';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
   Aos.init();
   
  }, [])
  
  return (
    <div className="App">
      <Navbar/>
      <Home/>
      <Skills/>
      <Project/>
      <Contact/>
    
    </div>
  );
}

export default App;
