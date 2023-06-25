import React from "react";
import { Routes, Route } from "react-router-dom"; // Import necessary components from react-router-dom
import { Element } from "react-scroll";

import "./App.css";
import Header from "./components/Homepages/Header/Header.js";
import Navbar from "./components/Homepages/Navbar/Navbar.js";
import About from "./components/Homepages/About/About.js";
import Education from "./components/Homepages/Education/Education.js";
import Experience from "./components/Homepages/Experience/Experience.js";
import Projects from "./components/Homepages/Projects/Projects.js";
import Contact from "./components/Homepages/Contact/Contact.js";
import Footer from "./components/Homepages/Footer/Footer.js";

function App() {

  return (
    <div className="App">
      <Navbar /> 
      <Routes> 
        <Route
          path="/"
          element={ 
            <>
              <Element className="Home">
                <Header />
              </Element>

              <Element className="About">
                <About />
              </Element>

              <Element className="Education">
                <Education />
              </Element>

              <Element className="Projects">
                <Projects />
              </Element>

              <Element className="Experience">
                <Experience />
              </Element>

              <Element className="Contact">
                <Contact />
              </Element>
            </>
          }
        />


      </Routes>
      <Footer />
    </div>
  );
}

export default App;
