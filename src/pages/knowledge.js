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
            <BigTitle>Knowledge</BigTitle>
            <p>Outside of all the projects I've been a part of I have also gained a lot of knowledge on different programming languages, libraries and technologies.</p>
            <p><strong>Here you can discover my knowledge!</strong></p>
            <Separator></Separator>
            <div style={{padding: '40px 0'}}>
                <MediumTitle style={{textAlign: 'center'}}>JavaScript <FontAwesomeIcon icon={faJsSquare}></FontAwesomeIcon></MediumTitle>
                <Highlights>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faLaptop}></FontAwesomeIcon>
                        </div>
                        <h5>10 months of work experience</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faStar}></FontAwesomeIcon>
                        </div>
                        <h5>My own favorite</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                        </div>
                        <h5>Full stack knowledge</h5>
                    </div>
                </Highlights>
                <p>I've been using JavaScript the most and I'm using it all the time on my personal projects. I have most knowledge about JavaScript as well.</p>
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
                        <h3>Unit testing</h3>
                        <ul>
                            <li>Jest</li>
                            <li>Enzyme</li>
                            <li>Mocha</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>CLI tools, minifiers, bundlers and other extensions</h3>
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
                        <h5>7 months of work experience</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faFileSignature}></FontAwesomeIcon>
                        </div>
                        <h5>Content management systems</h5>
                    </div>
                </Highlights>
                <p>I've used PHP at my internship and at work. Mostly I've been using it with content management systems. I'm familiar with procedural and object-oriented PHP as well.</p>
                <SkillListWrapper>
                    <SkillList>
                        <h3>CMS and other experiences</h3>
                        <ul>
                            <li>RESTful APIs</li>
                            <li>MySQL ja PHPMyAdmin</li>
                            <li>Wordpress basics <FontAwesomeIcon icon={faWordpress}></FontAwesomeIcon></li>
                            <li>Other content management systems</li>
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
                        <h5>Design experience</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faMobileAlt}></FontAwesomeIcon>
                        </div>
                        <h5>Responsive design</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faWheelchair}></FontAwesomeIcon>
                        </div>
                        <h5>Accessibility</h5>
                    </div>
                </Highlights>
                <p>During my studies and jobs I've made all user interfaces with HTML and CSS. During my work I've learned how to create responsive and accessible websites. Responsive design and quality user experience are big priorities for me in every project.</p>
                <SkillListWrapper>
                    <SkillList>
                        <h3>UI libraries</h3>
                        <ul>
                            <li>Bootstrap</li>
                            <li>MaterialUI</li>
                            <li>SemanticUI</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Preprocessors and extensions</h3>
                        <ul>
                            <li>SASS basics <FontAwesomeIcon icon={faSass}></FontAwesomeIcon></li>
                            <li>Styled Components (React)</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Modern CSS features</h3>
                        <ul>
                            <li>CSS variables</li>
                            <li>Flexbox</li>
                            <li>CSS Grid</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Style criteria</h3>
                        <ul>
                            <li>Valid HTML <FontAwesomeIcon icon={faHtml5}></FontAwesomeIcon></li>
                            <li>Responsive design</li>
                            <li>Accessibility</li>
                        </ul>
                    </SkillList>
                </SkillListWrapper>
                <Separator></Separator>
            </div>
            <div style={{padding: '40px 0'}}>
                <MediumTitle style={{textAlign: 'center'}}>Other knowledge</MediumTitle>
                <Highlights>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faDatabase}></FontAwesomeIcon>
                        </div>
                        <h5>Databases</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faServer}></FontAwesomeIcon>
                        </div>
                        <h5>Hosting providers and platforms</h5>
                    </div>
                    <div>
                        <div>
                            <FontAwesomeIcon icon={faCodeBranch}></FontAwesomeIcon>
                        </div>
                        <h5>Version control and other tools</h5>
                    </div>
                </Highlights>
                <p>Last but not least I'm introducing my knowledge on other useful tools I'm also experienced with. I've also listed other programming languages I've used.</p>
                <SkillListWrapper>
                    <SkillList>
                        <h3>Databases</h3>
                        <ul>
                            <li>MySQL</li>
                            <li>MongoDB</li>
                            <li>Google Firebase <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Hosting</h3>
                        <ul>
                            <li>Heroku</li>
                            <li>GitHub Pages <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></li>
                            <li>Google Firebase <FontAwesomeIcon icon={faGoogle}></FontAwesomeIcon></li>
                            <li>Docker basics <FontAwesomeIcon icon={faDocker}></FontAwesomeIcon></li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Version control and other development tools</h3>
                        <ul>
                            <li>Git <FontAwesomeIcon icon={faGit}></FontAwesomeIcon></li>
                            <li>GitHub <FontAwesomeIcon icon={faGithub}></FontAwesomeIcon></li>
                            <li>GitLab <FontAwesomeIcon icon={faGitlab}></FontAwesomeIcon></li>
                            <li>TortoiseSVN</li>
                            <li>Jira</li>
                        </ul>
                    </SkillList>
                    <SkillList>
                        <h3>Programming languages</h3>
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