/**
 * The About Section in Index Page
 * 
 */

import React from 'react'
import {ScreenClassRender} from 'react-grid-system'
import styled from 'styled-components'

import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'
import Collapse from '@bootstrap-styled/v4/lib/Collapse';

import Emoji from '../utils/emoji'
import QuoteWithImage from '../components/quote-w-image'
import Title from '../components/title'
import Timeline from '../components/timeline'

const Button = styled.button`
  background-color: white;
  color: black;
  border-top: 1px solid black;
  border-left: 1px solid black;
  border-right: 2px solid black;
  border-bottom: 2px solid black;
  padding: 0.25rem 1.6875rem;
  margin: 1px 1px 0 0;
  font-weight: bold;
  &:hover {
    border-right: 1px solid black;
    border-bottom: 1px solid black;
    margin: 1px;
  }
`;

const AllEventsButtonRow = styled(Row)`
  padding: 2rem;
  @media (min-width: 768px) {
    border-left: 1px solid black;
  }
`;

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleCollapse() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }

  render() {
    return (
      <Container id="about">
        <Title number="01" text="my story" />
        <QuoteWithImage text="a new adventure has started" />
        <Timeline odd={true} year="2018" yearRange="2017-2018" title="war to save people's attention" description='As a freshman at Renmin University of China, I joined the HCI Lab. There I wrote a paper about the behavior pattern of elder Sina Weibo (Twitter in China) users. It involved 150 users and won the first prize of 15th RUC Innovative-cup Academic Competition. This surprising prize made me think, "hmm, I might have a good gut in understanding how people interact with technology."' />
        <Timeline odd={false} year="2017" yearRange="2016-2017" title="dance with the robots" description='As a freshman at Renmin University of China, I joined the HCI Lab. There I wrote a paper about the behavior pattern of elder Sina Weibo (Twitter in China) users. It involved 150 users and won the first prize of 15th RUC Innovative-cup Academic Competition. This surprising prize made me think, "hmm, I might have a good gut in understanding how people interact with technology."' />
        <Collapse isOpen={this.state.isOpen} delay={{ show: 500, hide: 350, }}>
          <Timeline odd={true} year="2016" yearRange="2016" title="level up" description='As a freshman at Renmin University of China, I joined the HCI Lab. There I wrote a paper about the behavior pattern of elder Sina Weibo (Twitter in China) users. It involved 150 users and won the first prize of 15th RUC Innovative-cup Academic Competition. This surprising prize made me think, "hmm, I might have a good gut in understanding how people interact with technology."' />
          <Timeline odd={false} year="2015" yearRange="2015-2016" title="CMU HCII" description='As a freshman at Renmin University of China, I joined the HCI Lab. There I wrote a paper about the behavior pattern of elder Sina Weibo (Twitter in China) users. It involved 150 users and won the first prize of 15th RUC Innovative-cup Academic Competition. This surprising prize made me think, "hmm, I might have a good gut in understanding how people interact with technology."' />
          <Timeline odd={true} year="2014" yearRange="2014-2015" title="industrial experience" description='As a freshman at Renmin University of China, I joined the HCI Lab. There I wrote a paper about the behavior pattern of elder Sina Weibo (Twitter in China) users. It involved 150 users and won the first prize of 15th RUC Innovative-cup Academic Competition. This surprising prize made me think, "hmm, I might have a good gut in understanding how people interact with technology."' />
          <Timeline odd={false} year="2013" yearRange="2012-2015" title="first live product" description='As a freshman at Renmin University of China, I joined the HCI Lab. There I wrote a paper about the behavior pattern of elder Sina Weibo (Twitter in China) users. It involved 150 users and won the first prize of 15th RUC Innovative-cup Academic Competition. This surprising prize made me think, "hmm, I might have a good gut in understanding how people interact with technology."' />
        </Collapse >
        <AllEventsButtonRow noGutters className="justify-content-center">
          <Col xs="12" md="11" className="justify-content-center d-flex offset-md-1">
            <Button onClick={() => this.toggleCollapse()}>{this.state.isOpen ? "show less" : "show all"}</Button>
          </Col>
        </AllEventsButtonRow>
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
  }
}

export default About