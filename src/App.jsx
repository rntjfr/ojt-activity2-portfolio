import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="bg-gray-950 min-h-screen text-white">
      <Header />
      <main> {/* Added padding top to account for fixed header */}
        <section id="hero" className="py-10">
          <Hero />
        </section>
        <section id="about" className="py-10">
          <About />
        </section>
        <section id="projects" className="py-10">
          <Projects />
        </section>
        <section className="py-20"></section>
        <section id="certifications" className="py-10">
          <Certifications />
        </section>
        <section id="contact" className="py-10">
          <Contact />
        </section>
      </main>
    </div>
  );
}

export default App;
