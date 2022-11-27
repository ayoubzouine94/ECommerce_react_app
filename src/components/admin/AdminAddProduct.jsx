import React from 'react'
import { Row, Col } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import avatar from '../../images/avatar.png'
import add from '../../images/add.png'
const AdminAddProduct = () => {

    const onSelect = () => {

    }
    const onRemove = () => {

    }

    const options = [
        {id: 1, name: "Categorie 2",  },
        { id: 2 , name: "Categorie 1",},
        { id: 3 , name: "Categorie 3",}
    ];

    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Ajouter Nouveau Produit</div>
                <Col sm="8">
                    <div className="text-form pb-2">Image Produit</div>
                    <img src={avatar} alt="" height="100px" width="120px" />
                    <input
                        type="text"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Nom Produit"
                    />
                    <textarea
                        className="input-form-area p-2 mt-3"
                        rows="4"
                        cols="50"
                        placeholder=" Description"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Prix Avant Remise"
                    />
                    <input
                        type="number"
                        className="input-form d-block mt-3 px-3"
                        placeholder="Prix Produit"
                    />
                    <select
                        name="languages"
                        id="lang"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val"> Categorie Principale</option>
                        <option value="val"> Categorie 1</option>
                        <option value="val2">Categorie 2 </option>
                        <option value="val2"> Categorie 3</option>
                        <option value="val2">Categorie 4 </option>
                    </select>

                    <Multiselect
                        className="mt-2 text-start"
                        placeholder="Sous Categorie"
                        options={options}
                        onSelect={onSelect}
                        onRemove={onRemove}
                        displayValue="name"
                        style={{ color: "red" }}
                    />
                    <select
                        name="brand"
                        id="brand"
                        className="select input-form-area mt-3 px-2 ">
                        <option value="val">Marque</option>
                        <option value="val2">Categorie Marque 1</option>
                        <option value="val2">Categorie Marque 2</option>
                        <option value="val2">Categorie Marque 3</option>
                    </select>
                    <div className="text-form mt-3 ">Couleur Disponible</div>
                    <div className="mt-1 d-flex">
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "#E52C2C" }}></div>
                        <div
                            className="color ms-2 border mt-1 "
                            style={{ backgroundColor: "white" }}></div>
                        <div
                            className="color ms-2 border  mt-1"
                            style={{ backgroundColor: "black" }}></div>
                        <img src={add} alt="" width="30px" height="35px" className="" />
                    </div>
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

export default AdminAddProduct