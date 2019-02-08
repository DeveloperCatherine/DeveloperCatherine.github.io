/**
 * The About Section in Index Page
 * 
 */

import React from 'react'
import {ScreenClassRender} from 'react-grid-system'

import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

import Emoji from '../utils/emoji'
import QuoteWithImage from './quote-w-image'
import Title from '../components/title'
import Timeline from '../components/timeline'

const About = () => (
  <Container id="about">
    <Title number="01" text="my story" />
    <QuoteWithImage text="a new adventure has started" />
    <Timeline odd year="2018" yearRange="2017-2018" title="it started with the research" description='As a freshman at Renmin University of China, I joined the HCI Lab. There I wrote a paper about the behavior pattern of elder Sina Weibo (Twitter in China) users. It involved 150 users and won the first prize of 15th RUC Innovative-cup Academic Competition. This surprising prize made me think, "hmm, I might have a good gut in understanding how people interact with technology."' />
    <Row>
      <Col md="12">
        <div style={{
          textAlign: "center"
        }}>
          <h3>- stay tunned -</h3>
          <p>This project is not finished yet. Feel free to check its repo <Emoji symbol="👇" label="point-down" /> for more details :)</p>
      </div></Col>
    </Row>
    <ScreenClassRender render={screenClass => (
        <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
          Screen class: {screenClass}
        </p>
    )} />
  </Container>
)

export default About