/**
 * The Transit Section in Index Page
 * 
 */

import React from 'react'
import styled from 'styled-components'
import {Container, Row, Col, Visible} from 'react-grid-system'

import ArrowImage from '../components/arrow-image'

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
      <Visible md lg xl><Col md={3} sm={9} offset={{ xs: 0, sm: 0, md: 0, lg: 1, xl: 1}} component={TransitColWrapper}>
        <ArrowImageWrapper>
          <ArrowImage />
        </ArrowImageWrapper>
      </Col></Visible>
      <Col md={8} sm={12}>
        <TransitText>
          <b>Sounds a bit confusing?</b>
          <br />
          Let me tell you how I fit those roles.
        </TransitText>
      </Col>
      <Visible xs sm><Col>
        <ArrowImageWrapper noTopMargin>
          <ArrowImage />
        </ArrowImageWrapper>
      </Col></Visible>
    </Row>
    <Row align="center" nogutter component={TransitRowWrapper}>
      <Visible md lg xl>
        <Col md={3} offset={{ xs: 0, sm: 0, md: 0, lg: 1, xl: 1}} component={TransitColWrapper} style={{ height: '3.875rem'}}>
        </Col>
        <Col md={7} style={{ height: '3.875rem'}}>
        </Col>
      </Visible>
    </Row>
  </Container>
)

export default Transit