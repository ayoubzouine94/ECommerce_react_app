import React,{useState} from 'react';
import { Row,Col } from 'react-bootstrap';
import avatar from '../../images/avatar.png';
import { useDispatch } from 'react-redux';
import { createCategorie } from '../../redux/actions/categorieAction';

const AdminAddCategorie = () => {
     const [img, setImg] = useState(avatar);
     
     const [name, setName] = useState('');
     const dispatch = useDispatch();
     const [selectedFile, setSelectedFile] = useState(null)

    //when img change save it
    const onImageChange = (e) =>{
        if(e.target.files && e.target.files[0]){
            setImg(URL.createObjectURL(e.target.files[0]));
            setSelectedFile(e.target.files[0]);
        }

    }
     //Save data in database
    const handleSubmit = (e) =>{
        e.preventDefault();

        const formData = new FormData();
        formData.append('name',name);
        formData.append('image',selectedFile)
 
        dispatch(createCategorie(formData));
        

    }
  return (
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">Ajouter Nouveau Categorie</div>
        <Col sm="8">
            <div className="text-form pb-2">Image Categorie </div>
            <div>
                <label for="upload-photo">
                   <img
                    src={img}
                     alt="Ajouter"
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
             //   value={name}
                placeholder=" Nom Categorie"
                onChange={(e)=>setName(e.target.value)}
            />
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handleSubmit} className="btn-save d-inline mt-2 ">Enregistrer </button>
        </Col>
    </Row>
</div>
  )
}

export default AdminAddCategorie