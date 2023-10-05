import React from 'react'
import Header from './components/header/header'
import './layout.Module.scss'
import Footer from './components/footer/footer'

interface LayoutProps {
  children?: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout__container">
      <Header />
      <div className="layout__body">{children}</div>
      <Footer />
    </div>
  )
}
