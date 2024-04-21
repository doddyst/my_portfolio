import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import About from './components/about/about';
import Skills from './components/skills/skills';
//import Qualification from './components/qualification/qualification';
import Work from './components/work/work';
import Contact from './components/contanct/contact';
import Footer from './components/footer/footer';

function App() {
  return (
    <>
    <Header />
    
    <main className='main'>    
    <Home />
    <About />
    <Skills />
    <Work />
    <Contact />
    <Footer />
    </main>
    </>
  );
}

export default App;
