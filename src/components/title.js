/**
 * The Title Component
 * 
 */

import React from 'react'
import styled from 'styled-components'

import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

const TitleRow = styled(Row)`
  padding-top: 3.375rem;
  padding-bottom: 1.6875rem
`;

const NumberCol = styled(Col)`
  margin-right: -3.375rem;
`;

const LargeNumber = styled.span`
  font-size: 5rem;
  color: #E5E5E5;
  text-align: right;
`;

const H1 = styled.h1`
  text-align: left;
  margin: 0;
`;


const Title = ({ number, text }) => (
<TitleRow noGutters className="align-items-center justify-content-center">
    <NumberCol xs="5" md="4" className="d-flex justify-content-end">
      <LargeNumber>{number}.</LargeNumber>
    </NumberCol>
    <Col xs="7" md="5">
      <H1>{text}</H1>
    </Col>
</TitleRow>
)

export default Title