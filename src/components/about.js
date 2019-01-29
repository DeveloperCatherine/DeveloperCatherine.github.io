/**
 * The About Section in Index Page
 * 
 */

import React from 'react'
import styled from 'styled-components'
// import {ScreenClassRender} from 'react-grid-system'

import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

import SurfingImage from '../components/surfing-image'
import Emoji from '../utils/emoji'


const TitleRow = styled(Row)`
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

const QuoteText = styled.h1`
  font-size: ${props => (props.largeScreen ? '3.375rem' : '2.5rem')};
  margin: ${props => (props.largeScreen ? '1.6875rem 3.375rem 2.5rem' : '1.5rem 2.25rem 2rem')};
  color: #FFFFFF;
  line-height: 1.3;
`;

const QuoteCol = styled(Col)`
    background-color: #FE840E;
    margin: ${props => (props.XsScreen ? '0' : '0 0 0 -100%')};
    min-width: 19.25rem;
`;

const SurfingImageWrapper = styled.div`
    width: 75%;
    margin-left: 25%;
`;

const AboutContainer = styled(Container)`
  padding: 0;
  margin: 0;
`;

const About = () => (
  <AboutContainer id="about">
    <TitleRow className="align-items-center justify-content-center">
      <LargeNumber>01.</LargeNumber>
      <Col>
        <Title>my story</Title>
      </Col>
    </TitleRow>
    <Row className="align-items-center justify-content-center justify-content-sm-start" noGutters>
        <Col className="d-none d-sm-block">
            {/* surfing image hidden in xs screens */}
            <SurfingImageWrapper>
                <SurfingImage />
            </SurfingImageWrapper>
        </Col>
        <QuoteCol sm="8" md="6" className="d-none d-sm-block">
            {/* for sm and larger screens */}
            <QuoteText className="d-lg-none">a new adventure has started</QuoteText>
            <QuoteText largeScreen className="d-none d-lg-block">a new adventure has started</QuoteText>
        </QuoteCol>
        <QuoteCol XsScreen xs="10" className="d-sm-none">
            {/* for xs screens */}
            <QuoteText>a new adventure has started</QuoteText>
        </QuoteCol>
    </Row>
    <Row>
      <Col md="12">
        <div style={{
          textAlign: "center"
        }}>
          <h3>- stay tunned -</h3>
          <p>This project is not finished yet. Feel free to check its repo <Emoji symbol="👇" label="point-down" /> for more details :)</p>
      </div></Col>
    </Row>
    {/* <ScreenClassRender render={screenClass => (
        <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
          Screen class: {screenClass}
        </p>
    )} /> */}
  </AboutContainer>
)

export default About