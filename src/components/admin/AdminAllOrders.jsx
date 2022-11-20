import React from 'react';
import { Row } from 'react-bootstrap';
import AdminAllordersItems from './AdminAllordersItems';



const AdminAllOrders = () => {
  return (
    <div>
    <div className='admin-content-text'>Toute les Commandes</div>
    <Row className='justify-content-start'>
       <AdminAllordersItems />
       <AdminAllordersItems />
       <AdminAllordersItems />
       <AdminAllordersItems />
    </Row>
    </div>

  )
}

export default AdminAllOrders