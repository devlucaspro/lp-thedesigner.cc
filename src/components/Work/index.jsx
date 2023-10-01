import React from 'react'
import './work.scss';

const Work = () => {
  return (
    <section className='container work-container'>
      <div className='work-texts'>
        <ul>
          <li><a href="#">Visual identity</a></li>
          <li><a href="#">Web design</a></li>
          <li><a href="#">Instagram posts</a></li>
          <li><a href="#">Logo</a></li>
          <li><a href="#">Blog</a></li>
        </ul>
        <a href="#" className='explore-link'>
          <span>Explore more</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path d="M7 17L17 7" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M7 7H17V17" stroke="#BEBEBE" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
      </div>
      
      <div className='work-img'>
        <img src="./assets/work-1.png" alt="Work image 1" />
      </div>
    </section>
  )
}

export default Work;