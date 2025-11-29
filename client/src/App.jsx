import React from 'react';
import Hero from './components/Hero';
import Services from './components/Services';
import Projects from './components/Projects';
import TechStack from './components/TechStack';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Section from './components/Section';
import Button from './components/Button';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary text-text font-sans selection:bg-accent selection:text-primary">
      {/* Navigation Bar (Simple for now) */}
      <nav className="fixed top-0 left-0 w-full bg-primary/80 backdrop-blur-md z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <span className="text-xl font-bold text-accent">BG.</span>
          <div className="hidden md:flex space-x-8">
            <a href="#hero" className="text-text-muted hover:text-accent transition-colors">Home</a>
            <a href="#about" className="text-text-muted hover:text-accent transition-colors">About</a>
            <a href="#services" className="text-text-muted hover:text-accent transition-colors">Services</a>
            <a href="#tech-stack" className="text-text-muted hover:text-accent transition-colors">Tech Stack</a>
            <a href="#projects" className="text-text-muted hover:text-accent transition-colors">Projects</a>
            <a href="#contact" className="text-text-muted hover:text-accent transition-colors">Contact</a>
          </div>
          <Button variant="primary" className="md:hidden !px-4 !py-2 text-sm">Menu</Button>
        </div>
      </nav>

      <main>
        <Hero />

        <About />
        <Services />
        <TechStack />
        <Projects />
        <Testimonials />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
