import React from "react";
import "../Styles/Contact.scss";
import ContactForm from "./ContactForm";
import { Link } from "react-router-dom";
import { faClose, faCommentDots} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Contact =  ({toggleDarkMode}) => {

    return (
        <div className={`contact${toggleDarkMode}`}>

            <nav className="nav">
                <div className={`logo${toggleDarkMode}`}></div>
                <Link to="/"><button className={`close${toggleDarkMode}`}>Close <FontAwesomeIcon icon={faClose}></FontAwesomeIcon></button></Link>
            </nav>

            <div className="contact-main">
                <FontAwesomeIcon icon={faCommentDots} className="contact-speech-bubble"></FontAwesomeIcon>
                <h1 className={`contact-title${toggleDarkMode}`}>Let's Talk!</h1>
                <p class={`contact-message${toggleDarkMode}`}>If you would like to get in touch, Please send a message using the form below!</p>
                 
               <ContactForm 
                toggleDarkMode = {toggleDarkMode}
               />
              

            </div>
        </div>
    )
}


export default Contact;