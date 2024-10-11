
import './App.css'  
import React from 'react';
import About from "./components/about.tsx";  
import Navbar from "./components/navbar.tsx"; 
import Project from "./components/project.tsx"; 
import Interest from "./components/interests.tsx"; 
import Contact from "./components/contact.tsx";


function App() {

  return (
    <> 
      <Navbar />
      <About />  
      <Project />  
      <Interest />  
      <Contact />
    </>
  )
}

export default App
