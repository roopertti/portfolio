import React from 'react';
import styled from 'styled-components';

import Container from '../components/container';
import Layout from '../components/layout';
import Breadcrumb from '../components/breadcrumb';
import BigTitle from '../components/bigTitle';

const AdditionalInfo = () => (
    <Layout>
        <Breadcrumb routeIndex={2}></Breadcrumb>
        <Container style={{paddingTop: 0}}>
            <BigTitle>Lisätietoja</BigTitle>
        </Container>
    </Layout>
);

export default AdditionalInfo;