import Navbar from "./components/Navbar";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
import Resources from "./components/Resources";
import DeveloperSetup from './components/DeveloperSetup'



function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Projects />
      <Skills />
      <Resources />
      <DeveloperSetup />
    </main>
  );
}

export default App;
