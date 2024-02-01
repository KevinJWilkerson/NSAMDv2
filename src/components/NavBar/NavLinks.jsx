import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks() {
  return (
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
              <NavLink to="/Wilkerson">Christopher G. Wilkerson, MD</NavLink>
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
              <NavLink to="/castle">Bronwynne Castle, NP</NavLink>
            </li>
          </div>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/">
            Resources
          </NavLink>
          <div className="dropdown-content">
            <li className="phys-1">
              <NavLink to="/Instructions-&-Facilities">
                Surgical Instructions and Facilities
              </NavLink>
            </li>
            <li className="phys-2">
              <NavLink to="/Post-Operative-Instructions">
                Post Operative Instructions
              </NavLink>
            </li>
            <li className="phys-3">
              <NavLink to="/Medical-Records">Medical Records</NavLink>
            </li>
            <li className="phys-4">
              <NavLink to="/Financial-Notices">Financial Notices</NavLink>
            </li>
          </div>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/">
            New Patients
          </NavLink>
          <div className="dropdown-content">
            <li className="phys-1">
              <a href="/Appointments">Appointments</a>
            </li>
            <li className="phys-2">
              <a href="/Forms-Info">Forms & Information</a>
            </li>
            <li className="phys-3">
              <NavLink to="/Insurance-Information">
                Insurance Information
              </NavLink>
            </li>
            <li className="phys-4">
              <NavLink to="/Patient-Referral">Patient Referral</NavLink>
            </li>
          </div>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link" to="/">
            Current Patients
          </NavLink>
          <div className="dropdown-content">
            <li className="phys-1">
              <a href="https://www.myhealthrecord.com/">Patient Portal</a>
            </li>
            <li className="phys-2">
              <a href="https://mypay.poscorp.com/nsamd#/account/login">
                Online Payments
              </a>
            </li>
          </div>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/contact">
            Contact Us
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default NavLinks;
