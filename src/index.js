import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
// import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar/NavBar";
import {
  Footer,
  Home,
  NewPatients,
  PatientReferral,
  InsuranceInfo,
  InstructionsFacilities,
  PostOp,
  MedicalRecords,
  FinancialNotices,
  Appointments,
  FormsInfo,
} from "./components";
import {
  Team,
  Reichman,
  Rich,
  Maughan,
  House,
  Yoon,
  Wilkerson,
  Kotter,
  Passey,
  Cushing,
  Castle,
} from "./components/Physicians";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Reichman" element={<Reichman />} />
      <Route path="/Rich" element={<Rich />} />
      <Route path="/Maughan" element={<Maughan />} />
      <Route path="/House" element={<House />} />
      <Route path="/Yoon" element={<Yoon />} />
      <Route path="/Wilkerson" element={<Wilkerson />} />
      <Route path="/Kotter" element={<Kotter />} />
      <Route path="/Passey" element={<Passey />} />
      <Route path="/Cushing" element={<Cushing />} />
      <Route path="/Castle" element={<Castle />} />
      <Route path="/New-Patients" element={<NewPatients />} />
      <Route path="/Patient-Referral" element={<PatientReferral />} />
      <Route path="/Insurance-Information" element={<InsuranceInfo />} />
      <Route
        path="/Instructions-&-Facilities"
        element={<InstructionsFacilities />}
      />
      <Route path="/Post-Operative-Instructions" element={<PostOp />} />
      <Route path="/Medical-Records" element={<MedicalRecords />} />
      <Route path="/Financial-Notices" element={<FinancialNotices />} />
      <Route path="/Appointments" element={<Appointments />} />
      <Route path="/Forms-Info" element={<FormsInfo />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

// serviceWorker.unregister();
