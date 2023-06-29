import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Hero.scss";


const Hero = ({toggleDarkMode}) => {

    return (

        <div className={`hero${toggleDarkMode}`}>
        
            <h1 className={`hero-title${toggleDarkMode}`}>Front End Web Developer.</h1>
            <p className={`hero-copy${toggleDarkMode}`}>Cyber Security analyst & aspiring web developer.</p>
           <Link to="/contact"> <button className={`hero-contact${toggleDarkMode}`}>Contact</button></Link>
            <div className={`hero-img${toggleDarkMode}`}></div>
            <div className={`hero-mobile-img${toggleDarkMode}`}></div>
            <svg xmlns="http://www.w3.org/2000/svg" className={`hero-wave${toggleDarkMode}`} viewBox="0 0 1440 320">
                <path fill="#f2f4f8" fill-opacity="1"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z">
                </path>
            </svg>

        </div>
    )
}

export default Hero;