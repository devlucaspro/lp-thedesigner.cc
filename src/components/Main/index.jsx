import React, { useEffect } from 'react'
import './main.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';

const Main = () => {

  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {

    gsap.from('.h1-tag', {
      opacity: 0,
      y: -5,
      stagger: .2,
    })
    gsap.from('.scroll-icon', {
      scrollTrigger: {
        trigger: '.scroll-icon',
        start: 'center 87%',
        end: 'bottom 70%',
        scrub: true,
      },
      x: 50,
    })

    gsap.from('.scroll-text', {
      scrollTrigger: {
        trigger: '.scroll-text',
        start: 'center 87%',
        end: 'bottom 70%',
        scrub: true,
      },
      opacity: 0,
    })
  }, [])

  return (
    <main className='container'>
      <section className='cta-img'>
        <img className='icon-rotate' src="./assets/icon cta 1-mobile.png" alt="Icon" />
        <img className='img-hidden-mobile' src="./assets/Image cta 1.png" alt="icon" />
      </section>

      <section className='cta'>
        <img className='gradient' src="./assets/gradient.png" alt="Gradient background" />

        <div className='h1-div'>
          <h1 className='h1-tag'>The art</h1>
          <h1 className='h1-tag'>inspired</h1>
          <h1 className='h1-tag'>by your</h1>
          <h1 className='h1-tag'>story</h1>
        </div>

        <a className='btn' href='#'>Meet us</a>
        <div className='scroll-div'>
          <a className='scroll-icon' href="#"><img src="./assets/mouse icon.png" alt="Scroll down icon" width={29} /></a>
          <p className='scroll-text'>Scroll down</p>
        </div>

      </section>

      <section className='cta-img cta-img-position'>
        <img className='img-hidden-mobile' src="./assets/Image cta 2.png" alt="icon" />
        <img src="./assets/icon cta 2.png" alt="icon" />
      </section>

      <img className='i-mobile i-mobile1' src="./assets/icon cta 1-mobile.png" alt="Icon" />
      <img className='i-mobile i-mobile2' src="./assets/icon cta 2.png" alt="Icon" />

    </main>
  )
}

export default Main;