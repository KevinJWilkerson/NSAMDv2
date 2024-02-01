import React from "react";

import MRI_Check_In from "../assets/pdfs/new-patients/mri-review-form-06.07.22.pdf";

function Appointments() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>Appointments</h1>
      </div>
      <div className="physician-bio">
        <h2>New Patient Appointments</h2>
        <p>
          To request a consultation with a member of Neurosurgical Associates,
          LLC please fill out the following form. As a specialty center, we
          accept new patients only after an initial work up, including MRI, has
          been done by your primary care or family physician. An MRI done within
          the past 6 months must be reviewed by the neurosurgeon in order to
          determine if a neurosurgical consultation is warranted. We will
          contact you directly within one week to let you know if an appointment
          can be scheduled.
        </p>
        <ul>
          <li>
            <a href={MRI_Check_In} target="blank" download="MRI Check-in Form">
              MRI Check-in Form (PDF)
            </a>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
}

export default Appointments;
