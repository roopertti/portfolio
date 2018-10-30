import React, { Component } from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';

import { sitemap } from '../sitemap';

import styled from 'styled-components';

const Navbar = styled.nav`
    position: relative;
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 70px;
    background-color: var(--primary);
    color: white;
    padding: 0;
    box-shadow: 0px 2px 10px var(--dark);

    span {
        font-size: 1.2em;
        font-weight: 700;
        margin-left: 20px;
        font-family: 'Raleway', sans-serif;
    }

    ul {
        list-style: none;
        margin: 0 20px 0 0  ;
        padding: 0;
        display: inherit;
        width: 300px;
        justify-content: inherit;

        @media (max-width: 768px) {
            position: absolute;
            display: ${({active}) => (active ? 'flex' : 'none')}
            flex-direction: column;
            top: 70px;
            background-color: var(--dark);
            width: 100%;
        }
    }

    ul > li {
        font-family: 'Raleway', sans-serif;
        @media (max-width: 768px) {
            padding: 10px 0 10px 20px;
        }
    }

    button {
        display: none;
        color: white;
        padding: 10px 13px;
        background: none;
        border: 1px solid white;
        border-radius: 3px;
        margin-right: 20px

        @media (max-width: 768px) {
            display: inherit;
        }
    }
`;

class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            active: false,
            windowWidth: 0
        }

        this.toggleMenu = this.toggleMenu.bind(this);
    }

    toggleMenu() {
        this.setState({ active: !this.state.active });
    }

    render() {
        return (
            <Navbar active={this.state.active}>
                <span><Link to="/">{this.props.siteTitle}</Link></span>
                <ul>
                    {sitemap.map(site => (
                        <li key={site.name}>
                            <Link to={site.path}>{site.name}</Link>
                        </li>
                    ))}
                </ul>
                <button onClick={this.toggleMenu}>
                    <FontAwesomeIcon icon={faBars}></FontAwesomeIcon>
                </button>
            </Navbar>
        );
    }
}

export default Header
