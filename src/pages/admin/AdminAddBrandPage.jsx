import React from 'react';
import AdminSideBar from '../../components/admin/AdminSideBar';
import { Container,Row, Col } from 'react-bootstrap';
import AdminAddBrand from '../../components/admin/AdminAddBrand';

const AdminAddBrandPage = () => {
  return (
    <Container >
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                
                <AdminSideBar />
            </Col>
    
            <Col sm="9" xs="10" md="10">
               <AdminAddBrand />
            </Col>
        </Row>
   </Container>
  )
}

export default AdminAddBrandPage