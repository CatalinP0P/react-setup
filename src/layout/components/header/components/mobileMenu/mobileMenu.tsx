import Hamburger from 'hamburger-react'
import React, { useEffect, useState } from 'react'
import './mobileMenu.Module.scss'

export default function MobileMenu() {
  const [visibility, setVisibility] = useState(false)
  const [selectedLink, setSelectedLink] = useState('')

  const links = [
    { title: 'Home' },
    { title: 'Contact' },
    { title: 'Produsul Nostru' },
  ]

  useEffect(() => {
    if (visibility) document.body.classList.add('no-scroll')
    else {
      document.body.classList.remove('no-scroll')
    }
  }, [visibility])

  return (
    <>
      <div className="mobile__menu__button">
        <Hamburger toggle={setVisibility} toggled={visibility} />
      </div>
      <div
        className={`mobile__menu ${visibility ? 'mobile__menu--visible' : ''}`}
      >
        {links.map((link) => {
          return (
            <label
              key={link.title}
              onClick={() => {
                setSelectedLink(link.title)
                setTimeout(() => {
                  setVisibility(false)
                  setTimeout(() => {
                    document
                      .getElementById(link.title)
                      ?.scrollIntoView({ behavior: 'smooth' })
                  }, 50)
                  setSelectedLink('')
                }, 250)
              }}
              className={`mobile__menu__link ${
                visibility ? 'mobile__menu__link--visible' : ''
              } ${
                selectedLink == link.title ? 'mobile__menu__link--active' : ''
              }`}
            >
              {link.title}
            </label>
          )
        })}
      </div>
    </>
  )
}
