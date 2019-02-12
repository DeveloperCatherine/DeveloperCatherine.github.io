/**
 * The Work Section in Index Page
 * 
 */

import React from 'react'
import {ScreenClassRender} from 'react-grid-system'
import styled from 'styled-components'

import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'
// import Collapse from '@bootstrap-styled/v4/lib/Collapse';

import Emoji from '../utils/emoji'
import Title from '../components/title'
import Project from '../components/project'

const ProjectsRow = styled(Row)`
    // border-bottom: 1px solid black;
`;

class Work extends React.Component {
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
      <Container id="work">
        <Title number="02" text="projects" />
        <ProjectsRow className="justify-content-center">
            <Project title="Distraction-free coding" subtitle="Coding Tool Contextual Design" />
            <Project title="Cancer survivors network" subtitle="Social Forum Redesign" />
            <Project title="P1" subtitle="Mobile Photo-sharing Service User Research" />
            <Project title="Project Name" subtitle="Project Subtitle" />
            <Project title="Project Name" subtitle="Project Subtitle" />
            <Project title="Project Name" subtitle="Project Subtitle" />
        </ProjectsRow>
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

export default Work