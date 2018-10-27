import React from 'react'
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faProjectDiagram, 
  faGraduationCap, 
  faInfoCircle, 
  faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Layout from '../components/layout';
import Landing from '../components/landing';
import CallToAction from '../components/calltoaction';
import Container from '../components/container';
import Footer from '../components/footer';

import image from '../images/pokarobert.png';

const IndexPage = () => (
  <Layout>
    <Landing>
      <div>
        <h1>Moikka!</h1>
        <p style={{fontSize: '1.2em', color: 'var(--dark)'}}><strong>Tervetuloa miun sivuille!</strong></p>
        <p>Näillä sivuilla pääsee hieman "ihastelemaan" minun osaamistani ja muutamia projekteja, joissa olen ollut mukana.</p>
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
            <Link to="/"><h3>Osaamiseni</h3></Link>
            <p>Tarkastele osaamiani ohjelmointikieliä, kirjastoja, sekä kaikkea muuta!</p>
        </div>
        <div>
            <span><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></span>
            <Link to="/"><h3>Lisätietoja</h3></Link>
            <p>Tutustu myös minun verkostoihini ja ota yhteyttä!</p>
        </div>
    </CallToAction>
    <Container style={{paddingTop: 100, paddingBottom: 100}}>
      <article>
        <header>
          <h1 style={{fontSize: '2.8em', color: 'var(--primary)'}}>
            Lyhyesti kuka mie oon
          </h1>
        </header>
        <p>Olen Robert Kuhlmann, 24-vuotias reipas miehenalku ja opiskelen nyt neljättä ja viimeistä vuotta Karelia-ammattikorkeakoulussa tietojenkäsittelyn tradenomiksi. Olen opiskellut tutkintoni aikana pääasiassa ohjelmistokehitystä ja tarkemmin ottaen verkkosovelluskehitystä.</p>
        <p>Siitä huolimatta, että olen opintoni pääosin etänä suorittanut, olen myös toiminut opiskelija-aktiivina Karelia-ammattikorkeakoulun opiskelijakunta POKAn puheenjohtajana ja hallituksen jäsenenä opintojeni aikana. Sen lisäksi on myös kokemusta tuutoroinnista ja kaikenlaisesta oheistoiminnasta, mitä opintojen aikana on ollut.</p>
        <p>Ohjelmoinnista on tullut minulle opintojeni myötä jo erittäin merkittävä harrastus ja teen sitä jatkuvasti myös vapaa-ajalla. Koitan jatkuvasti löytää uusia teknologioita ja keksiä itselleni pääni menoksi uusia projekteja.</p>
        <p><strong>Toivon pääseväni sellaisiin työtehtäviin, missä pääsen jatkuvasti kehittämään ja haastamaan itseäni!</strong></p>
      </article>
    </Container>
    <Footer>
      <div>
        <h3>Yhteystiedot</h3>
        <a href="mailto:robert-kuhlmann@outlook.com">
          <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
        </a>
        <a href="https://www.instagram.com/kuuuulman/" target="_blank">
          <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
        </a>
        <a href="https://www.linkedin.com/in/robert-kuhlmann/" target="_blank">
          <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
        </a>
      </div>
      <div>
        <h3>Navigointi</h3>
        <ul>
          <li><Link to="/">Projektit</Link></li>
          <li><Link to="/">Osaamiseni</Link></li>
          <li><Link to="/">Lisätietoja</Link></li>
        </ul>
      </div>
    </Footer>
    <div style={{
      backgroundColor: 'var(--dark)',
      color: 'white',
      textAlign: 'center',
      padding: '10px 20px'}}>
      <p>Robert Kuhlmann 2018</p>
    </div>
  </Layout>
)

export default IndexPage
