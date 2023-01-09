import React from "react";
import { Link } from "react-router-dom";

import reichman from "../../assets/images/headshots/1.jpg";
import rich from "../../assets/images/headshots/2.jpg";
import maughan from "../../assets/images/headshots/3.jpg";
import house from "../../assets/images/headshots/4.jpg";
import yoon from "../../assets/images/headshots/5.jpg";
import wilkerson from "../../assets/images/headshots/6.jpg";

function Team() {
  return (
    <div className="container team-content">
      <div className="page-title">
        <h1>Meet Our Team</h1>
      </div>
      <div className="team-container">
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Reichman" className="team-name">
            <h2>Mark Reichman</h2>
          </Link>
          <h3 className="team-role">Neurosurgeon</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Rich" className="team-name">
            <h2>Charles Rich</h2>
          </Link>
          <h3 className="team-role">Neurosurgeon</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Maughan" className="team-name">
            <h2>Peter Maughan</h2>
          </Link>
          <h3 className="team-role">Neurosurgeon</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/House" className="team-name">
            <h2>Paul House</h2>
          </Link>
          <h3 className="team-role">Neurosurgeon</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Yoon" className="team-name">
            <h2>Nam Yoon</h2>
          </Link>
          <h3 className="team-role">Neurosurgeon</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Wilkerson" className="team-name">
            <h2>Chris Wilkerson</h2>
          </Link>
          <h3 className="team-role">Neurosurgeon</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Kotter" className="team-name">
            <h2>Dave Kotter</h2>
          </Link>
          <h3 className="team-role">Acute Care Nurse Practitioner</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Passey" className="team-name">
            <h2>Lori Passey</h2>
          </Link>
          <h3 className="team-role">Acute Care Nurse Practitioner</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Cushing" className="team-name">
            <h2>Holly Cushing</h2>
          </Link>
          <h3 className="team-role">Physician Assistant</h3>
        </div>
        <div className="team-card">
          <div className="headshot-container">
            <img src="" className="team-headshot"></img>
          </div>
          <Link to="/Jackson" className="team-name">
            <h2>Karissa Jackson</h2>
          </Link>
          <h3 className="team-role">Acute Care Nurse Practitioner</h3>
        </div>
      </div>
    </div>
  );
}

export default Team;
