import React from "react";
import { Link } from "react-router-dom";
import "../Styles/Projects.scss";
import Project from "./Project";
import SpecialProject from "./SpecialProject";
import ProjectRecords from "../ProjectRecords.json";

const Projects = ({toggleDarkMode}) => {


console.log(ProjectRecords);

    return(
        <div className={`projects${toggleDarkMode}`} id="projects">

       <div className="projects-container">
       
        <SpecialProject
           toggleDarkMode = {toggleDarkMode}
           title = {ProjectRecords[0].title}
           image = {ProjectRecords[0].image}
           description = {ProjectRecords[0].description}
           technologies = {ProjectRecords[0].webTechnologies}
          />

          <div className="project-container-1">
          <Project
            toggleDarkMode = {toggleDarkMode}
            // title = {ProjectRecords[1].title}
            image = {ProjectRecords[1].image}
            description = {ProjectRecords[1].description}
            technologies = {ProjectRecords[1].webTechnologies}
          />

          <Project
            toggleDarkMode = {toggleDarkMode}
            // title = {ProjectRecords[3].title}
            image = {ProjectRecords[3].image}
            description = {ProjectRecords[3].description}
            technologies = {ProjectRecords[3].webTechnologies}
          />

          </div>
         
          <div className="project-container-2">
          <Project
            toggleDarkMode = {toggleDarkMode}
            image = {ProjectRecords[5].image}
            description = {ProjectRecords[5].description}
            technologies = {ProjectRecords[5].webTechnologies}
           
          />

          <Project
            toggleDarkMode = {toggleDarkMode}
            image = {ProjectRecords[2].image}
            description = {ProjectRecords[2].description}
            technologies = {ProjectRecords[2].webTechnologies}
          />

          </div>
          

           <SpecialProject
           toggleDarkMode = {toggleDarkMode}
           title = {ProjectRecords[4].title}
           image = {ProjectRecords[4].image}
           description = {ProjectRecords[4].description}
           technologies = {ProjectRecords[4].webTechnologies}
          />
     


       </div>

       

         

          {/* {
            ProjectRecords.map( record => {
              console.log(record.image)
                return (
                
               <div>
                      <Project
                toggleDarkMode = {toggleDarkMode}
                image = {record.image}
                title = {record.title}
                description = {record.description}
                webTechnologies = {record.webTechnologies}
                repoLink = {record.repoLink}
                />

              
  
                 </div>
                 
          
                
            
                
                
                
        
                )
            })
          } */}
            <svg xmlns="http://www.w3.org/2000/svg" className={`project-wave${toggleDarkMode}`} viewBox="0 0 1440 320">
        <path fill="#fff" fill-opacity="1"
            d="M0,128L21.8,133.3C43.6,139,87,149,131,176C174.5,203,218,245,262,229.3C305.5,213,349,139,393,138.7C436.4,139,480,213,524,208C567.3,203,611,117,655,122.7C698.2,128,742,224,785,240C829.1,256,873,192,916,181.3C960,171,1004,213,1047,208C1090.9,203,1135,149,1178,144C1221.8,139,1265,181,1309,181.3C1352.7,181,1396,139,1418,117.3L1440,96L1440,320L1418.2,320C1396.4,320,1353,320,1309,320C1265.5,320,1222,320,1178,320C1134.5,320,1091,320,1047,320C1003.6,320,960,320,916,320C872.7,320,829,320,785,320C741.8,320,698,320,655,320C610.9,320,567,320,524,320C480,320,436,320,393,320C349.1,320,305,320,262,320C218.2,320,175,320,131,320C87.3,320,44,320,22,320L0,320Z">
        </path>
    </svg>
        </div>
    )
}

export default Projects;