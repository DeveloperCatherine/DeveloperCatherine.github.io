/**
 * The Project Column Component
 * 
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Col from '@bootstrap-styled/v4/lib/Col'

const ProjectCol = styled(Col)`
    margin-top: 2.26rem;
    border-bottom: 1px solid black;
`;

const Title = styled.h3`
    margin: 0;
    line-height: 1.3;
    text-transform: uppercase;
`;

const Subtitle = styled.p`
    letter-spacing: 0.05rem;
    margin: 0;
    color: #666666;
    margin-bottom: calc(13rem / 16);
`;

const TitleBlock = styled.div`
`;


const Project = ({title, subtitle}) => (
    <ProjectCol>
        <TitleBlock>
            <Title>
                {title}
            </Title>
            <Subtitle>{subtitle}</Subtitle>
        </TitleBlock>
    </ProjectCol>
)

Project.propTypes = {
    title: PropTypes.string,
    subtitle: PropTypes.string,
}

Project.defaultProps = {
    title: '',
    subtitle: '',
}

export default Project