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
              <NavLink className="nav-link dropdown" to="/Team">
                Our Team
              </NavLink>
              <div className="dropdown-content">
                <li className="phys-1">
                  <NavLink to="/Reichman">Mark V. Reichman, MD</NavLink>
                </li>
                <li className="phys-2">
                  <NavLink to="/Rich">Charles C. Rich, MD</NavLink>
                </li>
                <li className="phys-3">
                  <NavLink to="/Maughan">Peter H. Maughan, MD</NavLink>
                </li>
                <li className="phys-4">
                  <NavLink to="/House">Paul A. House, MD</NavLink>
                </li>
                <li className="phys-5">
                  <NavLink to="/Yoon">Nam K. Yoon, MD</NavLink>
                </li>
                <li className="phys-6">
                  <NavLink to="/Wilkerson">
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
            <li className="nav-item dropdown">
              <NavLink className="nav-link" to="/">
                Resources
              </NavLink>
              <div className="dropdown-content">
                <li className="phys-1">
                  <NavLink to="/New-Patients">New Patients</NavLink>
                </li>
                <li className="phys-2">
                  <NavLink to="/Patient-Referral">Patient Referral</NavLink>
                </li>
                <li className="phys-3">
                  <NavLink to="/Insurance-Information">
                    Insurance Information
                  </NavLink>
                </li>
                <li className="phys-4">
                  <NavLink to="/Instructions-&-Facilities">
                    Surgical Instructions and Facilities
                  </NavLink>
                </li>
                <li className="phys-5">
                  <NavLink to="/Post-Operative-Instructions">
                    Post Operative Instructions
                  </NavLink>
                </li>
                <li className="phys-6">
                  <NavLink to="/Medical-Records">Medical Records</NavLink>
                </li>
              </div>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="https://www.myhealthrecord.com/"
                target="blank"
              >
                Patient Portal
              </a>
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
