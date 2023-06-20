import React, { useState } from "react";
import { FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import '../Styles/MiniProject.scss';


const MiniProject  = (props) => {

    const [modal, setModal] = useState(false);

    const toggleModal = () => {
        setModal(!modal);
    }
    const webTechnologies = props.webTechnologies;
    const listItems = webTechnologies.map((webTechnology) => 
      <li><a>{webTechnology}</a></li>
      );
    
      
    return(
        <>
        <div className={`mini-project${props.toggleDarkMode}`}>
            <img src={props.image} alt={props.title} onClick={toggleModal}></img>

        </div>
    

        { modal && (
         
         <div className={`modal-overlay${props.toggleDarkMode}`}onClick={toggleModal}>
         <div className={`modal${props.toggleDarkMode}`}>
             <div className="modal-header">
              <img className="modal-img" src={props.image} alt={props.title}></img>
   
             <button className="modal-close" onClick={toggleModal}><FontAwesomeIcon icon={faXmark} className="close-mark" /></button>
             </div>
             <aside className={`modal-aside${props.toggleDarkMode}`}>
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
        )}
        
        
        </>
        
    )
}

export default MiniProject;