import React from "react";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { GrClose } from "react-icons/gr";

import NavLinks from "./NavLinks";

function MobileNavigation() {
  const [open, setOpen] = useState(false);
  const hamburgericon = (
    <RxHamburgerMenu
      className="hamburger"
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  const closeIcon = (
    <GrClose
      className="close"
      size="40px"
      color="black"
      onClick={() => setOpen(!open)}
    />
  );

  return (
    <div className="mob-nav">
      {open ? closeIcon : hamburgericon}
      {open && <NavLinks />}
    </div>
  );
}

export default MobileNavigation;
