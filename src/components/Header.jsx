import React, { useState } from 'react'
import {BrowserRouter} from 'react-router-dom'
import { HashLink as Link } from 'react-router-hash-link';
import { BiPhoneCall } from "react-icons/bi";

function Header() {

    const [headerColor, setHeaderColor] = useState(false)
    const changeHeaderColor = () => {
        if(window.scrollY >= 30) {
            setHeaderColor(true)
        }else {
            setHeaderColor(false)
        }
    }
    window.addEventListener('scroll', changeHeaderColor);

  return (
    <div className={headerColor ? 'header header-active' : 'header'}>
        <div className='container'>
            <div className='header-wrapper'>
                <div className='header-wrapper__left'>
                    <div className='logo'>
                        <h1>LOGO</h1>
                    </div>
                    <div className='header-nav'>
                        <BrowserRouter>
                            <Link smooth to="#home">Home</Link>
                            <Link smooth to="#about">About</Link>
                            <Link smooth to="#service">Visa</Link>
                            <Link smooth to="#country">Country</Link>
                            <Link smooth to="#contact">Contact</Link>
                        </BrowserRouter>
                    </div>
                </div>
                <div className='header-wrapper__right'>
                    <div className='contact-info'>
                        <BiPhoneCall />
                        <span>+(91) 977-8753-765</span>
                    </div>
                    <BrowserRouter>
                        <Link smooth to="#contact" className='btn btn-book'>Book Appointment</Link>
                    </BrowserRouter>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header;
