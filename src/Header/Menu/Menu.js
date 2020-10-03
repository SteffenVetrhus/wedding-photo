import React from "react";
import "./Menu.css";
import MenuItem from "./MenuItem/MenuItem";

function Menu(props) {
  return (
    <div className="wedding-photo-menu">
      <ul>
        {props.items.map((item, i) => {
          return (
            <li key={item.id}>
              <MenuItem name={item.name} route={item.route}></MenuItem>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Menu;
