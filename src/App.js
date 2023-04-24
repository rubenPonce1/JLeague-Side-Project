import React from 'react';
import { Routes, Route, Switch, Router, createBrowserRouter, RouterProvider,
  Outlet, useRouteLoaderData, createRoutesFromElements, BrowserRouter  } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Pages/Home';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <React.Fragment>
          <Navbar/>
        </React.Fragment>
        <Routes>
          <Route path ="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
