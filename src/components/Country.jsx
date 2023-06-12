import React from 'react'
import c1 from '../media/c1.jpg'
import c2 from '../media/c2.jpg'
import c3 from '../media/c3.jpg'

function Country() {

    const countryData = [
        {
            image: c1,
            title: "Canada",
        },
        {
            image: c2,
            title: "Australia",
        },
        {
            image: c3,
            title: "England",
        },
    ]

  return (
    <div className='container' id="country">
        <div className='section'>
        <div className='section__head'>
            <h3>Countries We Support <br /> for Immigration.</h3>
        </div>
        <div className='section__body country-wrapper'>
            {
                countryData.map((item) =>
                    <div className='country-card'>
                        <div className='country-card__media'>
                            <img src={item.image} />
                        </div>
                        <div className='country-card__content'>
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

export default Country
