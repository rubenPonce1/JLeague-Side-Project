/* 
Filename: App.js
Date: 05/02/23
Authors: Ruben Ponce
Description: Contains the Router for all components of the app
*/

import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Pages/Home";
import Albi from "./components/Teams/albi";
import Kashima from "./components/Teams/antlers";
import Avi from "./components/Teams/avi";
import Cerezo from "./components/Teams/cerezo";
import Hokkaido from "./components/Teams/consa";
import FCTokyo from "./components/Teams/fctky";
import Gamba from "./components/Teams/gamba";
import Kashiwa from "./components/Teams/reysol";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <React.Fragment>
          <Navbar />
        </React.Fragment>
        <Routes>
          <Route path="/" element={<Home />} />

          {/*<Route path =  "*" element={<PageNotFound />} />*/}

          <Route path="/Albirex" element={<Albi />} />
          <Route path="/Avispa" element={<Avi />} />
          <Route path="/Cerezo" element={<Cerezo />} />
          <Route path="/FC_Tokyo" element={<FCTokyo />} />
          <Route path="/Gamba_Osaka" element={<Gamba />} />
          <Route path="/Hokkaido" element={<Hokkaido />} />
          <Route path="/Kashima_Antlers" element={<Kashima />} />
          <Route path="/Kashiwa_Reysol" element={<Kashiwa />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
