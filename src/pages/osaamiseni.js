import React from 'react';
import styled from 'styled-components';

import Layout from '../components/layout';
import BigTitle from '../components/bigTitle';
import Container from '../components/container';
import Breadcrumb from '../components/breadcrumb';
import Separator from '../components/separator';
import MediumTitle from '../components/mediumTitle';
import Highlights from '../components/highlights';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLaptop, faStar, faBook, faFileSignature, faMobileAlt, faWheelchair, faPaintBrush, faDatabase, faCodeBranch, faServer } from '@fortawesome/free-solid-svg-icons';
import { 
    faJsSquare,
    faReact, 
    faAngular, 
    faNodeJs, 
    faNpm, 
    faMicrosoft, 
    faPhp, 
    faWordpress,
    faHtml5,
    faCss3Alt,
    faSass,
    faGit,
    faGithub,
    faGitlab,
    faDocker,
    faJava,
    faPython,
    faGoogle
} from '@fortawesome/free-brands-svg-icons';

const SkillListWrapper = styled.div`
    display: grid; 
    grid-template-columns: 50% 50%;
    grid-template-rows: auto;

    @media (max-width: 900px) {
        grid-template-rows: auto;
    }

    @media (max-width: 600px) {
        grid-template-columns: 100%;
        grid-template-rows: auto;
    }
`;

const SkillList = styled.div`
    margin: 10px;

    @media (max-width: 900px) {
        margin: 5px;
    }

    h3 {
        font-size: 1.5em;
        color: var(--adjacent1);
        margin 0 0 10px;

        @media (max-width: 900px) {
            font-size: 1.2em;
        }
    }

    ul {
        list-style: none;
        padding-left: 0;
        font-size: 1.1em;
        @media (max-width: 900px) {
            font-size: 1em;
        }

        @media (max-width: 600px) {
            font-size: 1.1em;
        }
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
                <MediumTitle style={{textAlign: 'center'}}>JavaScript <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></MediumTitle>
                <Highlights>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                        </div>
                        <h5>10kk työkokemusta</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <h5>Oma suosikki</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                        </div>
                        <h5>Useat kirjastot hallussa</h5>
                    </div>
                </Highlights>
                <p>JavaScript on ollut koko opintojeni ajan läsnä ja olen aktivisesti koodaillut sillä omia projekteja. Siitä on kokonaisuutena muodostunut oma suosikkini ja henkilökohtainen tietäykseni siitä on laajin.</p>
                <SkillListWrapper>
                    <SkillList>
                        <h3>Front-end</h3>
                        <ul>
                            <li>React <FontAwesomeIcon icon={faReact}></FontAwesomeIcon></li>
                            <li>Redux</li>
                            <li>Angular <FontAwesomeIcon icon={faAngular}></FontAwesomeIcon></li>
                            <li>AngularJS 1.x <FontAwesomeIcon icon={faAngular}></FontAwesomeIcon></li>
                            <li>jQuery</li>
                            <li>Vanilla JS <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Back-end</h3>
                        <ul>
                            <li>Node.js <FontAwesomeIcon icon={faNodeJs}></FontAwesomeIcon></li>
                            <li>Express.js</li>
                            <li>Socket.io</li>
                            <li>Template moottorit (EJS, Handlebars, Pug)</li>
                            <li>MongoDB</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Testaustyökalut</h3>
                        <ul>
                            <li>Jest</li>
                            <li>Enzyme</li>
                            <li>Mocha</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>CLI:t, minifointi- ja bundlaustyökalut ja muut laajennukset</h3>
                        <ul>
                            <li>NPM <FontAwesomeIcon icon={faNpm}></FontAwesomeIcon></li>
                            <li>Webpack</li>
                            <li>Babel/ES6/ES7</li>
                            <li>Typescript <FontAwesomeIcon icon={faMicrosoft}></FontAwesomeIcon></li>
                        </ul>
                    </SkillList>
                </SkillListWrapper>
                <Separator></Separator>
            </div>
            <div style={{padding: '40px 0'}}>
                <MediumTitle style={{textAlign: 'center'}}>PHP <FontAwesomeIcon icon={faPhp}></FontAwesomeIcon></MediumTitle>
                <Highlights>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                        </div>
                        <h5>7kk työkokemusta</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faFileSignature}></FontAwesomeIcon>
                        </div>
                        <h5>Sisällönhallintajärjestelmät</h5>
                    </div>
                </Highlights>
                <p>PHP on ollut käytössä harjoittelussa, sekä kesätöissä työskennellessä. Olen työskennellyt pääasiassa käyttäen sisällönhallintajärjestelmää taustalla.</p>
                <SkillListWrapper>
                    <SkillList>
                        <h3>CMS ja muu osaaminen</h3>
                        <ul>
                            <li>RESTful API:t</li>
                            <li>MySQL ja PHPMyAdmin</li>
                            <li>Wordpress perusteet <FontAwesomeIcon icon={faWordpress}></FontAwesomeIcon></li>
                            <li>Muut sisällönhallintajärjestelmät</li>
                        </ul>
                    </SkillList>
                </SkillListWrapper>
                <Separator></Separator>
            </div>
            <div style={{padding: '40px 0'}}>
                <MediumTitle style={{textAlign: 'center'}}>
                    HTML <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon> / CSS <FontAwesomeIcon icon={faCss3Alt}></FontAwesomeIcon>
                </MediumTitle>
                <Highlights>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faPaintBrush}></FontAwesomeIcon>
                        </div>
                        <h5>Kokemus suunnittelusta</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                        </div>
                        <h5>Responsiivisuus</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faWheelchair}></FontAwesomeIcon>
                        </div>
                        <h5>Saavutettavuus</h5>
                    </div>
                </Highlights>
                <p>Opintojen ja työskentelyn aikana olen pääasiassa tehnyt kaikki käyttöliittymät HTML:n ja CSS:n avulla. Työskentelyssä olen oppinut suunnittelemaan sivut responsiivisiksi ja saavutettaviksi. Laadukas ja siisti ulkoasu ja käyttöliittymä ovat minulle tärkeitä asoita jokaisessa projektissani.</p>
                <SkillListWrapper>
                    <SkillList>
                        <h3>Käyttöliittymäkirjastot</h3>
                        <ul>
                            <li>Bootstrap</li>
                            <li>MaterialUI</li>
                            <li>SemanticUI</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Esikääntäjät ja laajennukset</h3>
                        <ul>
                            <li>Sass perusteet <FontAwesomeIcon icon={faSass}></FontAwesomeIcon></li>
                            <li>Styled Components (React)</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Modernit ominaisuudet</h3>
                        <ul>
                            <li>CSS muuttujat</li>
                            <li>Flexbox</li>
                            <li>CSS Grid</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Tyylikriteerit</h3>
                        <ul>
                            <li>Validi HTML <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></li>
                            <li>Responsiivisuus</li>
                            <li>Saavutettavuus</li>
                        </ul>
                    </SkillList>
                </SkillListWrapper>
                <Separator></Separator>
            </div>
            <div style={{padding: '40px 0'}}>
                <MediumTitle style={{textAlign: 'center'}}>Muu osaaminen</MediumTitle>
                <Highlights>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                        </div>
                        <h5>Tietokannat</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
                        </div>
                        <h5>Julkaisualustat</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                        </div>
                        <h5>Versionhallinta ja muut työkalut</h5>
                    </div>
                </Highlights>
                <p>Viimeiseksi vielä tarkemmin eriteltynä muita hyödyllisiä työkaluja, tietokantoja, sekä julkaisujärjestelmiä, mitä olen käyttänyt. Myös muut osaamani ohjelmointikielet ovat listattuna.</p>
                <SkillListWrapper>
                    <SkillList>
                        <h3>Tietokannat</h3>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Google Firebase <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Julkaisualustat</h3>
                        <ul>
                            <li>Heroku</li>
                            <li>GitHub Pages <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></li>
                            <li>Google Firebase <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></li>
                            <li>Docker perusteet <FontAwesomeIcon icon={faDocker}></FontAwesomeIcon></li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Versionhallinta ja muut työkalut</h3>
                        <ul>
                            <li>Git <FontAwesomeIcon icon={faGit}></FontAwesomeIcon></li>
                            <li>GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></li>
                            <li>GitLab <FontAwesomeIcon icon={faGitlab}></FontAwesomeIcon></li>
                            <li>TortoiseSVN</li>
                            <li>Jira</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Ohjelmointikielet, joista perusteet hallussa</h3>
                        <ul>
                            <li>C#</li>
                            <li>Java <FontAwesomeIcon icon={faJava}></FontAwesomeIcon></li>
                            <li>Python <FontAwesomeIcon icon={faPython}></FontAwesomeIcon></li>
                            <li>C++</li>
                        </ul>
                    </SkillList>
                </SkillListWrapper>
                <Separator></Separator>
            </div>
        </Container>
    </Layout>
);

export default KnowledgePage;