
import './App.css' 
import About from "./components/about";  
import Navbar from "./components/navbar"; 
import Project from "./components/project"; 
import Interest from "./components/interests"; 
import Contact from "./components/contact";


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
