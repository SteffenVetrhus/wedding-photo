import React from "react";
import "./Header.css";
import Logo from "./Logo/Logo";
import Menu from "./Menu/Menu";

function Header() {
  const menuItems = [
    { name: "OM", id: 1, children: [], route: "/om" },
    { name: "FOTOGRAFI", id: 2, children: [], route: "/fotografi" },
    { name: "SISTE BRYLLUP", id: 3, children: [], route: "/siste" },
    { name: "PRIS & KONTAKT", id: 4, children: [], route: "/kontakt" },
  ];

  return (
    <div className="wedding-photo-header">
      <Logo></Logo>
      <Menu items={menuItems}></Menu>
    </div>
  );
}

export default Header;
