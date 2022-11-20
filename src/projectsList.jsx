import "./projectList.scss"
import connect4gif from "./assets/connect4gif.gif";
import connect4background from "./assets/connect4background.png";
const PROJECTS = [
  {
    title: "Networked Connect4",
    description: (
      <div>
        <p>Networked Connect4 is a networked and realtime game of connect4. It features a user authentication and
          friend request system.
        </p>
        <br/>
        <h3>Design</h3>
        <p>The app was implemented using the Model-View-Controller architecture. The user needs to create
          an account in order to access the dashboard, this is ensured with the use of express-sessions which redirects
          the user back to the login page if they try to access the dashboard.
        </p>
        <br />
        <img className="project-gif" src={connect4gif}/>
        <br />
        <h3>
          Tech Stack
        </h3>
        <p>Node.js, Express, EJS, Socket.io, Passport.js</p>
      </div>
    ),
    image: "connect4background.png",
    id:1,
    link: "https://github.com/normanmgu/NetworkedConnect4"
  },
]

export default PROJECTS;