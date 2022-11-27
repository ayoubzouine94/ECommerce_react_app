import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import UserAddressCard from './UserAddressCard';

const UserAdress = () => {
  return (
    <div>
         <div className="py-2 order-title">Cahier D'adresse</div>
            <UserAddressCard />
            <UserAddressCard />
            <UserAddressCard />

            <Row className="justify-content-center">
                <Col sm="5" className="d-flex justify-content-center">
                    <Link to="/user/add-address" style={{ textDecoration: "none" }}>
                        <button className="btn-add-address">Ajouter nouveau Adresse</button>
                    </Link>
                </Col>
            </Row>
    </div>
    
    
  )
}

export default UserAdress