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
        <h1>Hello there!</h1>
        <p style={{fontSize: '1.2em', color: 'var(--dark)'}}><strong>Welcome to my portfolio page!</strong></p>
        <p>On this site I will be introducing my skills through different projects and knowledge I have gained during my studies.</p>
        <Link to="/projects">Get started!</Link>
      </div>
      <div style={{textAlign: "center"}}>
        <img src={image} alt="Face image"/>
      </div>
    </Landing>
    <CallToAction>
        <div>
            <span><FontAwesomeIcon icon={faProjectDiagram}></FontAwesomeIcon></span>
            <Link to="/projects"><h3>Projects</h3></Link>
            <p>See some of the projects I've made and gain some insight on my expertise!</p>
        </div>
        <div>
            <span><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></span>
            <Link to="/knowledge"><h3>Knowledge</h3></Link>
            <p>Check out the programming languages, libraries and tools I am familar with!</p>
        </div>
        <div>
            <span><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></span>
            <Link to="/more-about-me"><h3>More about me</h3></Link>
            <p>My education, work experience and positions of trust can be seen here!</p>
        </div>
    </CallToAction>
    <Container style={{paddingTop: 100, paddingBottom: 100}}>
      <article>
        <header>
          <BigTitle>
            Who am I?
          </BigTitle>
        </header>
        <p>My name is Robert Kuhlmann and I'm a 26-year-old software/web developer from Joensuu, Finland! I'm currently working as a Software Developer at Valamis.</p>
        <p>Programming is not just a job for me - it is a passion and a precious hobby which helps me to express my creativity.</p>
        <p><strong>Feel free to look around!</strong></p>
        <Separator></Separator>
      </article>
    </Container>
  </Layout>
)

export default IndexPage
