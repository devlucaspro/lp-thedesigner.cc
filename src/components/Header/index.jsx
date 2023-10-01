import React from 'react'
import './header.scss';

const Header = () => {
  return (
    <div className='header-fixed'>
      <header className='container'>
        <h1>The Designer.cc</h1>
        <nav>
          <ul>
            <li><a href="#">About us</a></li>
            <li><a href="#">Work</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
        <a href="#">
          <img src="./assets/icon-header.png" alt="*" />
          <h3>Connect with us</h3>
          <p>Let's create together</p>
        </a>
      </header>
    </div>
  )
}

export default Header;