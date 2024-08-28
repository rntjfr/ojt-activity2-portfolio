import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Certifications from './components/Certifications';


function App() {
  return (
    <div className="bg-gradient-to-br from-slate-900 via-gray-950 to-zinc-950 min-h-screen text-white">
      <Header />
      <Hero />
      <About />
      <Projects />
      <Certifications />
      <Contact />
    </div>
  );
}

export default App;
