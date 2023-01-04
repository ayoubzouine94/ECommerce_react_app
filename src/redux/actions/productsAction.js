import { useInsertDataWithImg } from "../../hooks/useInsertdata";
import { CREATE_PRODUCT, GET_ERROR } from "../type";



//Create Product
export const createProduct=(formData) => async (dispatch) =>{
    try {
       const response = await useInsertDataWithImg(`/api/v1/products`,formData);
        dispatch( {
            type:CREATE_PRODUCT,
            payload: response,
            loading : true
        })

        
    } catch (error) {
        dispatch( {
            type:GET_ERROR,
            payload: "Erreur"+ error,
        })
    }
}