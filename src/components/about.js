/**
 * The About Section in Index Page
 * 
 */

import React from 'react'
// import styled from 'styled-components'
// import {ScreenClassRender} from 'react-grid-system'

import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

import Emoji from '../utils/emoji'
import QuoteWithImage from './quote-w-image'
import Title from '../components/title'

// const StorylineRow = styled(Row)`
//     padding: 0 calc(9rem / 16);
// `;

// const TimelineCol = styled(Col)`
//     padding-left: 1rem;    
//     border-left: 1px solid black;    
//     writing-mode: sideways-lr;
//     text-orientation: mixed;
// `;

const About = () => (
  <Container id="about">
    <Title number="01" text="my story" />
    <QuoteWithImage text="a new adventure has started" />
    {/* <StorylineRow noGutters>
        <TimelineCol xs="1">
            <p>2018</p>
        </TimelineCol>
        <Col>
            <blockquote>
                Hi there
            </blockquote>
        </Col>
    </StorylineRow> */}
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
  </Container>
)

export default About