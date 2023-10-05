import React from 'react'
import logoImage from 'assets/logo.png'
import './header.Module.scss'
import MobileMenu from './components/mobileMenu/mobileMenu'

export default function Header() {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({
      behavior: 'smooth',
    })
  }

  return (
    <div className="header">
      <div className="header__container">
        <img src={logoImage} className="header__logo" />

        <div className="header__body">
          <label
            className="header__link"
            onClick={() => scrollToSection('Home')}
          >
            Home
          </label>
          <label
            className="header__link"
            onClick={() => scrollToSection('Contact')}
          >
            Contact
          </label>
          <label
            className="header__link"
            onClick={() => scrollToSection('Produsul Nostru')}
          >
            Produsul Nostru
          </label>
        </div>
        <div className="header__mobile">
          <MobileMenu />
        </div>
      </div>
    </div>
  )
}
