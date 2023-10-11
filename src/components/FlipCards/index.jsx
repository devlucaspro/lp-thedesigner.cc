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
      <Card firsttext={"Being out of "} secondtext={"how you doing?"} />
      <Card firsttext={"the box is where"} secondtext={"tell us"} />
      <Card firsttext={"ideas start coming"} secondtext={"your idea"} />
      <Card firsttext={"true"} secondtext={"let's do it!"} />
    </section>
  )
}

export default FlipCards;