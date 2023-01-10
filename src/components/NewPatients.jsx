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

function NewPatients() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>New Patient Resources</h1>
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
        <h2>Missed Appointment Fee</h2>
        <p>
          Due to the high number of patients requesting appointments, waiting
          times can be long. No-show appointments have a significant negative
          impact on our practice and the healthcare we provide to our patients,
          potentially jeopardizes the health of the “no-showing” patient, and is
          unfair to other patients that would have taken the appointment slot.
          Because of this, our office has a low tolerance for missed
          appointments and you will be charged a no show fee of $100. Below is
          our policy for patients who do not show up for their appointments.
        </p>
        <p>You are a "No Show" if you:</p>
        <ul>
          <li>Miss an appointment without telling us.</li>
          <li>
            Miss an appointment with less than 2 business days of advance
            notice.
          </li>
          <li>
            Miss an appointment because you have arrived late to the appointment
            and cannot be seen by the provider on the same day.
          </li>
        </ul>
        <p>
          If you are unable to keep your appointment, please notify our office
          at least 2 business days prior to the appointment. This allows enough
          time to reschedule the appointment time. Please call to cancel or
          reschedule your appointment by calling our office at 801-507-9555, if
          after hours leave a message or use{" "}
          <a href="https://www.myhealthrecord.com/" target="blank">
            myhealthrecord.com
          </a>{" "}
          to send a message through the patient portal. A no show fee of $100
          will not be submitted to insurance. It is your responsibility and must
          be paid in full prior to scheduling your next appointment. We
          appreciate being able to care for you. We understand that you may at
          times need to cancel or reschedule an appointment due to emergencies
          or other unexpected issues, in these instances, the fee may be waived.
        </p>
        <br />
        <h2>New Patient Paperwork</h2>
        <p>
          The following paperwork must be completed prior to your first visit
          with Neurosurgical Associates, LLC. Please complete and bring the
          following forms with you on the date of your visit. Please contact us
          at 801-507-9555 if you have any questions or require assistance with
          the paperwork.
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

export default NewPatients;
