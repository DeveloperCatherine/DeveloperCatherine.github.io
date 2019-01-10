import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'
// import './layout.css'

const PageWrapper = styled.section`
  padding: 0 20px 1.45rem;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 0px 1.0875rem 1.45rem;
`;

const Footer = styled.footer`
  border-top: 1px solid black;
  padding-top: 1rem;
  text-align: center;
`;

const Copyright = styled.div`
  color: #999999;
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            url
          }
        }
      }
    `}
    render={data => (
      <PageWrapper>
        <Header siteTitle={data.site.siteMetadata.title} />
        <ContentWrapper>
          {children}
          <Footer>
            Design and Code by Yueying Catherine Tang
            <Copyright>© {new Date().getFullYear()}</Copyright>
          </Footer>
        </ContentWrapper>
      </PageWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
