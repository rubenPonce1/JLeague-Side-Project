/* 
Filename: Navbar.js
Date: 05/02/23
Authors: Ruben Ponce
Description: File for navigation bar.
*/


import React, {useState} from "react";
import { useRef } from "react";
import Dropdown from './Dropdown'

import "../Navbar/Navbar.css";
import { Link, useNavigate, generatePath, Navigate} from 'react-router-dom';

import J1Logo from '../images/JLeague_Logo/Jleague(3).png'


function Navbar(){
    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () =>{
      if (window.innerWidth < 960){
        setDropdown(true);
      }
      else{
        setDropdown(true);
      }
    };

    const onMouseLeave = () =>{
      if (window.innerWidth < 960){
        setDropdown(false);
      }
      else{
        setDropdown(false);
      }
    };


    return(
      <>
        <nav className="navbar">
          <Link to='/' className="navbar-logo">
            <img src={J1Logo} className ="J1-logo"></img>  
          </Link>
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}> Fixtures </Link>
            </li>

            <li className='nav-item'>
              <Link to='/contact-us' className='nav-links' onClick={closeMobileMenu}> 
              Media
              </Link>
            </li>
            <li className='nav-item'>
                          <Link to='/table' className='nav-links' onClick={closeMobileMenu}> 
                          Table
                          </Link>
            </li>

            <li 
              className='nav-item'
              onMouseEnter={onMouseEnter}
              onMouseLeave={onMouseLeave}
            >

              <Link to='/Services' className='nav-links' onClick={closeMobileMenu}>
                More <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown/>}
            </li>

            

          </ul>
          

        </nav>
      </>
    );
}

export default Navbar;