/**
 * The About Section in Index Page
 * 
 */

import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col, ScreenClassRender, Visible} from 'react-grid-system'

import SurfingImage from '../components/surfing-image'
import Emoji from '../utils/emoji'

/**
 * Screen breakpoints
 */
const SmallScreenWidth = '575px';
const MediumScreenWidth = '767px';
// const LargeScreenWidth = '992px';

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
  margin: ${props => (props.largeScreen ? '1.6875rem 3.375rem 2.5rem' : '1.5rem 2.25rem 2rem')};
  color: #FFFFFF;
  line-height: 1.3;
`;

const QuoteColWrapper = styled.div`
  background-color: #FE840E;
  margin: 7% 0;
`;

const QuoteColWrapperXsSM = styled.div`
  background-color: #FE840E;
  min-width: 19.25rem;
`;

const SurfingImageWrapper = styled.div`
  position: absolute;
  width: ${props => (props.sm ? '50%' : '70%')};
  left: ${props => (props.sm ? '50%' : '30%')};
  
  /* Hidden in small screens */
  @media screen and (max-width: ${SmallScreenWidth}) {
    display: none;
  };
  
  @media screen and (max-width: ${MediumScreenWidth}) {
    width: 50%;
    left: 50%;
  };
  
  width: 70%;
  left: 30%;
`;

const AboutContainerWrapper = styled.section`
  padding: 0;
  margin: 0;
`;

const About = () => (
  <Container id="about" component={AboutContainerWrapper}>
    <Row justify="center" align="center" component={TitleWrapper}>
      <LargeNumber>01.</LargeNumber>
      <Col>
        <Title>my story</Title>
      </Col>
    </Row>
    <Row align="center" justify="center" nogutter>
        <SurfingImageWrapper>
            <SurfingImage />
        </SurfingImageWrapper>
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

export default About