import React from "react";

import "./About.css";
import Steffen from "./steffen.jpg";
import Ivan from "./ivan.jpg";

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
        <div className="wedding-photo-about-content-item">
          <img width="420" height="auto" src={Ivan} />
          <div>
            <p>Navn: Ivan</p>
            <p>Alder: 43</p>
            <p>Yrke: Ux-designer</p>
            <p>
              Nettside:{" "}
              <a href="https://imaeland.no/" target="_blank">
                imaeland.no
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default About;
