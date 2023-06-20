import React from "react";
import "../Styles/Footer.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faCodepen, faLinkedin, faDribbble} from '@fortawesome/free-brands-svg-icons';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import {faCopyright} from '@fortawesome/free-regular-svg-icons';
import { Link } from "react-router-dom";

const Footer = ({toggleDarkMode}) => {
    return (
       <div className={`footer${toggleDarkMode}`}>

         <Link to="/contact"><button className="footer-contact">Get In Touch</button></Link>
         <div className="copy">
         <h3 className="copy-name"><i className={`copyright-icon${toggleDarkMode}`}><FontAwesomeIcon icon={faCopyright}></FontAwesomeIcon></i><span className="name">Ronan Goligy</span><span className={`year${toggleDarkMode}`}>2022</span></h3>
         <h3 className="copy-location"><i className="location-icon"><FontAwesomeIcon icon={faMapMarkerAlt}></FontAwesomeIcon></i><span className={`location${toggleDarkMode}`}>Belfast</span></h3>
         </div>
         


         <div className={`socials${toggleDarkMode}`}>
            <i> <FontAwesomeIcon  icon={faGithub} className="social"></FontAwesomeIcon></i>
            <i><FontAwesomeIcon icon={faCodepen} className="social"></FontAwesomeIcon></i>
            <Link to="/https:/www.linkedin.com/ronangoligy"><i><FontAwesomeIcon icon={faLinkedin} className="social"></FontAwesomeIcon></i></Link>
            <i> <FontAwesomeIcon icon={faDribbble} className="social"></FontAwesomeIcon></i>
         </div>
       </div>
    )
}

export default Footer;


