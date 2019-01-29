/**
 * The Transit Section in Index Page
 * 
 */

import React from 'react'
import styled from 'styled-components'

import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

import ArrowImage from '../components/arrow-image'

const ArrowImageWrapper = styled.div`
  margin: ${props => (props.noTopMargin ? '0 0 3rem' : '1.6875rem')};
  display: flex;
  justify-content: center;
`;

const TransitCol = styled(Col)`
  border-right: 1px solid black;
  ${props => (props.height ? ('height: ' + props.height + ';') : '')}
`;

const TransitRow = styled(Row)`
  border-top: 1px solid black;
`;

const TransitText = styled.div`
  padding: 1.6875rem 0;
  text-align: center;
  line-height: 2.0675rem;
`;

const Transit = () => (
  <Container>
    <TransitRow className="align-items-center" noGutters>
      <TransitCol xs="9" md="3" className="offset-lg-1 d-none d-md-block">
        <ArrowImageWrapper>
          <ArrowImage />
        </ArrowImageWrapper>
      </TransitCol>
      <Col xs="12" md="8">
        <TransitText>
          <b>Sounds a bit confusing?</b>
          <br />
          Let me tell you how I fit those roles.
        </TransitText>
      </Col>
      <Col className="d-md-none">
        <ArrowImageWrapper noTopMargin>
          <ArrowImage />
        </ArrowImageWrapper>
      </Col>
    </TransitRow>
    <TransitRow className="align-items-center" noGutters>
        <TransitCol md="3" height="3.9375rem" className="offset-lg-1 d-none d-md-block" />
        <Col md="7" style={{ height: '3.9375rem'}} className="d-none d-md-block"/>
    </TransitRow>
  </Container>
)

export default Transit