import React from "react";
import "./Content.css";
import "./main.jpg";
import "./between.jpg";
function Content(props) {
  return (
    <div className="wedding-photo-content">
      <div className="wedding-photo-content-header">
        <h2>{props.text}</h2>
      </div>
      <div className="wedding-photo-content-item">
        <img width="75%" height="auto" src={props.url} />
      </div>
    </div>
  );
}

export default Content;
