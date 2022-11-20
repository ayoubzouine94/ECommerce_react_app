import React from 'react'
import {  Row } from 'react-bootstrap'
import AdminAllProductCard from './AdminAllProductCard'

const AdminAllProducts = () => {
  return (
    
    <div>
    <div className='admin-content-text'>Gestion des Produit</div>
    <Row className='justify-content-start'>
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
        <AdminAllProductCard />
  
    </Row>
    </div>
    
  )
}

export default AdminAllProducts