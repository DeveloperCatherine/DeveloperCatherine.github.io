/**
 * The Timeline Component
 * 
 */

import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'

import Row from '@bootstrap-styled/v4/lib/Row'
import Col from '@bootstrap-styled/v4/lib/Col'

const TimelineRow = styled(Row)`
    padding: 0 calc(9rem / 16);
`;

const TimeNavCol = styled(Col)`
    padding-left: 1rem;    
    border-left: 1px solid black;
`;

const YearItem = styled.div`

`;

const Year = styled.p`
    writing-mode: sideways-lr;
    text-orientation: mixed;
    text-algin: center;
`;

const EventCol = styled(Col)`
    margin-top: 3.375rem;
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

const Description = styled.p`
`;

const Timeline = ({odd, year, yearRange, title, description}) => (
    <TimelineRow noGutters>
        <TimeNavCol xs="1" className="order-first d-none d-md-block">
            <YearItem>
                <Year>{year}</Year>
            </YearItem>
        </TimeNavCol>
        <EventCol>
            <Row>
                <Col xs="12" md="6" className={{odd} ? "order-0 order-md-1" : "order-0"}>
                    <TitleBlock>
                        <Subtitle>{yearRange}</Subtitle>
                        <Title>
                            {title}
                        </Title>
                    </TitleBlock>
                </Col>
                <Col xs="12" md="6" className={{odd} ? "order-1 order-md-0" : "order-1"}>
                    <Description>
                        {description}
                    </Description>
                </Col>
            </Row>
        </EventCol>
    </TimelineRow>
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