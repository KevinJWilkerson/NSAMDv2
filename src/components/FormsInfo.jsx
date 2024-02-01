import React from "react";

import MRI_Check_In from "../assets/pdfs/new-patients/mri-review-form-06.07.22.pdf";
import NPP_BC from "../assets/pdfs/new-patients/newpatientpaperworkbrainupdate062821.pdf";
import NPP_SC from "../assets/pdfs/new-patients/newpatientpaperworkspineupdate062821.pdf";
import NPL_Murray from "../assets/pdfs/new-patients/newpatientpaperworkletterformurray06.16.22.pdf";
import Map_Murray from "../assets/pdfs/new-patients/murray_office.pdf";
import NPL_Park_City from "../assets/pdfs/new-patients/newpatientpaperworkletterforparkcity06.16.22.pdf";
import Map_Park_City from "../assets/pdfs/new-patients/pcmcparkingmap050517.pdf";
import Surgery_BTM from "../assets/pdfs/new-patients/Surgery-Blood-Thinning-Medications-1.12.15.pdf";
import PNP from "../assets/pdfs/new-patients/hipaanoticeofprivacypracticesnsa04.16.18.pdf";
import PPL from "../assets/pdfs/new-patients/paymentpolicyletter09.11.19.pdf";

function FormsInfo() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>New Patient Forms & Information</h1>
      </div>
      <div className="physician-bio">
        <h2>New Patient Forms</h2>
        <p>
          The following paperwork must be read and completed prior to your first
          visit with Neurosurgical Associates, LLC. <br />
          <br /> Please complete and bring the following forms with you on the
          date of your visit. Please contact us at 801-507-9555 if you have any
          questions or require assistance with the paperwork.
        </p>
        <ul>
          <li>
            <a
              href={NPP_BC}
              target="blank"
              download="New Patient Paperwork for Brain Conditions"
            >
              New Patient Paperwork for Brain Condiditions (PDF)
            </a>
          </li>
          <li>
            <a
              href={NPP_SC}
              target="blank"
              download="New Patient Paperwork for Spine Conditions"
            >
              New Patient Paperwork for Spine Conditions (PDF)
            </a>
          </li>
        </ul>
        <h2>New Patient Information</h2>
        <p>
          The following paperwork must be read and completed prior to your first
          visit with Neurosurgical Associates, LLC. <br />
          <br /> Please complete and bring the following forms with you on the
          date of your visit. Please contact us at 801-507-9555 if you have any
          questions or require assistance with the paperwork.
        </p>
        <ul>
          <li>
            <a
              href={NPL_Murray}
              target="blank"
              download="New Patient Letter - Murray Office"
            >
              New Patient Letter - Murray Office (PDF)
            </a>
          </li>
          <li>
            <a
              href={Map_Murray}
              target="blank"
              download="Map to Murray Office.pdf"
            >
              Map to Murray Office (PDF)
            </a>
          </li>
          <li>
            <a
              href={NPL_Park_City}
              target="blank"
              download="New Patient Letter - Park City Office"
            >
              New Patient Letter - Park City Office (PDF)
            </a>
          </li>
          <li>
            <a
              href={Map_Park_City}
              target="blank"
              download="Map to Park City Office"
            >
              Map to Park City Office (PDF)
            </a>
          </li>
          <li>
            <a
              href={Surgery_BTM}
              target="blank"
              download="Surgery - Blood Thinning Medications"
            >
              Surgery - Blood Thinning Medications (PDF)
            </a>
          </li>
          <li>
            <a href={PNP} target="blank" download="Privacy Notice Policy">
              Privacy Notice Policy (PDF)
            </a>
          </li>
          <li>
            <a href={PPL} target="blank" download="Payment Policy Notice">
              Payment Policy Notice (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default FormsInfo;
