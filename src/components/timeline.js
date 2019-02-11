/**
 * The Timeline Item Component
 * 
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

const TimeNavCol = styled(Col)`
    border-left: 1px solid black;
`;

const Year = styled.p`
    transform: rotate(-90deg);
    transform-origin: left top;
    color: #999999;
    margin-left: calc(5rem / 16);
    margin-top: calc(17rem / 16);
`;

const EventCol = styled(Col)`
    margin-top: 2.26rem;
    border-bottom: 1px solid black;
`;

const TitleBlock = styled.div`
    padding-left: calc(22rem / 16);
    border-left: calc(9rem / 16) solid #FEB30E;
`;

const Title = styled.h1`
    font-size: 2rem;
    margin-top: 0;
    line-height: 1.3;
`;

const Subtitle = styled.h3`
    margin-top: 0;
    color: #999999;
    margin-bottom: calc(13rem / 16);
`;

const Timeline = ({odd, year, yearRange, title, description}) => (
    <Row noGutters>
        <TimeNavCol xs="1" className="order-first d-none d-md-block">
            <Year>{year}</Year>
        </TimeNavCol>
        <EventCol>
            <Row>
                <Col xs="12" md="6" className={odd ? "order-0 order-md-1" : "order-0"}>
                    <TitleBlock>
                        <Subtitle>{yearRange}</Subtitle>
                        <Title>
                            {title}
                        </Title>
                    </TitleBlock>
                </Col>
                <Col xs="12" md="6" className={odd ? "order-1 order-md-0" : "order-1"}>
                    <p>{description}</p>
                </Col>
            </Row>
        </EventCol>
    </Row>
)

Timeline.propTypes = {
    odd: PropTypes.bool,
    year: PropTypes.string,
    yearRange: PropTypes.string,
    title: PropTypes.string,
    description: PropTypes.string,
}

Timeline.defaultProps = {
    odd: false,
    year: '',
    yearRange: '',
    title: '',
    description: '',
}

export default Timeline