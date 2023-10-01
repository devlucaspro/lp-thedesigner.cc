import React from 'react';
import './contact.scss';

const Contact = () => {
  return (
    <section className='contact-container'>
      <div className="img-contact">
        <div>
          <h1 className="contact-h1">let's do it together</h1>
          <h1 className="contact-h1 h1-1">Don't be afraid</h1>  
        </div>
      </div>

      <div className='contact-texts'>
        <div className='texts'>
          <h3>Get in touch</h3>
          <p>
            Ready to transform your ideas into stunning designs? We're here to make it happen. Reach out to us today, and let's start crafting unforgettable experiences together.
          </p>
        </div>

        <div className='icons'>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <path d="M50.32 6.87988H20.72C12.5462 6.87988 5.91998 13.5061 5.91998 21.6799V51.2799C5.91998 59.4537 12.5462 66.0799 20.72 66.0799H50.32C58.4938 66.0799 65.12 59.4537 65.12 51.2799V21.6799C65.12 13.5061 58.4938 6.87988 50.32 6.87988Z" stroke="#F7F3EB" stroke-width="5.92" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M47.36 34.6145C47.7253 37.078 47.3045 39.5939 46.1575 41.8044C45.0105 44.0149 43.1957 45.8075 40.9712 46.9271C38.7467 48.0468 36.2258 48.4365 33.767 48.0409C31.3083 47.6452 29.0369 46.4844 27.2759 44.7234C25.5149 42.9624 24.3541 40.691 23.9584 38.2323C23.5628 35.7735 23.9525 33.2526 25.0721 31.0281C26.1918 28.8036 27.9844 26.9888 30.1949 25.8418C32.4054 24.6948 34.9213 24.274 37.3848 24.6393C39.8976 25.0119 42.2239 26.1828 44.0202 27.9791C45.8164 29.7754 46.9874 32.1017 47.36 34.6145Z" stroke="#F7F3EB" stroke-width="5.92" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M51.8 20.2002H51.8288" stroke="#F7F3EB" stroke-width="5.92" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="72" height="72" viewBox="0 0 72 72" fill="none">
              <path d="M11.88 12.7998H59.24C62.496 12.7998 65.16 15.4638 65.16 18.7198V54.2398C65.16 57.4958 62.496 60.1598 59.24 60.1598H11.88C8.62404 60.1598 5.96004 57.4958 5.96004 54.2398V18.7198C5.96004 15.4638 8.62404 12.7998 11.88 12.7998Z" stroke="#F7F3EB" stroke-width="5.92" stroke-linecap="round" stroke-linejoin="round"/>
              <path d="M65.16 18.7202L35.56 39.4402L5.96004 18.7202" stroke="#F7F3EB" stroke-width="5.92" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </a>
          <a href="#">
            <svg xmlns="http://www.w3.org/2000/svg" width="75" height="74" viewBox="0 0 75 74" fill="none">
              <g clip-path="url(#clip0_10_23)">
                <path d="M29.8856 34.5851C33.971 32.6324 36.1037 29.6775 36.1037 25.0782C36.1037 16.0081 29.346 13.7983 21.5478 13.7983H0.0800476V59.3289H22.1516C30.4252 59.3289 38.1978 55.3591 38.1978 46.1091C38.1978 40.3921 35.487 36.1654 29.8856 34.5851ZM10.088 21.5709H19.4794C23.0894 21.5709 26.3398 22.5858 26.3398 26.774C26.3398 30.641 23.8089 32.1956 20.2373 32.1956H10.088V21.5709ZM20.7898 51.5949H10.088V39.056H20.9953C25.4019 39.056 28.1898 40.8931 28.1898 45.5567C28.1898 50.156 24.8623 51.5949 20.7898 51.5949ZM66.8471 20.6716H48.3856V16.1879H66.8471V20.6716ZM74.08 43.3213C74.08 33.5702 68.3759 25.4379 58.0339 25.4379C47.9873 25.4379 41.1655 32.9921 41.1655 42.8845C41.1655 53.1494 47.6276 60.1897 58.0339 60.1897C65.9092 60.1897 71.0096 56.6438 73.4634 49.1025H65.4724C64.6116 51.916 61.0658 53.4063 58.3165 53.4063C53.0106 53.4063 50.2228 50.2973 50.2228 45.0171H74.003C74.0415 44.4775 74.08 43.8994 74.08 43.3213ZM50.2356 39.3129C50.5311 34.9834 53.4089 32.2726 57.7512 32.2726C62.2991 32.2726 64.586 34.9449 64.9714 39.3129H50.2356Z" fill="#F7F3EB"/>
              </g>
              <defs>
                <clipPath id="clip0_10_23">
                  <rect width="74" height="74" fill="white" transform="translate(0.0800171)"/>
                </clipPath>
              </defs>
            </svg>
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact;