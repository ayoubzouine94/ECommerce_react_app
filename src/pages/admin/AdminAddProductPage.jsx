import React from 'react';
import { Container,Row, Col } from 'react-bootstrap';
import AdminAddProduct from '../../components/admin/AdminAddProduct';
import AdminSideBar from '../../components/admin/AdminSideBar';

const AdminAddProductPage = () => {
  return (
    <Container >
            <Row className='py-3'>
                <Col sm="3" xs="2" md="2">
                    
                    <AdminSideBar />
                </Col>

                <Col sm="9" xs="10" md="10">
                  <AdminAddProduct />
                </Col>
            </Row>
    </Container>
  )
}

export default AdminAddProductPage