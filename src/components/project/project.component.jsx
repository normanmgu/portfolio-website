import "./project.styles.scss";
import {useEffect} from "react";

const Project = ({project}) => {
  const { title, description, image, link } = project;
  console.log(image)

  return (
    <div className="project-container">
              <main>
                <div className="project">
                  <div className="left">
                    <div className="project-header">
                      <h2>{title}</h2>
                    </div>
                    <div className="project-main">
                      {description}
                    </div>
                    <div className="project-footer">
                      <div className="project-footer-left project-button">
                        <a className="footer-text" >Preview</a>
                      </div>
                
                      <div className="project-footer-right project-button ">
                        <a className="footer-text" href={link}>Source Code</a>
                      </div>
                    </div>
                  </div>
                  <div className="right" style={{
                    backgroundImage: `url(/images/${image})`,
                    backgroundSize: "contain",
                  }}>

                  </div>
                </div>
              </main>
            </div>
  )
}

export default Project;