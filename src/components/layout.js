import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import { Link } from 'gatsby';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

import { sitemap } from '../sitemap';

import Footer from '../components/footer';


import '../base.css';

import Header from './header';

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: 'description', content: 'Sample' },
            { name: 'keywords', content: 'sample, something' },
          ]}
        >
          <html lang="en" />
          <link href="https://fonts.googleapis.com/css?family=Merriweather:400,700|Raleway:300,400,500,600,700" rel="stylesheet"></link>
        </Helmet>
        <Header siteTitle={data.site.siteMetadata.title} />
        <div>
          {children}
        </div>
        <Footer>
          <div>
            <h3>Contact info and networks</h3>
            <a href="mailto:robert-kuhlmann@outlook.com">
              <FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon>
            </a>
            <a href="https://www.instagram.com/kuuuulman/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon>
            </a>
            <a href="https://www.linkedin.com/in/robert-kuhlmann/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedin}></FontAwesomeIcon>
            </a>
          </div>
          <div>
            <h3>Navigation</h3>
            <ul>
              {sitemap.map(site => (
                <li key={site.name}>
                  <Link to={site.path}>{site.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </Footer>
        <div style={{
          backgroundColor: 'var(--dark)',
          color: 'white',
          textAlign: 'center',
          padding: '10px 20px'}}>
          <p>Robert Kuhlmann 2018</p>
        </div>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
