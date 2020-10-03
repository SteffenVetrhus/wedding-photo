import React from "react";
import "./MenuItem.css";
import { NavLink } from "react-router-dom";

function MenuItem(props) {
  return (
    <NavLink className="wedding-photo-menu-item" to={props.route}>
      {props.name}
    </NavLink>
  );
}

export default MenuItem;
