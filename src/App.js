import React, { useRef, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import MainSection from './components/MainSection';
import AboutMe from './components/AboutMe';
import Experience from './components/Experience';
import Skills from './components/Skills';
import Education from './components/Education';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import Hobby from './components/Hobby';
import Contact from './components/Contact';
import MoleEscape from './components/MyProjects/MoleEscape';
import RadarFinansowy from './components/MyProjects/RadarFinansowy';
import CarRace from './components/MyProjects/CarRace';
import './App.css';

function App() {
  const mainSectionRef = useRef(null);
  const aboutMeRef = useRef(null);
  const experienceRef = useRef(null);
  const skillsRef = useRef(null);
  const educationRef = useRef(null);
  const projectsRef = useRef(null);
  const certificatesRef = useRef(null);
  const hobbyRef = useRef(null);
  const contactRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    if (location.pathname === '/' && location.hash) {
      const element = document.getElementById(location.hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="App">
      <Header
        scrollToSection={(section) => {
          switch (section) {
            case 'about-me':
              aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
              break;
            case 'experience':
              experienceRef.current.scrollIntoView({ behavior: 'smooth' });
              break;
            case 'skills':
              skillsRef.current.scrollIntoView({ behavior: 'smooth' });
              break;
            case 'education':
              educationRef.current.scrollIntoView({ behavior: 'smooth' });
              break;
            case 'projects':
              projectsRef.current.scrollIntoView({ behavior: 'smooth' });
              break;
            case 'certificates':
              certificatesRef.current.scrollIntoView({ behavior: 'smooth' });
              break;
            case 'hobby':
              hobbyRef.current.scrollIntoView({ behavior: 'smooth' });
              break;
            case 'contact':
              contactRef.current.scrollIntoView({ behavior: 'smooth' });
              break;
            default:
              mainSectionRef.current.scrollIntoView({ behavior: 'smooth' });
          }
        }}
      />
      <Routes>
        <Route path="/" element={
          <div className="ScrollContainer">
            <section className="Section" ref={mainSectionRef}>
              <MainSection />
            </section>
            <section className="Section" ref={aboutMeRef} id="about-me">
              <AboutMe />
            </section>
            <section className="Section" ref={experienceRef} id="experience">
              <Experience />
            </section>
            <section className="Section" ref={skillsRef} id="skills">
              <Skills />
            </section>
            <section className="Section" ref={educationRef} id="education">
              <Education />
            </section>
            <section className="Section" ref={projectsRef} id="projects">
              <Projects />
            </section>
            <section className="Section" ref={certificatesRef} id="certificates">
              <Certificates />
            </section>
            <section className="Section" ref={hobbyRef} id="hobby">
              <Hobby />
            </section>
            <section className="Section" ref={contactRef} id="contact">
              <Contact />
            </section>
          </div>
        } />
        <Route path="/projekty/MoleEscape" element={<MoleEscape />} />
        <Route path="/projekty/RadarFinansowy" element={<RadarFinansowy />} />
        <Route path="/projekty/CarRace" element={<CarRace />} />
      </Routes>
    </div>
  );
}

export default App;
