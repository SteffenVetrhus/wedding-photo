import React from "react";
import "./Logo.css";
import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="wedding-photo-logo">
      <NavLink to="/">
        <h1>Bryllupsfotograf Sør</h1>
      </NavLink>
    </div>
  );
}

export default Logo;
