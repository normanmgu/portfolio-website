import { ReactComponent as TerrariaMan } from "../../assets/tman.svg";
import { SocialIcon } from "react-social-icons";
import Typewriter from "typewriter-effect";

import "./home.styles.scss";

const Home = () =>{
  return (
    <div className="introduction-container">

    <div className='right'>
      <TerrariaMan className="terraria-man" />
      <h2>and I like to build things.</h2>
    </div> 

    <div className="left">
      <div className="introduction">
        <div>
          <span>Hello I'm</span>
        </div>
        <div className="name">
          <span>Norman Gutierrez,</span>
        </div>
        <div className="job-position">

          <pre>I'm a </pre><Typewriter 
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: [
                " Software Engineer",
                " Website Developer",
                " student",
              ]
            }}
          />
        </div>
        <div className="resume-download-container">
          <div className="download">
            <span>
            <a href="/images/Updated_Resume.pdf" download>
              Resume
            </a>
            </span>
            <span>&#8595;</span>
          </div>
          <SocialIcon fgColor="white" className="social-icon" url="https://www.linkedin.com/in/norman-gutierrez-77630121a/" />
          <SocialIcon fgColor="white" className="social-icon" url="https://github.com/normanmgu" />

        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;