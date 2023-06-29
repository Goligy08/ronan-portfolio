import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';
import { animate, motion } from "framer-motion";


import "../Styles/SpecialProject.scss";

 const anImage = {
    initial: {scale: 1},
    animate: {scale: 1.1},
 }

const SpecialProject = ({toggleDarkMode, title, description, image, technologies}) => {


    return(
        <motion.div 
        className={`special-project${toggleDarkMode}`}
        initial ="initial"
        animate = "initial"
        whileHover="animate"
        >
        <motion.img variants={anImage} className="special-project-img" src={image}></motion.img>
        <h2 className="special-project-title">{title}</h2>
        <p className="special-project-desc">{description}</p>
        <ul className="special-project-technologies">
        {technologies.map((technology) => (
                <li>{technology}</li>
            ))}
        
        </ul>
        <button className="special-git-button"><i>
            <FontAwesomeIcon icon={faGithub}/>
        </i></button>
        
        <button className={`special-demo-button${toggleDarkMode}`}>
          <i>View Demo</i> <span><FontAwesomeIcon icon={faArrowRightLong}/></span> 
          </button>


        </motion.div>
    )
}

export default SpecialProject;