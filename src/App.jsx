import React from 'react';
import './app.scss';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import SliderText from './components/SliderText';
import Slider from './components/Slider';
import Work from './components/Work';
import FlipCards from './components/FlipCards';
import Contact from './components/Contact';
import Footer from './components/Footer';


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <SliderText />
      <Slider />
      <Work />
      <FlipCards />
      <Contact />
      <Footer />
    </>
  )
}

export default App;