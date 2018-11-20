import styled from 'styled-components';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'gatsby';

import { sitemap } from '../sitemap';

const BreadCrumbWrapper = styled.div`
    margin: auto;
    width: 900px;
    padding: 10px;
    margin-top: 30px;
    margin-bottom: 30px;

    @media (max-width: 1000px) {
        width: 800px;
    }

    @media (max-width: 900px) {
        width: 600px;
    }

    @media (max-width: 600px) {
        width: 100%;
    }

    * {
        margin-right: 10px;
    }

    *:nth-child(3) {
        margin-right: 0px;
    }
`;

const Breadcrumb = ({routeIndex}) => (
    <BreadCrumbWrapper>
        <Link to="/">Frontpage</Link>
        <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
        <span><strong style={{color: 'var(--primary)'}}>{sitemap[routeIndex].name}</strong></span>
    </BreadCrumbWrapper>
);

export default Breadcrumb;