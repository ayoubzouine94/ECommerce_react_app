import React from 'react';
import {Row,Col} from 'react-bootstrap' 

const UserAddAdress = () => {
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-2">Ajouter un nouveau Adresse</div>
        <Col sm="8">
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="  (Maison - Bureau)"
            />
            <textarea
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="Adresse Complet"
            />
            <input
                type="tel"
                className="input-form d-block mt-3 px-3"
                placeholder=" Telephone"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 ">Ajouter Une Adresse</button>
        </Col>
    </Row>
</div>
  )
}

export default UserAddAdress