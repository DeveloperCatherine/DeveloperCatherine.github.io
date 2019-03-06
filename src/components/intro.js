/**
 * The Intro Section in the Index Page
 * 
 */
import React from 'react'
import styled from 'styled-components'
import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

import ProfileImage from '../images/profile-image'
import Emoji from '../utils/emoji'


const IntroContainer = styled(Container)`
    margin-bottom: calc(1.6875rem * 2 - 1rem);
`;

const IntroGreeting = styled.div`
    text-align: center;
`;

const LargeText = styled.p`
    font-size: 1.5rem;
    margin: 0 15px calc(1.6875rem / 2);
    letter-spacing: 0.05rem;
    text-align: center;
`;

const RoleList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 1.6875rem 0;
`;

const RoleItem = styled.li`
    font-size: ${props => (props.inactive ? '1.125rem' : '1.6875rem')};
    text-align: center;
    font-weight: bold;
    letter-spacing: 0.05rem;
    ${props => (props.inactive ? '' : 'text-decoration: rgba(255, 255, 255, 0.45) double underline;')}
    color: ${props => (props.inactive ? 'rgba(255, 255, 255, 0.8)' : '#FFFFFF')};
`;

const RoleListBgBottom = styled.div`
    background-color: #FEB30E;    
    position: absolute;
    left: 0.6rem;
    top:  ${props => (props.smallScreens ? '0.6rem' : '2.25rem')};
    height: ${props => (props.smallScreens ? '100%' : '80%')};
    width: ${props => ((props.mediumScreens || props.smallScreens) ? '97%' : '85%')};
`;

const RoleListBgTop = styled.div`
    background-color: #FE840E;    
    position: absolute;
    left: 0;
    top:  ${props => (props.smallScreens ? '0' : '1.65rem')};
    height: ${props => (props.smallScreens ? '100%' : '80%')};
    width: ${props => ((props.mediumScreens || props.smallScreens) ? '97%' : '85%')};
`;

const ProfileImageWrapper = styled.span`
    max-width: 170px;
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
  <IntroContainer>
    <Row className="align-items-center">
      <Col>
        <IntroGreeting>
          <h1><Emoji symbol="👋" label="Hi" /> good <DayPart hour={new Date().getHours()}/></h1>
          {/* <p>Here is where I keep my work, stories, and things I do to spice up my life.</p> */}
        </IntroGreeting>
      </Col>
    </Row>
    <Row className="align-items-center">
      <Col xs = "12" md="5" className="d-flex justify-content-center justify-content-md-end">
        <LargeText>I'm Catherine, a</LargeText>
      </Col>
      <Col xs = "12" md="7">
        <Row className="align-items-center" noGutters>
          {/* role list background blocks */}
          {/* bottom card responsive style */}
          <RoleListBgBottom className="d-md-none" smallScreens />
          <RoleListBgBottom className="d-none d-md-block d-lg-none" mediumScreens />
          <RoleListBgBottom className="d-none d-lg-block"/>
          {/* top card responsive style */}
          <RoleListBgTop className="d-md-none" smallScreens />
          <RoleListBgTop className="d-none d-md-block d-lg-none" mediumScreens />
          <RoleListBgTop className="d-none d-lg-block"/>
          <Col xs="12" md="7" lg="6">
            <RoleList>
              <RoleItem inactive>Design Lover</RoleItem>
              <RoleItem>Product Maker</RoleItem>
              <RoleItem inactive>Windsurfer</RoleItem>
            </RoleList>
          </Col>
          <Col md="5" lg="4">
            <ProfileImageWrapper className="d-none d-sm-block"><ProfileImage /></ProfileImageWrapper>
          </Col>
        </Row>
      </Col>
    </Row>
  </IntroContainer>
)

export default Intro