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

const QuoteWithImageRow = styled(Row)`
    margin-bottom: 1rem;
`;

const QuoteText = styled.h1`
  ${props => (props.largeScreen ? 'font-size: 3.375rem;' : 'font-size: 2.5rem;')}
  ${props => (props.largeScreen ? 'margin: 1.6875rem 3.375rem 2.5rem;' : 'margin: 1.5rem 2.25rem 2rem;')}
  ${props => (props.smallScreen ? 'margin: 1.5rem 2.25rem 2rem;' : 'margin: 1.5rem 2.25rem 2rem;')}
  color: #FFFFFF;
  line-height: 1.3;
  ${props => (props.smallScreen ? 'width: 15rem;' : '')}
`;

const QuoteCol = styled(Col)`
    ${props => (props.smallScreen ? '' : 'background-color: #FE840E;')}
    margin: ${props => (props.smallScreen ? '0' : '0 0 0 -100%')};
    min-width: ${props => (props.largeScreen ? '436px' : '19.25rem')};
`;

const MaskedImageBlock = styled.div`
    position: absolute;
    overflow: hidden;
    height: 100%;
    width: ${props => (props.smallScreen ? '100%' : '40%')};
    margin-left: ${props => (props.smallScreen ? '0' : '60%')};
`;

const MaskedImageWrapper = styled.div`
    ${props => (props.largeScreen ? "margin-top: -29%; width: 350%;" : "")}
    ${props => (props.mediumScreen ? "margin-top: -25%; width: 350%;" : "")}
    ${props => (props.smallScreen ? "min-width: 446px;" : "")}
`;

const ImageWrapper = styled.div`
    width: 70%;
    margin-left: 30%;
`;

const QuoteWithImage = ({ text }) => (
<QuoteWithImageRow className="align-items-center justify-content-center justify-content-md-start" noGutters>
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
                <MaskedImageWrapper largeScreen>
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
    <QuoteCol smallScreen xs="12" className="d-md-none">
        {/* for xs and sm screens */}
        <Row noGutters>
            <MaskedImageBlock smallScreen>
                <MaskedImageWrapper smallScreen>
                    <MaskedSurfingImage />
                </MaskedImageWrapper>
            </MaskedImageBlock>
            <Col>
                <QuoteText smallScreen>a new adventure has started</QuoteText>
            </Col>
        </Row>
    </QuoteCol>
</QuoteWithImageRow>
)

export default QuoteWithImage