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

import Yoon_ACADP from "../assets/pdfs/post-op/yoon/surgery updated nky acdf instructions 04.02.pdf";
import Yoon_ASF from "../assets/pdfs/post-op/yoon/surgery updated nky anterior spinal fusion discharge instruc 10.23.pdf";
import Yoon_LL from "../assets/pdfs/post-op/yoon/surgery updated nky lumbar laminectomy discharge instru 9.13.pdf";
import Yoon_LM from "../assets/pdfs/post-op/yoon/surgery updated nky lumbar microdisc discharge instru 03.19.pdf";
import Yoon_PCF from "../assets/pdfs/post-op/yoon/surgery updated nky posterior cervical fusion disharge instruc 06.24.pdf";
import Yoon_PLF from "../assets/pdfs/post-op/yoon/surgery updated nky posterior lumbar fusion discharge instruc 10.23.pdf";
import Yoon_Crani from "../assets/pdfs/post-op/yoon/surgery updated nkycrani discharge instructions 04.16.pdf";

import Rich_ACDF from "../assets/pdfs/post-op/rich/dc-cervical.pdf";
import Rich_Crani from "../assets/pdfs/post-op/rich/dc-craniotomy.pdf";
import Rich_LF from "../assets/pdfs/post-op/rich/dc-lumbarfusion.pdf";
import Rich_LD from "../assets/pdfs/post-op/rich/dc-lumbardisc.pdf";
import Rich_SDSten from "../assets/pdfs/post-op/rich/dc-spinalstenosisc.pdf";

import House_BHE from "../assets/pdfs/post-op/house/pahdischargeburrholeevacuationsurgery.pdf";
import House_Crani from "../assets/pdfs/post-op/house/pahdischargecraniotomysurgery.pdf";
import House_DBSGR from "../assets/pdfs/post-op/house/pahdischargedbsgeneratorreplacementsurgery.pdf";
import House_DBSLEIPG from "../assets/pdfs/post-op/house/pahdischargedbsleadextendersinternalpulsegenerater surgery.pdf";
import House_DBS from "../assets/pdfs/post-op/house/pahdischargedbssurgery.pdf";
import House_ES from "../assets/pdfs/post-op/house/pahdischargeepilepsysurgery.pdf";
import House_MD from "../assets/pdfs/post-op/house/pahdischargemicrovasculardecompressionsurgery.pdf";
import House_NES from "../assets/pdfs/post-op/house/pahdischargeneuropaceepilepsysurgery.pdf";
import House_VNSGR from "../assets/pdfs/post-op/house/pahdischargevnsgeneratorreplacement.pdf";
import House_VNSR from "../assets/pdfs/post-op/house/pahdischargevnsremovalsurgery.pdf";
import House_VNSS from "../assets/pdfs/post-op/house/pahdischargevnssurgery.pdf";
import House_VPSP from "../assets/pdfs/post-op/house/pahdischargevpshuntsurgery.pdf";

import Wilkerson_ACADP from "../assets/pdfs/post-op/wilkerson/cgw acd artificial disc discharge instructions 09.05.22.pdf";
import Wilkerson_ACDF from "../assets/pdfs/post-op/wilkerson/cgw acdf discharge instructions 09.05.22.pdf";
import Wilkerson_Chiari from "../assets/pdfs/post-op/wilkerson/cgw chiari discharge instructions 09.05.22.pdf";
import Wilkerson_Crani from "../assets/pdfs/post-op/wilkerson/cgw craniotomy discharge instructions 09.05.22.pdf";
import Wilkerson_LL from "../assets/pdfs/post-op/wilkerson/cgw laminectomy discharge instructions 09.05.22.pdf";
import Wilkerson_LM from "../assets/pdfs/post-op/wilkerson/cgw microdiscectomy discharge instructions 09.05.22.pdf";
import Wilkerson_PT from "../assets/pdfs/post-op/wilkerson/cgw pituitary tumor discharge instructions 09.05.22.pdf";
import Wilkerson_PCF from "../assets/pdfs/post-op/wilkerson/cgw posterior cervical fusion discharge instructions 09.05.22.pdf";
import Wilkerson_PLF from "../assets/pdfs/post-op/wilkerson/cgw posterior lumbar fusion discharge instructions 09.05.22.pdf";
import Wilkerson_VPSP from "../assets/pdfs/post-op/wilkerson/cgw vp shunt discharge instructions 09.05.22.pdf";

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
              download="Discharge Instructions Following the Removal of a Pituitary Tumor"
            >
              Discharge Instructions Following the Removal of a Pitutary Tumor
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
        <h2>Nam K. Yoon, MD</h2>
        <ul>
          <li>
            <a
              href={Yoon_ACADP}
              target="blank"
              download="Discharge Instructions Following an Anterior Cervical Discectomy with Fusion and Plating"
            >
              Discharge Instructions Following an Anterior Cervical Discectomy
              with Fusion and Plating (PDF)
            </a>
          </li>
          <li>
            <a
              href={Yoon_ASF}
              target="blank"
              download="Discharge Instructions Following an Anterior Spinal Fusion"
            >
              Discharge Instructions Following an Anterior Spinal Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Yoon_LL}
              target="blank"
              download="Discharge Instructions Following a Lumbar Laminectomy"
            >
              Discharge Instructions Following a Lumbar Laminectomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Yoon_LM}
              target="blank"
              download="Discharge Instructions Following a Lumbar Microdiscectomy"
            >
              Discharge Instructions Following a Lumbar Microdiscectomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Yoon_PCF}
              target="blank"
              download="Discharge Instructions Following a Posterior Cervical Fusion"
            >
              Discharge Instructions Following a Posterior Cervical Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Yoon_PLF}
              target="blank"
              download="Discharge Instructions Following a Posterior Lumbar Fusion"
            >
              Discharge Instructions Following a Posterior Lumbar Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Yoon_Crani}
              target="blank"
              download="Discharge Instructions Following a Craniotomy"
            >
              Discharge Instructions Following a Craniotomy (PDF)
            </a>
          </li>
        </ul>
        <br />
        <h2>Charles C. Rich, MD</h2>
        <ul>
          <li>
            <a
              href={Rich_ACDF}
              target="blank"
              download="Post-Operative Instructions for an Anterior Cervical Discectomy with Interbody Fusion"
            >
              Post-Operative Instructions for an Anterior Cervical Discectomy
              with Interbody Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Rich_Crani}
              target="blank"
              download="Post-Operative Instructions for a Craniotomy"
            >
              Post-Operative Instructions for a Craniotomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Rich_LF}
              target="blank"
              download="Post-Operative Instructions for a Lumbar Fusion"
            >
              Post-Operative Instructions for a Lumbar Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Rich_LD}
              target="blank"
              download="Post-Operative Instructions for a Lumbar Discectomy"
            >
              Post-Operative Instructions for a Lumbar Discectomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Rich_SDSten}
              target="blank"
              download="Post-Operative Instructions for Spinal Decompression/Stenosis"
            >
              Post-Operative Instructions for Spinal Decompression/Stenosis
              (PDF)
            </a>
          </li>
        </ul>
        <br />
        <h2>Paul A. House, MD</h2>
        <ul>
          <li>
            <a
              href={House_BHE}
              target="blank"
              download="Post-Operative Instructions for Burr Hole Evacuation"
            >
              Post-Operative Instructions for Burr Hole Evacuation (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_Crani}
              target="blank"
              download="Post-Operative Instructions for a Craniotomy"
            >
              Post-Operative Instructions for a Craniotomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_DBSGR}
              target="blank"
              download="Post-Operative Instructions for Deep Brain Stimulator Generator Replacement"
            >
              Post-Operative Instructions for Deep Brain Stimulator Generator
              Replacement (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_DBSLEIPG}
              target="blank"
              download="Post-Operative Instructions for Deep Brain Stimulator Lead Extenders Internal Pulse Generator"
            >
              Post-Operative Instructions for Deep Brain Stimulator Lead
              Extenders Internal Pulse Generator (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_DBS}
              target="blank"
              download="Post-Operative Instructions for Deep Brain Stimulator"
            >
              Post-Operative Instructions for Deep Brain Stimulator (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_ES}
              target="blank"
              download="Post-Operative Instructions for Epilepsy Surgery"
            >
              Post-Operative Instructions for Epilepsy Surgery (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_MD}
              target="blank"
              download="Post-Operative Instructions for Microvascular Decompression"
            >
              Post-Operative Instructions for Microvascular Decompression (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_NES}
              target="blank"
              download="Post-Operative Instructions for Neuropace Epilepsy Surgery"
            >
              Post-Operative Instructions for Neuropace Epilepsy Surgery (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_VNSGR}
              target="blank"
              download="Post-Operative Instructions for Vagal Nerve Stimulator Generator Replacement"
            >
              Post-Operative Instructions for Vagal Nerve Stimulator Generator
              Replacement (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_VNSR}
              target="blank"
              download="Post-Operative Instructions for a Vagal Nerve Stimulator Removal"
            >
              Post-Operative Instructions for Vagal Nerve Stimulator Removal
              (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_VNSS}
              target="blank"
              download="Post-Operative Instructions for Vagal Nerve Stimulator Surgery"
            >
              Post-Operative Instructions for Vagal Nerve Stimulator Surgery
              (PDF)
            </a>
          </li>
          <li>
            <a
              href={House_VPSP}
              target="blank"
              download="Post-Operative Instructions for a Ventricle Peritoneal Shunt Placement"
            >
              Post-Operative Instructions for a Ventricle Peritoneal Shunt
              Placement (PDF)
            </a>
          </li>
        </ul>
        <br />
        <h2>Christopher G. Wilkerson, MD</h2>
        <ul>
          <li>
            <a
              href={Wilkerson_ACADP}
              target="blank"
              download="Post-Operative Instructions for Anterior Cervical Artificial Disc Placement"
            >
              Post-Operative Instructions for an Anterior Cervical Artificial
              Disc Placement (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_ACDF}
              target="blank"
              download="Post-Operative Instructions for an Anterior Cervical Discectomy with Fusion and Plating"
            >
              Post-Operative Instructions for an Anterior Cervical Discectomy
              with Fusion and Plating (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_Chiari}
              target="blank"
              download="Post-Operative Instructions for Repair of a Chiari Malformation"
            >
              Post-Operative Instructions for the Repair of a Chiari
              Malformation (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_Crani}
              target="blank"
              download="Post-Operative Instructions for a Craniotomy"
            >
              Post-Operative Instructions for a Craniotomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_LL}
              target="blank"
              download="Post-Operative Instructions for a Lumbar Laminectomy"
            >
              Post-Operative Instructions for a Lumbar Laminectomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_LM}
              target="blank"
              download="Post-Operative Instructions for a Lumbar Microdescectomy"
            >
              Post-Operative Instructions for a Lumbar Microdiscectomy (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_PT}
              target="blank"
              download="Post-Operative Instructions for the Removal of a Pituitary Tumor"
            >
              Post-Operative Instructions for the Removal of a Pitutary Tumor
              (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_PCF}
              target="blank"
              download="Post-Operative Instructions for a Posterior Cervical Fusion"
            >
              Post-Operative Instructions for a Posterior Cervical Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_PLF}
              target="blank"
              download="Post-Operative Instructions for a Posterior Lumbar Fusion"
            >
              Post-Operative Instructions for a Posterior Lumbar Fusion (PDF)
            </a>
          </li>
          <li>
            <a
              href={Wilkerson_VPSP}
              target="blank"
              download="Post-Operative Instructions Following a Ventricle Peritoneal Shunt Placement"
            >
              Post-Operative Instructions for a Ventricle Peritoneal Shunt
              Placement (PDF)
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default PostOp;
