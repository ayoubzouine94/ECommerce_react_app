import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGalery from './ProductGalery';
import ProductText from './ProducText';

const ProductDetails = () => {
  return (
    <div>
        <Row className='py-3'>
            <Col lg='4'>
                <ProductGalery />
            </Col>
            <Col lg="8">
                <ProductText />
            </Col>
        </Row>
    </div>
  )
}

export default ProductDetails