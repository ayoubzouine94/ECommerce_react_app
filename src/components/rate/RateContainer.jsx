import React from 'react'
import { Col, Container, Row } from 'react-bootstrap';
import rate from '../../images/rate.png';
import RateItem from './RateItem';
import RatePost from './RatePost';
import Pagination from '../utility/Pagination';

const RateContainer = () => {
  return (
    <Container className='rate-container'>
        <Row>
            <Col>
                    <div className="sub-tile d-inline p-1 pt-2">Commentaires</div>
                <img
                src={rate}
                alt="rate"
                height="16px"
                width='16px'
                />
                <div className="cat-rate d-inline p-1 pt-2">4.3</div>
                <div className="rate-count d-inline p-1 pt-2">(160 commentaires)</div>

            </Col>
        </Row>
        <RatePost />
        <RateItem />
        <RateItem />
        <RateItem />
        <RateItem />
        <Pagination />
    </Container>
  )
}

export default RateContainer