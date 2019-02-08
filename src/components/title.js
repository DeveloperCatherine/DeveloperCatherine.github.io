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

const LargeNumber = styled.span`
  font-size: 5rem;
  color: #E5E5E5;
  position: absolute;
  padding-right: 5.4rem;
`;

const H1 = styled.h1`
  display: flex;
  justify-content: center;
  margin: 2rem 0 2rem 4rem;
`;


const Title = ({ number, text }) => (
<TitleRow className="align-items-center justify-content-center">
    <LargeNumber>{number}.</LargeNumber>
    <Col>
    <H1>{text}</H1>
    </Col>
</TitleRow>
)

export default Title