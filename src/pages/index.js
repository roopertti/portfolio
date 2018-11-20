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
        <h1>Hi!</h1>
        <p style={{fontSize: '1.2em', color: 'var(--dark)'}}><strong>Welcome to my page!</strong></p>
        <p>On this site I will be introducing some of my knowledge and projects I've been developing.</p>
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
            <p>See the school projects, work projects and my own projects as well!</p>
        </div>
        <div>
            <span><FontAwesomeIcon icon={faGraduationCap}></FontAwesomeIcon></span>
            <Link to="/knowledge"><h3>Knowledge</h3></Link>
            <p>Check out programming languages, libraries and tools I am familar with!</p>
        </div>
        <div>
            <span><FontAwesomeIcon icon={faInfoCircle}></FontAwesomeIcon></span>
            <Link to="/lisatietoja"><h3>More about me</h3></Link>
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
        <p>My name is Robert Kuhlmann and I'm a 24 years old. I'm currently studying my fourth and last year as Bachelor of Business Administration and Information Technology at Karelia UAS. I have mostly studed web development and software development.</p>
        <p>I have studied my whole degree as distance studies but at the same time I have been actively involved in our student union's board as a chairperson and as a member as well.</p>
        <p>Programming has become somewhat of a passion to me during my studies. I constantly study programming during my free time and I'm pretty sure I will never get bored if it.</p>
        <p><strong>I wish to get a job where I can constanlty learn new things and challenge myself!</strong></p>
        <Separator></Separator>
      </article>
    </Container>
  </Layout>
)

export default IndexPage
