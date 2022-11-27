import React from 'react';
import { Container,Row,Col } from 'react-bootstrap';
import AdminAddSubCategory from '../../components/admin/AdminAddSubCategory';
import AdminSideBar from '../../components/admin/AdminSideBar';

const AddSubCategoriePage = () => {
  return (
    <Container >
    <Row className='py-3'>
        <Col sm="3" xs="2" md="2">
            
            <AdminSideBar />
        </Col>

        <Col sm="9" xs="10" md="10">
           <AdminAddSubCategory />
        </Col>
    </Row>
</Container>
  )
}

export default AddSubCategoriePage