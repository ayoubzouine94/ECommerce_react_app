import React from 'react'
import { Container } from 'react-bootstrap'
import CategorieHeader from '../../components/category/CategorieHeader'
import ProductDetails from '../../components/products/ProductDetails'
import RateContainer from '../../components/rate/RateContainer'

const ProductDetailsPage = () => {
  return (
    <div style={{minHeight:'670px'}}>
        <CategorieHeader />
        <Container>
            <ProductDetails />
            <RateContainer />

        </Container>
    </div>
  )
}

export default ProductDetailsPage