import React from 'react'
import './about.scss';

const Card = ({ text, imgUrl, reverse }) => {

  return (
    <div 
      className='container about-container' 
      style={reverse ? {flexDirection: 'row-reverse'} : {flexDirection: 'row'}}
    >
      <h2>{text}</h2>
      <div>
        <img src={imgUrl} alt="Image 1 about" />
      </div>
    </div>
  )
}

const About = () => {
  return (
    <>
      <Card 
        text={"We're dedicated to elevating your digital presence through visually captivating and user-centric solutions."} 
        imgUrl={"./assets/image-about1.png"}  
      />
      <Card
        text={"We thrive on creativity, turning ideas into eye-catching designs that convey your brand's unique story and captivate your audience."}
        imgUrl={"./assets/image-about2.png"}
        reverse={true}
      />
    </>
  )
}

export default About;