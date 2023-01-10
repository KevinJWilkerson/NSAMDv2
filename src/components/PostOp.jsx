import React from "react";

import Reichman_ACDF from "../assets/pdfs/post-op/reichman/mvr_postop_acdf.pdf";
import Reichman_Crani from "../assets/pdfs/post-op/reichman/mvr_postop_crani.pdf";
import Reichman_LD from "../assets/pdfs/post-op/reichman/mvr_postop_lumbardiscectomy.pdf";

import Maughan_ACADP from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-acdwithartificialdisc03.28.19.pdf";
import Maughan_ACDF from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-acdf-instructions07.17.17.pdf";
import Maughan_Chiari from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-chiaridischargeinstruc08.07.17.pdf";
import Maughan_Crani from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-cranidischargeinstructions08.07.17.pdf";
import Maughan_LL from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-lumbarlaminectomydischargeinstru9.13.17.pdf";
import Maughan_LM from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-lumbarmicrodiscdischargeinstru03.14.19.pdf";
import Maughan_PT from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-removalofpituitarytumordischargeinstruc06.06.12.pdf";
import Maughan_PCF from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-posteriorcervicalfusiondishargeinstruc06.06.12.pdf";
import Maughan_PSF from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-posteriorspinalfusiondischargeinstruc03.22.19.pdf";
import Maughan_VPSP from "../assets/pdfs/post-op/maughan/surgeryupdated-phm-vpshuntdischargeinstru8.7.17.pdf";

// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";

// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";

// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";

// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";
// import Reichman_ACDF from "../assets/pdfs/post-op/reichman/.pdf";

function PostOp() {
  return (
    <div className="container physician-content">
      <div className="page-title">
        <h1>Post-Operative Instructions</h1>
      </div>
      <div className="physician-bio">
        <h2>Mark V. Reichman, MD</h2>
        <ul>
          <li>
            <a
              href={Reichman_ACDF}
              target="blank"
              download="Post Operative Instructions for Anterior Cervical Discectomy with Interbody Fusion"
            >
              Post Operative Instructions for Anterior Cervical Discectomy with
              Interbody Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Reichman_Crani}
              target="blank"
              download="Post Operative Instructions for Craniotomy"
            >
              Post Operative Instructions for Craniotomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Reichman_LD}
              target="blank"
              download="Post Operative Instructions for Lumbar Discectomy"
            >
              Post Operative Instructions for Lumbar Discectomy (PDF)
            </a>
          </li>
        </ul>
        <br />
        <h2>Peter H. Maughan, MD</h2>
        <ul>
          <li>
            <a
              href={Maughan_ACADP}
              target="blank"
              download="Discharge Instructions Following an Anterior Cervical Artificial Disc Placement"
            >
              Discharge Instructions Following an Anterior Cervical Artificial
              Disc Placement (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_ACDF}
              target="blank"
              download="Discharge Instructions Following an Anterior Cervical Discectomy with Fusion and Plating"
            >
              Discharge Instructions Following an Anterior Cervical Discectomy
              with Fusion and Plating (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_Chiari}
              target="blank"
              download="Discharge Instructions Following a Repair of a Chiari Malformation"
            >
              Discharge Instructions Following a Repair of a Chiari Malformation
              (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_Crani}
              target="blank"
              download="Discharge Instructions Following a Craniotomy"
            >
              Discharge Instructions Following a Craniotomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_LL}
              target="blank"
              download="Discharge Instructions Following a Lumbar Laminectomy"
            >
              Discharge Instructions Following a Lumbar Laminectomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_LM}
              target="blank"
              download="Discharge Instructions Following a Lumbar Microdescectomy"
            >
              Discharge Instructions Following a Lumbar Microdiscectomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_PT}
              target="blank"
              download="Discharge Instructions Following the Removal of a Pituitary Tumor "
            >
              Discharge Instructions Following the Removal of a Pituutary Tumor
              (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_PCF}
              target="blank"
              download="Discharge Instructions Following a Posterior Cervical Fusion"
            >
              Discharge Instructions Following a Posterior Cervical Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_PSF}
              target="blank"
              download="Discharge Instructions Following a Posterior Spinal Fusion"
            >
              Discharge Instructions Following a Posterior Spinal Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Maughan_VPSP}
              target="blank"
              download="Discharge Instructions Following a VP Shunt Placement"
            >
              Discharge Instructions Following a VP Shunt Placement (PDF)
            </a>
          </li>
        </ul>
        <br />
      </div>
    </div>
  );
}

export default PostOp;
