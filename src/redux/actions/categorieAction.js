

import { GET_ALL_CATEGORY,GET_ERROR } from "../type";
import useGetData from "../../hooks/useGetData";

const getAllCategories=() => async (dispatch) =>{
    try {

       const response = await useGetData('/api/v1/categories')
        dispatch( {
            type:GET_ALL_CATEGORY,
            payload: response,
        })

        
    } catch (error) {
        dispatch( {
            type:GET_ERROR,
            payload: "Erreur"+ error,
        })
    }
}

export default getAllCategories; 