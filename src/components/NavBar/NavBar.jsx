import React from "react";
import { NavLink } from "react-router-dom";

import MobileNavigation from "./MobileNavigation";
import Navigation from "./Navigation";

import logo from "../../assets/images/logos/NSAMD.jpg";

function NavBar() {
  return (
    <div className="NavBar">
      <div className="logo-container">
        <NavLink className="logo container" to="/">
          <img src={logo} />
        </NavLink>
      </div>
      <Navigation />
      <MobileNavigation />
    </div>
  );
}

export default NavBar;
