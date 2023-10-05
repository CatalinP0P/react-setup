import React from 'react'
import Hero from './components/hero/hero'
import OurProduct from './components/ourProduct/ourProduct'
import Downloadables from './components/downloadables/downloadables'
import Location from './components/location/location'
import Contact from './components/contact/contact'

export default function Home() {
  return (
    <div>
      <Hero />
      <OurProduct />
      <Downloadables />
      <Contact />
      <Location />
    </div>
  )
}
