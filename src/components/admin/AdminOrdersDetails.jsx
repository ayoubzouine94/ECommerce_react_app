import React from 'react'
import CartItem from '../cart/CartItem';
import {Col,Row} from 'react-bootstrap';

const AdminOrdersDetails = () => {
  return (
    <div>
    <div className='admin-content-text'> Details Commende Numero #2323</div>
    <CartItem />
    <CartItem />
    <CartItem />

    <Row className="justify-content-center mt-4 user-data">
        <Col xs="12" className=" d-flex">
            <div className="admin-content-text py-2"> Details Client</div>
        </Col>
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                Nom :
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
                Hamza Moustadraf
            </div>
        </Col>

        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                Telephone :
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
                0021313432423
            </div>
        </Col>
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                Email :
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
                ahmed@gmail.com
            </div>
        </Col>
        <div className=" d-inline px-4 border text-center pt-2">
            Total 30000 Dh
        </div>
        <div className="d-flex mt-2 justify-content-center">
            <select
                name="languages"
                id="lang"
                className="select input-form-area mt-1  text-center px-2 w-50">
                <option value="val"> Situation de Commande</option>
                <option value="val2"> en train de mise en oeuvre</option>
                <option value="val2">Il a été complété</option>
                <option value="val2">Annuler</option>
            </select>
            <button className="btn-a px-3 d-inline mx-2 ">Enregistrer </button>
        </div>
    </Row>
</div>
  )
}

export default AdminOrdersDetails