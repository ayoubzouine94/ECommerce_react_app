import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../components/cart/CartItem'
import CartCheckout from './CartCheckout'

const CartPage = () => {
  return (
    <Container style={{minHeight:'670px'}}>
        <Row>
            <div className='cart-title mt-4'>Panier</div>
        </Row>
        <Row>
           <Col xs="6" md="3">
            <CartCheckout />
            </Col>
            <Col xs="12" md="9">
                <CartItem />
                <CartItem />

            </Col>


            
            
        </Row>
    </Container>
  )
}

export default CartPage