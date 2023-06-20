
import React from "react";
import { Link } from "react-router-dom";
import { HashLink} from 'react-router-hash-link';
import "../Styles/Navbar.scss";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faCircleHalfStroke } from '@fortawesome/free-solid-svg-icons';


const NavBar = ({toggleDarkMode, handleClickEvent}) => {




    return (
        <div className={`navbar${toggleDarkMode}`}>
         <div className={`logo${toggleDarkMode}`}></div>
         <ul className="desk-menu">
            <HashLink to="/#projects"><li>Projects</li></HashLink>
            <Link to="/contact"><li>Contact</li></Link>
           <button className={`dark${toggleDarkMode}`} onClick={handleClickEvent} ><li><FontAwesomeIcon icon={faCircleHalfStroke}></FontAwesomeIcon></li></button> 
         </ul>
        </div>
    )
};


export default NavBar;