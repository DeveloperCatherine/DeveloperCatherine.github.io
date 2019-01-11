import React from 'react'

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import { Link } from 'gatsby'

import PropTypes from 'prop-types'
import styled from 'styled-components'

const HeaderWrapper = styled.section`
  margin: 0 0 1.45rem;
  border-bottom: 1px solid black;
  padding: 1.0875rem 0;
`;

const HomeButton = styled.div`
  margin-left: 1.0875rem;
  height: inherit;
  display: inline-block;
  float: none;
`;

const SiteNav = styled.nav`
  margin: 0 auto;
  display: inline-block;
  float: right;
  margin-right: 1.0875rem;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
`;

const NavButton = styled.li`
  display: block;
  margin: 0.3rem 0 0 0;
  text-align: right;
  font-weight: bold;
`;

const Header = () => (
  <HeaderWrapper>
    <HomeButton><Link to="/">
      <StaticQuery
        query={graphql`
          query {
            file (relativePath: {eq: "logo@2x.png"}) {
              childImageSharp {
                fixed(width: 168, height: 98) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        `}render={data => <Img fixed={data.file.childImageSharp.fixed} />}
      />
    </Link></HomeButton>
    <SiteNav>
      <NavList>
        <NavButton><Link to="/#about">About</Link></NavButton>
        <NavButton><Link to="/#projects">Work</Link></NavButton>
        <NavButton><Link to="/#contact">Contact</Link></NavButton>
      </NavList>
    </SiteNav>
  </HeaderWrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
