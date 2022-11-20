import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import CategorieHeader from '../../components/category/CategorieHeader';
import SearchCountResult from '../../components/utility/SearchCountResult';
import SideFilter from '../../components/utility/SideFilter';
import CardProductContainer from '../../components/products/CardProductContainer';
import Pagination from '../../components/utility/Pagination';

const ShopProductsPage = () => {
  return (
    <div style={{ minHeight: '670px' }}>
    <CategorieHeader />
    <Container>
        <SearchCountResult title="400 Resutats" />
        <Row className='d-flex flex-row'>
           
            <Col sm="10" xs="10" md="11">
                 <CardProductContainer title="" btntitle=""/>
                 
            </Col>
            <Col sm="2" xs="2" md="1" className='d-flex'>
                <SideFilter />
            </Col>
        </Row>
            <Pagination />
    </Container>
</div>
  )
}

export default ShopProductsPage