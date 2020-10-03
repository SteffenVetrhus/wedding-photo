import React from "react";

import "./Footer.css";

import SocialMedia from "./SocialMedia/SocialMedia.js";
import Copyright from "./Copyright/Copyright.js";

function Footer() {
  return (
    <div className="wedding-photo-footer">
      <SocialMedia></SocialMedia>
      <Copyright></Copyright>
    </div>
  );
}

export default Footer;
