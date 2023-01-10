import React from "react";

import PNP from "../assets/pdfs/new-patients/hipaanoticeofprivacypracticesnsa04.16.18.pdf";
import PHI from "../assets/pdfs/medical-records/phiform5.13.22de.pdf";
import MRRR from "../assets/pdfs/medical-records/health_record_amendment_form3-editable.pdf";

function MedicalRecords() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>Medical Records</h1>
      </div>
      <div className="physician-bio">
        <h2>Medical Records Request and Release of Information</h2>
        <p>
          Release of information must comply with State and Federal guidelines.
          Please refer to the following{" "}
          <a
            href={PNP}
            target="blank"
            download="Patient Request for Health Information"
          >
            Notice of Privacy Practices (pdf)
          </a>{" "}
          for our complete policy. Please contact our Medical Records Clerk at
          801-507-9555 if you have any questions regarding the release of
          patient information. After completing the online request form, please
          print the completed form and bring it to the office, fax the form to
          801-507-9550, or request records through our patient portal.
          <br />
          <br />
          The form must be completed in its entirety in order to be valid. If
          you do not have a single, specific date which you would like records
          for, please indicate "all." If you would like records from other
          treating providers released to Neurosurgical Associates, LLC, and the
          other provider requires a written release, please complete the
          following form and submit it to the provider from whom you are
          requesting records.
          <br />
          <br />
          To obtain copies of your own medical records, please complete the
          following form.
        </p>
        <ul>
          <li>
            <a
              href={PHI}
              target="blank"
              download="Patient Request for Health Information"
            >
              Patient Request for Health Information (PDF)
            </a>
          </li>
        </ul>
        <br />
        <p>
          Medical Providers may request medical records for mutual patients over
          the phone or via fax. Please contact our office directly by phone at
          801-507-9555 or via fax 801-507-9550.
          <br />
          <br />
          Attorneys' offices may request medical records or account balance
          information for mutual patients with a current authorization on file.
          All requests for financial or medical records must be submitted in
          writing via fax to 801-507-9550. We will respond in writing and
          standard fees will apply. The fee for a balance inquiry is $15.00.
          <br />
          <br />
          If you believe there is a mistake in your medical records, you have
          the right to request an amendment. Your request will be carefully
          reviewed and you will be notified of the outcome. Please complete the
          following form and submit it to our Medical Records Clerk for review
          and consideration.
        </p>
        <ul>
          <li>
            <a
              href={MRRR}
              target="blank"
              download="Medical Record Request for Review"
            >
              Medical Record Request for Review (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default MedicalRecords;
