import React from 'react'
import logoImage from 'assets/logo.png'
import './footer.Module.scss'

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer__container">
        <img src={logoImage} className="footer__logo" />
        <div className="footer__item footer__item--right">
          <label className="footer__item__title">Quick Links</label>
          <div className="footer__item__body">
            <label className="footer__item__link">Home</label>
            <label className="footer__item__link">Contact</label>
            <label className="footer__item__link">Produsul Nostru</label>
            <label className="footer__item__link">Privacy Policy</label>
            <label className="footer__item__link">GDPR</label>
          </div>
        </div>
        <label className="footer__copyright">© All rights reserved</label>
      </div>
    </div>
  )
}
