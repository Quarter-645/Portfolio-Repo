import './App.css';
import Home from './components/Home.js';
import Navbar from './components/Navbar.js';
import Placeholder from './components/Placeholder.js';
import Projects from './components/Projects.js';
import Skills from './components/Skills.js';
import Background from './components/Background.js';

function App() {
  return (
    <>
    <Background/>
    <Navbar/>
    <Home/>
    <Projects />
    <Skills/>
    </>
  );
}

export default App;
