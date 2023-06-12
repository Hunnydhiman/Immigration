import React from 'react'
import a1 from '../media/a1.jpg';
import shape from '../media/shape.png';
import profile from '../media/150x150.jpg';
import {BsFillCheckCircleFill} from 'react-icons/bs'

function About() {
  return (
    <div className='section section-about' id="about" style={{backgroundImage: `URL(${shape})`}}>
      <div className='container'>
        <div className='section-about__media'>
          <img src={a1} />
        </div>
        <div className='section-about__content'>
          <div className='section__head'>
              <h3>Welcome to immigration <br /> Advisory services.</h3>
          </div>
          <div className='section__body'>
            <p>There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly. There are many variations of passages of available but the majority have suffered alteration in some form, by injected hum randomised words which don't slightly.</p>
            <ul className='feature-list'>
              <li>
                <span> <BsFillCheckCircleFill/> Accurate Guidance</span>
              </li>
              <li>
                <span> <BsFillCheckCircleFill/> Visa Consultation</span>
              </li>
            </ul>
            <div className='profile-card'>
              <div className='profile-card__media'>
                <img src={profile} />
              </div>
              <div className='profile-card__content'>
                <h3>Andrew James</h3>
                <span>CEO & Founder</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
