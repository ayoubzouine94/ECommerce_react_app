import React from 'react';
import { Row,Col } from 'react-bootstrap';

const AdminAddSubCategory = () => {
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Ajouter Nouveau Sous Categorie</div>
        <Col sm="8">
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="Nom de Sous Categorie"
            />
            <select name="languages" id="lang" className="select mt-3 px-2 ">
                <option value="val"> Categorie 1</option>
                <option value="val2"> Categorie 2 </option>
                <option value="val2">  Categorie 3</option>
                <option value="val2">  Categorie 4</option>
            </select>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2 ">Enregistrer</button>
        </Col>
    </Row>
</div>
  )
}

export default AdminAddSubCategory