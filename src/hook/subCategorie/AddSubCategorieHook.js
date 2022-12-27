import React,{useEffect,useState} from 'react';
import notify from '../../hook/useNotification';
import { useDispatch,useSelector } from 'react-redux';
import { getAllCategories } from '../../redux/actions/categorieAction';
import { createSubCategorie } from '../../redux/actions/subCategorieAction';

const AddSubCategorieHook = () => {
    const [id, setId] = useState('0');
    const [name, setName] = useState('');
    const [loading, setLoadind] = useState(true);
    const dispach = useDispatch();
    const categorieData = useSelector(state=>state.allCategory.categorie);
    const subCategorie = useSelector(state => state.subCategorie.subcategorie);
    //console.log(subCategorie)

    // when first load
    useEffect(() => {
      dispach(getAllCategories());
    }, [])
   


   //onchange DropDown List
   const handleChange = (e) =>{
    setId(e.target.value)
   }
   //OnChange Name
   const onChangeName = (e) =>{
      e.persist();
      setName(e.target.value);
   }
   //on Save Data
   const handleSubmit = async(e) =>{
    if(!navigator.onLine){
        notify('Probleme de Connexion !!','error');
        return
    }
     e.preventDefault();
     if(id === '0'){
        notify('Merci de Choisis le Nom du categorie','warnin')
        return;
     }
     if(name === ''){
        notify('Merci de Saisir le Nom du categorie','warnin');
        return;
     }
     setLoadind(true)
     await dispach(createSubCategorie({ 
        name,
        category:id
    }
     ));
     setLoadind(false);
   }
   useEffect(() => {
     if(loading === false){
        setName("");
        setId('0')
        if(subCategorie){
            if(subCategorie.status === 201){
                notify('Sous Categorie Ajouter Avec Succes','success');
            }else if(subCategorie==="ErreurAxiosError: Request failed with status code 400"){
                notify('Le Nom de Sous Ctegorie Exist deja !!','error');
            }
            
            else{
                notify('Sous Categorie Non Ajouter !!','error');
            }
            
            
        }
        setLoadind(true)
        console.log(subCategorie)
     }
   }, [loading]);

   return [id,name,loading,categorieData,subCategorie,handleSubmit,handleChange,onChangeName]
}

export default AddSubCategorieHook