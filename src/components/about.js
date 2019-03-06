/**
 * The About Section in Index Page
 * 
 */

import React from 'react'
import styled from 'styled-components'

import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'
import Collapse from '@bootstrap-styled/v4/lib/Collapse';

import QuoteWithImage from '../components/quote-w-image'
import Title from '../components/title'
import Timeline from '../components/timeline'
import Button from '../components/button'

const MediumScreenWidth = '768px';
const AllEventsButtonRow = styled(Row)`
  padding: 2rem;
  @media (min-width: ${MediumScreenWidth}) {
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
        <Title number="02" text="my story" />
        <QuoteWithImage text="a new adventure has started" />
        <Timeline odd={true} year="2018" yearRange="2017-2018" title="fight to save people's attention" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
        <Timeline odd={false} year="2017" yearRange="2016-2017" title="dance with the robots" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' />
        <Collapse isOpen={this.state.isOpen} delay={{ show: 500, hide: 350, }}>
          <Timeline odd={true} year="2016" yearRange="2016" title="level up" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
          <Timeline odd={false} year="2015" yearRange="2015-2016" title="CMU HCII" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. ' />
          <Timeline odd={true} year="2014" yearRange="2014-2015" title="industrial experience" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
          <Timeline odd={false} year="2013" yearRange="2012-2015" title="first live product" description='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.' />
        </Collapse >
        <AllEventsButtonRow noGutters className="justify-content-center">
          <Col xs="12" md="11" className="justify-content-center d-flex offset-md-1">
            <Button onClick={() => this.toggleCollapse()}>{this.state.isOpen ? "show less" : "show all"}</Button>
          </Col>
        </AllEventsButtonRow>
      </Container>
    )
  }
}

export default About