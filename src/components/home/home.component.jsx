import { ReactComponent as TerrariaMan } from "../../assets/tman.svg";
import { SocialIcon } from "react-social-icons";

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
          <span>Hello I'm,</span>
        </div>
        <div className="name">
          <span>Norman Gutierrez</span>
        </div>
        <div className="job-position">
          <span> a Jr. Software Developer</span>
        </div>
        <div className="resume-download-container">
          <div className="download">
            <span>Resume</span>
            <span>&#8595;</span>
          </div>
          <SocialIcon url="www.linkedin.com/in/norman-gutierrez-77630121a" />

        </div>
      </div>
    </div>
  </div>
  )
}

export default Home;