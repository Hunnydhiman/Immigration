import React from 'react'
import slider1 from '../media/slider1.jpg'

function Banner() {
  return (
    <div className='banner' id="home" style={{backgroundImage: `url(${slider1})`}}>
      <div className='container'>
        <div className='banner__content'>
          <h1>
            <span>Provides</span>
            Service that Our Clients
            <span>Requires.</span>
          </h1>
        </div>
      </div>
    </div>
  )
}

export default Banner
