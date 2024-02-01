import React from "react";
import { NavLink } from "react-router-dom";

import NavLinks from "./NavLinks";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="nav-bar">
        <NavLinks />
      </nav>
    </div>
  );
}

export default Navigation;
