import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import BigTitle from '../components/bigTitle';
import Container from '../components/container';
import Breadcrumb from '../components/breadcrumb';
import Separator from '../components/separator';
import MediumTitle from '../components/mediumTitle';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faStar, faBook } from '@fortawesome/free-solid-svg-icons';
import { faJsSquare, faReact, faAngular, faNodeJs, faNpm, faMicrosoft} from '@fortawesome/free-brands-svg-icons';

const Highlights = styled.div`
    display: flex;
    justify-content: space-around;
    color: var(--adjacent2);
    text-align: center;
    padding: 30px 0 10px;
    color: white;
    background: linear-gradient(121deg, var(--adjacent1), var(--adjacent2));

    h5 {
        font-size: 1.2em;
    }
`;

const KnowledgePage = () => (
    <Layout>
        <Breadcrumb routeIndex={1}></Breadcrumb>
        <Container style={{paddingTop: 0}}>
            <BigTitle>Osaamiseni</BigTitle>
            <p>Projektien ulkopuolella on myös tullut kartoitettua paljon osaamista lukuisiin kirjastoihin, ohjelmointikieliin ja kaikenlaisiin teknologioihin. Kaikki osaaminen ei tällä sivulla esitellyistä projekteista näy suoraan ja suurin osa esimerkiksi töissä tehdyistä projekteista jää uupumaan listalta kokonaan. </p>
            <p><strong>Täältä näet osaamiseni eriteltynä eri aihekokonaisuuksiin!</strong></p>
            <Separator></Separator>
            <div style={{padding: '40px 0'}}>
                <MediumTitle><FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon> JavaScript</MediumTitle>
                <Highlights>
                    <div>
                        <div style={{fontSize: '2.2em'}}>
                            <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                        </div>
                        <h5>10kk työkokemusta</h5>
                    </div>
                    <div>
                        <div style={{fontSize: '2.2em'}}>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <h5>Oma suosikkikieli</h5>
                    </div>
                    <div>
                        <div style={{fontSize: '2.2em'}}>
                            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                        </div>
                        <h5>Useat kirjastot hallussa</h5>
                    </div>
                </Highlights>
                <p>JavaScript on ollut koko opintojeni ajan läsnä ja olen aktivisesti koodaillut sillä omia projekteja. Siitä on kokonaisuutena muodostunut oma suosikkini ja henkilökohtainen tietäykseni siitä on laajin.</p>
                <h3>Front-end osaaminen</h3>
                <ul>
                    <li>React <FontAwesomeIcon icon={faReact}></FontAwesomeIcon></li>
                    <li>Redux</li>
                    <li>Angular <FontAwesomeIcon icon={faAngular}></FontAwesomeIcon></li>
                    <li>AngularJS 1.x <FontAwesomeIcon icon={faAngular}></FontAwesomeIcon></li>
                    <li>jQuery</li>
                    <li>Vanilla JS <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></li>
                </ul>
                <h3>Back-end osaaminen</h3>
                <ul>
                    <li>Node.js <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon></li>
                    <li>Express.js</li>
                    <li>Socket.io</li>
                    <li>Template moottorit (EJS, Handlebars, Pug)</li>
                    <li>MongoDB</li>
                </ul>
                <h3>Testaustyökalut</h3>
                <ul>
                    <li>Jest</li>
                    <li>Enzyme</li>
                    <li>Mocha</li>
                </ul>
                <h3>CLI:t, minifointi- ja bundlaustyökalut ja muut laajennukset</h3>
                <ul>
                    <li>NPM <FontAwesomeIcon icon={faNpm}></FontAwesomeIcon></li>
                    <li>Webpack</li>
                    <li>Babel/ES6/ES7</li>
                    <li>Typescript <FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon></li>
                </ul>
            </div>
        </Container>
    </Layout>
);

export default KnowledgePage;