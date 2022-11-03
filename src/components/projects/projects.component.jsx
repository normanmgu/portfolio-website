import "./projects.styles.scss";
import Project from "../project/project.component";

import PROJECTS from "../../projectsList";

const Projects = () => {
  return (
    <div className="projects-container">

            <div className="projects-title">
              <h1>Projects</h1>
            </div>
            {
                PROJECTS.map(project => <Project project={project} />)
            }
            
          </div>
  )
}

export default Projects;