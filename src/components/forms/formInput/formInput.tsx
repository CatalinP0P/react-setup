import React, { InputHTMLAttributes } from 'react'
import './formInput.Module.scss'

interface FormInput extends InputHTMLAttributes<HTMLInputElement> {
  title?: string
}

export default function FormInput({
  title,
  className,
  ...otherProps
}: FormInput) {
  return (
    <div className="form__input__container">
      {title && <label className="form__input__title">{title}</label>}
      <input className={`form__input ${className}`} {...otherProps}></input>
    </div>
  )
}
