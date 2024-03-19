
import './App.css';
import About from './Components/About/About';
import Hero_section from './Components/Hero Section/Hero_section';
import Navbar from './Components/Navbar/Navbar';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Works from './Components/Works/Works';
import Footer from './Components/Footer/Footer';


function App() {
  return (
    <div>
      <div>
      <Navbar></Navbar>
      <Hero_section></Hero_section>
      </div>
      <About></About>
      <Skills></Skills>
      <Education></Education>
      <Works></Works>
      <Footer></Footer>
     
    </div>
  );
}

export default App;



