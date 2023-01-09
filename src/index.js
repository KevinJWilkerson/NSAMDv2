import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Navigation, Footer, Home } from "./components";
import {
  Team,
  Reichman,
  Rich,
  Maughan,
  House,
  Yoon,
  Wilkerson,
} from "./components/Physicians";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  <Router>
    <Navigation />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Team" element={<Team />} />
      <Route path="/Reichman" element={<Reichman />} />
      <Route path="/Rich" element={<Rich />} />
      <Route path="/Maughan" element={<Maughan />} />
      <Route path="/House" element={<House />} />
      <Route path="/Yoon" element={<Yoon />} />
      <Route path="/Wilkerson" element={<Wilkerson />} />
    </Routes>
    <Footer />
  </Router>,

  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();

serviceWorker.unregister();
