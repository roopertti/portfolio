import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

import Container from '../components/container';
import Layout from '../components/layout';
import Breadcrumb from '../components/breadcrumb';
import BigTitle from '../components/bigTitle';
import Separator from '../components/separator';
import MediumTitle from '../components/mediumTitle';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const SmallMarginTitle = styled.h3`
    margin: 10px 0;
`;

const SmallMarginSubtitle = styled.h4`
    margin: 10px 0;
    color: var(--dark);
`;

const AdditionalInfo = () => (
    <Layout>
        <Breadcrumb routeIndex={2}></Breadcrumb>
        <Container style={{paddingTop: 0}}>
            <BigTitle>More about me</BigTitle>
            <p>Basic information can be read here. Do not hesitate to contact me or ask any questions if you've got anything on your mind. You can contact me with e-mail or LinkedIn!</p>
            <div style={{marginBottom: 10, color: 'var(--adjacent2)', fontSize: '1.1em'}}>
                <a href="mailto:robert-kuhlmann@outlook.com">
                    <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon> robert-kuhlmann@outlook.com
                </a>
            </div>
            <div style={{marginBottom: 10, color: 'var(--adjacent2)', fontSize: '1.1em'}}>
                <a href="https://www.linkedin.com/in/robert-kuhlmann/" target="_blank" rel="noopener noreferrer">
                    <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon> LinkedIn
                </a>
            </div>
            <Separator></Separator>
            <MediumTitle>Education</MediumTitle>
            <SmallMarginTitle>BBA (Bachelor Of Business Administration), Information Technology</SmallMarginTitle>
            <SmallMarginSubtitle>Karelia UAS, starting from 2015 (still in progress)</SmallMarginSubtitle>
            <p>Studies that have mostly consisted of programming, software development and web development.</p>
            <SmallMarginTitle>Graduate</SmallMarginTitle>
            <SmallMarginSubtitle>Joensuun Normaalikoulun lukio, graduated on 2014 spring</SmallMarginSubtitle>
            <Separator></Separator>
            <MediumTitle>Work experience</MediumTitle>
            <SmallMarginTitle>Junior Web Developer</SmallMarginTitle>
            <SmallMarginSubtitle>atFlow Oy, 06/2018 - 08/2018</SmallMarginSubtitle>
            <p>Development of websites and web applications.</p>
            <SmallMarginTitle>Intern</SmallMarginTitle>
            <SmallMarginSubtitle>atFlow Oy, 08/2017 - 01/2018</SmallMarginSubtitle>
            <p>Development of websites and web applications, service desk.</p>
            <SmallMarginTitle>Programmer, IT-trainee</SmallMarginTitle>
            <SmallMarginSubtitle>Karelia UAS, 05/2017 - 08/2017</SmallMarginSubtitle>
            <p>Development of reservation systems.</p>
            <SmallMarginTitle>AC-host</SmallMarginTitle>
            <SmallMarginSubtitle>Karelia UAS, 11/2015 - 05/2018</SmallMarginSubtitle>
            <p>Recording and hosting of lectures.</p>
            <Separator></Separator>
            <MediumTitle>Positions of trust</MediumTitle>
            <SmallMarginTitle>Chairperson of the Executive Board</SmallMarginTitle>
            <SmallMarginSubtitle>Student Union POKA, year 2018</SmallMarginSubtitle>
            <p>Leadership and organizing of student union. Cooperation with other organisations.</p>
            <SmallMarginTitle>Member of the Executive Board</SmallMarginTitle>
            <SmallMarginSubtitle>Student Union POKA, year 2017</SmallMarginSubtitle>
            <p>Organizing events and working with other student organisations.</p>
            <SmallMarginTitle>Member of the working group</SmallMarginTitle>
            <SmallMarginSubtitle>SMErec project, 2017 - 2018</SmallMarginSubtitle>
            <p>Project that aims to develop new recruitment skills for companies. <a style={{color: 'var(--adjacent2)'}} href="http://smerec.karelia.fi/fi/" target="_blank" rel="noopener noreferrer">Lisätietoa</a></p>
        </Container>
    </Layout>
);

export default AdditionalInfo;