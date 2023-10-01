import React from 'react';
import './app.scss';
import Header from './components/Header'
import Main from './components/Main'
import About from './components/About'
import SliderText from './components/SliderText';
import Slider from './components/Slider';


const App = () => {
  return (
    <>
      <Header />
      <Main />
      <About />
      <SliderText />
      <Slider />
    </>
  )
}

export default App;