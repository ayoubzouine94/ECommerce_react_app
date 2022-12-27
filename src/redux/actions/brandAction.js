import {GET_ALL_BRAND, GET_ERROR} from '../type';
import useGetData from "../../hooks/useGetData";




//get All Categories
export const getAllBrands=(limit) => async (dispatch) =>{
    try {
       const response = await useGetData(`/api/v1/brands?limit=${limit}`)
        dispatch( {
            type:GET_ALL_BRAND,
            payload: response,
        })  
    } catch (error) {
        dispatch( {
            type:GET_ERROR,
            payload: "Erreur"+ error,
        })
    }
}
export default  getAllBrands