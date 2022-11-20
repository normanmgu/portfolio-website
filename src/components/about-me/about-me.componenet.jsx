import "./about-me.styles.scss";

const AboutMe = () =>{
  return (
    <div className="about-me-container">
      <h2>About ME</h2>
      <div className="other">
        <main>
          <div className="header">
            <p>about-me.html</p>
          </div>
          <div className="main-text">
            <p>
            &lt;p&gt;Since I could remember I always liked to build things. From legos to minecraft I always found fun in making
            complex things from simple objects. When I was 12 I build my first computer with all the birthday money and
            allowances I managed to save up.%
            </p>
            <br/>
            <p>
            It wasnt until University where I discovered programming with my intro to python course. I immeditely felt
            the same joy I felt in the past with legos. So I switch my major to Computer Science and know it is a huge
            part of my life. Over the past couple years I have been looking learning and improving as much as possible
            whenever I can.
            </p>
           <br/>
           <p>
           I'm now seeking a full-time role and interships where I can contribute my skills both in coding and 
           business to help a company achieve their goals.
           </p>
          </div>
        </main>
        <div>
          <h3>Skills</h3>
          <br/>
          <p>React.js</p>
          <p>Express</p>
          <p>Javascript</p>
          <p>HTML/CSS</p>
          <p>C++</p>
          <p>and more...</p>
        </div>
      </div>
      <div>
    
      </div>
    </div>
  )
}

export default AboutMe;