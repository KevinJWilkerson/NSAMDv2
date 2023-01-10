import React from "react";

import Referral_Form from "../assets/pdfs/referring-patients/neuroconsultorreferralform061622.pdf";

function PatientReferral() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>Referring Provider Information</h1>
      </div>
      <div className="physician-bio">
        <h2>How to Refer a Patient</h2>
        <p>
          Thank you for considering Neurosurgical Associates, LLC for the care
          of your patient. To refer a patient, please complete the following
          Physician Referral Form. Please fax the form and all related clinic
          notes and diagnostic reports to 801-507-9550. The information
          submitted will be reviewed by the neurosurgeon of your choice, or the
          next available surgeon if a specific surgeon is not chosen. The
          patient will be contacted regarding an appointment.
        </p>
        <ul>
          <li>
            <a
              href={Referral_Form}
              target="blank"
              download="Consultation / Referral Form"
            >
              Consultation / Referral Form (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PatientReferral;
