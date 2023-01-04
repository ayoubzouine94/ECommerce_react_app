import  useGetData from "../../hooks/useGetData";
import { useInsertData } from "../../hooks/useInsertdata";

import { CREATE_SUBCATEGORIE, GET_ERROR, GET_SUB_CATEGORY } from "../type";


//get One Categorie
export const getOneCategorie =(id) => async (dispatch) =>{
    try {
       const response = await useGetData(`/api/v1/categories/${id}/subcategories`)
      
        dispatch( {
            type:GET_SUB_CATEGORY,
            payload: response,
        })  
    } catch (error) {
        dispatch( {
            type:GET_ERROR,
            payload: "Erreur"+ error,
        })
    }
}

export const createSubCategorie =(data)=> async(dispatch)=>{
    try{
        const response = await useInsertData(`/api/v1/subcategories`,data);
        dispatch({
            type: CREATE_SUBCATEGORIE,
            payload:response,
            loading:true
        })
    }
    catch(e){
        dispatch({
            type:GET_ERROR,
            payload:"Erreur" + e
        })
    }

}