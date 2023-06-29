import React, { useState } from "react";
import "../Styles/MobileNav.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";


const MobileNav = ({toggleDarkMode}) => {

    const [showMenu, setShowMenu] = useState(false)

    let menu
    let menuMask

    if (showMenu) {
        menu = <div className="mobile-menu">
            <ul className="mobile-links">
                <HashLink to="/#projects"><li>Projects</li></HashLink>
                <Link to="/contact"><li>Contact</li></Link>
                <li className="dark"><FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon></li>
            </ul>
        </div>

        menuMask = <div className="mobile-menu-bg">

        </div>
    }

    return (
        
       <div className="mobile-nav">
        <div className={`logo${toggleDarkMode}`}></div>
        <button className={`mobile-hamburger${toggleDarkMode}`}>
            <FontAwesomeIcon icon={faBars} className="mobile-icon"
              onClick={() => setShowMenu(!showMenu) }
            >
            </FontAwesomeIcon></button>
       
          {menu}
       </div>
    )
}


export default MobileNav;