import { useInsertData } from "../../hooks/useInsertdata";
import { CREATE_SUBCATEGORIE, GET_ERROR } from "../type";




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