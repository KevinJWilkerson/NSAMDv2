import React from "react";

import IMC_PreOp from "../assets/pdfs/instructions-facilities/imcpreoperativeinstructionsandmap 09.18.19.pdf";
import PC_PreOp from "../assets/pdfs/instructions-facilities/park city pre-operative instructions 9.20.13.pdf";
import SM_Dir from "../assets/pdfs/instructions-facilities/st.marks map for surgery patients.pdf";
import SM_PreAn from "../assets/pdfs/instructions-facilities/stmarkspreanesthesiaform091819.pdf";

function InstructionsFacilities() {
  return (
    <div className="physician-content">
      <div className="page-title">
        <h1>Surgical Instructions & Facilities</h1>
        <p>
          <b>
            Neurosurgical Associates, LLC surgeons have privileges at the
            following medical facilities
          </b>
        </p>
      </div>
      <div className="container facility">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.6603796094796!2d-111.89404554899511!3d40.65941624866627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x87528a263ca0200d%3A0x47d8c36be7acb365!2sIntermountain%20Medical%20Center!5e0!3m2!1sen!2sus!4v1673319780189!5m2!1sen!2sus"
          width="400"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Intermountain Medical Center"
          className="facility-iframe"
        ></iframe>
        <div>
          <h3>Intermountain Medical Center</h3>
          <p>
            5121 South Cottonwood Street
            <br />
            Muray, UT 84157
            <br />
            Phone: 801-507-7000
          </p>
          <ul>
            <li>
              <a>Intermountain Healthcare Advance Planning</a>
            </li>
            <li>
              <a
                href={IMC_PreOp}
                target="blank"
                download="Intermountain Surgery Preparation Checklist"
              >
                Pre-Operative Instructions with Map
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container facility">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.3768701498766!2d-111.47161024899435!3d40.68769684693747!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x875213aaf1a1df99%3A0x97b85ff2d8835717!2sPark%20City%20Hospital!5e0!3m2!1sen!2sus!4v1673319926611!5m2!1sen!2sus"
          width="400"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Park City Medical Center"
          className="facility-iframe"
        ></iframe>
        <div>
          <h3>Park City Medical Center</h3>
          <p>
            900 Round Valley Drive
            <br />
            Park City, UT 84060
            <br />
            Phone: 435-658-7000
          </p>
          <ul>
            <li>
              <a
                href={PC_PreOp}
                target="blank"
                download="Park City Medical Center Pre-Operative Instructions"
              >
                Pre-Operative Instructions
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="container facility">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3025.4509718103054!2d-111.85926464899441!3d40.686064547037354!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8752614520b91f55%3A0xb1b65090037ab0b9!2sSt.%20Mark&#39;s%20Hospital!5e0!3m2!1sen!2sus!4v1673319984712!5m2!1sen!2sus"
          width="400"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="St. Mark's Hospital"
          className="facility-iframe"
        ></iframe>
        <div>
          <h3>St. Mark Hospital</h3>
          <p>
            1200 E. 3900 S.
            <br />
            Salt Lake City, UT 84124
            <br />
            Phone: 801-268-7111
          </p>
          <ul>
            <li>
              <a href={SM_Dir} target="blank" download="">
                Driving Directions(PDF)
              </a>
            </li>
            <li>
              <a href={SM_PreAn} target="blank" download="">
                Pre-Anesthesia Form (PDF)
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default InstructionsFacilities;
