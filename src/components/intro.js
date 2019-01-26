/**
 * The Intro Section in the Index Page
 * 
 */
import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col, ScreenClassRender} from 'react-grid-system'

import ProfileImage from '../components/profile-image'
import Emoji from '../utils/emoji'

/**
 * Screen breakpoints
 */
// const LargeScreenWidth = '992px';
const MediumScreenWidth = '767px';
// const SmallScreenWidth = '575px';


const IntroWrapper = styled.section`
    margin-bottom: calc(1.6875rem * 2 - 1rem);
`;

const IntroGreeting = styled.div`
    text-align: center;
`;

const LargeText = styled.p`
    font-size: 1.6875rem;
    margin: 0 15px calc(1.6875rem / 2);
    letter-spacing: 0.05rem;
`;

const RoleList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1.6875rem 0;
`;

const RoleItem = styled.li`
    font-size: ${props => (props.inactive ? '1.2rem' : '1.6875rem')};
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.05rem;
    ${props => (props.inactive ? '' : 'text-decoration: rgba(255, 255, 255, 0.45) double underline;')}
    color: ${props => (props.inactive ? 'rgba(255, 255, 255, 0.8)' : '#FFFFFF')};
`;

const ProfileImageWrapper = styled.div`
    @media screen and (max-width: ${MediumScreenWidth}) {
        display: none;
    };
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
  <Container component={IntroWrapper}>
    <Row align="center">
      <Col md={12}>
        <IntroGreeting>
          <h1><Emoji symbol="👋" label="Hi" /> good <DayPart hour={new Date().getHours()}/>.</h1>
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
        <Row align="center" nogutter>
          <ScreenClassRender render={screenClass => (
            <div style={{ left: '0.6rem', top: ['xs', 'sm'].includes(screenClass) ? '0.6rem' : '2.25rem', backgroundColor: '#FEB30E', height: ['xs', 'sm'].includes(screenClass) ? '100%' : '80%', width: ['xs', 'sm', 'md'].includes(screenClass) ? '97%' : '85%', position: 'absolute'}}>
            </div>
          )} />
          <ScreenClassRender render={screenClass => (
            <div style={{ left: '0rem', top: ['xs', 'sm'].includes(screenClass) ? '0' : '1.65rem', backgroundColor: '#FE840E', height: ['xs', 'sm'].includes(screenClass) ? '100%' : '80%', width: ['xs', 'sm', 'md'].includes(screenClass) ? '97%' : '85%', position: 'absolute'}}>
            </div>
          )} />
          <Col md={7} lg={6}>
            <RoleList>
              <RoleItem inactive>UX Designer</RoleItem>
              <RoleItem>Product Maker</RoleItem>
              <RoleItem inactive>Web Developer</RoleItem>
            </RoleList>
          </Col>
          <Col md={5} lg={4}>
            <ProfileImageWrapper><ProfileImage /></ProfileImageWrapper>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)

export default Intro