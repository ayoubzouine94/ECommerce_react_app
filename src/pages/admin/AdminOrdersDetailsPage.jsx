import React from 'react';
import AdminSideBar from '../../components/admin/AdminSideBar';
import { Row,Container ,Col } from 'react-bootstrap';
import AdminOrdersDetails from '../../components/admin/AdminOrdersDetails';

const AdminOrdersDetailsPage = () => {
  return (
    <Container >
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                
                <AdminSideBar />
            </Col>
    
            <Col sm="9" xs="10" md="10">
                <AdminOrdersDetails />
                
            </Col>
        </Row>
    </Container>
  )
}

export default AdminOrdersDetailsPage