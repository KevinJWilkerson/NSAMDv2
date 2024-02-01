import React from "react";

import PPL from "../assets/pdfs/new-patients/paymentpolicyletter09.11.19.pdf";

function FinancialNotices() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>Financial Notices</h1>
      </div>
      <div className="physician-bio">
        <h2>Missed Appointment Fee</h2>
        <p>
          Due to the high number of patients requesting appointments, waiting
          times can be long. No-show appointments have a significant negative
          impact on our practice and the healthcare we provide to our patients,
          potentially jeopardize the health of the “no-showing” patient, and are
          unfair to other patients that would have taken the appointment slot.
          Because of this, our office has a low tolerance for missed
          appointments and you will be charged a no-show fee of $100. Below is
          our policy for patients who do not show up for their appointments.
        </p>
        <p>You are a "no-show" if you:</p>
        <ul>
          <li>Miss an appointment without telling us</li>
          <li>
            Miss an appointment with less than 2 business days of advance notice
          </li>
          <li>
            Miss an appointment because you have arrived late to the appointment
            and cannot be seen by the provider on the same day
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
          to send a message through the patient portal. A no-show fee of $100
          will not be submitted to insurance. It is your responsibility and must
          be paid in full prior to scheduling your next appointment. We
          understand that you may at times need to cancel or reschedule an
          appointment due to emergencies or other unexpected issues, in these
          instances, the fee may be waived.
        </p>
        <br />
        <h2>Payment Policy</h2>
        <p>
          We at Neurosurgical Associates are proud to be a part of a team whose
          primary mission is to deliver the finest and most comprehensive health
          care available today. We are a private practice and are in no way
          affiliated with Intermountain Healthcare. We are dedicated to making
          top-quality care as cost effective as possible. Our billing department
          staff will contact your insurance plan (when applicable) after your
          surgery has been scheduled to pre-authorize services and verify your
          estimated out of pocket cost. The patient’s financial responsibility
          for the primary surgeon and assistant at surgery services will be due
          prior to services being rendered. The amount due from you will be
          based on any insurance plan benefits, including any un-met
          deductibles, coinsurance, and/or copayment. To assist you with your
          health care needs, we provide the following payment options:
        </p>
        <ul>
          <li>Cash - includes money orders and personal checks</li>
          <li>
            We accept the following credit cards: Visa, MasterCard, American
            Express or Discover Card
          </li>
          <li>
            Scheduled automatic payments from a checking account, savings
            account, or credit cards
            <ul>
              <li>
                Charges not paid in full within 60 days of billing will be
                subject to interest at the rate of 18% annually.
              </li>
            </ul>
          </li>
          {/* <li>
            <a href={PPL} target="blank" download="Payment Policy Notice">
              Payment Policy Notice (PDF)
            </a>
          </li> */}
        </ul>
        <p>
          If the pre-paid amount exceeds the actual amount you owe after
          services are rendered and insurance has paid their part, a prompt
          refund will be issued to you. Please allow sufficient time for
          processing and mailing the refund to you.
          <br />
          <br />
          This office only bills for the primary surgeon and assistant at
          surgery. You will be billed separately for these charges:
        </p>
        <ul>
          <li>
            Out-patient radiology services performed at a Hospital or Imaging
            Center
          </li>
          <li>
            Hospital bills for inpatient or outpatient room charges, operating
            room charges, ancillary services (such as pharmacy, radiology, or
            laboratory services ordered by your physician)
          </li>
          <li>Anesthesia services</li>
        </ul>
      </div>
    </div>
  );
}

export default FinancialNotices;
