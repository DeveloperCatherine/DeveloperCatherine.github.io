import React from 'react'
// import { Link } from 'gatsby'
import styled from 'styled-components'
import {Container, Row, Col, ScreenClassRender, Hidden} from 'react-grid-system'

import Layout from '../components/layout'
import IntroImage from '../components/intro-image'
import SEO from '../components/seo'

const IntroWrapper = styled.section`
  margin-bottom: calc(1.6875rem * 2 - 1rem);
`;

const IntroGreeting = styled.div`
  text-align: center;
`;

const RoleList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 1.6875rem 0;
`;

const RoleItem = styled.li`
  font-size: 1.6875rem;
  text-align: center;
  font-weight: bold;
  color: #FFFFFF;
`;

const LargeText = styled.p`
  font-size: 1.6875rem;
  margin-bottom: calc(1.6875rem / 2);
`;

function DayPart (props) {
  switch (true) {
    case (props.hour < 6):
      return "evening";
    case (props.hour < 12):
      return "morning";
    case (props.hour < 18):
      return "afternoon";
    case (props.hour <= 24):
      return "evening";
    default:
      return "day";
  }
}

const Intro = () => (
  <IntroWrapper>
    <Container>
      <Row align="center">
        <Col md={12}>
          <IntroGreeting>
            <h1>// good <DayPart hour={new Date().getHours()}/>.</h1>
            <p>This is my portfolio, an ongoing project that I recently started working on.</p>
          </IntroGreeting>
        </Col>
      </Row>
      <Row align="center">
        <Col md={5}>
          <ScreenClassRender render={screenClass => (
            <div style={{ textAlign: ['lg', 'xl', 'md'].includes(screenClass) ? 'right' : 'center' }} >
              <LargeText>I'm Catherine, a</LargeText>
            </div>
          )} />
        </Col>
        <Col md={7}>
          <Row align="center">
            <ScreenClassRender render={screenClass => (
              <div style={{ left: '1rem', top: ['xs', 'sm'].includes(screenClass) ? '1rem' : '2.5rem', backgroundColor: '#FEB30E', height: ['xs', 'sm'].includes(screenClass) ? '100%' : '80%', width: ['xs', 'sm', 'md'].includes(screenClass) ? '97%' : '85%', position: 'absolute'}}>
              </div>
            )} />
            <ScreenClassRender render={screenClass => (
              <div style={{ left: '0rem', top: ['xs', 'sm'].includes(screenClass) ? '0' : '1.5rem', backgroundColor: '#FE840E', height: ['xs', 'sm'].includes(screenClass) ? '100%' : '80%', width: ['xs', 'sm', 'md'].includes(screenClass) ? '97%' : '85%', position: 'absolute'}}>
              </div>
            )} />
            <Col md={7} lg={6}>
              <RoleList>
                <RoleItem>UX Designer</RoleItem>
                <RoleItem>PM</RoleItem>
                <RoleItem>Web Developer</RoleItem>
              </RoleList>
            </Col>
            <Col md={5} lg={4}>
              <Hidden xs sm><IntroImage style={{ maxHeight: '280px' }}/></Hidden>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </IntroWrapper>
)

const Guide = () => (
  <Container>
    <Row debug>
      <Col debug md={3}>
      1
      </Col>
      <Col debug md={9}>
      2
      </Col>
    </Row>
    <Row debug>
        <ScreenClassRender render={screenClass => (
          <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
            Screen class: {screenClass}
          </p>
        )} />
      </Row>
  </Container>
)

const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <Guide />
  </Layout>
)

export default IndexPage