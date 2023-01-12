import React from "react";
import user from "../data/user";
import ProjectItem from "./ProjectItem";

function ProjectList({ projects }) {
  console.log(projects);
 
  return (
    
    <div id="projects">
      <h2>My Projects</h2>
      <div id="project-list" key={projects.id}>{
      /* render ProjectItem components here for (const project of projects) { */
      
      <ProjectItem />
      
      }
      </div>
    </div>
    
  );
    

}

export default ProjectList;
