/**
 * The Project Column Component
 * 
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Col from '@bootstrap-styled/v4/lib/Col'

import P1Image from '../images/p1-image'

const ProjectCol = styled(Col)`
    display: flex;
    justify-content: center;
`;

const ProjectCardLink = styled(Link)`
    max-width: 280px;
    overflow: hidden;
    text-align: center;
    margin-bottom: calc(36rem / 16);
`;

const ImageWrapper = styled.div`
    display: flex;
    justify-content: center;
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
    margin: 0.125rem 0 0;
    color: #333333;
`;

const TitleBlock = styled.div`
    margin-top: calc(17rem / 16);
    padding: 0 calc(9rem / 16);
`;

const Project = ({title, subtitle}) => (
    <ProjectCol xs="12" md="5" lg="4">
        <ProjectCardLink to="/">
            <ImageWrapper><P1Image /></ImageWrapper>
            <TitleBlock>
                <Title>
                    {title}
                </Title>
                <Subtitle>{subtitle}</Subtitle>
            </TitleBlock>
        </ProjectCardLink>
    </ProjectCol>
)

Project.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    // image: PropTypes.object.isRequired,
}

export default Project