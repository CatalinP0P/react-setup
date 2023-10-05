import React from 'react'
import './location.Module.scss'
import SectionTitle from 'components/ui/sectionTitle/sectionTitle'

export default function Location() {
  return (
    <div className="location">
      <div className="location__container">
        <div className="location__header">
          <SectionTitle>Locatie</SectionTitle>
          <label className="location__text">
            Nu mai sta pe ganduri, hai sa ne cunoastem!
          </label>
        </div>
        <iframe
          className="location__map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2847.069542165996!2d26.046311577519884!3d44.47274727107505!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b202329b22dbf1%3A0xf6ef8ed93d3ed0c2!2sStrada%20Soveja%2C%20Bucure%C8%99ti!5e0!3m2!1sro!2sro!4v1696450933503!5m2!1sro!2sro"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  )
}
