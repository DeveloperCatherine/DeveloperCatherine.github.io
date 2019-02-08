/**
 * The Quote with Image Component
 * 
 */

import React from 'react'
import styled from 'styled-components'

import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

import SurfingImage from '../images/surfing-image'
import MaskedSurfingImage from '../images/surfing-masked-image'

const QuoteText = styled.h1`
  font-size: ${props => (props.largeScreen ? '3.375rem' : '2.5rem')};
  margin: ${props => (props.largeScreen ? '1.6875rem 3.375rem 2.5rem' : '1.5rem 2.25rem 2rem')};
  color: #FFFFFF;
  line-height: 1.3;
`;

const QuoteCol = styled(Col)`
    background-color: #FE840E;
    margin: ${props => (props.smallScreen ? '0' : '0 0 0 -100%')};
    min-width: ${props => (props.largeScreen ? '436px' : '19.25rem')};
`;

const MaskedImageBlock = styled.div`
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: 40%;
    margin-left: 60%;
`;

const MaskedImageWrapper = styled.div`
    margin-top: ${props => (props.mediumScreen ? '-25%' : '-26%')};
`;

const ImageWrapper = styled.div`
    width: 70%;
    margin-left: 30%;
`;

const QuoteWithImage = ({ text }) => (
<Row className="align-items-center justify-content-center justify-content-md-start" noGutters>
    <Col className="d-none d-md-block">
        {/* image hidden in xs and sm screens */}
        <ImageWrapper>
            <SurfingImage />
        </ImageWrapper>
    </Col>
    <QuoteCol largeScreen lg="6" className="d-none d-lg-block">
        {/* for lg and xl screens */}
        <Row noGutters>
            <MaskedImageBlock>
                <MaskedImageWrapper>
                    <MaskedSurfingImage />
                </MaskedImageWrapper>
            </MaskedImageBlock>
            <Col>
                <QuoteText largeScreen className="d-none d-lg-block">a new adventure has started</QuoteText>
            </Col>
        </Row>
    </QuoteCol>
    <QuoteCol md="6" className="d-none d-md-block d-lg-none">
        {/* for md screens */}
        <Row noGutters>
            <MaskedImageBlock>
                <MaskedImageWrapper mediumScreen>
                    <MaskedSurfingImage />
                </MaskedImageWrapper>
            </MaskedImageBlock>
            <Col>
                <QuoteText className="d-lg-none">{text}</QuoteText>
            </Col>
        </Row>
    </QuoteCol>
    <QuoteCol smallScreen xs="10" sm="8" className="d-md-none">
        {/* for xs and sm screens */}
        <QuoteText>{text}</QuoteText>
    </QuoteCol>
</Row>
)

export default QuoteWithImage