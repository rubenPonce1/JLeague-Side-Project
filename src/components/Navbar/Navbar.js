/* 
Filename: Navbar.js
Date: 05/02/23
Authors: Ruben Ponce
Description: File for navigation bar.
*/

import React, {useState} from "react";
import { Link} from 'react-router-dom';

import Dropdown from './Dropdown'
import "../Navbar/Navbar.css";
import J1Logo from '../images/JLeague_Logo/Jleague(3).png'


function Navbar(){

    const [click, setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const onMouseEnter = () => {
      setDropdown(true)
    };

    const onMouseLeave = () => {
      setDropdown(false)
    };


    return(
      <>
        <nav className="navbar">
          <Link to='/' className="navbar-logo" onClick={closeMobileMenu}>
            <img src={J1Logo} className ="J1-logo"></img>  
          </Link>

          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>

            <li className='nav-item'>
              <Link to='/Fixtures' className='nav-links' onClick={closeMobileMenu}> 
              Fixtures
              </Link>
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

              <Link to='/More' className='nav-links' onClick={closeMobileMenu}>
                More <i className='fas fa-caret-down' />
              </Link>
              {dropdown && <Dropdown />}
            </li>

            

          </ul>
          

        </nav>
      </>
    );
}

export default Navbar;