import React, { TextareaHTMLAttributes } from 'react'
import './formTextArea.Module.scss'

interface FormTextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  title: string
}

export default function FormTextArea({
  title,
  className,
  ...otherProps
}: FormTextAreaProps) {
  return (
    <div className="form__textarea__container">
      {title && <label className="form__textarea__title">{title}</label>}
      <textarea className={`form__textarea ${className}`} {...otherProps} />
    </div>
  )
}
