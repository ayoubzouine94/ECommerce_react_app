import React from 'react';
import { Row,Col } from 'react-bootstrap';

const ProducText = () => {
  return (
    <div>
    <Row className="">
      <div className="cat-text">Telephone :</div>
    </Row>
    <Row>
      <Col md="8">
        <div className="cat-title d-inline">
        iPhone XR 128 Go 4G LTE avec FaceTime (Produit) Rouge
        <div className="cat-rate d-inline mx-3">4.5</div>
        </div>
      </Col>
    </Row>
    <Row>
      <Col md="8" className="mt-4">
        <div className="cat-text d-inline">Marque :</div>
        <div className="barnd-text d-inline mx-1">Samsung </div>
      </Col>
    </Row>
    <Row>
      <Col md="8" className="mt-1 d-flex">
        <div
          className="color ms-2 border"
          style={{ backgroundColor: "#E52C2C" }}></div>
        <div
          className="color ms-2 border "
          style={{ backgroundColor: "white" }}></div>
        <div
          className="color ms-2 border"
          style={{ backgroundColor: "black" }}></div>
      </Col>
    </Row>

    <Row className="mt-4">
      <div className="cat-text">Description :</div>
    </Row>
    <Row className="mt-2">
      <Col md="10">
        <div className="product-description d-inline">
          Dual SIM comprend une carte physique et une carte e-SIM que vous pouvez déverrouiller
          votre iPhone et connectez-vous facilement aux applications, comptes, etc.,
          Face ID est la fonction d'authentification par empreinte digitale la plus rapide et la plus sécurisée
          Le visage comporte la puce A12 Bionic, qui est la puce la plus intelligente et la plus puissante des téléphones
          Appareils photo intelligents L'appareil photo le plus populaire au monde a inauguré une nouvelle ère de la photographie
          photographie où le capteur innovant est alimenté par le FAI et le moteur
          système nerveux, vous permettant de capturer des images comme jamais auparavant avec un appareil photo à objectif unique
          Met les gens en avant dans une mise au point nette contrairement à un télescope
          Aperçu de l'arrière-plan flou
        </div>
      </Col>
    </Row>
    <Row className="mt-4">
      <Col md="12">
        <div className="product-price d-inline px-3 py-3 border">34000 Dh</div>
        <div className="product-cart-add px-3 py-3 d-inline mx-3">Ajouter au panier </div>
      </Col>
    </Row>
  </div>
  )
}

export default ProducText