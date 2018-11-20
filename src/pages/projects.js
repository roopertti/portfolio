import React from 'react';

import Layout from '../components/layout';
import Container from '../components/container';
import Breadcrumb from '../components/breadcrumb';
import ProjectList from '../components/projectlist';
import Separator from '../components/separator';
import BigTitle from '../components/bigTitle';

import { returnProjectsSorted } from '../projectData';

const projects = returnProjectsSorted();

const ProjectsPage = () => (
    <Layout>
        <Breadcrumb routeIndex={0}></Breadcrumb>
        <Container style={{paddingTop: 0}}>
            <BigTitle>Projects</BigTitle>
            <p>During my studies I've worked with a lot of different projects. Project-based studies have given me a lot of experience on teamwork and project management as well.</p>
            <p>I've gathered some of my projects on this page. Some of them are old and my coding skills have improved a lot since then but still I wish to show the things I've done! :)</p>
            <p><strong>Some of my projects are still live! Check out links to websites and GitHub-repositories!</strong></p>
            <Separator></Separator>
            <ProjectList projects={projects}></ProjectList>
        </Container>
    </Layout>
);

export default ProjectsPage;