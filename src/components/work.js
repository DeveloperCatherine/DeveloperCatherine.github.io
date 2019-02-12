/**
 * The Work Section in Index Page
 * 
 */

import React from 'react'
import styled from 'styled-components'

import Container from '@bootstrap-styled/v4/lib/Container'
import Row from '@bootstrap-styled/v4/lib/Row'
// import Col from '@bootstrap-styled/v4/lib/Col'
// import Collapse from '@bootstrap-styled/v4/lib/Collapse';

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
        <Title number="02" text="my work" />
        <ProjectsRow className="justify-content-center">
            <Project title="Distraction-free coding" subtitle="Coding Tool Contextual Design" />
            <Project title="Cancer survivors network" subtitle="Social Forum Redesign" />
            <Project title="P1" subtitle="Mobile Photo-sharing Service User Research" />
            <Project title="Project Name" subtitle="Project Subtitle" />
            <Project title="Project Name" subtitle="Project Subtitle" />
            <Project title="Project Name" subtitle="Project Subtitle" />
        </ProjectsRow>
      </Container>
    )
  }
}

export default Work