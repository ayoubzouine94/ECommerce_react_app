import React from 'react';
import { Container,Col,Row } from 'react-bootstrap';
import UserAdress from '../../components/user/UserAdress';
import UserSideBar from '../../components/user/UserSideBar';

const UserAdressePage = () => {
  return (
    <Container>
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            
            <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
         <UserAdress />
        </Col>
    </Row>
</Container>
  )
}

export default UserAdressePage