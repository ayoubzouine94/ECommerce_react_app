

import { GET_ALL_CATEGORY,GET_ERROR,CREATE_CATEGORIE } from "../type";
import useGetData from "../../hooks/useGetData";
import { useInsertDataWithImg } from "../../hooks/useInsertdata";
//get All Categories
export const getAllCategories=(limit) => async (dispatch) =>{
    try {
       const response = await useGetData(`/api/v1/categories?limit=${limit}`)
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
//get All Categories with Pagination
export const getAllCategoriesPages=(page) => async (dispatch) =>{
    try {
       const response = await useGetData(`/api/v1/categories?page=${page}&limit=3`)
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
//Create Categorie
export const createCategorie=(formData) => async (dispatch) =>{
    try {
       const response = await useInsertDataWithImg('/api/v1/categories',formData)
        dispatch( {
            type:CREATE_CATEGORIE,
            payload: response,
            loading : true
        })

        
    } catch (error) {
        dispatch({
            type:GET_ERROR,
            payload: "Erreur"+ error,
        })
    }
}




