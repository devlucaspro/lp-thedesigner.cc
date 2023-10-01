import React from 'react'
import './flipcards.scss';

const Card = () => {
  return (
    <div className='card'>
      <h1>Being out of the box</h1>
      <h1>Hi, how you doing?</h1>
    </div>
  )
}

const FlipCards = () => {
  return (
    <section className='cards-container'>
      {/* <Card /> */}
    </section>
  )
}

export default FlipCards;