import React from 'react';
import AdminSideBar from '../../components/admin/AdminSideBar';
import { Container,Row, Col } from 'react-bootstrap';
import AdminAddCategorie from '../../components/admin/AdminAddCategorie';


const AdminAddCategoryPage = () => {
  return (
    <Container >
        <Row className='py-3'>
            <Col sm="3" xs="2" md="2">
                
                <AdminSideBar />
            </Col>
    
            <Col sm="9" xs="10" md="10">
               <AdminAddCategorie />
            </Col>
        </Row>
   </Container>
  )
}

export default AdminAddCategoryPage