import React, { useState, useEffect } from 'react';
import service from '../media/550x550.jpg';
import service1 from '../media/550x550-1.jpg';
import service2 from '../media/550x550-2.jpg';
import service3 from '../media/550x550-3.jpg';

function Services() {

  const serviceData = [
    {
      image: service,
      title: 'Study Visa',
    },
    {
      image: service1,
      title: 'Family Visa',
    },
    {
      image: service2,
      title: 'Tourist Visa',
    },
    {
      image: service3,
      title: 'Business Visa',
    }
  ]

  return (
    <div className='section bg-gray' id="service">
        <div className='container '>
          <div className='section__head'>
              <h3>Outstanding Immigration <br /> Visa Services.</h3>
          </div>
          <div className='section__body services-wrapper'>
              {
                serviceData.map((item) => 
                  <div className='services-card'>
                    <div className='services-card__media'>
                      <img src={item.image} />
                    </div>
                    <div className='services-card__content'>
                      <h4>{item.title}</h4>
                    </div>
                  </div>
                )
              }
          </div>
        </div>
    </div>
  )
}

export default Services
