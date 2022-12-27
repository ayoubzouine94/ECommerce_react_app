import React from 'react';
import { Row,Col } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import AddSubCategorieHook from '../../hook/subCategorie/AddSubCategorieHook';


const AdminAddSubCategory = () => {
    const [id,name,loading,categorieData,subCategorie,handleSubmit,handleChange,onChangeName] = AddSubCategorieHook();

  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Ajouter Nouveau Sous Categorie</div>
        <Col sm="8">
            <input
                type="text"
                value={name}
                onChange={onChangeName}
                className="input-form d-block mt-3 px-3"
                placeholder="Nom de Sous Categorie"
            />
            <select name="categorie" id="cat" className="select mt-3 px-2" onChange={handleChange}>
            <option value='0'> Choisir Categrie</option>
           {     
                  categorieData.data ? (categorieData.data.map(item=>{
                    return(<option key={item._id} value={item._id}> {item.name}</option>)
                  })):null
                }
                
                
             
            </select>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button className="btn-save d-inline mt-2" onClick={handleSubmit}>Enregistrer</button>
        </Col>
    </Row>
    <ToastContainer />
</div>
  )
}

export default AdminAddSubCategory