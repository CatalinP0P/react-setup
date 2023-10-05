import React from 'react'
import image from 'assets/3.png'
import image2 from 'assets/2.jpg'
import SectionTitle from 'components/ui/sectionTitle/sectionTitle'
import SectionSubtitle from 'components/ui/sectionSubtitle/sectionSubtitle'
import './ourProduct.Module.scss'
import icon1 from 'assets/icon1.svg'
import icon2 from 'assets/icon2.svg'
import icon3 from 'assets/icon3.svg'
import icon4 from 'assets/icon4.svg'
import icon5 from 'assets/icon5.svg'
import icon6 from 'assets/icon6.svg'

const mountingData = [
  {
    title: 'Montare de sine statator',
    text: 'Prin utilizarea unor dibluri metalice sau din PVC, dispozitive de prindere de tip con-expand sau alte tipuri de prindere mecanica direct de suport - trotuar, platforma, pardoseala etc.',
  },
  {
    title:
      'Montare la partea superioara a bordurilor utilizand piesa de baza tip I',
    text: 'Aceasta piesa se inglobeaza in straturile din beton si beton asfaltic ale trotuarului sau aleii, fara a afecta integritatea bordurilor. Prinderea stalpului de piesa de baza se face prin intermediul unor piulite M12.',
  },
  {
    title:
      'Montare la partea superioara a bordurilor sau adiacent acestora utilizand piesa de baza tip II',
    text: 'Aceasta piesa se monteaza prin introducerea si fixarea chimica ( ancore chimice, mortar de ciment sau alte solutii ) a celor doua bare striate in doua perforatii executate in structura trotuarului, aleii, platformei etc., fata a afecta integritatea bordurilor. Prinderea stalpului de piesa de baza se face prin intermediul piulitelor M12 livrate in pachet.',
  },
]

const aplicationsData = [
  {
    title: '1. Trotuare si alei',
    text: 'Protejam spatiile pitonale de nedoritele intruziuni ale vehiculelor, promovand siguranta pitonilor',
    icon: icon1,
  },
  {
    title: '2. Parcuri si zone pietonale',
    text: 'Facem ca spatiile de recreere si relaxare sa ramana nealterate de traficul auto.',
    icon: icon2,
  },

  {
    title: '3. Zone cu access auto restrictionat',
    text: 'Contribuim la mentinerea autenticitatii in zonele cu valioare istorica & rezidentiale',
    icon: icon3,
  },
  {
    title: '4. Locuri de joaca',
    text: 'Asiguram copiilor un mediu de joaca sigur, izolat de vehicule.',
    icon: icon4,
  },
  {
    title: '5. Zone comerciale',
    text: 'Imbunatatim gestionarea traficului si siguranta in saptuiile comerciale si industriale.',
    icon: icon5,
  },
  {
    title: '6. Parcari si garaje',
    text: 'Limitam accesul neautorizat la parcari si garaje, asigurant un control mai bun la utilizarii acestor spatii.',
    icon: icon6,
  },
]

export default function OurProduct() {
  return (
    <div className="our__product" id="Produsul Nostru">
      <div className="our__product__container">
        <SectionTitle>Produsul Nostru</SectionTitle>
        <div className="product__section__grid">
          <div className="our__product__image__container">
            <div className="our__product__image__background" />
            <img src={image} className="our__product__image" />
          </div>

          <div className="our__product__body">
            <div className="our__product__title">
              <SectionSubtitle>Despre Produs</SectionSubtitle>
            </div>

            <div className="our__product__text__container">
              <p>
                Produsele noastre sunt confectionate cu cea mai mare atentie la
                detalii si cu materiale de cea mai înaltà calitate. Stâlpul
                metalic anti-parcare Robofix produs de noi este o confectie
                metalicà complexa.
              </p>
              <p>
                Un aspect esential al produsului nostru este zincarea termicà,
                care, pe lângà vopsirea electrostatica, oferà o protectie
                excelentà împotriva rugini, în special în conditii de utilizare
                la exterior in zone cu trafic auto. Aceastà caracteristicà
                asigurà durabilitate si longevitate produsului Robofix,
                fâcându-l o solutie de încredere pentru proiectele
                dumneavoastrà.
              </p>
              <p>
                Este important de mentionat cà Robofix este singurul produs ce
                pate fi montat la partea superioarà a bordurilor farà a necesita
                gaurire sau a afecta integritatea acestora, in acest sens
                existând înregistrat la OSIM un brevet de model de utilitate.
              </p>
              <p>
                Produsul nostru ofera versatilitatea si poate fi montat atat la
                interior cat si la exterior cu scopul limitarii accesului
                vehiculelor.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="applications__container">
        <div className="product__section__grid">
          <div className="our__product__body">
            <SectionSubtitle>Aplicatii</SectionSubtitle>
            <div className="product__applications__grid">
              {aplicationsData.map((application) => {
                return (
                  <div key={application.text} className="application__item">
                    <div
                      className="application__image"
                      style={{ backgroundImage: `url("${application.icon}")` }}
                    />
                    <div className="application__text__container">
                      <label className="application__title">
                        {application.title}
                      </label>
                      <label className="application__text">
                        {application.text}
                      </label>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
          <div
            className="product__section__image"
            style={{ backgroundImage: `url("${image2}")` }}
          ></div>
        </div>
      </div>

      <div className="mounting__container">
        <div className="section__header">
          <SectionSubtitle>Moduri de Montare</SectionSubtitle>
          <label>
            Exista 3 modalitati distincte de montare pentru cerintele fiecarui
            client
          </label>
        </div>

        <div className="product__mounting__grid">
          {mountingData.map((data) => {
            return (
              <div className="mounting__item" key={data.title}>
                <label className="mounting__title">{data.title}</label>
                <label className="mounting__text">{data.text}</label>
              </div>
            )
          })}
        </div>
        <label className="section__footer">
          Este important sa mentionam ca produsele noastre respecta in
          totalitate <b>Nomrmativul NP 051 / 2012</b> privind adaptarea
          cladirilor civile in spatiul urban la nevoile individuale ale
          persoanlor cu handicap, si sunt agrementate tehnic de Consiliul Tehnic
          Permanent pentru Constructii.
        </label>
      </div>
    </div>
  )
}
