import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/NoImage.png'

const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5>Hello my name is...</h5>
        <h1>Jared Cameron</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA />

        <div className='me'>
          <img src={ME} alt='me' />
        </div>

        <a href="#contact" className='scroll__down'>Scroll Down</a>
      </div>
    </header>
    
  )
}

export default Header