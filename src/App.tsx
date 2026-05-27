import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import BackToTop from './components/BackToTop';

function App() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <Projects />
      <div className="max-w-[1200px] mx-auto h-[0.5px] bg-border"></div>
      <Skills />
      <div className="max-w-[1200px] mx-auto h-[0.5px] bg-border"></div>
      <SoftSkills />
      <div className="max-w-[1200px] mx-auto h-[0.5px] bg-border"></div>
      <Education />
      <div className="max-w-[1200px] mx-auto h-[0.5px] bg-border"></div>
      <Contact />
      <Footer />
      <BackToTop />
    </main>
  );
}

export default App;
