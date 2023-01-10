import React from "react";

function InsuranceInfo() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>Insurance Information</h1>
      </div>
      <div className="physician-bio">
        <h2>Insurance Providers</h2>
        <p>
          Neurosurgical Associates, LLC is contracted with the following
          insurance plans. For coverage information on plans not listed below
          please contact us at 801-507-9555.
        </p>
        <ul>
          <li>AARP Medicare Complete Plan 1 and Plan 2</li>
          <li>Aetna Health Plans</li>
          <li>Altius Advantra HMO-POS</li>
          <li>Altius Health Plan of Utah</li>
          <li>BAS Benefits (Town & Country Network)</li>
          <li>Blue Cross Blue Shield</li>
          <li>Blue Cross Medicare Advantage Plan</li>
          <li>Beech Street Affiliated Plans</li>
          <li>Cigna PPO</li>
          <li>Coventry Network</li>
          <li>Deseret Mutual Benefit Administrators (DMBA)</li>
          <li>Educators Mutual Insurance (EMI)</li>
          <li>First Health Network</li>
          <li>Humana Medicare PPO</li>
          <li>Mail Handlers Benefit Plan</li>
          <li>Managed Care Administrators</li>
          <li>Medicare Part B</li>
          <li>Molina Medicare Options</li>
          <li>Multi-Plan Network</li>
          <li>Network Care Network</li>
          <li>PHCS Network</li>
          <li>
            Public Employee Health Plan (PEHP)
            <ul>
              <li>Advantadge</li>
              <li>Preferred</li>
              <li>Summit</li>
            </ul>
          </li>
          <li>Select Health</li>
          <li>Select Health Medicare Advantage</li>
          <li>United Health Care and Affiliated Plans</li>
          <li>
            University Health Plans
            <ul>
              <li>Healthy Premier</li>
              <li>Healthy Preferred</li>
            </ul>
          </li>
          <li>Wise Network</li>
          <li>Workers Compensation</li>
        </ul>
        <p>
          <b>
            Please note that although Neurosurgical Associates may be contracted
            with your insurance plan, not all plans are contracted with
            Intermountain Medical Center and not all of our surgeons operate at
            Park City Medical Center and/or St. Marks Hospital.{" "}
          </b>
        </p>
        <p>
          <b>
            Please contact your insurance plan to verify your specific plan's
            contracted doctors and hospitals.
          </b>
        </p>
        <p>
          <b>
            Please contact this office at 801-507-9555 to confirm which surgeons
            operate at Park City Medical Center and/or St. Marks Hospital.
          </b>
        </p>
      </div>
    </div>
  );
}

export default InsuranceInfo;
