import React, { useState } from 'react'
import '../styles/Header.css'
import logo from '../assets/logo.png'

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const toggleMenu = () => setMenuOpen(!menuOpen)
  const closeMenu = () => setMenuOpen(false)

  return (
    <div className='Header'>
      {/* Hamburger - left side, only visible on mobile */}
      <button 
        className={`hamburger ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Toggle navigation menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Logo - perfectly centered */}
      <div className='Outer_logo'>
        <div className='logo'>
          <img src={logo} alt="Logo" />
        </div>
      </div>
      
      {/* Desktop Navigation */}
      <nav className='nav desktop-nav'>
        <a href='#Home'>Home</a>
        <a href='#About'>About</a>
        <a href='#Skills'>Skills</a>
        <a href='#EducationExperience'>Experience</a>
        <a href='#projects'>Projects</a>
        <a href='#contact'>Contact</a>
      </nav>
      <div className={`mobile-nav ${menuOpen ? 'open' : ''}`}>
        <a href='#Home' onClick={closeMenu}>Home</a>
        <a href='#About' onClick={closeMenu}>About</a>
        <a href='#Skills' onClick={closeMenu}>Skills</a>
        <a href='#EducationExperience' onClick={closeMenu}>Experience</a>
        <a href='#projects' onClick={closeMenu}>Projects</a>
        <a href='#contact' onClick={closeMenu}>Contact</a>
      </div>
    </div>
  )
}

export default Header