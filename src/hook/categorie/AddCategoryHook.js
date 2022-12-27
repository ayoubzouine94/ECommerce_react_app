import React,{useEffect,useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import avatar from '../../images/avatar.png';
import { createCategorie } from '../../redux/actions/categorieAction';
import 'react-toastify/dist/ReactToastify.css';
import notify from '../useNotification';

const AddCategoryHook = () => {
    const dispatch = useDispatch();
    const [img, setImg] = useState(avatar);
    const [name, setName] = useState('');
    const [selectedFile, setSelectedFile] = useState(null);
    const [loading, setLoading] = useState(true)
    const [isPress, setIsPress] = useState(false);
    
    // to change name state 
    const onChangeName = (e) =>{
        e.persist();
        setName(e.target.value)
    } 
    //when img change save it
    const onImageChange = (e) =>{
       if(e.target.files && e.target.files[0]){
           setImg(URL.createObjectURL(e.target.files[0]));
           setSelectedFile(e.target.files[0]);
       }
    }
    const res = useSelector(state=>state.allCategory.categorie);
    
    //Save data in database
    const handleSubmit = async (e) =>{
       e.preventDefault();
     if(name === '' || selectedFile === null){
       
      notify('Merci de Remplir tout les champs',"warnin");
       return; 
     }
       const formData = new FormData();
       formData.append('name',name);
       formData.append('image',selectedFile)
          setLoading(true);
          setIsPress(true)
          await dispatch(createCategorie(formData));  
          setLoading(false);     
    }
    
    useEffect(() => {
     if (loading === false) {
         setImg(avatar)
         setName("")
         setSelectedFile(null)
        // console.log('Enregistrer ')
         setLoading(true)
         setTimeout(() => setIsPress(false), 1000)
            if(res.status === 201){
             notify('Categorie Ajouter Avec Succes',"success");
            }else{
             notify('Categorie Non Ajouter',"error");
            }
     }
    }, [loading])
    
    return [name,img,loading,isPress,onImageChange,handleSubmit,onChangeName]
    
    }


export default AddCategoryHook