import React from 'react'
import ProductCard from '../products/ProductCard'
import Pagination from '../utility/Pagination'
import { Row } from 'react-bootstrap'

const UserFavoriteProduts = () => {
  return (
    <div>
    <div className="admin-content-text pb-4">Liste des Favori</div>
    <Row className='justify-content-start'>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
    </Row>
    <Pagination />
</div>
  )
}

export default UserFavoriteProduts