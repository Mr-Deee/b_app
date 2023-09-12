import React, { useState } from "react";
import { Link,NavLink } from "react-router-dom";
import "./navbar.css";

import { FaBars, FaTimes } from "react-icons/fa";
import { IconContext } from "react-icons/lib";
// import { NavLink } from "react-router-dom";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <IconContext.Provider value={{ color: "#fff" }}>
        <nav className="navbar">
          <div className="navbar-container container">
            <Link to="/" className="navbar-logo" onClick={closeMobileMenu}>
              {/* <GiRocketThruster className="navbar-icon" /> */}
              Borla App
            </Link>
            <div className="menu-icon" onClick={handleClick}>
              {click ? <FaTimes style={{color: "black"}}/> : <FaBars style={{ color: 'black' }}/>}
            </div>
            <ul className={click ? "nav-menu active" : "nav-menu"}>
              <li className="nav-item">
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Home
                </NavLink>
              </li>


              <li className="nav-item">
                <NavLink
                  to="/About"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  About
                </NavLink>
              </li>
             
              <li className="nav-item">
                <NavLink
                  to="/Contact"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                  Contact
                </NavLink>


                
                </li>
{/* 

                <li className="nav-item">
                <NavLink
                  to="/Login"
                  className={({ isActive }) =>
                    "nav-links" + (isActive ? " activated" : "")
                  }
                  onClick={closeMobileMenu}
                >
                
                  <div className="signbtn">login</div>
                </NavLink>
                </li> */}
            </ul>
          </div>
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default Navbar;