import React from 'react';
import deleteicon from '../../images/delete.png';
import {Row,Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {AiFillEdit} from 'react-icons/ai'


const UserAddressCard = () => {
  return (
    <div className="user-address-card my-3 px-2">
    <Row className="d-flex justify-content-between  ">
        <Col xs="1">
            <div className="p-2">Maison</div>
        </Col>
        <Col xs="4" className="d-flex d-flex justify-content-end">
            <div className="d-flex p-2">
                <div className="d-flex mx-2">
                    <AiFillEdit
                        alt=""
                        className="ms-1 mt-2"
                        height="17px"
                        width="15px"
                    />
                    <Link to="/user/edit-address" style={{ textDecoration: "none" }}>
                        <p className="item-delete-edit"> Modifier</p>
                    </Link>
                </div>
                <div className="d-flex ">
                    <img
                        alt=""
                        className="ms-1 mt-2"
                        src={deleteicon}
                        height="17px"
                        width="15px"
                    />
                    <p className="item-delete-edit"> Supprimer</p>
                </div>
            </div>
        </Col>
    </Row>

    <Row>
        <Col xs="12">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "14px",
                }}>
                 Hay Hassani Casablanca
            </div>
        </Col>
    </Row>

    <Row className="mt-3">
        <Col xs="12" className="d-flex">
            <div
                style={{
                    color: "#555550",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}>
                 Telephone:
            </div>

            <div
                style={{
                    color: "#979797",
                    fontFamily: "Almarai",
                    fontSize: "16px",
                }}
                className="mx-2">
                0021263432423
            </div>
        </Col>
    </Row>
</div>
  )
}

export default UserAddressCard