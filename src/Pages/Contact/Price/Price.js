import React from "react";

import "./Price.css";

function Price(props) {
  return (
    <div className="wedding-photo-prices-item">
      <h4 className="wedding-photo-prices-item-text-left">
        {props.title} {props.price}
      </h4>
      {props.content.items.map((item, i) => {
        return (
          <p
            className="wedding-photo-prices-item-text wedding-photo-prices-item-text-left"
            key={item.id}
          >
            *{item.text}
          </p>
        );
      })}
    </div>
  );
}

export default Price;
{
  /* <ul>
        {props.items.map((item, i) => {
          return (
            <li key={item.id}>
              <MenuItem name={item.name} route={item.route}></MenuItem>
            </li>
          );
        })} */
}
