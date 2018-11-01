import React from 'react'
import { Link } from 'gatsby';

import Layout from '../components/layout';
import Landing from '../components/landing';
import CallToAction from '../components/calltoaction';
import Container from '../components/container';
import Separator from '../components/separator';
import BigTitle from '../components/bigTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, 
  faGraduationCap, 
  faInfoCircle } from '@fortawesome/free-solid-svg-icons';

import image from '../images/pokarobert.png';

const IndexPage = () => (
  <Layout>
    <Landing>
      <div>
        <h1>Moikka!</h1>
        <p style={{fontSize: '1.2em', color: 'var(--dark)'}}><strong>Tervetuloa minun sivuille!</strong></p>
        <p>Näillä sivuilla esittelen hieman minun osaamistani ja muutamia projekteja, joissa olen ollut mukana.</p>
        <Link to="/projektit">Aloita tutustuminen!</Link>
      </div>
      <div style={{textAlign: "center"}}>
        <img src={image} alt="Naamakuva"/>
      </div>
    </Landing>
    <CallToAction>
        <div>
            <span><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></span>
            <Link to="/projektit"><h3>Projektit</h3></Link>
            <p>Tutustu koulun aikana, sekä vapaa-ajalla työstämiini projektehin!</p>
        </div>
        <div>
            <span><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></span>
            <Link to="/osaamiseni"><h3>Osaamiseni</h3></Link>
            <p>Tarkastele osaamiani ohjelmointikieliä, kirjastoja, sekä kaikkea muuta!</p>
        </div>
        <div>
            <span><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></span>
            <Link to="/lisatietoja"><h3>Lisätietoja</h3></Link>
            <p>Tutustu myös minun verkostoihini ja ota yhteyttä!</p>
        </div>
    </CallToAction>
    <Container style={{paddingTop: 100, paddingBottom: 100}}>
      <article>
        <header>
          <BigTitle>
            Lyhyesti kuka olen
          </BigTitle>
        </header>
        <p>Olen Robert Kuhlmann, 24-vuotias reipas miehenalku ja opiskelen nyt neljättä ja viimeistä vuotta Karelia-ammattikorkeakoulussa tietojenkäsittelyn tradenomiksi. Olen opiskellut tutkintoni aikana pääasiassa ohjelmistokehitystä ja tarkemmin ottaen verkkosovelluskehitystä.</p>
        <p>Siitä huolimatta, että olen opintoni pääosin etänä suorittanut, olen myös toiminut opiskelija-aktiivina Karelia-ammattikorkeakoulun opiskelijakunta POKAn puheenjohtajana ja hallituksen jäsenenä opintojeni aikana. Sen lisäksi on myös kokemusta tuutoroinnista ja kaikenlaisesta oheistoiminnasta, mitä opintojen aikana on ollut.</p>
        <p>Ohjelmoinnista on tullut minulle opintojeni myötä jo erittäin merkittävä harrastus ja teen sitä jatkuvasti myös vapaa-ajalla. Koitan jatkuvasti löytää uusia teknologioita ja keksiä itselleni pääni menoksi uusia projekteja.</p>
        <p><strong>Toivon pääseväni sellaisiin työtehtäviin, missä pääsen jatkuvasti kehittämään ja haastamaan itseäni!</strong></p>
        <Separator></Separator>
      </article>
    </Container>
  </Layout>
)

export default IndexPage
