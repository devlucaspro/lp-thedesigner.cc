import React, { useEffect } from 'react'
import './slidertext.scss';
import gsap from 'gsap'
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const SliderText = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.from('.h1-first', {
      scrollTrigger: {
        trigger: '.h1-first',
        start: 'center 83%',
        end: 'center 30%',
        scrub: true,
      },
      opacity: 0,
      x: -14,
    })
    gsap.from('.h1-middle', {
      scrollTrigger: {
        trigger: '.h1-middle',
        start: 'center 83%',
        end: 'center 30%',
        scrub: true,
      },
      opacity: 0,
      x: 14,
    })
    gsap.from('.h1-last', {
      scrollTrigger: {
        trigger: '.h1-last',
        start: 'center 83%',
        end: 'center 30%',
        scrub: true,
      },
      opacity: 0,
      x: -14,
    })
  })

  return (
    <section className='container slider-text-container'>
      <h1 className='h1-first'>Grow your</h1>
      <h1 className='h1-middle'>Business</h1>
      <h1 className='h1-last'>Online</h1>
    </section>
  )
}

export default SliderText;