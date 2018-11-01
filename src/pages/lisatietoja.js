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
            <BigTitle>Lisätietoja</BigTitle>
            <p>Tässä vielä perustietoja minusta. Lisätietoja voi kysyä milloin vain olemalla minuun yhteydessä sähköpostitse, tai vaikkapa LinkedIn:in kautta!</p>
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
            <MediumTitle>Koulutus</MediumTitle>
            <SmallMarginTitle>Tradenomi, tietojenkäsittely</SmallMarginTitle>
            <SmallMarginSubtitle>Karelia ammattikorkeakoulu, 2015 alkaen</SmallMarginSubtitle>
            <p>Pääosin ohjelmistokehitykseen ja verkko-ohjelmointiin painottuneet opinnot.</p>
            <SmallMarginTitle>Ylioppilas</SmallMarginTitle>
            <SmallMarginSubtitle>Joensuun Normaalikoulun lukio, valmistunut 2014 kevät</SmallMarginSubtitle>
            <Separator></Separator>
            <MediumTitle>Työkokemus</MediumTitle>
            <SmallMarginTitle>Junior Web Developer</SmallMarginTitle>
            <SmallMarginSubtitle>atFlow Oy, 06/2018 - 08/2018</SmallMarginSubtitle>
            <p>Verkkosivujen kehitys ja ylläpito.</p>
            <SmallMarginTitle>Harjoittelija</SmallMarginTitle>
            <SmallMarginSubtitle>atFlow Oy, 08/2017 - 01/2018</SmallMarginSubtitle>
            <p>Verkkosivujen kehitys, service desk.</p>
            <SmallMarginTitle>Ohjelmoija</SmallMarginTitle>
            <SmallMarginSubtitle>Karelia-amk, 05/2017 - 08/2017</SmallMarginSubtitle>
            <p>Ajanvarausjärjestelmien kehitys.</p>
            <SmallMarginTitle>AC-hostaaja</SmallMarginTitle>
            <SmallMarginSubtitle>Karelia-amk, 11/2015 - 05/2018</SmallMarginSubtitle>
            <p>Luentojen tallentaminen ja suoratoistaminen verkossa.</p>
            <Separator></Separator>
            <MediumTitle>Luottamustehtävät</MediumTitle>
            <SmallMarginTitle>Hallituksen puheenjohtaja</SmallMarginTitle>
            <SmallMarginSubtitle>Opiskelijakunta POKA, toimikausi 2018</SmallMarginSubtitle>
            <p>Opiskelijakunnan johtaminen, toiminnan organisointi ja yhteistyö sidosryhmien kanssa.</p>
            <SmallMarginTitle>Hallituksen jäsen</SmallMarginTitle>
            <SmallMarginSubtitle>Opiskelijakunta POKA, toimikausi 2017</SmallMarginSubtitle>
            <p>Tapahtumien järjestäminen ja organisointi. Yhteistyö ainejärjestöjen kanssa.</p>
            <SmallMarginTitle>Ohjausryhmän jäsen</SmallMarginTitle>
            <SmallMarginSubtitle>SMErec-hanke, 2017 - 2018</SmallMarginSubtitle>
            <p>Yritysten rekrytointiosaamista kehittävä hanke. <a style={{color: 'var(--adjacent2)'}} href="http://smerec.karelia.fi/fi/" target="_blank" rel="noopener noreferrer">Lisätietoa</a></p>
            <SmallMarginTitle>Tuutorijaoston puheenjohtaja, tuutorijaoston jäsen</SmallMarginTitle>
            <SmallMarginSubtitle>POKAn tuutorijaosto, 2017 - 2018</SmallMarginSubtitle>
            <p>Tuutoroinnin suunnittelu ja kehittäminen Karelia-ammattikorkeakoulussa.</p>
        </Container>
    </Layout>
);

export default AdditionalInfo;