import React, { useContext } from "react";
import "./about.css";

import { DataContext } from "../../context/globalContext.js";
import Loop from "../Techstack/Loop.js";

const About = () => {
  const state = useContext(DataContext);
  const [about] = state.about;
  console.log(about);
  return (
    <div className="about-container">
      <div className="about">
        {about.map((item) => (
          <div className="about-info" key={item._id}>
            <p>{item.about}</p>
          </div>
        ))}
      </div>
      <Loop />
    </div>
  );
};

export default About;
