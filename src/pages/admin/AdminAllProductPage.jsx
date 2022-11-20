import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import AdminSideBar from '../../components/admin/AdminSideBar';
import AdminAllProducts from '../../components/admin/AdminAllProducts';
import Pagination from '../../components/utility/Pagination';

const AdminAllProductPage = () => {
  return (
   <Container >
   <Row className='py-3'>
       <Col sm="3" xs="2" md="2">
           <AdminSideBar />
       </Col>

       <Col sm="9" xs="10" md="10">
           <AdminAllProducts />
           <Pagination />
       </Col>
   </Row>
</Container>
  )
}

export default AdminAllProductPage