import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import Breadcrumb from '../components/breadcrumb';
import ProjectList from '../components/projectlist';

import { returnProjectsSorted } from '../projectData';

const projects = returnProjectsSorted();

const ProjectsPage = () => (
    <Layout>
        <Breadcrumb routeIndex={0}></Breadcrumb>
        <Container style={{paddingTop: 0}}>
            <h1 style={{fontSize: '2.5em', color: 'var(--primary)'}}>Projektit</h1>
            <p>Opintojen aikana on tullut työskenneltyä paljon erilaisten projektien parissa, niin kotona, kuin myös koulun ja työn merkeissä. Projektipainotteiset opinnot ovatkin antaneet mahdollisuuden tutustua hyvin erilaisiin teknologioihin ja antaneet laajan käsityksen erilaisista ekosysteemeistä ja arkkitehtuureista.</p>
            <p>Tähän sivulle olen koonnut muutamia omia projekteja. Osa on kooditasoltaan sellaisia, ettei niitä uskaltaisi kenellekään enää näyttää, mutta ne ovat kuitenkin olleet merkittäviä askeleita omien taitojen kehittämisessä :)</p>
            <p><strong>Osa koodeista ja sivustoista on edelleen nähtävissä! Huomioi sivustojen, sekä GitHub-repositoryjen linkit!</strong></p>
            <ProjectList projects={projects}></ProjectList>
        </Container>
    </Layout>
);

export default ProjectsPage;