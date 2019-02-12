import React from 'react'
// import styled from 'styled-components'
import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'
import {ScreenClassRender} from 'react-grid-system'

import Title from '../components/title'

import Emoji from '../utils/emoji'

const Contact = () => (
    <Container id="contact">
      <Title number="03" text="get in touch" />
      <Row className="align-items-center">
      </Row>
      <Row>
          <Col md="12">
            <div style={{
              textAlign: "center"
            }}>
              <h1>stay tunned</h1>
              <p>This project is not finished yet. Feel free to check its repo <Emoji symbol="👇" label="point-down" /> for more details :)</p>
            </div>
          </Col>
        </Row>
        <ScreenClassRender render={screenClass => (
            <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
              Screen class: {screenClass}
            </p>
        )} />
    </Container>
  )
  
  export default Contact