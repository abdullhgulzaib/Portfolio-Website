// import logo from './logo.svg';
import './index.css';
import Header from './components/Header'
import First_page from './components/First_page';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ProjectDeck from './components/ProjectsDeck/ProjectDeck';
import EducationExperience from './components/EducationExperience';

function App() {
  return (
    <div >

    <Header/>
    <First_page/>
    <About/>
    <Skills/>
    <EducationExperience/>
    <ProjectDeck/>
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;
