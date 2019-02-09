import React from 'react'

import { StaticQuery, graphql, Link } from "gatsby"
import Img from "gatsby-image"
import styled from 'styled-components'

const HeaderWrapper = styled.section`
  border-bottom: 1px solid black;
  padding: 0.54rem 1.0875rem;
`;

const HomeButton = styled.div`
  margin: 0.546rem 0 auto;
  display: inline-block;
  float: none;
  height: 84px;
`;

const SiteNav = styled.nav`
  margin: 0.182rem 0 auto;
  display: inline-block;
  float: right;
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0;
`;

const NavButton = styled.li`
  display: block;
  margin: 0.2rem 0 0.2rem 0;
  text-align: right;
  font-weight: bold;
`;

const NavLink = styled(Link)`
  :hover {
    :before {
      color: #FEB30E;
      content: "// ";
    }
    font-size: 98%;
  }
`;

const Header = () => (
  <HeaderWrapper>
    <HomeButton><Link to="/" activeStyle={{
            fontSize: "0",
          }}>
      <StaticQuery
        query={graphql`
          query {
            file (relativePath: {eq: "full-logo@2x.png"}) {
              childImageSharp {
                fixed(width: 140, height: 84) {
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
        <NavButton><NavLink to="/#about">About</NavLink></NavButton>
        <NavButton><NavLink to="/#projects">Work</NavLink></NavButton>
        <NavButton><NavLink to="/#contact">Contact</NavLink></NavButton>
      </NavList>
    </SiteNav>
  </HeaderWrapper>
)

export default Header
