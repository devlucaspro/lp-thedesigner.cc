import React from 'react'
import './flipcards.scss';

const Card = ({ firsttext, secondtext }) => {
  return (
    <div className='card'>
      <h1>{firsttext}</h1>
      <h1 className='color-h1'>{secondtext}</h1>
    </div>
  )
}

const FlipCards = () => {
  return (
    <section className='cards-container'>
      <Card firsttext={"Being out of the box"} secondtext={"Hi, how you doing?"} />
      <Card firsttext={"is where ideas start"} secondtext={"Tell us your idea"} />
      <Card firsttext={"coming true and"} secondtext={"I can help you"} />
      <Card firsttext={"yeahhhhhh"} secondtext={"Let's do it!"} />
    </section>
  )
}

export default FlipCards;