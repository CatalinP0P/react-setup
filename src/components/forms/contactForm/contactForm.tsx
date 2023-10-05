import React from 'react'
import FormInput from '../formInput/formInput'
import FormTextArea from '../formTextArea/formTextArea'
import Button from 'components/ui/button/button'
import './contactForm.Module.scss'

export default function ContactForm() {
  return (
    <div className="contact__form">
      <div className="contact__row--2">
        <FormInput title="Nume" />
        <FormInput title="Prenume" />
      </div>
      <div className="contact__row--2">
        <FormInput title="Email" />
        <FormInput title="Numar telefon" />
      </div>
      <FormTextArea title="Detalii" />
      <div className="contact__button">
        <Button size="large">Trimite</Button>
      </div>
    </div>
  )
}
