import React from 'react';
import { Row,Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png';

const AdminAddCategorie = () => {
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Ajouter Nouveau Categorie</div>
        <Col sm="8">
            <div className="text-form pb-2">Image Categorie </div>
            <img src={avatar} alt="" height="100px" width="120px" />
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder=" Nom Categorie"
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 ">Enregistrer </button>
        </Col>
    </Row>
</div>
  )
}

export default AdminAddCategorie