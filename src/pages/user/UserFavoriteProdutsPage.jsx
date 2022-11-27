import React from 'react';
import { Row,Col,Container } from 'react-bootstrap';
import UserFavoriteProduts from '../../components/user/UserFavoriteProduts';
import UserSideBar from '../../components/user/UserSideBar';

const UserFavoriteProdutsPage = () => {
  return (
    <Container>
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            
            <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
         <UserFavoriteProduts />
        </Col>
    </Row>
</Container>
  )
}

export default UserFavoriteProdutsPage