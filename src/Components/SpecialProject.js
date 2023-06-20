import React from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import { faArrowRightLong } from '@fortawesome/free-solid-svg-icons';



import "../Styles/SpecialProject.scss";



const SpecialProject = ({toggleDarkMode, title, description, image, technologies}) => {


    return(
        <div className={`special-project${toggleDarkMode}`}>
        <img className="special-project-img" src={image}></img>
        <h2 className="special-project-title">{title}</h2>
        <p className="special-project-desc">{description}</p>
        <ul className="special-project-technologies">{technologies}</ul>
        <button className="special-git-button"><i>
            <FontAwesomeIcon icon={faGithub}/>
        </i></button>
        
        <button className={`special-demo-button${toggleDarkMode}`}>
          <i>View Demo</i> <span><FontAwesomeIcon icon={faArrowRightLong}/></span> 
          </button>


        </div>
    )
}

export default SpecialProject;