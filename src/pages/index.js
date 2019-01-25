import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col, ScreenClassRender, Hidden, Visible} from 'react-grid-system'

import Layout from '../components/layout'
import ProfileImage from '../components/profile-image'
import ArrowImage from '../components/arrow-image'
import SurfingImage from '../components/surfing-image'
import SEO from '../components/seo'
import Emoji from '../utils/emoji'
/**
 * Intro Section in Index Page
 * 
 */

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
  font-size: ${props => (props.inactive ? '1.2rem' : '1.6875rem')};
  text-align: center;
  font-weight: bold;
  letter-spacing: 0.05rem;
  ${props => (props.inactive ? '' : 'text-decoration: rgba(255, 255, 255, 0.45) double underline;')}
  color: ${props => (props.inactive ? 'rgba(255, 255, 255, 0.8)' : '#FFFFFF')};
`;

const LargeText = styled.p`
  font-size: 1.6875rem;
  margin-bottom: calc(1.6875rem / 2);
  letter-spacing: 0.05rem;
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
            <div style={{ left: '1rem', top: ['xs', 'sm'].includes(screenClass) ? '1rem' : '2.5rem', backgroundColor: '#FEB30E', height: ['xs', 'sm'].includes(screenClass) ? '100%' : '80%', width: ['xs', 'sm', 'md'].includes(screenClass) ? '97%' : '85%', position: 'absolute'}}>
            </div>
          )} />
          <ScreenClassRender render={screenClass => (
            <div style={{ left: '0rem', top: ['xs', 'sm'].includes(screenClass) ? '0' : '1.5rem', backgroundColor: '#FE840E', height: ['xs', 'sm'].includes(screenClass) ? '100%' : '80%', width: ['xs', 'sm', 'md'].includes(screenClass) ? '97%' : '85%', position: 'absolute'}}>
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
            <Hidden xs sm><ProfileImage /></Hidden>
          </Col>
        </Row>
      </Col>
    </Row>
  </Container>
)


/**
 * Transit Section in Index Page
 * 
 */

const ArrowImageWrapper = styled.div`
  margin: ${props => (props.noTopMargin ? '0 0 3rem' : '1.6875rem')};
  display: flex;
  justify-content: center;
`;

const TransitColWrapper = styled.div`
  border-right: 1px solid black;
`;

const TransitRowWrapper = styled.div`
  border-top: 1px solid black;
`;

const TransitText = styled.div`
  padding: 1.6875rem 0;
  text-align: center;
  line-height: 2.0675rem;
`;

const Transit = () => (
  <Container>
    <Row align="center" nogutter component={TransitRowWrapper}>
      <Hidden xs sm><Col md={3} sm={9} offset={{ xs: 0, sm: 0, md: 0, lg: 1, xl: 1}} component={TransitColWrapper}>
        <ArrowImageWrapper>
          <ArrowImage />
        </ArrowImageWrapper>
      </Col></Hidden>
      <Col md={8} sm={12}>
        <TransitText>
          <b>Sounds a bit confusing?</b>
          <br />
          Let me tell you how I fit those roles.
        </TransitText>
      </Col>
      <Hidden md lg xl><Col>
        <ArrowImageWrapper noTopMargin>
          <ArrowImage />
        </ArrowImageWrapper>
      </Col></Hidden>
    </Row>
    <Row align="center" nogutter component={TransitRowWrapper}>
      <Hidden xs sm>
        <Col md={3} offset={{ xs: 0, sm: 0, md: 0, lg: 1, xl: 1}} component={TransitColWrapper} style={{ height: '3.875rem'}}>
        </Col>
        <Col md={7} style={{ height: '3.875rem'}}>
        </Col>
      </Hidden>
    </Row>
  </Container>
)

/**
 * About Section in Index Page
 * 
 */

const TitleWrapper = styled.div`
  padding-top: 3rem;
  padding-bottom: 1.6875rem
`;

const LargeNumber = styled.span`
  font-size: 6rem;
  color: #E5E5E5;
  position: absolute;
  padding-right: 6rem;
`;

const Title = styled.h1`
  display: flex;
  justify-content: center;
  margin: 2rem 0 2rem 4rem;
`;

const LargeQuote = styled.h1`
  font-size: ${props => (props.largeScreen ? '3.375rem' : '2.5rem')};
  margin: ${props => (props.largeScreen ? '1.6875rem 3rem 2.5rem' : '1.5rem 1.6875rem 2rem')};
  color: #FFFFFF;
  line-height: 1.3;
`;

const QuoteColWrapper = styled.div`
  background-color: #FE840E;
  min-width: 283px;
  margin: 7% 0;
`;

const QuoteColWrapperXsSM = styled.div`
  background-color: #FE840E;
  min-width: 309px; //283px
`;

const SurfingImageWrapper = styled.div`
  position: absolute;
  width: ${props => (props.sm ? '50%' : '70%')};
  left: ${props => (props.sm ? '50%' : '30%')};
`;

const About = () => (
  <Container>
    <Row justify="center" align="center" component={TitleWrapper}>
      <LargeNumber>01.</LargeNumber>
      <Col>
        <Title>my story</Title>
      </Col>
    </Row>
    <Row align="center" justify="center">
      <Hidden xs sm>
        <SurfingImageWrapper>
          <SurfingImage />
        </SurfingImageWrapper>
      </Hidden>
      <Visible sm>
        <SurfingImageWrapper sm>
          <SurfingImage />
        </SurfingImageWrapper>
      </Visible>
      <ScreenClassRender render={screenClass => (
        <Col xs={9} sm={8} md={6} lg={6} xl={6} pull={{ sm: 2, md: 3, lg: 3, xl: 3 }} component={['xs', 'sm'].includes(screenClass) ? QuoteColWrapperXsSM : QuoteColWrapper}>
          <Visible xs sm md>
            <LargeQuote>a new adventure has started</LargeQuote>
          </Visible>
          <Visible lg xl>
            <LargeQuote largeScreen>a new adventure has started</LargeQuote>
          </Visible>
        </Col>
      )} />
    </Row>
    {/* <Row>
      <ScreenClassRender render={screenClass => (
        <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
          Screen class: {screenClass}
        </p>
      )} />
    </Row> */}
    <Row>
      <Col md={12}>
        <div style={{
          textAlign: "center"
        }}>
          <h3>- stay tunned -</h3>
          <p>This project is not finished yet. Feel free to check its repo <Emoji symbol="👇" label="point-down" /> for more details :)</p>
      </div></Col>
    </Row>
  </Container>
)


/**
 * Index Page 
 * 
 */

const IndexPage = () => (
  <Layout>
    <SEO title="Portfolio" keywords={[`gatsby`, `application`, `react`]} />
    <Intro />
    <Transit />
    <About />
  </Layout>
)

export default IndexPage