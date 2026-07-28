import React from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  return (
    <div className='Header' >
    <div className='Outer_logo'>
    <div className='logo'>
      <img src={logo}/>
    </div>
    </div>
    
      <div className='nav'>
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Skills'>Skills</a>
        <a href='#EducationExperience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
    </div>

    </div>
  )
}

export default Header