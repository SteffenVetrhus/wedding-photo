import React from "react";

import "./About.css";
import Steffen from "./steffen.jpg";

function About() {
  return (
    <div className="wedding-photo-about">
      <h2>Om</h2>
      <div className="wedding-photo-about-content">
        <div className="wedding-photo-about-content-item">
          <img width="420" height="auto" src={Steffen} />
          <div>
            <p>Navn: Steffen</p>
            <p>Alder: 32</p>
            <p>Yrke: It-konsulent</p>
            <p>Nettside: Ingen</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
