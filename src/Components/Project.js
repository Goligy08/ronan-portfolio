import React from "react";
import { useState } from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { faArrowsUpDownLeftRight } from "@fortawesome/free-solid-svg-icons";
import { animate, motion } from "framer-motion";

import '../Styles/Project.scss';


const anImage = {
    initial: {scale: 1},
    animate: {scale: 1.1},
 }

const Project = ({toggleDarkMode , title, description, image, technologies}) => {

   
    

    return (
       <>
        <motion.div className={`project${toggleDarkMode}`}
         initial ="initial"
         animate = "initial"
         whileHover="animate"
        >
        <motion.img variants={anImage} className="project-img" src={image}></motion.img>
        <h2 className="project-title">{title}</h2>
        <p className="project-desc">{description}</p>
        <ul className="project-technologies">{technologies}</ul>
        <button className="project-git-button"><i>
            <FontAwesomeIcon icon={faGithub}/>
        </i></button>
          <button className={`project-demo-button${toggleDarkMode}`}>
           <i>View Demo</i> <span><FontAwesomeIcon icon={faArrowRightLong}/></span> 
          </button>
           </motion.div>

        {/* { modal && (
         
         <div className={`modal-overlay${props.toggleDarkMode}`} onClick={toggleModal}>
         <div className={`modal${props.toggleDarkMode}`}>
             <div className="modal-header">

             <button className="modal-close" onClick={toggleModal}><FontAwesomeIcon icon={faXmark} className="close-mark" /></button>
             <h3 className="modal-title">{props.title}</h3>
   
             </div>
            
             <aside className={`modal-aside${props.toggleDarkMode}`}>
             <img className="modal-img" src={props.image} alt={props.title}></img>
             <ul>{listItems}</ul>
             </aside>
             <div className={`modal-main${props.toggleDarkMode}`}>
                <h3>About</h3>
                <p>{props.description}</p>
             <button className="modal-demo-btn">Demo</button>
             <button className="modal-repo-btn">Repository</button>
             </div>
            
   
         </div>
   
         </div> 
        )} */}
       </>
    

      
      
     
      
    
    
    )
}

export default Project;