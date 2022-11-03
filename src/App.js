import './App.scss';
import Home from "./components/home/home.component";
import Projects from "./components/projects/projects.component";
import AboutMe from "./components/about-me/about-me.componenet";

const App = () =>{
  return (
    <div className="App">
      <Home />
      <Projects />
      <AboutMe />
    </div>
  );
}

export default App;
