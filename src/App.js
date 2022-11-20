import './App.scss';
import Home from "./components/home/home.component";
import Projects from "./components/projects/projects.component";
import AboutMe from "./components/about-me/about-me.componenet";

const App = () =>{
  return (
    <div className="App">
      <Home />
      <AboutMe />
      <Projects />
      <div className="contact-container">
        contact me: nmgutierrez@ucdavis.edu
      </div>
    </div>
  );
}

export default App;
