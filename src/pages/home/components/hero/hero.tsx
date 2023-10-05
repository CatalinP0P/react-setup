import React from 'react'
import heroImage from 'assets/1.jpg'
import './hero.Module.scss'
import Button from 'components/ui/button/button'

export default function Hero() {
  return (
    <div className="hero__area" id="Home">
      <div
        className="hero__image"
        style={{ backgroundImage: `url("${heroImage}")` }}
      />

      <div className="hero__image__gradient" />
      <div className="hero__container">
        <div className="hero__body">
          <label className="hero__title">Robofix Concept</label>
          <label className="hero__text">
            Lideri in productia si comercializarea stâlpilor metalici
            anti-parcare pentru delimitarea zonelor de trafic pietonal si
            interzicerea circulatiei autovehiculelor.
          </label>

          <div className="hero__button">
            <Button
              size="large"
              onClick={() => {
                document
                  .getElementById('Contact')
                  ?.scrollIntoView({ behavior: 'smooth' })
              }}
            >
              Conteacteaza-ne
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
