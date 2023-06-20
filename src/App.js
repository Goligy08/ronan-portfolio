import React, { createContext, useEffect, useState } from 'react';
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import Footer from './Components/Footer';
import MobileNav from './Components/MobileNav';
import Contact from './Components/Contact';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import "./Styles/App.scss";
import { set } from 'react-hook-form';








function App() {
  
  
 const [darkMode, setDarkMode] = useState(false);

function handleClickEvent() {
  setDarkMode(darkMode => !darkMode)
}

let toggleDarkMode = darkMode ? ' darkmode' : '' ;

  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint = 700;

  useEffect(() => {
    const handleResizeWindow = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResizeWindow);
    return () => {
      window.removeEventListener("resize", handleResizeWindow)
    };
  }, []);

  if(width>breakpoint) {
    return (
      
         <Router>
          <div className={`app${toggleDarkMode}`}>
            <Switch>
              <Route exact path="/">
                  <Navbar 
                  
                  handleClickEvent={handleClickEvent}
                  toggleDarkMode={toggleDarkMode}
                  />
                  <Hero 
                  
                   toggleDarkMode={toggleDarkMode}
                  />
                  <Projects
                   
                   toggleDarkMode={toggleDarkMode}
                  />
               
                  <Footer 
                  
                   toggleDarkMode={toggleDarkMode}
                  />
             </Route>

             <Route path="/contact">
                <Contact
                toggleDarkMode={toggleDarkMode}
                />
             </Route>

          

            </Switch>
         
          </div>
          </Router>
         
   
    );
  }
    return (
      
      <Router>
      <div className='app'>
        <Switch>
          <Route exact path="/">
              <MobileNav/>
              <Hero />
              <Projects />
      
              <Footer />
         </Route>

         <Route path="/contact">
            <Contact/>
         </Route>

      

        </Switch>
     
      </div>
      </Router>
      
    
    );
  } 


export default App;

