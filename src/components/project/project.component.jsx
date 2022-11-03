import "./project.styles.scss";
const Project = ({project}) => {
  const { title, description, techStack } = project;

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
                        <p className="footer-text">Preview</p>
                      </div>
                      <div className="project-footer-right project-button ">
                        <p className="footer-text">Source Code</p>
                      </div>
                    </div>
                  </div>
                  <div className="right">

                  </div>
                </div>
              </main>
            </div>
  )
}

export default Project;