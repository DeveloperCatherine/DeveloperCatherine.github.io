import React from 'react'
import styled from 'styled-components'
import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'
// import {ScreenClassRender} from 'react-grid-system'

import Title from '../components/title'

const Heading = styled.h3`
  margin-top: 1.125rem;
  margin-bottom: 1.0625rem;
`;

const Email = styled.p`
  margin: 0;
`;

const ContactRow = styled(Row)`
  margin-bottom: 1.0625rem;
`;

const ContactCol = styled(Col)`
  text-align: center;
  margin-bottom: 1.6875rem;
`;

const ExternalLinkList = styled.ul`
  list-style: none;
  display: flex;
  justify-content: center;
  margin: 0;
`;

const ExternalLink = styled.li`
  display: inline-block;
  float: left;
  margin: 0 0.8125rem;
`;

const Contact = () => (
    <Container id="contact">
      <Title number="03" text="get in touch" />
      <ContactRow noGutters className="align-items-start justify-content-center">
        <ContactCol xs="12" md="5">
          <Heading>drop me a message</Heading>
          <Email>yueying.catherine@gmail.com</Email>
        </ContactCol>
        <ContactCol xs="12" md="5">
          <Heading>more on</Heading>
          <ExternalLinkList>
            <ExternalLink><a href="https://www.instagram.com/yueying.catherine/">Instagram</a></ExternalLink>
            <ExternalLink><a href="http://linkedin.com/in/yueyingtang">LinkedIn</a></ExternalLink>
          </ExternalLinkList>
        </ContactCol>
      </ContactRow>
      {/* <ScreenClassRender render={screenClass => (
          <p style={{ fontSize: ['lg', 'xl'].includes(screenClass) ? '2rem' : '1rem' }} >
            Screen class: {screenClass}
          </p>
      )} /> */}
    </Container>
  )
  
  export default Contact