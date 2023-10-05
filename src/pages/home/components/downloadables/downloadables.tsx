import React from 'react'
import logo1 from 'assets/logo1.svg'
import logo2 from 'assets/logo2.svg'
import logo3 from 'assets/logo3.svg'
import logo4 from 'assets/logo4.svg'
import logo5 from 'assets/logo5.svg'
import logo6 from 'assets/logo6.svg'
import SectionTitle from 'components/ui/sectionTitle/sectionTitle'
import './downloadables.Module.scss'

const data = [
  {
    title: 'Agrement Tehnic',
    link: '/assets/agrement-tehnic.pdf',
    icon: logo1,
  },
  { title: 'Certificat ISO', link: '/assets/certificat-iso.pdf', icon: logo2 },
  { title: 'Fisa tehnica', link: '/assets/fisa-tehnica.pdf', icon: logo3 },
  {
    title: 'Instructiuni Montare',
    link: '/assets/instructiuni-montare.mp4',
    icon: logo4,
  },
  { title: 'Detalii CAD', link: 'assets/detalii-cad.pdf', icon: logo5 },
  {
    title: 'Caiet de Sarcini',
    link: '/assets/caiet-de-sarcini.pdf',
    icon: logo6,
  },
]

export default function Downloadables() {
  return (
    <div className="downloadables">
      <div className="downloadables__container">
        <SectionTitle>Resurse Download</SectionTitle>
        <div className="downloadables__grid">
          {data.map((x) => {
            return (
              <div
                key={x.title}
                className="downloadable__item"
                onClick={() => window.open(x.link)}
              >
                <div className="downloadable__icon__container">
                  <img src={x.icon} className="downloadable__icon" />
                </div>
                <label className="downloadable__title">{x.title}</label>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
