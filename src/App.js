/* 
Filename: App.js
Date: 05/02/23
Authors: Ruben Ponce
Description: Contains the Router for all components of the app
*/

import React from 'react';
import { Routes, Route, BrowserRouter  } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';
import Albi from './components/Teams/albi';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <React.Fragment>
          <Navbar/>
        </React.Fragment>
        <Routes>
          <Route path = "/" element={<Home />} />

          {/*<Route path =  "*" element={<PageNotFound />} />*/}

          <Route path = "/Albirex" element = {<Albi />} />


        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
