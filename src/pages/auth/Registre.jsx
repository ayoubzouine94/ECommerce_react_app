import React from 'react';
import { Row, Container, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registre = () => {
  return (
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center hieght-search">
      <Col sm="12" className="d-flex flex-column ">
        <label className="mx-auto title-login">Creer un compte</label>
        <input
          placeholder="Nom"
          type="text"
          className="user-input mt-3 text-center mx-auto"
        />
        <input
          placeholder="Email"
          type="text"
          className="user-input my-3 text-center mx-auto"
        />
        <input
          placeholder="Mot de passe"
          type="password"
          className="user-input text-center mx-auto"
        />
        <button className="btn-login mx-auto mt-4">Connection</button>
        <label className="mx-auto my-4">
          Vous avez deja un Compte{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              Cliquer ici
            </span>
          </Link>
        </label>
      </Col>
    </Row>
  </Container>
  )
}

export default Registre