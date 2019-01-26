import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import Header from './header'

const LargeScreenWidth = '992px';
// const MediumScreenWidth = '768px';
const SmallScreenWidth = '576px';
const MainContentWidth = '960px';

const PageWrapper = styled.section`
  @media screen and (max-width: ${LargeScreenWidth}) {
    padding: 0 20px 1.45rem;
  };
  padding: 0 40px 1.45rem;
`;

const ContentWrapper = styled.div`
  margin: 0 auto;
  max-width: ${MainContentWidth};
  @media screen and (max-width: ${SmallScreenWidth}) {
    padding: 0 0 1.45rem;
  };
  padding: 0 1.0875rem 1.45rem;
`;

const Footer = styled.footer`
  border-top: 1px solid black;
  padding-top: 0.5rem;
  text-align: center;
`;

const Copyright = styled.div`
  color: #333333;
`;

const TextLink = styled.a`
  color: #FE840E;
  :hover {
    color: #FF9D40;
  }
`;

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteDataQuery {
        site {
          siteMetadata {
            author
            repository
          }
        }
      }
    `}
    render={data => (
      <PageWrapper>
        <Header />
        <ContentWrapper>
          {children}
        </ContentWrapper>
        <Footer>
          <Copyright>© {new Date().getFullYear()} Design & Code by {data.site.siteMetadata.author}. <TextLink href={data.site.siteMetadata.repository} >Github Repository</TextLink>.</Copyright>
        </Footer>
      </PageWrapper>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
