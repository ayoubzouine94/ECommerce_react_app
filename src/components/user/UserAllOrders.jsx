import React from 'react'
import { Row } from 'react-bootstrap'
import UserAllOrderItem from './UserAllOrderItem'

const UserAllOrders= () => {
  return (
    <div>
      <div className='admin-content-text pb-4'>Bonjour Hamza</div>
      <Row className='justify-content-between'>
           <UserAllOrderItem />
           <UserAllOrderItem />
      </Row>
    </div>
    
  )
}

export default UserAllOrders