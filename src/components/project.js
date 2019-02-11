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
`;

const Title = styled.h3`
    font-size: 1rem;
    margin: 0;
    line-height: 1.3;
    text-transform: uppercase;
`;

const Subtitle = styled.p`
    font-size: 0.8125rem;
    letter-spacing: 0.04rem;
    margin: 0;
    color: #333333;
    margin-bottom: calc(13rem / 16);
`;

const TitleBlock = styled.div`
`;


const Project = ({title, subtitle}) => (
    <ProjectCol xs="12" sm="6" md="4" className="d-flex justify-content-center">
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