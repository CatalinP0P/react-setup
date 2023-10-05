import React, { ButtonHTMLAttributes } from 'react'
import './button.Module.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode
  size?: 'small' | 'medium' | 'large'
}

export default function Button({
  children,
  className = '',
  size = 'medium',
  ...otherProps
}: ButtonProps) {
  return (
    <button className={`button button-${size} ${className}`} {...otherProps}>
      {children}
    </button>
  )
}
