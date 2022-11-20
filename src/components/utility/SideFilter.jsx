import React from 'react';
import  Row  from 'react-bootstrap/Row';

const SideFilter = () => {
  return (
    <div className="mt-3">
    <Row>
      <div className="d-flex flex-column mt-2">
        <div className="filter-title me-5">Categorie</div>
        <div className="d-flex mt-3">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2 mx-2 ">Tout</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2 mx-2 ">électroménagers</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2 mx-2 ">électroménagers</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2 mx-2 ">électroménagers</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2 mx-2 ">électroménagers</div>
        </div>
      </div>

      <div className="d-flex flex-column mt-2">
        <div className="filter-title me-5">Marque</div>
        <div className="d-flex mt-3">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2 mx-2  ">Tout</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2 mx-2  ">Apple</div>
        </div>
        <div className="d-flex mt-2">
          <input type="checkbox" value="" />
          <div className="filter-sub me-2 mx-2 ">Samsung</div>
        </div>
      </div>

      <div className="filter-title me-5">Prix</div>
      <div className="d-flex">
        <p className="filter-sub my-2">A:</p>
        <input
          className="m-2 text-center"
          type="number"
          style={{ width: "50px", height: "25px" }}
        />
      </div>
      <div className="d-flex">
        <p className="filter-sub my-2">De:</p>
        <input
          className="m-2 text-center"
          type="number"
          style={{ width: "50px", height: "25px" }}
        />
      </div>
    </Row>
  </div>
  )
}

export default SideFilter