import React from 'react';
import laptops from '../../images/laptops.png';
import { Container,Col,Row } from 'react-bootstrap';

const DiscountSection = () => {
  return (
    <Container>
            <Row className="discount-backcolor my-3  mx-2 d-flex text-center align-items-center">
                <Col sm="6">
                    <div className="discount-title">
                         Jusqu'à 30% de réduction sur les ordinateurs portables
                    </div>
                </Col>
                <Col sm="6">
                    <img className="dicount-img" src={laptops} alt="" />
                </Col>
            </Row>
        </Container>
  )
}

export default DiscountSection