import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/images/logos/NSAMD.jpg";

function Navigation() {
  return (
    <div className="navigation">
      <div className="logo-container">
        <NavLink className="logo container" to="/">
          <img src={logo} />
        </NavLink>
      </div>
      <nav className="nav-bar">
        <div className="nav-container">
          <ul className="nav-menu container">
            <li className="nav-item">
              <NavLink className="nav-link" to="/">
                Home
              </NavLink>
            </li>
            <li className="nav-item dropdown">
              <NavLink className="nav-link dropdown" to="/physicians">
                Physicians
              </NavLink>
              <div className="dropdown-content">
                <li className="phys-1">
                  <NavLink to="/reichman">Mark V. Reichman, MD</NavLink>
                </li>
                <li className="phys-2">
                  <NavLink to="/rich">Charles C. Rich, MD</NavLink>
                </li>
                <li className="phys-3">
                  <NavLink to="/maughan">Peter H. Maughan, MD</NavLink>
                </li>
                <li className="phys-4">
                  <NavLink to="/house">Paul A. House, MD</NavLink>
                </li>
                <li className="phys-5">
                  <NavLink to="/yoon">Nam K. Yoon, MD</NavLink>
                </li>
                <li className="phys-6">
                  <NavLink to="/wilkerson">
                    Christopher G. Wilkerson, MD
                  </NavLink>
                </li>
                <li className="phys-7">
                  <NavLink to="/kotter">Dave J. Kotter, APRN</NavLink>
                </li>
                <li className="phys-8">
                  <NavLink to="/passey">Lori E. Passey, APRN</NavLink>
                </li>
                <li className="phys-9">
                  <NavLink to="/cushing">Holly K. Cushing, PA-C</NavLink>
                </li>
                <li className="phys-10">
                  <NavLink to="/jackson">Karissa Jackson, APRN-C</NavLink>
                </li>
              </div>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/resources">
                Resources
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/patient-portal">
                Patient Portal
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/contact">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;
