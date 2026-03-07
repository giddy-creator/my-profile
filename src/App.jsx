import { useState } from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Projects from './components/projects.jsx';
import Footer from './components/Footer.jsx';
function App() {
  return ( 
    <div>
      <Header />
      <Hero />
      <About />
      <Projects />
      <Footer />
    </div>
  );
}
export default App
