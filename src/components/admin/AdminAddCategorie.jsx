import React from 'react';
import { Row,Col ,Spinner} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import AddCategoryHook from '../../hook/categorie/AddCategoryHook';




const AdminAddCategorie = () => {

  const [name,img,loading,isPress,onImageChange,handleSubmit,onChangeName] = AddCategoryHook();




    
  return (
    <div>
        
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Ajouter Nouveau Categorie</div>
        <Col sm="8">
            <div className="text-form pb-2">Image Categorie </div>
            <div>
                <label htmlFor="upload-photo">
                   <img
                    src={img}
                     alt="fzx"
                     height="100px"
                     width="120px"
                     style={{cursor:"pointer"}}
                     />
                </label>
                <input
                  type="file" 
                  name="photo" 
                  id="upload-photo" 
                  onChange={onImageChange}
                  />
            </div>  
            
            <input
                type="text"
                className="input-form d-block mt-3 px-3"
                value={name}
                placeholder=" Nom Categorie"
                onChange={onChangeName}
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Enregistrer </button>
        </Col>
    </Row>
    { isPress ? loading ? <Spinner animation="border" />:<h5>Ajouter Avec Succees</h5> :null

    }
 <ToastContainer />
</div>
  )
}

export default AdminAddCategorie