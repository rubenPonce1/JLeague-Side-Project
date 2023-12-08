/* 
Filename: Navbar.js
Date: 05/02/23
Authors: Ruben Ponce
Description: File for navigation bar.
*/

import React from "react";
import { Link } from "react-router-dom";
import "../Navbar/Navbar.css";
import J1Logo from "../images/JLeague_Logo/Jleague(3).png";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img src={J1Logo} className="J1-logo" alt="j1logo"></img>
        </Link>
      </nav>
    </>
  );
}

export default Navbar;
