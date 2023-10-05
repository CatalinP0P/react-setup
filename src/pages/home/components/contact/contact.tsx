import React from 'react'
import contactImage from 'assets/contact.svg'
import ContactForm from 'components/forms/contactForm/contactForm'
import './contact.Module.scss'
import SectionTitle from 'components/ui/sectionTitle/sectionTitle'

export default function Contact() {
  return (
    <div className="contact" id="Contact">
      <div className="contact__container">
        <div className="contact__header">
          <SectionTitle>Contact</SectionTitle>
          <a className="contact__phone" href="tel:+0733629433" type="phone">
            Suna la <span>(0733) 629 433</span>
          </a>
        </div>
        <div className="contact__body">
          <div className="contact__body__form">
            <ContactForm />
          </div>
          <img src={contactImage} className="contact__image" />
        </div>
      </div>
    </div>
  )
}
