import React from 'react'
import UserSideBar from '../../components/user/UserSideBar';
import {Col,Row,Container} from 'react-bootstrap'
import UserProfile from '../../components/user/UserProfile';

const UserProfilePage = () => {
  return (
    <Container>
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            
            <UserSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
         <UserProfile />
        </Col>
    </Row>
</Container>
  )
}

export default UserProfilePage